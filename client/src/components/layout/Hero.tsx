import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/images/ES6.png")',
          backgroundPosition: "center 55%",
          backgroundSize: "100% auto",
        }}
      />

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />

      {/* Content */}
      <div className="relative container mx-auto flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl pt-24 px-4">
          <h1 className="text-3xl  md:text-5xl lg:text-7xl font-normal text-white mb-4 sm:mb-6">
            There is a Better Way to{" "}
            <span className="text-yellow-400">Secure.</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-300 mb-8 max-w-2xl">
            Professional security services in the Lower Mainland. Protecting
            what matters most with advanced solutions and trained personnel.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden"
            >
              <Link href="/contact">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-black group relative overflow-hidden"
            >
              <Link href="/services">
                <span className="relative z-10">Our Services</span>
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
