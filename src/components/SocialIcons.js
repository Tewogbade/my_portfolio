const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        className="icon"
        target="_blank"
        rel="noreferrer"
        style={styles.icon}
        href="https://github.com/Tewogbade"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Tewogbade Tella' GitHub Profile"
        ></i>
      </a>
      <a
        className="icon"
        target="_blank"
        rel="noreferrer"
        style={styles.icon}
        href="https://www.linkedin.com/in/tewogbade/"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Tewogbade Tella' LinkedIn Profile"
        ></i>
      </a>
      <a
        className="icon"
        target="_blank"
        rel="noreferrer"
        style={styles.icon}
        href="https://twitter.com/mr_tewogbade"
      >
        <i
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Tewogbade Tella' Twitter Profile"
        ></i>
      </a>
      <a
        className="icon"
        target="_blank"
        rel="noreferrer"
        style={styles.icon}
        href="https://www.instagram.com/tewo_gbade/"
      >
        <i
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Tewogbade Tella' Instagram Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
