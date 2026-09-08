"use client";

import { useEffect, useState } from "react";
import { profileConstants, type ProfileContent } from "@/lib/profile-constants";

export function useProfile(): ProfileContent {
  const [profile, setProfile] = useState<ProfileContent>(profileConstants);

  useEffect(() => {
    let cancelled = false;

    async function loadProfile() {
      try {
        const response = await fetch("/api/profile", { cache: "no-store" });
        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as { profile?: ProfileContent };
        if (!cancelled && payload.profile) {
          setProfile(payload.profile);
        }
      } catch {
        // Keep the typed local constants as the rendering fallback.
      }
    }

    void loadProfile();
    return () => {
      cancelled = true;
    };
  }, []);

  return profile;
}
