import BannerSection from '@/src/components/home/BannerSection';
import Category from '@/src/components/home/Category';
import CommunityFavorites from '@/src/components/home/CommunityFavorites';
import PopularThisWeek from '@/src/components/home/PopularThisWeek';
import WhyChooseUs from '@/src/components/home/WhyChooose';

export default async function Home() {
  return (
    <div>
      <BannerSection />
      <WhyChooseUs />
      <Category />
      <CommunityFavorites />
      <PopularThisWeek />
    </div>
  );
}
