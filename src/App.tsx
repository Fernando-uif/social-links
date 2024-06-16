import { useContext, Children, useEffect } from "react";

import { Profile } from "./components/Image/Profile";
import { Location } from "./components/Text/Location";
import { Name } from "./components/Text/Name";
import { Profession } from "./components/Text/Profession";
import { SocialButton } from "./components/atoms/SocialButton";
import { social } from "./data/social";
import { ThemeContext } from "./context/ThemeContext";

import "./App.css";
import generalStyle from "./sass/main.module.scss";
import Icon from "./sass/components/icons/Icon";

function App() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleIsDark = () => {
    setIsDark((prev) => !prev);
  };
  useEffect(() => {
    const root = document.documentElement;
    if (!isDark) {
      root.style.setProperty("--backgroundPage", "var(--backgroundPage--dark)");
    } else {
      root.style.setProperty(
        "--backgroundPage",
        "var(--backgroundPage--light)"
      );
    }
  }, [isDark]);
  return (
    <>
      <section className={`${generalStyle["general"]}`}>
        <div
          className={`${generalStyle["general__mainCard"]}`}
          style={
            {
              "--backgroundMainCard": `${!isDark ? "#1f1f1f" : "#FAFAFA"}`,
            } as React.CSSProperties
          }
        >
          <div className={`${generalStyle["general__themeIcons"]}`}>
            {isDark ? (
              <Icon
                name="light"
                className={`${generalStyle["general__light"]}`}
                onClick={toggleIsDark}
              />
            ) : (
              <Icon
                name="dark"
                className={`${generalStyle["general__light"]}`}
                onClick={toggleIsDark}
              />
            )}
          </div>
          <Profile />
          <Name isDark={isDark} />
          <Location />
          <Profession isDark={isDark} />
          <div className={`${generalStyle["general__wrapperSocialButton"]}`}>
            {Children.toArray(
              social.map((item) => {
                return (
                  <SocialButton
                    name={item.name}
                    socialUrl={item.url}
                    isDark={isDark}
                  />
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
