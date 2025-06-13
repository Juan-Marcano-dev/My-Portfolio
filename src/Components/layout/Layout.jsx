import Navbar from "../Navbar";
import StarsBackground from "../StarsBackground";
import ContentMain from "../ContentMain";
import ScrollArrow from "../ScrollArrow";
import BoxProjects from "../BoxProjects";
import SkillsContent from "../SkillsContent";
import ContactForm from '../ContactForm';
function Layout() {
  return (
    <>
      <Navbar />
      <StarsBackground />
      <ScrollArrow />
      <ContentMain />
      <BoxProjects />
      <SkillsContent />
      <ContactForm />
    </>
  );
}

export default Layout;
