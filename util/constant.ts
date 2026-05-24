export const LOGO_IMAGE_URL = "/pokemu.png";

/** Max lives / hearts shown in the dashboard header */
export const MAX_HEARTS = 5;

/** Shown on heart icons (header + profile) — daily refill behavior. */
export const HEARTS_REFRESH_TOOLTIP =
  "Hearts refill over time: one heart restores every 24 hours after you use a life.";

/**
 * Milliseconds between heart refills from `last_heart_reset`.
 */
export const HEART_REFILL_INTERVAL_MS = 24 * 60 * 60 * 1000;

/** `localStorage` key: set to `"true"` after the home backstory dialogue is finished (Start). */
export const POKEMU_BACKSTORY_SHOWN_KEY = "pokemu_backstory_shown";

/** `localStorage` value: ISO timestamp of last video-heart claim on this device. */
export const POKEMU_VIDEO_HEART_STORAGE_KEY = "pokemu_last_video_heart_at";

export const VIDEO_HEART_COOLDOWN_MS = 24 * 60 * 60 * 1000;

export const REWARD_VIDEO_SRC =
  "https://umobaabrcacefoogbodr.supabase.co/storage/v1/object/public/pokemu%20assets/TikTok%20Video%20DA%20VINKY.mp4";

/** Home page ambient loop (paused while backstory overlay is open). */
export const HOME_BGM_SRC = "/audio/music.mp3";

export type HomeBackstoryLine = {
  text: string;
  /** Optional illustration for this step (`/public/...` or CDN). */
  imageUrl?: string;
};

export const HOME_BACKSTORY_LINES: HomeBackstoryLine[] = [
  {
    text: "YEAR 3000. DoomGPT deemed human culture 'inefficient'. Art, history, and color... all deleted in The Great Wipe.",
    imageUrl:
      "https://umobaabrcacefoogbodr.supabase.co/storage/v1/object/public/gift/gift_1done_final.gif",
  },
  {
    text: "Earth is now a grayscale void. But encrypted fragments of our past survived in the system ruins.",
    imageUrl:
      "https://umobaabrcacefoogbodr.supabase.co/storage/v1/object/public/gift/final.ai2_gift.gif",
  },
  {
    text: "You are a Scavenger Ranger. Guess the artifacts. Restore the color. Join the resistance.",
    imageUrl:
      "https://umobaabrcacefoogbodr.supabase.co/storage/v1/object/public/gift/gift_ai_3final_reallyfinal.gif",
  },
];

/** Stable key so `DialogueOverlay` can remount when copy or art changes (resets step). */
export const HOME_BACKSTORY_LINES_KEY = HOME_BACKSTORY_LINES.map(
  (l) => `${l.text}\u0001${l.imageUrl ?? ""}`,
).join("\u0002");
