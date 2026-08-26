import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/home/Hero';
import { CreationsGrid } from '../components/home/CreationsGrid';
import { Footer } from '../components/layout/Footer';

interface HomeProps {
    onNavigateWishlist?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigateWishlist }) => {
    return (
        <div className="relative min-h-screen bg-white">
            <Navbar onWishlistClick={onNavigateWishlist} />
            <main>
                <Hero />
                <CreationsGrid />
            </main>
            <Footer />
        </div>
    );
};