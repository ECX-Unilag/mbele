import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/layout/navbar.component";
import Hero from './component/Hero';
import Footer from "./component/footer/footer.component";
import AboutEvent from './component/AboutEvent'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Navbar/>
       <Hero/>
       <AboutEvent/>
       <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
