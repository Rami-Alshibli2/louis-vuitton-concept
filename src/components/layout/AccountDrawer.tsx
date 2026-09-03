import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

interface AccountDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AccountDrawer: React.FC<AccountDrawerProps> = ({ isOpen, onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

            {/* Slide-in Panel: Exactly 50% width on Desktop, full width on Mobile */}
            <div
                className={`absolute top-0 right-0 w-full md:w-1/2 h-full bg-white text-black shadow-2xl flex flex-col z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Top Header */}
                <div className="px-8 md:px-14 pt-8 pb-4 flex items-center justify-between">
          <span className="text-xs font-normal tracking-wider text-neutral-800">
            Identification
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

                {/* Scrollable Form Body */}
                <div className="flex-1 overflow-y-auto px-8 md:px-14 py-6 space-y-10">

                    {/* Section: I already have an account */}
                    <div className="space-y-6">
                        <h3 className="text-xs tracking-wider text-neutral-700 font-light">
                            I already have an account
                        </h3>

                        {/* Google Sign-in Pill Button */}
                        <button
                            type="button"
                            className="w-full py-3 px-4 border border-neutral-300 rounded-full flex items-center justify-center gap-3 text-xs tracking-wider text-neutral-700 hover:border-black transition-colors cursor-pointer"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.19 0 10.04 0 12s.45 3.81 1.25 5.42l4.03-3.15z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                                />
                            </svg>
                            <span>Sign in with Google</span>
                        </button>

                        {/* Divider */}
                        <div className="relative flex items-center justify-center my-4">
                            <div className="w-full border-t border-neutral-200" />
                            <span className="absolute bg-white px-3 text-[11px] text-neutral-400 font-light">
                Or
              </span>
                        </div>

                        {/* Inputs */}
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label className="text-[11px] text-neutral-500 font-light">Email *</label>
                                    <span className="text-[10px] text-neutral-400 font-light">* Mandatory fields</span>
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full py-2.5 px-3 border border-neutral-300 text-xs font-light outline-none focus:border-black transition-colors rounded-none"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] text-neutral-500 font-light mb-1">
                                    Password *
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full py-2.5 pl-3 pr-10 border border-neutral-300 text-xs font-light outline-none focus:border-black transition-colors rounded-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                                    </button>
                                </div>
                            </div>

                            <div className="pt-1">
                                <a href="#" className="text-[11px] text-neutral-500 underline underline-offset-4 hover:text-black">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        {/* Sign in button (Solid Pill) */}
                        <button
                            type="button"
                            className="w-full py-3.5 bg-black text-white text-xs font-normal tracking-widest uppercase rounded-full hover:bg-neutral-800 transition-colors cursor-pointer mt-2"
                        >
                            Sign in
                        </button>
                    </div>

                    {/* Section: I don't have an account */}
                    <div className="pt-10 border-t border-neutral-100 space-y-5">
                        <h3 className="text-xs tracking-wider text-neutral-700 font-light">
                            I don't have an account
                        </h3>
                        <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                            Enjoy tailored services, manage your orders, track your deliveries, and save items to your wishlist.
                        </p>

                        {/* Create Account Pill Button */}
                        <button
                            type="button"
                            className="w-full py-3.5 border border-black text-black text-xs font-normal tracking-widest uppercase rounded-full hover:bg-neutral-50 transition-colors cursor-pointer"
                        >
                            Create My LV account
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};