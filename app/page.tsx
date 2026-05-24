"use client";

import { Center, Stack, Text, Title } from "@mantine/core";

export default function HomePage() {
  return (
    <Center mih="100vh" bg="dark.8">
      <Stack align="center" gap="md" p="xl">
        <Title order={1} c="mistral.4">
          Pokemu
        </Title>
        <Text c="dimmed" ta="center" maw={360}>
          Cultural restoration game — landing and play loop coming next.
        </Text>
      </Stack>
    </Center>
  );
}
