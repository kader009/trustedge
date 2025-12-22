import BannerSection from '@/src/components/home/BannerSection';
import Category from '@/src/components/home/Category';
import CommunityFavorites from '@/src/components/home/CommunityFavorites';
import PopularThisWeek from '@/src/components/home/PopularThisWeek';
import WhyChooseUs from '@/src/components/home/WhyChooose';

export default function Home() {
  return (
    <div>
      <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <BannerSection />
        <WhyChooseUs />
        <Category />
        <CommunityFavorites />
        <PopularThisWeek />
      </main>
    </div>
  );
}
