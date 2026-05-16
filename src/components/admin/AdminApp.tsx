"use client";

import { useSyncExternalStore } from "react";
import { AdminGate } from "./AdminGate";
import { LeadsAdmin } from "./LeadsAdmin";

const STORAGE_KEY = "avoy.admin.token";

const listeners = new Set<() => void>();
function notify() {
  listeners.forEach((l) => l());
}
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}
function readToken(): string | null {
  try {
    return sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}
function writeToken(value: string | null) {
  try {
    if (value === null) sessionStorage.removeItem(STORAGE_KEY);
    else sessionStorage.setItem(STORAGE_KEY, value);
  } catch {
    // sessionStorage unavailable — ignore.
  }
  notify();
}

export function AdminApp() {
  const token = useSyncExternalStore<string | null>(
    subscribe,
    readToken,
    () => null
  );

  if (token === null) {
    return <AdminGate onUnlock={(next) => writeToken(next)} />;
  }

  return <LeadsAdmin token={token} onSignOut={() => writeToken(null)} />;
}
