import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center font-semibold text-xl gap-2"
          >
            <img
              src="/assets/images/Logo.png"
              alt="Stallion Group Security"
              className="h-12 w-auto"
            />{" "}
            Stallion Group Security
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8">
            <NavLink href="/" active={location === "/"}>
              Home
            </NavLink>
            <NavLink href="/services" active={location === "/services"}>
              Services
            </NavLink>
            <NavLink href="/careers" active={location === "/careers"}>
              Careers
            </NavLink>
            <NavLink href="/about" active={location === "/about"}>
              About
            </NavLink>
            <NavLink href="/contact" active={location === "/contact"}>
              Contact
            </NavLink>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden fixed top-24 inset-x-0 bottom-15 bg-black/50 backdrop-blur-lg transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          >
            <div className="max-w-7xl mx-auto py-4">
              <div className="flex flex-col items-center space-y-4">
                <MobileNavLink
                  href="/"
                  active={location === "/"}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </MobileNavLink>
                <MobileNavLink
                  href="/services"
                  active={location === "/services"}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </MobileNavLink>
                <MobileNavLink
                  href="/careers"
                  active={location === "/careers"}
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </MobileNavLink>
                <MobileNavLink
                  href="/about"
                  active={location === "/about"}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </MobileNavLink>
                <MobileNavLink
                  href="/contact"
                  active={location === "/contact"}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </MobileNavLink>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black group relative overflow-hidden"
            >
              <Link href="/contact">
                <span className="relative z-10">Free Quote</span>
                <span className="absolute inset-0 bg-[#FFD700] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`nav-link ${active ? "active" : ""}`}>
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  active,
  children,
  onClick,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-4 py-2 text-sm font-medium transition-colors ${
        active ? "text-[#FFD700]" : "text-white/70 hover:text-[#FFD700]"
      }`}
    >
      {children}
    </Link>
  );
}
