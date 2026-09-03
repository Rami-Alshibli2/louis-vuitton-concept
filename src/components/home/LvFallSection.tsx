import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    image: string;
    link?: string;
}

const LV_FALL_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Speedy 30 Bandoulière',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '2',
        name: 'LV Trainer Sneaker',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '3',
        name: 'Daily LV Beanie',
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '4',
        name: 'Double Face Reversible Damier Check Blouson',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    },
];

export const LvFallSection: React.FC = () => {
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
            {/* Centered Heading */}
            <div className="text-center mb-10 md:mb-14">
        <span className="text-[10px] md:text-xs font-light tracking-[0.25em] uppercase text-neutral-400 block mb-1">
          Men
        </span>
                <h2 className="text-base md:text-xl font-light tracking-widest uppercase text-neutral-900">
                    LV Fall
                </h2>
            </div>

            {/* Products Row: 2 columns on mobile, 4 columns on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {LV_FALL_PRODUCTS.map((product) => {
                    const isLiked = wishlist.includes(product.id);

                    return (
                        <a
                            key={product.id}
                            href={product.link || '#'}
                            className="group flex flex-col items-center cursor-pointer text-center"
                        >
                            {/* Product Image Box */}
                            <div className="relative w-full aspect-square bg-neutral-50/50 flex items-center justify-center p-4 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
                                    loading="lazy"
                                />

                                {/* Wishlist Heart Button */}
                                <button
                                    type="button"
                                    onClick={(e) => toggleWishlist(product.id, e)}
                                    className="absolute top-3 right-3 p-1.5 text-neutral-400 hover:text-black transition-colors cursor-pointer"
                                    aria-label="Add to wishlist"
                                >
                                    <Heart
                                        size={17}
                                        strokeWidth={1.2}
                                        className={`transition-colors ${
                                            isLiked ? 'fill-black text-black' : 'text-neutral-400 hover:text-neutral-700'
                                        }`}
                                    />
                                </button>
                            </div>

                            {/* Product Title */}
                            <span className="mt-4 text-[11px] md:text-xs font-light tracking-wide text-neutral-800 line-clamp-2 px-2 group-hover:underline underline-offset-4 transition-all">
                {product.name}
              </span>
                        </a>
                    );
                })}
            </div>

            {/* Pill Button at the Bottom */}
            <div className="mt-14 md:mt-16 flex justify-center">
                <a
                    href="#"
                    className="px-8 py-2.5 border border-neutral-300 rounded-full text-[11px] md:text-xs font-light tracking-widest uppercase text-neutral-800 hover:border-black hover:text-black transition-colors"
                >
                    Discover the Collection
                </a>
            </div>
        </section>
    );
};