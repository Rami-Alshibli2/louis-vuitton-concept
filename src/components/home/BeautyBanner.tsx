import React from 'react';

export const BeautyBanner: React.FC = () => {
    return (
        <section className="relative w-full h-[70vh] md:h-[90vh] bg-[#9e1b20] overflow-hidden group">
            {/* Editorial Portrait Image */}
            <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=85"
                alt="Louis Vuitton Beauty Collection"
                className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
            />

            {/* Subtle Gradient for Luxury Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Text & Action CTA */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-16 px-6 text-center text-white">
        <span className="text-[10px] md:text-xs font-light tracking-[0.3em] uppercase mb-2">
          Beauty
        </span>

                <h2 className="text-xl md:text-3xl font-light tracking-wide uppercase mb-3 drop-shadow-sm">
                    A Bold Expression
                </h2>

                <p className="text-xs md:text-sm font-light text-neutral-200 max-w-md tracking-wider mb-6">
                    Discover the new high-pigment matte shades infused with timeless radiance.
                </p>

                {/* Pill Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#"
                        className="px-7 py-2.5 rounded-full border border-white text-white text-[11px] md:text-xs font-normal tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        Discover the Lipstick
                    </a>
                    <a
                        href="#"
                        className="px-7 py-2.5 rounded-full border border-white text-white text-[11px] md:text-xs font-normal tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        Explore Beauty
                    </a>
                </div>
            </div>
        </section>
    );
};