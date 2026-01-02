import "./MovingBanner.css";

const MovingBannerNav = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-track">
        <span>Managed IT Services ✶</span>
        <span>Network Solutions ✶</span>
        <span>Consulting Services ✶</span>
        <span>Software Development ✶</span>
        <span>Cloud Solutions ✶</span>
        <span>Cyber Security ✶</span>
        <span>Data Analytics ✶</span>

        {/* duplicate for seamless loop */}
        <span>Managed IT Services ✶</span>
        <span>Network Solutions ✶</span>
        <span>Consulting Services ✶</span>
        <span>Software Development ✶</span>
        <span>Cloud Solutions ✶</span>
        <span>Cyber Security ✶</span>
        <span>Data Analytics ✶</span>
      </div>
    </div>
  );
};

export default MovingBannerNav;
