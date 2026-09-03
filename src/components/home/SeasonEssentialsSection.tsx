import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface EssentialProduct {
    id: string;
    name: string;
    image: string;
}

const SEASON_ESSENTIALS: EssentialProduct[] = [
    {
        id: 'e1',
        name: 'Wool-Cashmere Half-Zip Pullover',
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'e2',
        name: 'Boarding Messenger',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'e3',
        name: 'Monogram Stellar Scarf',
        image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'e4',
        name: 'LV Oxford Loafer',
        image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=800&q=80',
    },
];

export const SeasonEssentialsSection: React.FC = () => {
    const [wishlist, setWishlist] = useState<string[]>([]);

    const toggleWishlist = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setWishlist((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <section className="w-full bg-white text-black py-16 md:py-24 px-4 sm:px-8 md:px-12 max-w-[1780px] mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
        <span className="text-[10px] md:text-xs font-light tracking-[0.25em] uppercase text-neutral-400 block mb-2">
          Men
        </span>
                <h2 className="text-sm md:text-lg font-light tracking-wide uppercase text-neutral-900">
                    Essentials for the Season Ahead
                </h2>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {SEASON_ESSENTIALS.map((item) => {
                    const isLiked = wishlist.includes(item.id);

                    return (
                        <div
                            key={item.id}
                            className="group flex flex-col items-center cursor-pointer text-center"
                        >
                            {/* Product Visual Container */}
                            <div className="relative w-full aspect-square bg-[#f6f6f6] flex items-center justify-center p-6 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
                                    loading="lazy"
                                />

                                {/* Wishlist Icon */}
                                <button
                                    type="button"
                                    onClick={(e) => toggleWishlist(item.id, e)}
                                    className="absolute top-3 right-3 p-1.5 text-neutral-400 hover:text-black transition-colors cursor-pointer"
                                    aria-label="Save item"
                                >
                                    <Heart
                                        size={16}
                                        strokeWidth={1.2}
                                        className={`transition-colors ${
                                            isLiked ? 'fill-black text-black' : 'text-neutral-400 hover:text-neutral-700'
                                        }`}
                                    />
                                </button>
                            </div>

                            {/* Title */}
                            <span className="mt-4 text-[10px] md:text-[11px] font-light tracking-wide text-neutral-800 line-clamp-1 group-hover:underline underline-offset-4 transition-all">
                {item.name}
              </span>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Button */}
            <div className="mt-14 md:mt-16 flex justify-center">
                <a
                    href="#"
                    className="px-8 py-2.5 border border-neutral-300 rounded-full text-[11px] md:text-xs font-light tracking-widest uppercase text-neutral-800 hover:border-black hover:text-black transition-colors"
                >
                    Discover the Selection
                </a>
            </div>
        </section>
    );
};