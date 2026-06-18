import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [showToolkitModal, setShowToolkitModal] = useState(false);

  return (
    <div className="bg-[#FCFAF7]">
      {/* HERO */}
      <section className="min-h-screen flex items-center bg-[#1F1F1F] text-white relative">
        <div className="max-w-4xl mx-auto px-6 pt-20">
          <h1 className="font-serif text-[5.5rem] md:text-[7rem] leading-none tracking-[-3px] mb-8">
            Parenting Doesn’t Come<br />With Instructions.
          </h1>
          <p className="text-3xl max-w-lg text-white/80 mb-12">But thoughtful guidance can help you feel more grounded in the most important role of your life.</p>
          <div className="flex gap-6">
            <a href="https://www.etsy.com/shop/ParentalPathway" target="_blank" className="bg-[#C97A63] hover:bg-[#A46B5D] text-white px-12 py-5 text-xl font-medium rounded">Explore the Guides</a>
            <button onClick={() => setShowToolkitModal(true)} className="border border-white/70 hover:bg-white hover:text-black px-12 py-5 text-xl font-medium rounded">Join Our Circle</button>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="max-w-2xl mx-auto px-6 py-28 text-center">
        <h2 className="font-serif text-6xl leading-none tracking-tight mb-10">We’ve Already Done The Work</h2>
        <p className="text-2xl text-[#444]">The internet is full of opinions. We offer clarity. Every guide is written with care, research, and honesty so you can focus on what matters most.</p>
      </section>

      {/* EDITORIAL FEATURE */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-5 gap-16 items-center">
        <div className="md:col-span-3">
          <img src="https://picsum.photos/id/1015/1200/1400" alt="Newborn moment" className="w-full rounded" />
        </div>
        <div className="md:col-span-2">
          <h3 className="font-serif text-6xl tracking-tight leading-none mb-8">The First Twelve Weeks Are Not What You Expect</h3>
          <p className="text-xl text-[#444]">Our Fourth Trimester Guide helps you navigate the reality of early parenthood with calm and understanding.</p>
          <a href="https://www.etsy.com/shop/ParentalPathway" target="_blank" className="mt-8 inline-block text-[#C97A63] text-xl">Read the Guide →</a>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-[#F7F3EC] py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-4xl leading-tight italic">“These guides gave me permission to feel what I was feeling — and the tools to move through it with grace.”</p>
          <p className="mt-12 text-lg">— Elena R., mother of a 7-month-old</p>
        </div>
      </section>

      {/* INVITATION */}
      <section className="max-w-xl mx-auto px-6 py-28 text-center">
        <h2 className="font-serif text-6xl mb-8">Stay Close to What Matters</h2>
        <p className="text-2xl text-[#444] mb-12">Join thousands of parents who receive quiet, thoughtful reflections on raising children.</p>
        <button onClick={() => setShowToolkitModal(true)} className="bg-[#C97A63] text-white px-16 py-6 text-2xl rounded">Join the Circle</button>
      </section>
    </div>
  );
};

export default HomePage;
