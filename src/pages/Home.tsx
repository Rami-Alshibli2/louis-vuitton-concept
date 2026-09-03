import React from 'react';
import { Hero } from '../components/home/Hero';
import { CreationsGrid } from '../components/home/CreationsGrid';
import { MenCollectionBanner } from '../components/home/MenCollectionBanner';
import { LvFallSection } from '../components/home/LvFallSection';
import { BeautyBanner } from '../components/home/BeautyBanner';
import { BeautyCollaborationSection } from '../components/home/BeautyCollaborationSection';
import { MenCityBanner } from '../components/home/MenCityBanner';
import { SeasonEssentialsSection } from '../components/home/SeasonEssentialsSection';
import { MaisonSection } from '../components/home/MaisonSection'; // السكشن التاسع
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

interface HomeProps {
    onNavigateWishlist?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigateWishlist }) => {
    return (
        <div className="min-h-screen bg-white text-black flex flex-col">
            <Navbar onWishlistClick={onNavigateWishlist} />

            <main className="flex-1">
                <Hero />
                <CreationsGrid />
                <MenCollectionBanner />
                <LvFallSection />
                <BeautyBanner />
                <BeautyCollaborationSection />
                <MenCityBanner />
                <SeasonEssentialsSection />
                <MaisonSection /> {/* السكشن التاسع هنا */}
            </main>

            <Footer />
        </div>
    );
};