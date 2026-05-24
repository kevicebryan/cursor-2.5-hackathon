import { Suspense } from "react";
import PlaySection from "@/components/sections/play";

export default function DashboardPlayPage() {
  return (
    <Suspense fallback={null}>
      <PlaySection />
    </Suspense>
  );
}
