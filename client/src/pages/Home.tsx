import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Users,
  Building2,
  Store,
  LandPlot,
  Factory,
  Building,
  GraduationCap,
} from "lucide-react";
import { Link } from "wouter";
import { Hero } from "@/components/layout/Hero";
import {
  HouseAnimation,
  BuildingAnimation,
  BalloonAnimation,
  LockerAnimation,
} from "@/components/animations/SecurityAnimations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCard } from "@/components/ServiceCard";

export default function Home() {
  useScrollAnimation();

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Hero />

      {/* Services Section */}
      <section className="w-full py-12 md:py-32 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-20 animate-on-scroll slide-in-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-yellow-400 mb-6">
              Our Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Comprehensive security services tailored to protect what matters
              most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-[95rem] mx-auto stagger-children">
            <ServiceCard
              title="Residential Security"
              description="24/7 protection for your home and family with advanced monitoring systems and trained personnel."
              href="/services/residential"
              icon={<HouseAnimation className="w-8 h-16  mb-12 md:mb-4" />}
            />
            <ServiceCard
              title="Commercial Security"
              description="Comprehensive security solutions for businesses, including access control and surveillance systems."
              href="/services/commercial"
              icon={<BuildingAnimation className="w-8 h-16 mb-12 md:mb-8" />}
            />
            <ServiceCard
              title="Event Security"
              description="Professional security services for events of all sizes, ensuring smooth and safe operations."
              href="/services/event"
              icon={<BalloonAnimation className="w-8 h-16 mb-12 md:mb-4" />}
            />
            <ServiceCard
              title="Personal Security"
              description="Custom protection services for individuals requiring dedicated security solutions."
              href="/services/personal"
              icon={<LockerAnimation className="w-8 h-16 mb-16 md:mb-8" />}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 md:py-32 bg-zinc-900">
        <div className="container px-6 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {" "}
            {/* Changed items-start to items-center */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-yellow-400">
                The Stallion Group Difference
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We fully understand our customers' needs and navigate security
                complexities with care. In areas with limited infrastructure, we
                identify customs and regulatory requirements. Our premier
                customer service and full-service solutions enable you to focus
                on what matters most: safety.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {" "}
                {/* Added max-w-4xl mx-auto */}
                <FeatureCard
                  icon={Shield}
                  title="Professional Team"
                  description="Highly trained and certified security personnel"
                />
                <FeatureCard
                  icon={Lock}
                  title="Modern Technology"
                  description="State-of-the-art security systems and monitoring"
                />
                <FeatureCard
                  icon={Users}
                  title="24/7 Service"
                  description="Round-the-clock security coverage and support"
                />
                <FeatureCard
                  icon={Building2}
                  title="Custom Solutions"
                  description="Tailored security plans for your specific needs"
                />
              </div>
            </div>
            <div className="relative aspect-[3/4] lg:h-[700px] rounded-lg overflow-hidden mt-8 lg:mt-0">
              <img
                src="/assets/images/work-4.png"
                alt="Professional Security Service"
                className="w-full h-full object-cover border-4 border-solid border-zinc-900"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="w-full py-24 md:py-32 bg-gradient-to-b from-zinc-900 via-zinc-800 to-black">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-md text-center text-yellow-400 mb-16">
            Industries Served
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <IndustryCard
              icon={Store}
              title="Business & Communities"
              description="Retail and local business security"
            />
            <IndustryCard
              icon={LandPlot}
              title="Construction Sites"
              description="24/7 construction site monitoring"
            />
            <IndustryCard
              icon={Building2}
              title="Corporate Office"
              description="Comprehensive corporate security "
            />
            <IndustryCard
              icon={GraduationCap}
              title="Educational Institutions"
              description="Safe learning environment "
            />
            <IndustryCard
              icon={Users}
              title="Events & Conference Security"
              description="Professional event security"
            />
            <IndustryCard
              icon={Building}
              title="Government & Municipality"
              description="Public sector security"
            />
            <IndustryCard
              icon={Factory}
              title="Industrial Infrastructure"
              description="Critical infrastructure protection"
            />
            <IndustryCard
              icon={Building2}
              title="Residential & Commercial"
              description="Property security"
            />
          </div>

          <div className="flex justify-center mt-12"></div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
          style={{
            backgroundImage: 'url("/assets/images/work-7.png")',
            filter: "brightness(0.4)",
          }}
        />

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-normal text-white">
              Want to join our team?
            </h2>
            <p className="text-lg text-gray-300">
              We're always on the lookout for passionate and talented
              individuals to help us make an impact in the security industry.
              Ready to grow with us?
            </p>
            <Button
              asChild
              variant="outline"
              className="text-white border-white hover:bg-primary hover:text-black"
            >
              <Link href="/careers">Careers</Link>
            </Button>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/assets/images/work-7.png"
              alt="Team at Work"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="w-full py-24 md:py-32 bg-muted/50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl mx-auto animate-on-scroll scale-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-md text-center text-yellow-400 mb-6">
              Request a Free Quote
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Get in touch with us for a customized security solution
            </p>
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-zinc-800 rounded-lg transform transition-all duration-300 hover:scale-105">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-light text-yellow-400 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

function IndustryCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-20 h-20 flex items-center justify-center">
        <Icon className="w-12 md:w-16 h-12 text-white" strokeWidth={1} />
      </div>
      <h3 className="text-white text-md font-semibold">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}
