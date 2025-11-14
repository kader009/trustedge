import BannerSection from "@/src/components/BannerSection";
import Category from "@/src/components/Category";
import ReviewChart from "@/src/components/ReviewChart";
import Footer from "@/src/components/shared/Footer";
import Navbar from "@/src/components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <BannerSection/>
      <ReviewChart/>
      <Category/>
      <Footer/>
    </div>
  );
}
