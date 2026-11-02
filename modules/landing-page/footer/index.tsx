import { Logo } from "@/components/common/logo";
import Link from "next/link";
import { Copyright } from "./copyright";

export function Footer() {
  return (
    <footer id="contact" className="border-t">
      <div className="mx-auto max-w-360 px-6 py-14 md:px-10 lg:px-12">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-5 text-xs leading-6 text-muted-foreground">
              Plan. Collaborate. Achieve more.
              <br />
              A better way to manage work together.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-wider">
                Product
              </p>
              <div className="space-y-4 text-xs text-muted-foreground">
                <Link href="#features" className="block hover:text-foreground">
                  Features
                </Link>
                <Link href="#solutions" className="block hover:text-foreground">
                  Solutions
                </Link>
                <Link href="/onboard" className="block hover:text-foreground">
                  Get Started
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-wider">
                Company
              </p>
              <div className="space-y-4 text-xs text-muted-foreground">
                <Link href="#about" className="block hover:text-foreground">
                  About
                </Link>
                <Link href="/contact" className="block hover:text-foreground">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-wider">
                Legal
              </p>
              <div className="space-y-4 text-xs text-muted-foreground">
                <Link href="/privacy" className="block hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block hover:text-foreground">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t pt-6 text-[11px] text-muted-foreground sm:flex-row">
          <Copyright/>
          <p>Plan. Collaborate. Achieve more.</p>
        </div>
      </div>
    </footer>
  );
}