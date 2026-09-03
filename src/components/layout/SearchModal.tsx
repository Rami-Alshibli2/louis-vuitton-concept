import React, { useState } from 'react';
import { X, Search, Heart } from 'lucide-react';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface ProductPreview {
    id: string;
    name: string;
    category: string;
    image: string;
}

const TRENDING_SEARCHES = ['Wallet', 'Speedy', 'Perfume', 'Neverfull', 'Sunglasses'];

const BACK_TO_SCHOOL_PRODUCTS: ProductPreview[] = [
    {
        id: 's1',
        name: 'Speedy Bandoulière 25',
        category: 'Handbags',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 's2',
        name: 'Tailored Tapered Pants',
        category: 'Ready to Wear',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 's3',
        name: 'LV Vendome Loafer',
        category: 'Shoes',
        image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 's4',
        name: 'LV Rouge Matte Lipstick',
        category: 'Beauty',
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 's5',
        name: 'Large Ring Agenda Cover',
        category: 'Leather Goods',
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80',
    },
];

const FALL_WINTER_PRODUCTS: ProductPreview[] = [
    {
        id: 'fw1',
        name: 'Loop Monogram Handbag',
        category: 'Handbags',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 'fw2',
        name: 'Pocket Organizer',
        category: 'Wallets',
        image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 'fw3',
        name: 'LV Moon Sunglasses',
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 'fw4',
        name: 'Double-Breasted Coat',
        category: 'Outerwear',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 'fw5',
        name: 'Straight Denim Pants',
        category: 'Ready to Wear',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 'fw6',
        name: 'Silhouette Ankle Pump',
        category: 'Shoes',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80',
    },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div
            className={`fixed inset-0 z-50 bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-6 pointer-events-none'
            }`}
        >
            <div className="h-full overflow-y-auto flex flex-col">
                {/* Top Header */}
                <div className="relative px-6 py-5 flex items-center justify-between border-b border-neutral-100">
                    <div className="w-8 hidden md:block" />

                    <span className="text-sm md:text-base font-bold tracking-[0.25em] uppercase mx-auto select-none">
            LOUIS VUITTON
          </span>

                    <button
                        type="button"
                        onClick={onClose}
                        className="p-1 hover:opacity-60 transition-opacity cursor-pointer"
                        aria-label="Close search"
                    >
                        <X size={20} strokeWidth={1.2} />
                    </button>
                </div>

                {/* Search Input Section */}
                <div className="w-full max-w-4xl mx-auto px-6 pt-8 pb-6 flex flex-col items-center">
                    <div className="relative w-full">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by keyword, style, collection..."
                            className="w-full py-3.5 pl-6 pr-12 rounded-full border border-neutral-300 text-sm md:text-base font-light tracking-wide outline-none focus:border-black transition-colors"
                            autoFocus={isOpen}
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black transition-colors"
                        >
                            <Search size={18} strokeWidth={1.5} />
                        </button>
                    </div>

                    {/* Trending Searches Tags */}
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] md:text-xs text-neutral-500 font-light">
            <span className="uppercase tracking-widest text-[10px] text-neutral-400 font-medium">
              Trending Searches:
            </span>
                        {TRENDING_SEARCHES.map((tag) => (
                            <button
                                key={tag}
                                type="button"
                                onClick={() => setSearchTerm(tag)}
                                className="underline decoration-neutral-300 underline-offset-4 hover:text-black hover:decoration-black transition-colors"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Curated Product Collections */}
                <div className="flex-1 w-full max-w-[1720px] mx-auto px-4 md:px-10 pb-16 space-y-12">
                    {/* Section 1: Back to school */}
                    <div>
                        <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-4 pl-2">
                            Back to school
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            {BACK_TO_SCHOOL_PRODUCTS.map((item) => (
                                <div key={item.id} className="group flex flex-col">
                                    <div className="relative aspect-square bg-[#f8f8f8] flex items-center justify-center overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <button
                                            type="button"
                                            className="absolute top-2.5 right-2.5 p-1.5 rounded-full text-neutral-400 hover:text-black transition-colors"
                                            aria-label="Wishlist"
                                        >
                                            <Heart size={15} strokeWidth={1.2} />
                                        </button>
                                    </div>
                                    <span className="mt-2.5 text-[11px] font-light text-neutral-800 line-clamp-1">
                    {item.name}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 2: Fall-Winter Collection */}
                    <div>
                        <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-4 pl-2">
                            Fall-Winter Collection
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                            {FALL_WINTER_PRODUCTS.map((item) => (
                                <div key={item.id} className="group flex flex-col">
                                    <div className="relative aspect-square bg-[#f8f8f8] flex items-center justify-center overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <button
                                            type="button"
                                            className="absolute top-2.5 right-2.5 p-1.5 rounded-full text-neutral-400 hover:text-black transition-colors"
                                            aria-label="Wishlist"
                                        >
                                            <Heart size={15} strokeWidth={1.2} />
                                        </button>
                                    </div>
                                    <span className="mt-2.5 text-[11px] font-light text-neutral-800 line-clamp-1">
                    {item.name}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};