import { Button } from "@/components/ui/button";
import {
  Shield,
  Home,
  Building2,
  PartyPopper,
  User,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "wouter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Services() {
  useScrollAnimation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/images/ES.png")',
            backgroundPosition: "center 55%",
            backgroundSize: "100% auto",
          }}
        />

        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />

        {/* Content */}
        <div className="relative container mx-auto flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl pt-20 sm:pt-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal text-white mb-4 sm:mb-6">
              Our Security <span className="text-yellow-400">Solutions</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
              Comprehensive security solutions tailored to protect what matters
              most to you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-normal text-yellow-400 leading-tight">
                Innovative Security,
                <br />
                Guaranteeing Safety
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our vision is to be the best provider of security services in
                the Lower Mainland of British Columbia, Canada. We are committed
                to safeguarding our communities with exceptional, reliable, and
                innovative security solutions. Our team of dedicated
                professionals is driven by a passion for excellence and a strong
                commitment to maintaining the highest standards of integrity and
                customer satisfaction. With our expertise and cutting-edge
                technology, we strive to create safer environments for
                businesses and residents.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-gray-200">Pursuit of Excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 md:w-5 h-5 text-primary" />
                  <span className="text-gray-200">Customer-Centricity</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-gray-200">Safety Commitment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-gray-200">Tailored Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 md:w-5 h-5 text-primary" />
                  <span className="text-gray-200">Comprehensive Knowledge</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-gray-200">Diverse Vigilance</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[800px] rounded-lg overflow-hidden">
              <img
                src="/assets/images/SS.png"
                alt="Professional Security Team"
                className="w-full h-full object-cover border-4 border-solid border-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Grid Layout */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-md py-8 sm:py-12 md:py-16 text-center text-yellow-400 mb-6">
            Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-2 sm:px-4">
            {/* Rest of the service cards remain unchanged */}
            <ServiceCard
              title="Residential Security"
              description="Protect your home and loved ones with our comprehensive residential security solutions."
              icon={<Home className="w-12 h-12 text-primary" />}
              features={[
                "CCTV Monitoring & 24/7 Surveillance",
                "Access Control Systems",
                "Emergency Response",
                "Security Personnel",
              ]}
              href="/services/residential"
              image="/assets/images/RS2.png"
            />

            <ServiceCard
              title="Commercial Security"
              description="Safeguard your business assets and employees with our professional security services."
              icon={<Building2 className="w-12 h-12 text-primary" />}
              features={[
                "Asset Protection",
                "FireWatch & Security Personnel",
                "Emergency Response",
                "Access Control Systems",
              ]}
              href="/services/commercial"
              image="/assets/images/site.png"
            />

            <ServiceCard
              title="Event Security"
              description="Ensure the safety and success of your events with our experienced security personnel."
              icon={<PartyPopper className="w-12 h-12 text-primary" />}
              features={[
                "Risk Assessment",
                "Security Personnel",
                "Valet Services",
                "Access Management",
                "Emergency Response",
              ]}
              href="/services/event"
              image="/assets/images/ES.png"
            />

            <ServiceCard
              title="Personal Security"
              description="Custom protection services for individuals requiring dedicated security solutions."
              icon={<User className="w-12 h-12 text-primary" />}
              features={[
                "Executive Protection",
                "Travel Security",
                "Risk Assessment",
                "24/7 Security Personnel",
              ]}
              href="/services/personal"
              image="/assets/images/PS4.png"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll scale-up">
            <h2 className="text-3xl sm:text-4xl font-normal mb-6">
              Ready to Enhance Your Security?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your security needs and receive a
              customized solution.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-[#FFD700] hover:text-black group relative overflow-hidden"
            >
              <Link href="/contact">
                <span className="relative z-10">Get a Quote</span>
                <span className="absolute inset-0 bg-[#FFD700] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  features,
  href,
  image,
}: ServiceCardProps) {
  return (
    <div className="relative h-[600px] w-full border-solid transition-all duration-300 hover:border-2 hover:border-yellow-400 group">
      <div className="h-full relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 transition-all duration-300 group-hover:bg-black/80" />

        <div className="relative h-full p-8 flex flex-col">
          <div className="mb-6">{icon}</div>
          <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
          <p className="text-gray-300 mb-6">{description}</p>

          {/* Features section - visible on hover */}
          <div className="mt-auto space-y-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h4 className="text-xl font-semibold text-white">Key Features</h4>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="w-full group relative hover:text-black overflow-hidden"
              variant="outline"
            >
              <Link href={href}>
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-all hover:text-black duration-300"></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;

  features: string[];
  href: string;
  image: string;
}
