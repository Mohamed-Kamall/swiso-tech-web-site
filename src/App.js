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
    </div>
  );
}

export default App;
