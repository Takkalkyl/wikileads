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
  name: z.string().min(2, "Namnet måste vara minst 2 tecken"),
  phone: z.string().min(6, "Ange ett giltigt telefonnummer"),
  email: z.string().email("Ogiltig e-postadress"),
  description: z.string().min(10, "Beskriv ditt behov (minst 10 tecken)"),
});

const Priser = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Tack för ditt intresse!",
      description: "Vi återkommer till dig inom kort.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Priser</h1>
          
          <div className="bg-forest-light p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4">Prissättning baseras på:</h2>
            <ul className="list-disc list-inside space-y-2 text-white/80 mb-6">
              <li>Typ av projekt (t.ex. tak, solceller, VVS)</li>
              <li>Geografiskt område</li>
              <li>Volym av leads</li>
              <li>Exklusivitet</li>
            </ul>
            <p className="text-lg mb-8">
              Vill du veta mer om våra priser? Fyll i formuläret nedan så kontaktar vi dig!
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Namn</FormLabel>
                      <FormControl>
                        <Input placeholder="Ditt namn" {...field} className="bg-forest border-mint/20" />
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
                        <Input placeholder="Ditt telefonnummer" {...field} className="bg-forest border-mint/20" />
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
                        <Input placeholder="din@epost.se" {...field} className="bg-forest border-mint/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Beskriv ditt behov</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Exempel: Jag söker leads inom solceller i Stockholm."
                          {...field}
                          className="bg-forest border-mint/20 min-h-[100px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-mint hover:bg-mint/90 text-forest font-medium">
                  Bli kontaktad
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Priser;