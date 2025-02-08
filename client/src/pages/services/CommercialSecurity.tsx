import { Button } from "@/components/ui/button";
import { Shield, Building2, Lock, Users } from "lucide-react";
import { Link } from "wouter";

export default function CommercialSecurity() {
  return (
    <div className="flex-1 flex flex-col bg-zinc-900">
      {/* Main Content Section */}
      <section className="relative min-h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/assets/images/work-3.png")' }}
        />
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8 mx-auto py-32 md:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 px-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-yellow-400 mb-6">
                Commercial Security
              </h1>

              <div className="space-y-6">
                <h2 className="text-xl text-white font-normal">
                  Using our innovating resources we ensure that your assets are
                  safe and secure from all threat by addressing:
                </h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-2 bg-primary rounded-full"></div>
                    <span>
                      Anaylzing risk assessment for customized security plans
                      tailored to the specific needs and challenges of your site
                      locations{" "}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-4 h-2 bg-primary rounded-full"></div>
                    <span>
                      On-site guards for regular patrols to deter theft,
                      vandalism and unauthorized activities
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-2 bg-primary rounded-full"></div>
                    <span>
                      Collaboration with local fire departments for emergency
                      needs and immediate response to the safety of occupants{" "}
                    </span>
                  </li>
                </ul>

                <p className="text-white text-lg font-normal leading-relaxed">
                  Thanks to our precision-driven processes, exceptional customer
                  service, and comprehensive solutions, you can trust us with
                  your business security needs.
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
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Facility Security
                </h3>
                <p className="text-gray-400">
                  Complete security coverage from surveillance endpoints to
                  guards
                </p>
              </div>

              <div className="bg-zinc-800/80 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Access Management
                </h3>
                <p className="text-gray-400">
                  Access control systems to restrict entry to authorized
                  personnel only
                </p>
              </div>

              <div className="bg-zinc-800/80 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Asset Protection
                </h3>
                <p className="text-gray-400">
                  Safeguarding all site assets using inventory management
                  protocols{" "}
                </p>
              </div>

              <div className="bg-zinc-800/80 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Emergency Response
                </h3>
                <p className="text-gray-400">
                  24/7 emergency protocols and monitored surveillance systems to
                  respond to inidentified threats
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
