import nameStyle from "../../sass/components/text/name.module.scss";

export const Name = ({ isDark }: { isDark: boolean }) => {
  return (
    <span
      className={`${nameStyle["name"]}`}
      style={
        {
          "--textNameColor": `${!isDark ? "#fff" : "#333"}`,
        } as React.CSSProperties
      }
    >
      Fernando sosa{" "}
    </span>
  );
};
