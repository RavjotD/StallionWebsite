import { Button } from "@/components/ui/button";
import { Shield, Users, CalendarDays, BadgeAlert } from "lucide-react";
import { Link } from "wouter";

export default function EventSecurity() {
  return (
    <div className="flex-1 flex flex-col bg-zinc-900">
      {/* Main Content Section */}
      <section className="relative min-h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/assets/images/ES7.png")' }}
        />
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8 mx-auto py-16 py-32 lg:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-yellow-400 mb-6">
                Event Security
              </h1>

              <div className="space-y-6">
                <h2 className="text-xl text-white font-normal">
                  We ensure your events are operating smoothly and safely by
                  addressing:
                </h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>
                      Crowd management to handle large gatherings effectively
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>
                      Coordinated highly trained personnel to ensure the safety
                      and security of your event
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-4 h-2 bg-primary rounded-full"></div>
                    <span>
                      Valet Service to enhance the safety of your event for
                      secure parking locations and traffic maintenance so your
                      guests get to focus on the enjoyment of the event{" "}
                    </span>
                  </li>
                </ul>

                <p className="text-white text-lg font-normal leading-relaxed">
                  Thanks to our precision-driven processes, exceptional customer
                  service, and comprehensive solutions, you can trust us with
                  your event security needs.
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
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Crowd Control
                </h3>
                <p className="text-gray-400">
                  Professional crowd management for seamless a event operations
                </p>
              </div>

              <div className="bg-zinc-800/80 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CalendarDays className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Risk Assessment
                </h3>
                <p className="text-gray-400">
                  Event and security planning to organize safety protocols
                </p>
              </div>

              <div className="bg-zinc-800/80 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BadgeAlert className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Access Control
                </h3>
                <p className="text-gray-400">
                  Entry point management for authorized access to the event
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
                  Adherence to incident management of the event
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
