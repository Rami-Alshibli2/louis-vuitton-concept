import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

interface WishlistProps {
    onBackToHome?: () => void;
}

export const Wishlist: React.FC<WishlistProps> = ({ onBackToHome }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-white text-[#1a1a1a]">
            {/* Light Navbar */}
            <div className="relative z-40 bg-white border-b border-neutral-100">
                <Navbar darkTheme={false} onLogoClick={onBackToHome} />
            </div>

            {/* Empty State */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 md:py-32">
                <h1 className="text-xl md:text-2xl font-light tracking-wide mb-3">
                    Your wishlist is empty!
                </h1>
                <p className="text-xs md:text-sm text-neutral-500 font-light mb-8">
                    Add your favorite items and share them.
                </p>
                <button
                    type="button"
                    onClick={onBackToHome}
                    className="bg-black text-white text-xs font-light tracking-wider px-8 py-3 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                    Discover Products
                </button>
            </main>

            {/* Footer with return action */}
            <Footer onHomeClick={onBackToHome} />
        </div>
    );
};