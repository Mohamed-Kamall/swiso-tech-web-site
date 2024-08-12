import logo from "./logo.svg";
import "./App.css";
import { MenuHeader } from "./screens/header/Header";
import { IntroSection } from "./screens/sections/IntroSection";
import { Services } from "./screens/sections/ServicesSection";
import { Solutions } from "./screens/sections/SolutionsSection";

function App() {
  return (
    <div className="App">
      <MenuHeader />
      <IntroSection />
      <Services />
      <Solutions />
    </div>
  );
}

export default App;
