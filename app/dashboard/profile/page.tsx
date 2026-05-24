"use client";

import { Stack, Text, Title } from "@mantine/core";
import { useAppSelector } from "@/redux/hooks";

/** Full profile UI ships in Step 5. */
export default function ProfilePage() {
  const { user } = useAppSelector((state) => state.auth);
  const { profile } = useAppSelector((state) => state.profile);

  return (
    <Stack gap="md" maw={560}>
      <Title order={2}>Profile</Title>
      <Text c="dimmed">
        {user?.email ? `Signed in as ${user.email}` : "Loading session…"}
      </Text>
      {profile?.username ? (
        <Text>Trainer: {profile.username}</Text>
      ) : (
        <Text size="sm" c="dimmed">
          Set your ranger name in the next commit.
        </Text>
      )}
    </Stack>
  );
}
