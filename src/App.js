import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/layout/navbar.component";
import Hero from './component/Hero';
import Footer from "./component/footer/footer.component";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Navbar/>
       <Hero/>
       <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
