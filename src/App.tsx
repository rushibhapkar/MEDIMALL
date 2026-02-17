import Header from './components/Header';
import Hero from './components/Hero';
import HomeCare from './components/HomeCare';
import Pharmacy from './components/Pharmacy';
import Membership from './components/Membership';
import LabServices from './components/LabServices';
import Doctors from './components/Doctors';
import Vaccination from './components/Vaccination';
import Consultation from './components/Consultation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        <HomeCare />
        <Pharmacy />
        <Membership />
        <LabServices />
        <Doctors />
        <Vaccination />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
