import React from 'react';

export const MenCollectionBanner: React.FC = () => {
    return (
        <section className="relative w-full h-[70vh] md:h-[90vh] bg-neutral-900 overflow-hidden group">
            {/* Background Image */}
            <img
                src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=2000&q=85"
                alt="Men Fall-Winter Collection"
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Subtle Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-16 px-6 text-center text-white">
        <span className="text-[10px] md:text-xs font-light tracking-[0.3em] uppercase mb-2">
          Men
        </span>

                <h2 className="text-xl md:text-3xl font-light tracking-wide uppercase mb-3 drop-shadow-sm">
                    Fall-Winter Collection
                </h2>

                <p className="text-xs md:text-sm font-light text-neutral-200 max-w-md tracking-wider mb-6">
                    A dialogue between heritage craftsmanship and contemporary winter elegance.
                </p>

                {/* Action Button */}
                <div className="flex items-center gap-4">
                    <a
                        href="#"
                        className="px-6 py-2.5 rounded-full border border-white text-white text-[11px] md:text-xs font-normal tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        Discover the Campaign
                    </a>
                </div>
            </div>
        </section>
    );
};