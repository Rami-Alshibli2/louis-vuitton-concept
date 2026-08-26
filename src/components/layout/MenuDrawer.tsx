import React, { useState } from 'react';
import { X } from 'lucide-react';

interface MenuDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
    const [highContrast, setHighContrast] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex">
            {/* Backdrop overlay */}
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
                onClick={onClose}
            />

            {/* Drawer Content */}
            <div className="relative w-full max-w-[420px] bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto px-8 py-6 text-[#1a1a1a]">

                {/* Top: Close Button */}
                <div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex items-center gap-2 text-xs tracking-widest uppercase hover:opacity-70 transition-opacity mb-8"
                    >
                        <X size={16} strokeWidth={1.5} />
                        <span>Close</span>
                    </button>

                    {/* Main Primary Links */}
                    <div className="space-y-4 text-lg font-light tracking-wide mb-8">
                        <a href="#" className="block hover:opacity-60 transition-opacity">Women</a>
                        <a href="#" className="block hover:opacity-60 transition-opacity">Men</a>
                    </div>

                    {/* Categories Links */}
                    <div className="space-y-3.5 text-[15px] font-light tracking-wide text-neutral-800 mb-8">
                        <a href="#" className="block hover:opacity-60 transition-opacity">Monogram Anniversary</a>
                        <a href="#" className="block hover:opacity-60 transition-opacity">Gifts and Personalization</a>
                        <a href="#" className="block hover:opacity-60 transition-opacity">Bags and Small Leather Goods</a>
                        <a href="#" className="block hover:opacity-60 transition-opacity">Perfumes and Beauty</a>
                        <a href="#" className="block hover:opacity-60 transition-opacity">Jewelry</a>
                        <a href="#" className="block hover:opacity-60 transition-opacity">Watches</a>
                        <a href="#" className="block hover:opacity-60 transition-opacity">Trunks, Travel and Home</a>
                    </div>

                    {/* Brand & Services */}
                    <div className="space-y-3.5 text-[15px] font-light tracking-wide text-neutral-800 mb-8">
                        <a href="#" className="block hover:opacity-60 transition-opacity">Services</a>
                        <a href="#" className="block hover:opacity-60 transition-opacity">The Maison Louis Vuitton</a>
                    </div>

                    {/* Secondary Links */}
                    <div className="space-y-3 text-xs tracking-wider text-neutral-600">
                        <a href="#" className="block hover:opacity-80 transition-opacity">Find a Store</a>
                        <a href="#" className="block hover:opacity-80 transition-opacity">International (English)</a>
                        <a href="#" className="block hover:opacity-80 transition-opacity">Sustainability</a>
                    </div>
                </div>

                {/* Bottom: Accessibility Switch */}
                <div className="pt-8 mt-8 border-t border-neutral-100 flex items-center justify-between text-xs tracking-wider text-neutral-700">
                    <span>Accessibility: Enhanced contrast</span>
                    <button
                        type="button"
                        role="switch"
                        aria-checked={highContrast}
                        onClick={() => setHighContrast(!highContrast)}
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                            highContrast ? 'bg-black' : 'bg-neutral-300'
                        }`}
                    >
                        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                            highContrast ? 'translate-x-5' : 'translate-x-0'
                        }`} />
                    </button>
                </div>

            </div>
        </div>
    );
};