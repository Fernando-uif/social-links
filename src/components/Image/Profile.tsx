import profileImageStyle from "../../sass/components/Image/profileImage.module.scss";

export const Profile = () => {
  return (
    <div className={`${profileImageStyle["profileImage"]}`}>
      <img
        className={`${profileImageStyle["profileImage__image"]}`}
        src="/profile/profile.png"
      />
    </div>
  );
};
