import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Briefcase, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position"),
  experience: z
    .string()
    .min(50, "Please provide more details about your experience"),
  securityLicense: z.string().optional(),
});

export default function Careers() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      securityLicense: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Failed to submit application");

      toast({
        title: "Application Submitted",
        description: "We'll review your application and get back to you soon.",
      });

      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit application. Please try again.",
      });
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/images/CE.png")',
            backgroundPosition: "center 45%",
            backgroundSize: "100% auto",
          }}
        />

        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />

        {/* Content */}
        <div className="relative container mx-auto flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-3axl pt-24">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-normal text-white mb-4 ">
              Join our <span className="text-yellow-400">Team</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-300 mb-8 max-w-2xl">
              Build a rewarding career in security with one of British
              Columbia's leading security service providers..
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="w-full py-24 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-normal text-white mb-6">
            Why join Stallion Security?
          </h2>
          <p className="text-gray-300 mb-12">
            We're driven by our purpose, and that purpose begins with our team
            members. At Stallion Security, we:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="text-6xl font-normal text-yellow-400">1</div>
              <p className="text-gray-300">
                Create an environment that aligns with our mission, core values,
                and the positive impact we strive to make on society.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-6xl font-normal text-yellow-400">2</div>
              <p className="text-gray-300">
                Equip our team members with the tools and resources they need to
                actively manage and advance their career growth.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-6xl font-normal text-yellow-400">3</div>
              <p className="text-gray-300">
                Commit to fostering an inclusive workplace where everyone feels
                valued and empowered to be their authentic selves.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-6xl font-normal text-yellow-400">4</div>
              <p className="text-gray-300">
                Trust that together, we collaborate, innovate, and continuously
                improve to make meaningful progress in delivering the security
                solutions of the future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-b from-black via-zinc-900 to-black mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 ">
          <div className="p-6 bg-zinc-900/50 rounded-lg shadow-lg shadow-black">
            <h3 className="text-md md:text-xl font-md text-yellow-400 mb-2">
              World-Class Specialty Security Services Delivered to Your Doorstep
            </h3>
            <p className="text-sm md:text-md lg:text-lg text-gray-300">
              Leveraging our expertise, we provide advanced protection services
              to ensure safety and security awaits wherever you are.
            </p>
          </div>
          <div className="p-6 bg-zinc-900/50 rounded-lg shadow-lg shadow-black">
            <h3 className="text-md md:text-xl font-md text-yellow-400 mb-2">
              Mastering Security Challenges
            </h3>
            <p className="text-sm md:text-md lg:text-lg text-gray-300">
              Our strength lies in our unparalleled ability to seamlessly
              navigate security complexities with care and precision.
            </p>
          </div>
          <div className="p-6 bg-zinc-900/50 rounded-lg shadow-lg shadow-black">
            <h3 className="text-md md:text-xl font-md text-yellow-400 mb-2">
              Innovation Across All Environments
            </h3>
            <p className="text-sm md:text-md lg:text-lg text-gray-300">
              Delivering cutting-edge security solutions for diverse scenarios
              through continuous investment in advanced technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-900 flex justify-center">
        <div className="flex flex-col  px-8">
          <h2 className="text-3xl text-yellow-400 font-semibold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={Shield}
              title="Professional Development"
              description="Continuous training and advancement opportunities"
            />
            <BenefitCard
              icon={Award}
              title="Competitive Package"
              description="Excellent compensation and benefits"
            />
            <BenefitCard
              icon={Briefcase}
              title="Flexible Schedules"
              description="Work-life balance with various shift options"
            />
            <BenefitCard
              icon={GraduationCap}
              title="Training Programs"
              description="Comprehensive security certification programs"
            />
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-muted/50 flex justify-center">
        <div className="container px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Apply Now</h2>
            <p className="text-center text-muted-foreground mb-8">
              Start your journey in professional security services
            </p>
            <Card>
              <CardContent className="p-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex gap-1">
                            Full Name<span className="text-yellow-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex gap-1">
                              Email<span className="text-yellow-400">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex gap-1">
                              Phone<span className="text-yellow-400">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="(555) 123-4567"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex gap-1">
                            Position<span className="text-yellow-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <select
                              className="w-full h-10 px-3 rounded-md border border-input bg-background"
                              {...field}
                            >
                              <option value="">Select a position...</option>
                              <option value="security_officer">
                                Security Officer
                              </option>
                              <option value="supervisor">
                                Security Supervisor
                              </option>
                              <option value="event_security">
                                Event Security
                              </option>
                              <option value="mobile_patrol">
                                Mobile Patrol Officer
                              </option>
                              <option value="other">Other</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="securityLicense"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Security License Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your security license number (if applicable)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex gap-1">
                            Security Experience
                            <span className="text-yellow-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your security experience and qualifications..."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full group relative overflow-hidden"
                    >
                      <span className="relative z-10">Submit Application</span>
                      <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
