import './App.css';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero';
import Join from './component/Join/Join';
import Plans from './component/Plans/Plans';
import Programs from './component/programs/Programs';
import Reasons from './component/reasons/Reasons';
import Testimonials from './component/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
