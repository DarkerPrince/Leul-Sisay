import HeroPage from "./heropage";
import WorkGallery from "./gallerypage";
import SkillsPage from "./skillspage";
import CertificationPage from "./certificationpage";
import CarrerSummary from "./careersummary";

import Blog from "./blog";
import BlogDetial from "./blogdetail";

function App() {
  return (
    <div className="bg-slate-800 space-y-20">
      <HeroPage />
      {/* <Blog /> */}
      {/* <BlogDetial /> */}
      <WorkGallery />
      <SkillsPage />
      <CertificationPage />
      <CarrerSummary />
    </div>
  );
}

export default App;
