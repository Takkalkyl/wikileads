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
import { Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Namnet måste vara minst 2 tecken"),
  email: z.string().email("Ogiltig e-postadress"),
  message: z.string().min(10, "Meddelandet måste vara minst 10 tecken"),
});

const Kontakt = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Tack för ditt meddelande!",
      description: "Vi återkommer till dig inom kort.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Kontakta oss</h1>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Mail className="text-mint" />
            <a href="mailto:info@wikileads.se" className="text-mint hover:text-mint/80">
              info@wikileads.se
            </a>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
              data-netlify="true" // Lägg till denna attribut
              name="contact" // Lägg till ett namn för att identifiera formuläret på Netlify
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Namn</FormLabel>
                    <FormControl>
                      <Input placeholder="Ditt namn" {...field} className="bg-forest-light border-mint/20" />
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
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Meddelande</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Skriv ditt meddelande här..."
                        {...field}
                        className="bg-forest-light border-mint/20 min-h-[150px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-mint hover:bg-mint/90 text-forest font-medium">
                Skicka meddelande
              </Button>
            </form>
          </Form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
