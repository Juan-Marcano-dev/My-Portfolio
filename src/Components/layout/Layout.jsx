import Navbar from "../Navbar";
import StarsBackground from "../StarsBackground";
import ContentMain from "../ContentMain";
import ScrollArrow from "../ScrollArrow";
import BoxProjects from "../BoxProjects";
import SkillsContent from "../SkillsContent";
function Layout() {
  return (
    <>
      <Navbar />
      <StarsBackground />
      <ScrollArrow />
      <ContentMain />
      <BoxProjects />
      <SkillsContent />
    </>
  );
}

export default Layout;
