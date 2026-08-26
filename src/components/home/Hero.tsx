import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-[68vh] md:h-[92vh] overflow-hidden">
            {/* Background Image with subtle gradient overlays */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=85&w=2000"
                    alt="Louis Vuitton Campaign"
                    className="w-full h-full object-cover object-center"
                />
                {/* Top gradient for navbar readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
            </div>

            {/* Hero Content (Centered at the Bottom) */}
            <div className="relative z-10 h-full flex flex-col justify-end items-center text-center text-white pb-14 md:pb-16 px-4">
        <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-neutral-300 font-light mb-2">
          Women
        </span>

                <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-normal tracking-wide text-white mb-4">
                    App Prelaunch: Back to School
                </h1>

                <a
                    href="#preorder"
                    className="text-xs md:text-sm tracking-widest underline underline-offset-8 hover:text-neutral-300 transition-colors uppercase"
                >
                    Preorder the Collection
                </a>
            </div>
        </section>
    );
};