import professionStyle from "../../sass/components/text/profession.module.scss";

export const Profession = ({ isDark }: { isDark: boolean }) => {
  return (
    <span
      className={`${professionStyle["profession"]}`}
      style={
        {
          "--textNameColor": `${!isDark ? "#fff" : "#333"}`,
        } as React.CSSProperties
      }
    >
      "Front-end developer"
    </span>
  );
};
