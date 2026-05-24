"use client";

import { Center, Stack, Text, Title } from "@mantine/core";
import { useAppSelector } from "@/redux/hooks";

/** Temporary stub until Step 4 (dashboard shell) and Step 5 (full profile). */
export default function ProfilePage() {
  const { user } = useAppSelector((state) => state.auth);
  const { profile } = useAppSelector((state) => state.profile);

  return (
    <Center mih="100vh" bg="dark.8" p="xl">
      <Stack align="center" gap="sm">
        <Title order={2} c="mistral.4">
          Ranger HQ
        </Title>
        <Text c="dimmed" ta="center">
          {user?.email ? `Signed in as ${user.email}` : "Loading session…"}
        </Text>
        {profile?.username ? (
          <Text>Trainer: {profile.username}</Text>
        ) : (
          <Text size="sm" c="dimmed">
            Profile loading — full dashboard UI ships in the next commits.
          </Text>
        )}
      </Stack>
    </Center>
  );
}
