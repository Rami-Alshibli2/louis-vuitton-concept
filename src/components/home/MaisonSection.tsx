import React from 'react';

interface MaisonCard {
    id: string;
    title: string;
    actionText: string;
    link?: string;
    image?: string;
    isTextCard?: boolean;
}

const MAISON_CARDS: MaisonCard[] = [
    {
        id: 'history',
        title: 'History of the House',
        actionText: 'Explore',
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
    },
    {
        id: 'shows',
        title: 'Fashion Shows',
        actionText: 'Discover',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    },
    {
        id: 'culture',
        title: 'Arts & Culture Program',
        actionText: 'The Program',
        isTextCard: true,
    },
];

export const MaisonSection: React.FC = () => {
    return (
        <section className="w-full bg-white text-black py-16 md:py-24 px-4 sm:px-8 md:px-12 max-w-[1780px] mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto px-4">
                <h2 className="text-sm md:text-lg font-light tracking-[0.2em] uppercase text-neutral-900 mb-2">
                    The Maison Louis Vuitton
                </h2>
                <p className="text-[11px] md:text-xs font-light text-neutral-400 tracking-wider leading-relaxed">
                    Discover Louis Vuitton's history from 1854 to the present day — an enduring spirit of travel, visionary artistic directors, and exceptional savoir-faire.
                </p>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {MAISON_CARDS.map((card) => {
                    return (
                        <a
                            key={card.id}
                            href={card.link || '#'}
                            className="group flex flex-col cursor-pointer"
                        >
                            {/* Visual Card Container */}
                            <div className="relative w-full aspect-[4/5] bg-[#f8f8f8] overflow-hidden flex flex-col justify-center items-center p-8">
                                {card.isTextCard ? (
                                    <div className="flex flex-col items-center justify-center text-center px-4">
                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-900 leading-[1.05]">
                                            LOUIS<br />
                                            VUITTON<br />
                                            ARTS&<br />
                                            CULTURE
                                        </h3>
                                        <span className="mt-4 text-xs font-semibold tracking-[0.25em] uppercase text-neutral-800">
                      PROGRAM
                    </span>
                                    </div>
                                ) : (
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                )}
                            </div>

                            {/* Card Footer Info */}
                            <div className="mt-4 text-center">
                <span className="text-xs font-light tracking-wider text-neutral-800 block">
                  {card.title}
                </span>
                                <span className="mt-1 text-[11px] font-light text-neutral-400 underline underline-offset-4 group-hover:text-black transition-colors block">

                  {card.actionText}
                </span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};