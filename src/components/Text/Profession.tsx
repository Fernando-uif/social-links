import professionStyle from "../../sass/components/text/profession.module.scss";

export const Profession = () => {
  return (
    <span className={`${professionStyle["profession"]}`}>
      "Front-end developer"
    </span>
  );
};
