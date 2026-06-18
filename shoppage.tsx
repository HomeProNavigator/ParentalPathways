const ShopPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="font-serif text-7xl tracking-tight mb-12">The Guides</h1>
      <p className="text-2xl text-[#444] max-w-md mb-16">Each one is written with care and clarity — so you can focus on what matters most.</p>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="border-l-4 border-[#667A6D] pl-8">
          <h3 className="font-serif text-4xl">Your Hospital Bag, Actually</h3>
          <p className="mt-4 text-lg">What actually matters, what hospitals already provide, and how to pack it without the panic.</p>
          <a href="https://www.etsy.com/shop/ParentalPathway" target="_blank" className="mt-8 inline-block bg-[#C97A63] text-white px-8 py-4 rounded">Buy on Etsy</a>
        </div>
        <div className="border-l-4 border-[#667A6D] pl-8">
          <h3 className="font-serif text-4xl">The Fourth Trimester Guide</h3>
          <p className="mt-4 text-lg">What the first twelve weeks are actually like — and what to do with them.</p>
          <a href="https://www.etsy.com/shop/ParentalPathway" target="_blank" className="mt-8 inline-block bg-[#C97A63] text-white px-8 py-4 rounded">Buy on Etsy</a>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
