import logo from "./logo.svg";
import "./App.css";
import { MenuHeader } from "./screens/header/Header";
import { IntroSection } from "./screens/sections/IntroSection";

import { Solutions } from "./screens/sections/SolutionsSection";
import { Services } from "./screens/sections/ServicesSection";
import { NetworkSection } from "./screens/sections/NetworkSection";
import { ValuesSection } from "./screens/sections/ValuesSection";
import { JourneySection } from "./screens/sections/JourneySection";
import { PartenerSection } from "./screens/sections/PartenerSection";
import { ClientReviewSection } from "./screens/sections/ClientReviewSection";
import { AboutUsSection } from "./screens/sections/AboutUsSection";
import { ContactUsSection } from "./screens/sections/ContactUsSection";
import { Footer } from "./screens/sections/Footer";

function App() {
  return (
    <div className="App">
      <MenuHeader />
      <IntroSection />
      <Services />
      <Solutions />
      <NetworkSection />
      <ValuesSection />
      <JourneySection />
      <PartenerSection />
      <ClientReviewSection />
      <AboutUsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default App;
