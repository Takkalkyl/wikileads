const Stats = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">Hög</p>
            <p className="text-white/80">Kvalitet på leads</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">48h</p>
            <p className="text-white/80">Leadleverans</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">1000+</p>
            <p className="text-white/80">Aktiva bygglovsansökningar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;