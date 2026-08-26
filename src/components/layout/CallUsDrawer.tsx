import React from 'react';
import { X, Mail, MessageSquare, MessageCircle } from 'lucide-react';

interface CallUsDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CallUsDrawer: React.FC<CallUsDrawerProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
                onClick={onClose}
            />

            {/* Right Drawer */}
            <div className="relative w-full max-w-[480px] bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto px-10 py-8 text-[#1a1a1a]">
                <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-base font-normal tracking-wide">Call us</h2>
                        <button
                            type="button"
                            onClick={onClose}
                            className="p-1 hover:opacity-60 transition-opacity"
                            aria-label="Close"
                        >
                            <X size={18} strokeWidth={1.2} />
                        </button>
                    </div>

                    {/* Intro Text */}
                    <p className="text-xs text-neutral-600 leading-relaxed mb-8">
                        Wherever you are, Louis Vuitton Client Advisors will be delighted to assist you.
                    </p>

                    {/* Contact Channels */}
                    <div className="space-y-4 mb-8">
                        <a
                            href="mailto:support@louisvuitton.com"
                            className="flex items-center gap-3 text-xs tracking-wider hover:opacity-60 transition-opacity"
                        >
                            <Mail size={16} strokeWidth={1.5} />
                            <span>Send an Email</span>
                        </a>

                        <a
                            href="#"
                            className="flex items-center gap-3 text-xs tracking-wider hover:opacity-60 transition-opacity"
                        >
                            <MessageSquare size={16} strokeWidth={1.5} />
                            <span>Apple Messages</span>
                        </a>

                        <a
                            href="#"
                            className="flex items-center gap-3 text-xs tracking-wider hover:opacity-60 transition-opacity"
                        >
                            <MessageCircle size={16} strokeWidth={1.5} />
                            <span>Facebook Messenger</span>
                        </a>
                    </div>

                    <div className="w-full h-px bg-neutral-200 my-8" />

                    {/* Quick Support Links */}
                    <div className="space-y-4 text-xs tracking-wider text-neutral-800">
                        <a href="#" className="block hover:opacity-60 transition-opacity">Contact Us</a>
                        <a href="#" className="block hover:opacity-60 transition-opacity">FAQ</a>
                        <a href="#" className="block hover:opacity-60 transition-opacity">Care Service</a>
                        <a href="#" className="block hover:opacity-60 transition-opacity">Find a Store</a>
                    </div>
                </div>
            </div>
        </div>
    );
};