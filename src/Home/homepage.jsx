import HeroPage from "./Hero/heropage";
import SkillsPage from "./Skills/skillspage";
import CertificationPage from "./Certification/certificationpage";
import CarrerSummary from "./Career Summary/careersummary";
import Categories from "./Profession/categories";
import WorkGallery from "./My Works Gallery/gallerypage";




function Homepage() {
  return (
    <div className="font-leuleFont md:snap-proximity snap-y">
      <HeroPage />
      <div id="category">
      <Categories />
      </div>
      <div id="skill">
      <SkillsPage />
      </div>
      <div id="gallery">
      <WorkGallery/>
      </div>
      <CertificationPage />
      <CarrerSummary />
    
    </div>
  );
}

export default Homepage;
