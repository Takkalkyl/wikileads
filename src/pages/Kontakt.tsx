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

  const onSubmit = async (values: any) => {
    console.log("Form submitted:", values);
    
    try {
      const formData = new FormData();
      formData.append("form-name", "contact");
      Object.keys(values).forEach(key => {
        formData.append(key, values[key]);
      });

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        console.log("Form successfully submitted");
        toast({
          title: "Tack för ditt meddelande!",
          description: "Vi återkommer till dig inom kort.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Ett fel uppstod",
        description: "Försök igen senare eller kontakta oss via telefon.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-forest">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Kontakta oss</h1>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <input name="bot-field" />
            </div>

            <div>
              <label className="text-white">Namn</label>
              <Input
                {...form.register("name")}
                placeholder="Ditt namn"
                className="bg-forest-light border-mint/20"
                required
                name="name"
              />
            </div>

            <div>
              <label className="text-white">E-post</label>
              <Input
                {...form.register("email")}
                placeholder="din@epost.se"
                className="bg-forest-light border-mint/20"
                required
                type="email"
                name="email"
              />
            </div>

            <div>
              <label className="text-white">Meddelande</label>
              <Textarea
                {...form.register("message")}
                placeholder="Skriv ditt meddelande här..."
                className="bg-forest-light border-mint/20 min-h-[150px]"
                required
                name="message"
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