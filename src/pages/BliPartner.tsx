import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define the schema for the form
const formSchema = z.object({
  companyName: z.string().min(2, "Företagsnamn måste vara minst 2 tecken"),
  contactPerson: z.string().min(2, "Kontaktperson måste vara minst 2 tecken"),
  email: z.string().email("Ogiltig e-postadress"),
  phone: z.string().min(6, "Telefonnummer måste vara minst 6 tecken"),
  message: z.string().optional(),
});

const BliPartner = () => {
  // Set up the form using react-hook-form with validation schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Tack för din ansökan!",
      description: "Vi återkommer till dig inom kort.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Bli partner</h1>
          <p className="text-white/80 mb-8 text-center">
            Fyll i formuläret nedan för att ansöka om partnerskap med Wikileads.se
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
              data-netlify="true" // Add Netlify form attributes
              name="partner-form" // Name for Netlify identification
              method="POST"
              action="/success"
            >
              <input type="hidden" name="form-name" value="partner-form" />
              <input type="hidden" name="bot-field" />

              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Företagsnamn</FormLabel>
                    <FormControl>
                      <Input placeholder="Ditt företags namn" {...field} className="bg-forest-light border-mint/20" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactPerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Kontaktperson</FormLabel>
                    <FormControl>
                      <Input placeholder="För- och efternamn" {...field} className="bg-forest-light border-mint/20" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">E-post</FormLabel>
                    <FormControl>
                      <Input placeholder="din@epost.se" {...field} className="bg-forest-light border-mint/20" />
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
                    <FormLabel className="text-white">Telefonnummer</FormLabel>
                    <FormControl>
                      <Input placeholder="Ditt telefonnummer" {...field} className="bg-forest-light border-mint/20" />
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
                    <FormLabel className="text-white">Meddelande (valfritt)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Skriv ditt meddelande här..."
                        {...field}
                        className="bg-forest-light border-mint/20 min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-mint hover:bg-mint/90 text-forest font-medium">
                Skicka ansökan
              </Button>
            </form>
          </Form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Export the component as default
export default BliPartner;
