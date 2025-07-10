import Navbar from "../Navbar";
import StarsBackground from "../StarsBackground";
import ContentMain from "../ContentMain";
import ScrollArrow from "../ScrollArrow";
import BoxProjects from "../BoxProjects";
import SkillsContent from "../SkillsContent";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import { useRef } from "react";
function Layout() {
  const containerRef = useRef(null);
  const handleScrollToContentMain = () => {
    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    
  };
  return (
    <>
      <Navbar />
      <StarsBackground />
      <ScrollArrow handleScrollToContentMain={handleScrollToContentMain} />
      <ContentMain containerRef={containerRef} />
      <BoxProjects />
      <SkillsContent />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Layout;
