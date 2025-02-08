import { QuoteForm } from "@/components/QuoteForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactAnimation } from "@/components/animations/SecurityAnimations";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />

        {/* Animated Contact Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <ContactAnimation />
        </div>

        {/* Content */}
        <div className="relative container mx-auto flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl pt-20 sm:pt-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal text-yellow-400 mb-4 sm:mb-6">
              Contact <span className="text-white">Us</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
              Get in touch with our team for professional security solutions
              tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-background">
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl font-normal text-yellow-400 mb-8 ml-4">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 px-4 text-sm">
                <ContactCard
                  icon={MapPin}
                  title="Visit Us"
                  details={["6998 149 Street", "Surrey, BC Canada"]}
                />
                <ContactCard
                  icon={Phone}
                  title="Call Us"
                  details={["Main: (604) 369-3503"]}
                />
                <ContactCard
                  icon={Mail}
                  title="Email Us"
                  details={["stallionsecuregroup@gmail.com"]}
                />
                <ContactCard
                  icon={Clock}
                  title="Business Hours"
                  details={[
                    "Monday - Friday: 9AM - 6PM",
                    "24/7 Emergency Support",
                  ]}
                />
              </div>

              {/* Map Embed */}
              <Card>
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </CardContent>
              </Card>
            </div>

            {/* Quote Form */}
            <div>
              <h2 className="text-3xl font-normal text-yellow-400 mb-8">
                Request a Quote
              </h2>
              <Card>
                <CardContent className="p-6">
                  <QuoteForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="flex flex-col justify-center px-6">
          <h2 className="text-3xl font-normal text-yellow-400 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FaqCard
              question="What areas do you serve?"
              answer="We provide security services throughout the metropolitan area and surrounding regions. Contact us for specific coverage details."
            />
            <FaqCard
              question="Are your security officers licensed?"
              answer="Yes, all our security officers are fully licensed, insured, and undergo regular training to maintain the highest standards."
            />
            <FaqCard
              question="Do you offer emergency services?"
              answer="Yes, we provide 24/7 emergency security services for our clients with rapid response times."
            />
            <FaqCard
              question="How quickly can you start service?"
              answer="We can typically begin service within 24-48 hours of contract approval, depending on the scope of security needed."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  details,
}: {
  icon: React.ComponentType<any>;
  title: string;
  details: string[];
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4 ">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <div className="space-y-1 ">
          {details.map((detail, index) => (
            <p
              key={index}
              className=" text-xs sm:text-sm  text-muted-foreground"
            >
              {detail}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function FaqCard({ question, answer }: { question: string; answer: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-2">{question}</h3>
        <p className="text-sm text-muted-foreground">{answer}</p>
      </CardContent>
    </Card>
  );
}
