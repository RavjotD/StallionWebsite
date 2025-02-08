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
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z
    .string()
    .min(10, "Please provide more details about your security needs"),
});

export function QuoteForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      toast({
        title: "Quote Request Submitted",
        description: "We'll get back to you shortly with a detailed quote.",
      });

      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit form. Please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-1">
                Name<span className="text-yellow-400">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Your name" required {...field} />
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
                    required
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
                    required
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
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-1">
                Service Type<span className="text-yellow-400">*</span>
              </FormLabel>
              <FormControl>
                <select
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  required
                  {...field}
                >
                  <option value="">Select a service...</option>
                  <option value="residential">Residential Security</option>
                  <option value="commercial">Commercial Security</option>
                  <option value="event">Event Security</option>
                  <option value="personal">Personal Security</option>
                  <option value="other">Other</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-1">
                Message<span className="text-yellow-400">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your security needs..."
                  className="min-h-[100px]"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="outline"
          className="w-full text-white border-white hover:bg-[#FFD700] hover:text-black group relative overflow-hidden"
        >
          <span className="relative z-10">Request Quote</span>
          <span className="absolute inset-0 bg-[#FFD700] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
        </Button>
      </form>
    </Form>
  );
}
