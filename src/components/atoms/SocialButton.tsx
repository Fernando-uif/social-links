import buttonStyle from "../../sass/components/buttons/button.module.scss";

export const SocialButton = ({
  name,
  socialUrl,
  isDark,
}: {
  name: string;
  socialUrl: string;
  isDark: boolean;
}) => {
  return (
    <a
      href={socialUrl}
      target="_blank"
      className={`${buttonStyle["button"]}`}
      style={
        {
          "--buttonBackground": `${!isDark ? "#333" : "#CCC"}`,
          "--colorTextButton": `${!isDark ? "#fff" : "#333"}`,
          "--colorTransition": `${isDark ? "#fff" : "#fff"}`,
        } as React.CSSProperties
      }
    >
      {name}
    </a>
  );
};
