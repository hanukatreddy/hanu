import { motion } from "framer-motion";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Milestones from "./components/Milestones";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonies from "./components/Testimonies";
import Video from "./components/Video";



function App() {
  return (
    <motion.div initial='hidden' animate='show'>
      
      <Home/>
      <Services/>
      <Portfolio/>
      <Milestones/>
      <Blog/>
      <Video/>
      <Pricing/>
      <Testimonies/>
      <Skills/>
      <Contact/>
      <Footer/>
      <ScrollToTop/>
    </motion.div>
  );
}

export default App;
