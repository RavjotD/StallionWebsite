import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t bg-background mt-auto flex justify-center">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-0">
            <Link href="/" className="font-semibold">
              <img
                src="/assets/images/Logo.png"
                alt="Stallion Group Security"
                className="h-12 w-auto"
              />{" "}
            </Link>
            <span className="py-4">Stallion Group Security </span>
            <p className="text-sm text-muted-foreground">
              Professional security services in the Lower Mainland of British
              Columbia since 2018.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <FooterLink href="/services#residential">
                Residential Security
              </FooterLink>
              <FooterLink href="/services#commercial">
                Commercial Security
              </FooterLink>
              <FooterLink href="/services#event">Event Security</FooterLink>
              <FooterLink href="/services#personal">
                Personal Security
              </FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Email: stallionsecuregroup@gmail.com</li>
              <li>Phone: (604)-369-3503</li>
              <li>Vancouver, BC, Canada</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Stallion Group Security. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
