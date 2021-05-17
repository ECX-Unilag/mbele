import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/layout/navbar.component";
import Hero from './component/Hero';
import Footer from "./component/footer/footer.component";
// import Fbcount from "./component/footer/fbCount";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Navbar/>
       <Hero/>
       {/* <Fbcount/> */}
       <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
