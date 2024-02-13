"use client";

import { Card } from "@/components/Card";
import { Description } from "@/components/Description";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <Description />
      <Card />
    </RecoilRoot>
  );
}
