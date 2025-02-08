import { Button } from "@/components/ui/button";
import { Shield, Home, Lock, Bell } from "lucide-react";
import { Link } from "wouter";

export default function ResidentialSecurity() {
  return (
    <div className="flex-1 flex flex-col bg-zinc-900">
      {/* Main Content Section */}
      <section className="relative min-h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/assets/images/RS.png")' }}
        />
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8 mx-auto py-16 py-32 lg:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-yellow-400 mb-6">
                Residential Security
              </h1>

              <div className="space-y-6">
                <h2 className="text-xl text-white font-normal">
                  We ensure seamless residential security by addressing:
                </h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-4 h-2 bg-primary rounded-full"></div>
                    <span>
                      CCTV cameras monitored by trained professionals to detect
                      and respond to security threats{" "}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-4 h-2 bg-primary rounded-full"></div>
                    <span>
                      Mobile security units for flexible coverage of large areas
                      or multiple locations
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-4 h-2 bg-primary rounded-full"></div>
                    <span>
                      Emergency reponses to alarms and incident detection
                    </span>
                  </li>
                </ul>

                <p className="text-white text-lg font-normal leading-relaxed">
                  Thanks to our precision-driven processes, exceptional customer
                  service, and comprehensive solutions, you can trust us with
                  your home security needs.
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
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Security Personnel
                </h3>
                <p className="text-gray-400">
                  Mobile patrolling for round-the-clock security monitoring
                </p>
              </div>

              <div className="bg-zinc-800/80 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  CCTV & 24/7 Surveillance
                </h3>
                <p className="text-gray-400">
                  Advanced cameras with AI technology provides motion detection,
                  night vision tracking, and video analytics
                </p>
              </div>

              <div className="bg-zinc-800/80 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Access & Alarm Systems
                </h3>
                <p className="text-gray-400">
                  Access management entries and advanced alarm systems
                </p>
              </div>

              <div className="bg-zinc-800/80 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Rapid Response
                </h3>
                <p className="text-gray-400">
                  Quick emergency response protocols
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
