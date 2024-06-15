import "./App.css";
import { Profile } from "./components/Image/Profile";
import { Location } from "./components/Text/Location";
import { Name } from "./components/Text/Name";
import { Profession } from "./components/Text/Profession";
import { SocialButton } from "./components/atoms/SocialButton";
import { social } from "./data/social";

import generalStyle from "./sass/main.module.scss";
function App() {
  return (
    <section className={`${generalStyle["general"]}`}>
      {/* TODO Colocar el sol y luna */}

      <div className={`${generalStyle["general__mainCard"]}`}>
        <Profile />
        <Name />
        <Location />
        <Profession />
        <div className={`${generalStyle["general__wrapperSocialButton"]}`}>
          {social.map((item) => {
            return <SocialButton name={item.name} socialUrl={item.url} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
