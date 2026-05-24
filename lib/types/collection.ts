/** Normalized artifact row for UI (maps various possible Supabase column names). */
export type CollectionArtifact = {
  id: string;
  title: string;
  pixelImageUrl: string;
  realImageUrl: string;
  facts: string;
  year?: string;
  countryCode?: string;
  countryName?: string;
  museumName?: string;
  mapUrl?: string;
};
