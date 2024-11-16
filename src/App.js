
import './App.css';
import Banner from './components/Banner';
import Bottom from './components/Bottom';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Start from './components/Start';


function App() {
  return (
    <div className="App">
 <Header/>
 <main>
  <Hero/>
  <Banner/>
  <Start/>
<Bottom/>
 </main>
 <Footer/>
    </div>
  );
}

export default App;
