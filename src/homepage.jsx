import HeroPage from "./heropage";
import SkillsPage from "./skillspage";
import CertificationPage from "./certificationpage";
import CarrerSummary from "./careersummary";

import Categories from "./categories";


import WorkGallery from "./gallerypage";
import NavigationBar from "./navigationbar";


function Homepage() {
  return (
    
   
    <div className="font-leuleFont md:snap-proximity snap-y">
      <NavigationBar/>
      
      <HeroPage />
      <Categories />
      <SkillsPage />
      <WorkGallery/>
      
      <CertificationPage />
      <CarrerSummary />
    </div>
    
  );
}

export default Homepage;
