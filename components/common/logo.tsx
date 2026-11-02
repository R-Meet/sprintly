import { Layers3Icon } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Layers3Icon className="size-7 text-primary" strokeWidth={2.5} />
      <span className="text-[21px] font-bold tracking-tight">
        Sprintly
      </span>
    </Link>
  );
}