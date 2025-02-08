import { Button } from "@/components/ui/button";
import { Shield, User, Compass, Phone } from "lucide-react";
import { Link } from "wouter";

export default function PersonalSecurity() {
  return (
    <div className="flex-1 flex flex-col bg-zinc-900">
      {/* Main Content Section */}
      <section className="relative min-h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/assets/images/PS4.png")' }}
        />
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8 mx-auto py-16 py-32 lg:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-yellow-400 mb-6">
                Personal Security
              </h1>

              <div className="space-y-6">
                <h2 className="text-xl text-white font-normal">
                  We ensure dedicated personal security by addressing:
                </h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>
                      Executive protection to monitor high-profile individuals
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>
                      Travel security and logistics to maintain security and
                      safety every step of the way
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>
                      Risk assessment and management to coordinate safety
                      endpoints with 24/7 security personnel
                    </span>
                  </li>
                </ul>

                <p className="text-white text-lg font-normal leading-relaxed">
                  Thanks to our precision-driven processes, exceptional customer
                  service, and comprehensive solutions, you can trust us with
                  your personal security needs.
                </p>

                <Button
                  asChild
                  variant="outline"
                  className="mt-8 text-white border-white hover:bg-[#FFD700] hover:text-black group relative overflow-hidden"
                  size="lg"
                >
                  <Link href="/contact">
                    <span className="relative z-10">Get Started</span>
                    <span className="absolute inset-0 bg-[#FFD700] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-800/80 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Executive Protection
                </h3>
                <p className="text-gray-400">
                  VIP's requiring discreet protection
                </p>
              </div>

              <div className="bg-zinc-800/80 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Travel Security
                </h3>
                <p className="text-gray-400">
                  Secure transportation with security personnel
                </p>
              </div>

              <div className="bg-zinc-800/80 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  24/7 Support
                </h3>
                <p className="text-gray-400">
                  GPS tracking and round-the-clock call supporting updates
                </p>
              </div>

              <div className="bg-zinc-800/80 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Risk Management
                </h3>
                <p className="text-gray-400">
                  Threat assessment for the duration of travel and personal
                  protection needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
