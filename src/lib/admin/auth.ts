// Server-only — verifies the `Authorization: Bearer <ADMIN_ACCESS_TOKEN>` header
// against the env var using a length-then-XOR compare to avoid trivial timing leaks.

type AuthResult =
  | { ok: true }
  | { ok: false; status: 401 | 500; error: string };

export function verifyAdminRequest(request: Request): AuthResult {
  const expected = process.env.ADMIN_ACCESS_TOKEN;
  if (!expected || expected.length === 0) {
    return { ok: false, status: 500, error: "Admin token not configured." };
  }

  const header = request.headers.get("authorization");
  if (!header) {
    return { ok: false, status: 401, error: "Missing authorization header." };
  }

  const match = /^Bearer\s+(.+)$/i.exec(header.trim());
  if (!match) {
    return { ok: false, status: 401, error: "Invalid authorization scheme." };
  }

  const provided = match[1].trim();
  if (provided.length !== expected.length) {
    return { ok: false, status: 401, error: "Invalid token." };
  }

  let diff = 0;
  for (let i = 0; i < provided.length; i++) {
    diff |= provided.charCodeAt(i) ^ expected.charCodeAt(i);
  }

  return diff === 0
    ? { ok: true }
    : { ok: false, status: 401, error: "Invalid token." };
}
