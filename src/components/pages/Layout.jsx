
import Footer from "../footer/Footer";
import Navbar from "../header/navbar/Navbar";
import Hero from "../header/hero/Hero";
const Layout = ({children})=>{

 return(
       <>
        
        <Hero/>
        <Navbar/> 
          {children}
        <Footer/> 
       </>

 );
      


};

export default Layout;