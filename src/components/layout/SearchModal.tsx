import React, { useEffect, useRef } from 'react';
import { X, Sparkles } from 'lucide-react';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // التركيز التلقائي على حقل الإدخال عند فتح النافذة
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-white text-[#1a1a1a] flex flex-col justify-between p-6 md:p-10 animate-in fade-in duration-200">

            {/* Top Bar: Header & Close Button */}
            <div className="relative w-full flex items-center justify-between">
                <div className="w-6" /> {/* عنصر للموازنة في اليسار */}

                {/* Brand Logo in Center */}
                <div className="text-center">
          <span className="text-base md:text-lg font-bold tracking-[0.25em] uppercase select-none">
            LOUIS VUITTON
          </span>
                </div>

                {/* Close Button on Top Right */}
                <button
                    type="button"
                    onClick={onClose}
                    className="p-1 hover:opacity-60 transition-opacity"
                    aria-label="Close search"
                >
                    <X size={20} strokeWidth={1.2} />
                </button>
            </div>

            {/* Center Search Input & Monogram Symbol */}
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center my-auto px-4">
                {/* Rounded Input Field */}
                <div className="w-full relative mb-24">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search for a product or store"
                        className="w-full py-3.5 px-6 rounded-full border border-neutral-300 focus:border-black outline-none text-sm tracking-wider text-neutral-800 placeholder:text-neutral-400 font-light transition-colors"
                    />
                </div>

                {/* Centered LV Monogram Flower Icon */}
                <div className="opacity-40 flex items-center justify-center">
                    <Sparkles size={26} strokeWidth={1} />
                </div>
            </div>

            {/* Bottom Spacer for perfect centering */}
            <div className="h-6" />
        </div>
    );
};