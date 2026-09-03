import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface BeautyProduct {
    id: string;
    name: string;
    image: string;
}

const COLLAB_PRODUCTS: BeautyProduct[] = [
    {
        id: 'b1',
        name: 'LV Rouge - Satin Lipstick - 715',
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'b2',
        name: 'LV Ombres - Eyeshadow Palette - 715',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'b3',
        name: 'LV Rouge - Satin Lipstick - 724',
        image: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'b4',
        name: 'LV Ombres - Eyeshadow Palette - 724',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    },
];

export const BeautyCollaborationSection: React.FC = () => {
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
            {/* Headings */}
            <div className="text-center mb-12 md:mb-16">
        <span className="text-[10px] md:text-xs font-light tracking-[0.25em] uppercase text-neutral-400 block mb-2">
          Beauty
        </span>
                <h2 className="text-sm md:text-lg font-light tracking-wide uppercase text-neutral-900 leading-relaxed max-w-xl mx-auto">
                    Dame Pat McGrath x Nicolas Ghesquière
                </h2>
            </div>

            {/* Product Grid (4 Columns on Desktop, 2 on Mobile) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {COLLAB_PRODUCTS.map((product) => {
                    const isLiked = wishlist.includes(product.id);

                    return (
                        <div
                            key={product.id}
                            className="group flex flex-col items-center cursor-pointer text-center"
                        >
                            {/* Product Visual Box */}
                            <div className="relative w-full aspect-square bg-[#f6f6f6] flex items-center justify-center p-6 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
                                    loading="lazy"
                                />

                                {/* Wishlist Heart */}
                                <button
                                    type="button"
                                    onClick={(e) => toggleWishlist(product.id, e)}
                                    className="absolute top-3 right-3 p-1.5 text-neutral-400 hover:text-black transition-colors cursor-pointer"
                                    aria-label="Save to wishlist"
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
                {product.name}
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
                    Discover the Collaboration
                </a>
            </div>
        </section>
    );
};