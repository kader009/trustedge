import BannerSection from '@/src/components/BannerSection';
import Category from '@/src/components/Category';
import CommunityFavorites from '@/src/components/CommunityFavorites';
import PopularThisWeek from '@/src/components/PopularThisWeek';
import ReviewChart from '@/src/components/ReviewChart';
import Footer from '@/src/components/shared/Footer';
import Navbar from '@/src/components/shared/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <BannerSection />
        <ReviewChart />
        <Category />
        <CommunityFavorites />
        <PopularThisWeek />
      </main>
      <Footer />
    </div>
  );
}
