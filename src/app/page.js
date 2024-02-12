import { Description } from "@/components/Description";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen px-5">
      <Description />
    </main>
  );
}
