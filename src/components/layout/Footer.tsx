import React from 'react';
import { Globe } from 'lucide-react';

interface FooterProps {
    onHomeClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onHomeClick }) => {
    return (
        <footer className="w-full bg-white border-t border-neutral-200 text-[#1a1a1a] pt-12 pb-8 px-6 md:px-16 text-xs font-light">
            {/* Breadcrumb */}
            <div className="mb-12 text-neutral-600">
                <button
                    type="button"
                    onClick={onHomeClick}
                    className="underline underline-offset-4 cursor-pointer hover:text-black"
                >
                    Louis Vuitton
                </button>
                <span className="mx-2">-</span>
                <span>MyLV</span>
            </div>

            {/* Main 4 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="space-y-3">
                    <h4 className="uppercase font-medium tracking-wider mb-4 text-[11px]">Help</h4>
                    <p className="text-neutral-600">
                        You can <a href="#" className="underline underline-offset-2 hover:text-black">call</a> or <a href="#" className="underline underline-offset-2 hover:text-black">email us</a>.
                    </p>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">FAQ's</a></p>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">Product Care</a></p>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">Stores</a></p>
                </div>

                <div className="space-y-3">
                    <h4 className="uppercase font-medium tracking-wider mb-4 text-[11px]">Services</h4>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">Repairs</a></p>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">Personalization</a></p>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">Art of Gifting</a></p>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">Download our Apps</a></p>
                </div>

                <div className="space-y-3">
                    <h4 className="uppercase font-medium tracking-wider mb-4 text-[11px]">About Louis Vuitton</h4>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">Fashion Shows</a></p>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">Arts & Culture</a></p>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">La Maison</a></p>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">Sustainability</a></p>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">Latest News</a></p>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">Ethics and Compliance</a></p>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">Careers</a></p>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">Foundation Louis Vuitton</a></p>
                </div>

                <div className="space-y-4">
                    <h4 className="uppercase font-medium tracking-wider mb-4 text-[11px]">Email Sign-Up</h4>
                    <p className="text-neutral-600 leading-relaxed">
                        <a href="#" className="underline underline-offset-2 hover:text-black">Sign up</a> for Louis Vuitton emails and receive the latest news from the Maison, including exclusive online pre-launches and new collections.
                    </p>
                    <p><a href="#" className="hover:underline text-neutral-600 hover:text-black">Follow Us</a></p>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
                <div className="flex items-center gap-2 cursor-pointer hover:text-black">
                    <Globe size={14} strokeWidth={1.5} />
                    <span>International (English)</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="hover:underline">Sitemap</a>
                    <a href="#" className="hover:underline">Legal & privacy</a>
                    <a href="#" className="hover:underline">Cookies</a>
                </div>
            </div>

            {/* Bottom Logo */}
            <div className="text-center mt-12">
                <button
                    type="button"
                    onClick={onHomeClick}
                    className="text-base md:text-lg font-bold tracking-[0.25em] uppercase select-none text-black cursor-pointer hover:opacity-75 transition-opacity"
                >
                    LOUIS VUITTON
                </button>
            </div>
        </footer>
    );
};