import logo from "./logo.svg";
import "./App.css";
import { MenuHeader } from "./screens/header/Header";
import { IntroSection } from "./screens/sections/IntroSection";

import { Solutions } from "./screens/sections/SolutionsSection";
import { Services } from "./screens/sections/servicesSection";
import { NetworkSection } from "./screens/sections/NetworkSection";
import { ValuesSection } from "./screens/sections/ValuesSection";
import { JourneySection } from "./screens/sections/JourneySection";
import { PartenerSection } from "./screens/sections/PartenerSection";
import { ClientReviewSection } from "./screens/sections/ClientReviewSection";
import { AboutUsSection } from "./screens/sections/AboutUsSection";

function App() {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.screenY / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );
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
    </div>
  );
}

export default App;
