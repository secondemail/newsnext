import Economic from "./_components/Economic";
import Hero from "./_components/Hero";
import ImageGallery from "./_components/ImageGallery";
import Infographic from "./_components/Infographic";
import LatestNews from "./_components/LatestNews";
import PopularCategories from "./_components/PopularCategories";
import Private from "./_components/Private";
import db from "../../public/api/db.json"

export default function Home() {
  
  return (
    <div>
      <Hero />
      <LatestNews data={db}/>
      <Economic data={db}/>
      <PopularCategories data={db}/>
      <Infographic/>
      <Private data={db}/>
      <ImageGallery/>
    </div>
  );
}
