<form
  name="partner-form"  // Detta fält måste vara korrekt och motsvara formulärets namn
  method="post"
  data-netlify="true"  // Netlify-formulärattribut som gör att Netlify kan hantera formuläret
  action="/success"    // Se till att denna URL är korrekt (kan vara en annan om du har en annan success-sida)
>
  <!-- Flytta form-name först och bot-field sist -->
  <input type="hidden" name="form-name" value="partner-form" />
  <input type="hidden" name="bot-field" />
  
  <!-- Formulärfält -->
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
