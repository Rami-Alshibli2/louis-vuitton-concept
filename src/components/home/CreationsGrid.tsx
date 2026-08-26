import React from 'react';

interface CreationItem {
    id: string;
    title: string;
    image: string;
    link?: string;
}

const CREATIONS: CreationItem[] = [
    {
        id: '1',
        title: "Women's Handbags",
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85',
    },
    {
        id: '2',
        title: "Women's Accessories",
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85',
    },
    {
        id: '3',
        title: "Women's Wallets and Small Leather Goods",
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=85',
    },
    {
        id: '4',
        title: "Beauty",
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1000&q=85',
    },
    {
        id: '5',
        title: "Men's Bags",
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85',
    },
    {
        id: '6',
        title: "Men's Wallets and Small Leather Goods",
        image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=85',
    },
    {
        id: '7',
        title: "Men's Accessories",
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85',
    },
    {
        id: '8',
        title: "Perfumes",
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85',
    }
];

export const CreationsGrid: React.FC = () => {
    return (
        <section className="w-full bg-white text-[#1a1a1a] pt-14 pb-20 px-3 md:px-5">
            {/* Centered Heading */}
            <div className="text-center mb-10">
                <h2 className="text-xs md:text-sm font-normal tracking-wide leading-relaxed text-neutral-900">
                    Explore a Selection of the Maison's <br />
                    Creations
                </h2>
            </div>

            {/* 4-column Grid matching exact edge-to-edge proportion */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 gap-y-10 md:gap-y-12 w-full">
                {CREATIONS.map((item) => (
                    <a
                        key={item.id}
                        href={item.link || '#'}
                        className="group flex flex-col items-center cursor-pointer"
                    >
                        {/* Square Full Aspect Ratio */}
                        <div className="w-full aspect-square bg-[#f2f2f2] overflow-hidden flex items-center justify-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>

                        {/* Subtitle Under Image */}
                        <span className="mt-3 text-[10px] md:text-[11px] font-light tracking-wide text-neutral-700 text-center group-hover:text-black transition-colors px-1">
              {item.title}
            </span>
                    </a>
                ))}
            </div>
        </section>
    );
};