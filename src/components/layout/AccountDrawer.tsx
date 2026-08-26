import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

interface AccountDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AccountDrawer: React.FC<AccountDrawerProps> = ({ isOpen, onClose }) => {
    const [showPassword, setShowPassword] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="relative w-full max-w-[500px] bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto px-8 md:px-12 py-8 text-[#1a1a1a]">
                <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-base font-normal tracking-wide">Identification</h2>
                        <button
                            type="button"
                            onClick={onClose}
                            className="p-1 hover:opacity-60 transition-opacity"
                            aria-label="Close"
                        >
                            <X size={18} strokeWidth={1.2} />
                        </button>
                    </div>

                    {/* Section 1: Already have an account */}
                    <div className="mb-10">
                        <h3 className="text-sm font-normal mb-4">I already have an account</h3>

                        {/* Google Sign In Button */}
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 py-3 border border-neutral-300 rounded-full text-xs tracking-wider hover:bg-neutral-50 transition-colors mb-6"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                            </svg>
                            <span>Sign in with Google</span>
                        </button>

                        <div className="relative text-center mb-6">
                            <span className="text-[11px] text-neutral-400 bg-white px-2 uppercase tracking-widest">Or</span>
                            <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-neutral-200" />
                        </div>

                        {/* Login Form */}
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                            <div className="flex justify-between items-center text-[10px] text-neutral-500">
                                <span>Login*</span>
                                <span className="italic">* Mandatory Fields</span>
                            </div>
                            <input
                                type="text"
                                required
                                className="w-full border border-neutral-300 px-3 py-2.5 text-xs outline-none focus:border-black transition-colors"
                            />

                            <div className="text-[10px] text-neutral-500">
                                <span>Password*</span>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    className="w-full border border-neutral-300 px-3 py-2.5 text-xs outline-none focus:border-black transition-colors pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
                                >
                                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                                </button>
                            </div>

                            <div>
                                <a href="#" className="text-xs text-neutral-600 underline underline-offset-2 hover:text-black">
                                    Forgot your password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black text-white text-xs py-3.5 rounded-full hover:bg-neutral-800 transition-colors uppercase tracking-wider font-light mt-4"
                            >
                                Sign In
                            </button>
                        </form>
                    </div>

                    <div className="w-full h-px bg-neutral-200 my-8" />

                    {/* Section 2: Don't have an account */}
                    <div>
                        <h3 className="text-sm font-normal mb-2">I don't have an account</h3>
                        <p className="text-xs text-neutral-500 font-light mb-6 leading-relaxed">
                            Enjoy added benefits and a richer experience by creating a personal account.
                        </p>
                        <button
                            type="button"
                            className="w-full border border-neutral-300 text-black text-xs py-3.5 rounded-full hover:border-black transition-colors uppercase tracking-wider font-light"
                        >
                            Create My LV account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};