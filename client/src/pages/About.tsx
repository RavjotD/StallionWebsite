import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Target } from "lucide-react";
import { Link } from "wouter";
import { InfoAnimation } from "@/components/animations/SecurityAnimations";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />

        {/* Animated Info Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-80">
          <InfoAnimation />
        </div>

        {/* Content */}
        <div className="relative container mx-auto flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl pt-20 sm:pt-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal text-yellow-400 mb-4 sm:mb-6">
              About <span className="text-white">Us</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
              A trusted name in professional security services in the Lower
              Mainland since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="px-4 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-7xl mx-auto w-full">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Founded in 2018, Stallion Group Security has established
                  itself as a leading security provider in British Columbia's
                  Lower Mainland. Our commitment to excellence and professional
                  integrity has earned us the trust of countless clients across
                  residential, commercial, and event security sectors.
                </p>
                <p>
                  With over eight years of experience in security management and
                  a team of highly trained professionals, we deliver
                  comprehensive security solutions that meet the evolving needs
                  of our clients throughout Vancouver and surrounding areas.
                </p>
                <p>
                  Our approach combines cutting-edge technology with expert
                  personnel to ensure the highest level of protection for our
                  clients' assets, properties, and people.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatCard title="Years of Experience" value="8+" icon={Shield} />
              <StatCard title="Trained Officers" value="100+" icon={Users} />
              <StatCard title="Satisfied Clients" value="500+" icon={Award} />
              <StatCard title="Areas Served" value="25+" icon={Target} />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="flex flex-col px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-normal text-center text-yellow-400 mb-4">
            We secure
          </h2>
          <p className="text-gray-400 text-center mb-16">
            our core principles, aligned to focus to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full text-yellow-400"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl text-white font-semibold mb-2">
                Efficency
              </h3>
              <p className="text-muted-foreground mb-2">Valuing your time</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full text-yellow-400"
                >
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl text-white font-semibold mb-2">
                Excellence
              </h3>
              <p className="text-muted-foreground mb-2">
                Delivering high-quality solutions
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full text-yellow-400"
                >
                  <path
                    fill="currentColor"
                    d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl text-white font-semibold mb-2">
                Transparency
              </h3>
              <p className="text-muted-foreground mb-2">
                Providing clear communication
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full text-yellow-400"
                >
                  <path
                    fill="currentColor"
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl text-white font-semibold mb-2">
                Growth
              </h3>
              <p className="text-muted-foreground mb-2">
                Focusing on scalability
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full text-yellow-400"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl text-white font-semibold mb-2">
                Innovation
              </h3>
              <p className="text-muted-foreground mb-2">
                Using the latest technology
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 mb-6">
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full text-yellow-400"
                >
                  <path
                    fill="currentColor"
                    d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl text-white font-semibold mb-2">
                Collaboration
              </h3>
              <p className="text-muted-foreground mb-2">
                Partnering in your success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Partners Section */}
      <section className="py-20 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="container mx-auto">
          <div className="flex flex-col px-4 mb-20">
            <h2 className="text-3xl font-normal text-yellow-400 text-center mb-12">
              Our Customer Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Stallion Group Security has provided exceptional service for our residential complex. Their professionalism and attention to detail are unmatched."
                author="Sarah Johnson"
                role="Property Manager"
              />
              <TestimonialCard
                quote="We've worked with several security companies, but none match the level of service and dedication that Stallion Group provides."
                author="Michael Chang"
                role="Event Coordinator"
              />
              <TestimonialCard
                quote="Their team's response time and professional conduct have made them an invaluable partner in securing our business premises."
                author="David Wilson"
                role="Business Owner"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center px-4">
            <h2 className="text-3xl font-normal text-yellow-400 text-center mb-12">
              Trusted Partners
            </h2>
            <div className="w-full overflow-hidden">
              <div className="flex  whitespace-nowrap animate-marquee hover:pause">
                <div className="flex space-x-16 min-w-full">
                  <PartnerLogo
                    src="/assets/images/partners/AV.png"
                    name="Vancouver Convention Centre"
                  />
                  <PartnerLogo
                    src="/assets/images/partners/FBH.png"
                    name="Fraser View Banquet Hall"
                  />
                  <PartnerLogo
                    src="/assets/images/partners/LBC.png"
                    name="LandMark Business Centre"
                  />
                  <PartnerLogo
                    src="/assets/images/partners/MH.png"
                    name="Mand Homes Ltd"
                  />
                  <PartnerLogo
                    src="/assets/images/partners/SED.png"
                    name="Sapphire Estate"
                  />
                </div>
                <div className="flex space-x-12 min-w-full">
                  <PartnerLogo
                    src="/assets/images/partners/AV.png"
                    name="Vancouver Convention Centre"
                  />
                  <PartnerLogo
                    src="/assets/images/partners/FBH.png"
                    name="Fraser View Banquet Hall"
                  />
                  <PartnerLogo
                    src="/assets/images/partners/LBC.png"
                    name="LandMark Business Centre"
                  />
                  <PartnerLogo
                    src="/assets/images/partners/MH.png"
                    name="Mand Homes Ltd"
                  />
                  <PartnerLogo
                    src="/assets/images/partners/SED.png"
                    name="Sapphire Estate"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-semibold mb-6">Join Our Team</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented professionals to join our security
            team. If you're passionate about security and protection, we'd love
            to hear from you.
          </p>
          <Button asChild size="lg" className="group relative overflow-hidden">
            <Link href="/contact">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: React.ComponentType<any>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const numericValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start({
        scale: [0.9, 1],
        opacity: [0, 1],
        transition: { duration: 0.5 },
      });
      setHasAnimated(true);
    }
  }, [isInView, controls, hasAnimated]);

  return (
    <Card ref={ref}>
      <CardContent className="p-8">
        <Icon className="w-10 h-10 text-primary mb-6" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          className="text-3xl font-bold mb-2"
        >
          {hasAnimated ? <CountUp end={numericValue} duration={2} /> : "0"}
          {value.includes("+") ? "+" : ""}
        </motion.div>
        <div className="text-sm text-muted-foreground">{title}</div>
      </CardContent>
    </Card>
  );
}

function CountUp({ end, duration }: { end: number; duration: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <>{count}</>;
}

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <Card className="hover:border-yellow-500">
      <CardContent className="p-8">
        <div className="space-y-4">
          <p className="text-lg italic text-muted-foreground">"{quote}"</p>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PartnerLogo({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex items-center justify-center min-w-[100px] h-12 px-2 bg-background rounded-lg shadow hover:shadow-md transition-shadow duration-600">
      <img src={src} alt={name} className="max-h-12 w-auto object-repeat" />
    </div>
  );
}
