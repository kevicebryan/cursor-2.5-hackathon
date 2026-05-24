import { POKEMU_VIDEO_HEART_STORAGE_KEY, VIDEO_HEART_COOLDOWN_MS } from "@/util/constant";

function parseMs(iso: string | null | undefined): number {
  if (!iso) return 0;
  const t = new Date(iso).getTime();
  return Number.isFinite(t) ? t : 0;
}

export function getLastVideoClaimMs(): number {
  if (typeof window === "undefined") return 0;
  const raw = window.localStorage.getItem(POKEMU_VIDEO_HEART_STORAGE_KEY);
  return parseMs(raw);
}

export function isVideoHeartOnCooldown(): boolean {
  const last = getLastVideoClaimMs();
  if (last <= 0) return false;
  return Date.now() - last < VIDEO_HEART_COOLDOWN_MS;
}

export function setVideoHeartClaimedAt(iso: string): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(POKEMU_VIDEO_HEART_STORAGE_KEY, iso);
}
