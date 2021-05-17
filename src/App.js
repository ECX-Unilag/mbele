import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/layout/navbar.component";
import Hero from './component/Hero';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Navbar/>
       <Hero/>
      </div>
    </BrowserRouter>
  );
}

export default App;
