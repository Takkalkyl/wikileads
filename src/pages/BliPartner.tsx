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

const formSchema = z.object({
  companyName: z.string().min(2, "Företagsnamn måste vara minst 2 tecken"),
  contactPerson: z.string().min(2, "Kontaktperson måste vara minst 2 tecken"),
  email: z.string().email("Ogiltig e-postadress"),
  phone: z.string().min(6, "Telefonnummer måste vara minst 6 tecken"),
  message: z.string().optional(),
});

const BliPartner = () => {
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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    
    // Encode form data for Netlify
    const formData = new FormData();
    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });

    // Submit to Netlify forms
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString()
    })
    .then(() => {
      console.log("Form successfully submitted to Netlify");
      toast({
        title: "Tack för din ansökan!",
        description: "Vi återkommer till dig inom kort.",
      });
      form.reset();
    })
    .catch((error) => {
      console.error("Form submission error:", error);
      toast({
        title: "Ett fel uppstod",
        description: "Försök igen senare eller kontakta oss via telefon.",
        variant: "destructive"
      });
    });
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
              data-netlify="true"
              name="partner-form"
              method="POST"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="partner-form" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Företagsnamn</FormLabel>
                    <FormControl>
                      <Input placeholder="Ditt företags namn" {...field} className="bg-forest-light border-mint/20" name="companyName" />
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
                      <Input placeholder="För- och efternamn" {...field} className="bg-forest-light border-mint/20" name="contactPerson" />
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
                      <Input placeholder="din@epost.se" {...field} className="bg-forest-light border-mint/20" name="email" />
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
                      <Input placeholder="Ditt telefonnummer" {...field} className="bg-forest-light border-mint/20" name="phone" />
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
                        name="message"
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

export default BliPartner;