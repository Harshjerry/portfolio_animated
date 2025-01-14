import "./app.scss";
import  Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Parallax from "./components/parallax/parallax";
import Parallax2 from "./components/parallax2/parallax2";
import Parallax3 from "./components/parallax3/parallax3";
import Fishy from  "./components/fishy/fishy";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";

const App = () => {
  return <div>
                  <section id="Homepage" >
                           <Navbar/>
                          <Hero/> </section>

                  <section style={{background:"#1D002C",height:"786px"}} id="About">
                           <Parallax2/>      </section>


                           <section  style={{background:"#4C25C4",height:"600px"}}id="settle">  <Fishy/>  </section>
                            <section style={{height:"820px"}} id="Skills">
                            <Parallax3/>
                            </section>

 <section  style={{backgroundColor:"#121137"}}>Skills</section>
 <Portfolio  />
      <section id="Contact" >
      <Contact/>
      </section>

  </div>
};

export default App;
