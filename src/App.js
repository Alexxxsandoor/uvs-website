
import AboutUs from "./components/about-us/AboutUs";
import AdvantagesCompany from "./components/advantages-company/AdvantagesCompany";
import FirstIntro from "./components/first-intro/FirstIntro";
import Footer from "./components/footer/Footer";
import FullWidthIndex from "./components/full-width-index/FullWidthIndex";
import Header from "./components/header/Header";
import Pricing from "./components/pricing/Pricing";
import FeedbackContact from "./components/feedback/FeedbackContact";
import CardSlider from "./components/card-slider/CardSlider";

function App() {
  return (
    <>
      <FirstIntro/>
      <Header/> 
      <div id="index-view">
        <FullWidthIndex/>
        <AdvantagesCompany/>
        <AboutUs/>
        <CardSlider/>
        <Pricing/>
        <FeedbackContact />
      </div>
      <Footer/>
    </>
  );
}

export default App;
