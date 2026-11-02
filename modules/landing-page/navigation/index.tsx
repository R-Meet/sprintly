import { Logo } from "@/components/common/logo";
import { ArrowRightIcon, ChevronDownIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  return (
    <header className="relative z-20 border-b border-border/70 bg-background">
      <nav className="mx-auto flex h-20.5 max-w-360 items-center justify-between px-6 md:px-10 lg:px-12">
        <Logo />

        <div className="hidden items-center gap-9 md:flex">
          <Link
            href="#features"
            className="flex items-center gap-1 text-[13px] font-medium text-muted-foreground hover:text-foreground"
          >
            Product
            <ChevronDownIcon size={13} />
          </Link>

          <Link
            href="#solutions"
            className="flex items-center gap-1 text-[13px] font-medium text-muted-foreground hover:text-foreground"
          >
            Solutions
            <ChevronDownIcon size={13} />
          </Link>

          <Link
            href="#about"
            className="text-[13px] font-medium text-muted-foreground hover:text-foreground"
          >
            About
          </Link>

          <Link
            href="#contact"
            className="text-[13px] font-medium text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/login"
            className="hidden text-[13px] font-medium hover:text-primary sm:block"
          >
            Sign in
          </Link>

          <Link
            href="/onboard"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-[13px] font-semibold text-primary-foreground"
          >
            Get Started
            <ArrowRightIcon size={15} />
          </Link>

          <button
            aria-label="Open navigation"
            className="md:hidden"
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
}