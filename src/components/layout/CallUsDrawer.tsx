import React from 'react';
import { X, Mail, MessageCircle } from 'lucide-react';

interface CallUsDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CallUsDrawer: React.FC<CallUsDrawerProps> = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-500 ease-in-out ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
            {/* Dimmed Overlay */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-500"
            />

            {/* Slide-in Panel: 50% width on Desktop, full width on Mobile */}
            <div
                className={`absolute top-0 right-0 w-full md:w-1/2 h-full bg-white text-black shadow-2xl flex flex-col z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Top Header */}
                <div className="px-8 md:px-14 pt-8 pb-4 flex items-center justify-between">
          <span className="text-xs font-normal tracking-wider text-neutral-800">
            Call us
          </span>
                    <button
                        type="button"
                        onClick={onClose}
                        className="p-1 hover:opacity-60 transition-opacity cursor-pointer"
                        aria-label="Close"
                    >
                        <X size={18} strokeWidth={1} />
                    </button>
                </div>

                {/* Content Body */}
                <div className="flex-1 overflow-y-auto px-8 md:px-14 py-6 space-y-12">

                    {/* Main Direct Contact */}
                    <div className="space-y-4">
                        <div>
                            <a
                                href="tel:+18668848866"
                                className="text-sm font-normal tracking-wide hover:underline inline-block"
                            >
                                +1.866.VUITTON
                            </a>
                            <p className="text-[11px] text-neutral-400 font-light mt-1">
                                Our client advisors are available to assist you Monday through Sunday from 9am to 10pm.
                            </p>
                        </div>

                        {/* Messaging Options */}
                        <div className="pt-4 space-y-4 text-xs font-light text-neutral-800">
                            <button
                                type="button"
                                className="flex items-center gap-3 hover:text-neutral-500 transition-colors cursor-pointer w-full text-left"
                            >
                                <Mail size={15} strokeWidth={1.2} />
                                <span>Send an Email</span>
                            </button>

                            <button
                                type="button"
                                className="flex items-center gap-3 hover:text-neutral-500 transition-colors cursor-pointer w-full text-left"
                            >
                                <MessageCircle size={15} strokeWidth={1.2} />
                                <span>Apple Messages</span>
                            </button>

                            <button
                                type="button"
                                className="flex items-center gap-3 hover:text-neutral-500 transition-colors cursor-pointer w-full text-left"
                            >
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.2 5.51 3.16 7.37.16.15.26.37.26.6v2.24c0 .54.56.9 1.03.63l2.5-1.42c.16-.09.35-.12.54-.08.82.21 1.68.32 2.51.32 5.64 0 10-4.13 10-9.66C22 6.13 17.64 2 12 2zm1.09 13.06l-2.55-2.72-4.98 2.72c-.55.3-1.18-.32-.82-.82l5.37-7.61c.36-.51 1.14-.51 1.5 0l2.55 2.72 4.98-2.72c.55-.3 1.18.32.82.82l-5.37 7.61c-.36.51-1.14.51-1.5 0z"/>
                                </svg>
                                <span>Facebook Messenger</span>
                            </button>
                        </div>
                    </div>

                    {/* Quick Support Links */}
                    <div className="pt-8 border-t border-neutral-100 flex flex-col space-y-4 text-xs font-light tracking-wide text-neutral-700">
                        <a href="#" className="hover:text-black hover:underline underline-offset-4 transition-colors">
                            Contact Us
                        </a>
                        <a href="#" className="hover:text-black hover:underline underline-offset-4 transition-colors">
                            FAQ
                        </a>
                        <a href="#" className="hover:text-black hover:underline underline-offset-4 transition-colors">
                            Care Service
                        </a>
                        <a href="#" className="hover:text-black hover:underline underline-offset-4 transition-colors">
                            Find a Store
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};