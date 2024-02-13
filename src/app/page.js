"use client";

import { Card } from "@/components/Card";
import { Description } from "@/components/Description";
import Image from "next/image";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <main className="flex flex-col items-center min-h-screen px-5">
        <Description />
        <Card />
      </main>
    </RecoilRoot>
  );
}
