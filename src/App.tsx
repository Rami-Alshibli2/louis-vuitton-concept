import { useState } from 'react';
import { Home } from './pages/Home';
import { Wishlist } from './pages/Wishlist';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'wishlist'>('home');

  if (currentPage === 'wishlist') {
    return <Wishlist onBackToHome={() => setCurrentPage('home')} />;
  }

  return <Home onNavigateWishlist={() => setCurrentPage('wishlist')} />;
}