import React from 'react';
import { X } from 'lucide-react';

interface MenuDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-300 ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
            {/* Dimmed Backdrop */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity"
            />

            {/* Slide-in Panel from Left */}
            <div
                className={`relative w-full max-w-[420px] h-full bg-white text-black shadow-2xl flex flex-col p-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                    <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">Menu</span>
                    <button
                        type="button"
                        onClick={onClose}
                        className="p-1 hover:opacity-60 transition-opacity cursor-pointer"
                        aria-label="Close"
                    >
                        <X size={20} strokeWidth={1.2} />
                    </button>
                </div>

                <nav className="mt-8 flex flex-col gap-6 text-sm tracking-widest uppercase font-light">
                    <a href="#" className="hover:text-neutral-500 transition-colors">New</a>
                    <a href="#" className="hover:text-neutral-500 transition-colors">Bags</a>
                    <a href="#" className="hover:text-neutral-500 transition-colors">Women</a>
                    <a href="#" className="hover:text-neutral-500 transition-colors">Men</a>
                    <a href="#" className="hover:text-neutral-500 transition-colors">Jewelry</a>
                    <a href="#" className="hover:text-neutral-500 transition-colors">Perfumes</a>
                </nav>
            </div>
        </div>
    );
};