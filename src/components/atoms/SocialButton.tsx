import buttonStyle from "../../sass/components/buttons/button.module.scss";

export const SocialButton = ({
  name,
  socialUrl,
}: {
  name: string;
  socialUrl: string;
}) => {
  return (
    <a href={socialUrl} target="_blank" className={`${buttonStyle["button"]}`}>
      {name}
    </a>
  );
};
