import React, { useState } from 'react';
import { Menu, Search, Heart, User } from 'lucide-react';
import { MenuDrawer } from './MenuDrawer';
import { SearchModal } from './SearchModal';
import { CallUsDrawer } from './CallUsDrawer';
import { AccountDrawer } from './AccountDrawer';

interface NavbarProps {
    darkTheme?: boolean;
    onWishlistClick?: () => void;
    onLogoClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
                                                  darkTheme = true,
                                                  onWishlistClick,
                                                  onLogoClick
                                              }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCallUsOpen, setIsCallUsOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);

    return (
        <>
            <header
                className={`w-full z-40 transition-all duration-300 ${
                    darkTheme
                        ? 'bg-white md:bg-transparent md:fixed md:top-0 md:left-0 text-black md:text-white md:hover:bg-white md:hover:text-black border-b border-neutral-100 md:border-b-0'
                        : 'sticky top-0 bg-white text-black border-b border-neutral-100'
                }`}
            >
                <div className="px-4 py-3 md:px-10 md:py-4">
                    <div className="relative flex items-center justify-between w-full h-8">

                        {/* Left Side: Hamburger on Mobile / Menu + Search on Desktop */}
                        <div className="flex items-center gap-6 text-xs tracking-widest uppercase">
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(true)}
                                className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer"
                                aria-label="Menu"
                            >
                                <Menu size={18} strokeWidth={1.2} />
                                <span className="hidden md:inline">Menu</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setIsSearchOpen(true)}
                                className="hidden md:flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer"
                                aria-label="Search"
                            >
                                <Search size={16} strokeWidth={1.5} />
                                <span>Search</span>
                            </button>
                        </div>

                        {/* Center Logo: LV on Mobile / LOUIS VUITTON on Desktop */}
                        <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-auto">
                            <button
                                type="button"
                                onClick={onLogoClick}
                                className="flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                            >
                                {/* Mobile Monogram Logo */}
                                <span className="md:hidden text-2xl font-serif font-black tracking-tighter select-none">
                  LV
                </span>
                                {/* Desktop Full Text Logo */}
                                <span className="hidden md:inline text-base lg:text-lg font-bold tracking-[0.25em] uppercase select-none">
                  LOUIS VUITTON
                </span>
                            </button>
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-4 md:gap-6 text-xs tracking-widest uppercase">
                            <button
                                type="button"
                                onClick={() => setIsCallUsOpen(true)}
                                className="hidden md:inline hover:opacity-70 transition-opacity font-light cursor-pointer"
                            >
                                Call Us
                            </button>

                            <button
                                type="button"
                                onClick={onWishlistClick}
                                className="hidden md:inline hover:opacity-70 transition-opacity cursor-pointer"
                                aria-label="Wishlist"
                            >
                                <Heart size={16} strokeWidth={1.5} />
                            </button>

                            <button
                                type="button"
                                onClick={() => setIsAccountOpen(true)}
                                className="hover:opacity-70 transition-opacity cursor-pointer"
                                aria-label="Account"
                            >
                                <User size={18} strokeWidth={1.2} />
                            </button>
                        </div>

                    </div>

                    {/* Mobile Search Bar Directly Under Header */}
                    <div className="mt-2.5 md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsSearchOpen(true)}
                            className="w-full py-2 px-4 rounded-full border border-neutral-200 text-left text-xs text-neutral-400 font-light flex items-center gap-2"
                        >
                            <span>Search for a store</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Drawers and Modals */}
            <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <CallUsDrawer isOpen={isCallUsOpen} onClose={() => setIsCallUsOpen(false)} />
            <AccountDrawer isOpen={isAccountOpen} onClose={() => setIsAccountOpen(false)} />
        </>
    );
};