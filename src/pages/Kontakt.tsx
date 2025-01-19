import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Kontakt = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values) => {
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
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
            data-netlify="true" // Lägg till denna attribut för Netlify
            name="contact" // Lägg till ett namn för att identifiera formuläret på Netlify
            method="POST" // Detta specificerar att formuläret ska skickas med POST-metod
          >
            {/* Hides this field to prevent bot submissions */}
            <input type="hidden" name="form-name" value="contact" /> 
            <input type="hidden" name="bot-field" /> {/* För att förhindra bots */}

            <div>
              <label className="text-white">Namn</label>
              <Input
                {...form.register("name")}
                placeholder="Ditt namn"
                className="bg-forest-light border-mint/20"
                required
              />
            </div>

            <div>
              <label className="text-white">E-post</label>
              <Input
                {...form.register("email")}
                placeholder="din@epost.se"
                className="bg-forest-light border-mint/20"
                required
              />
            </div>

            <div>
              <label className="text-white">Meddelande</label>
              <Textarea
                {...form.register("message")}
                placeholder="Skriv ditt meddelande här..."
                className="bg-forest-light border-mint/20 min-h-[150px]"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-mint hover:bg-mint/90 text-forest font-medium">
              Skicka meddelande
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
