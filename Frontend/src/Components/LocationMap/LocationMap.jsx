import React from "react";
import "./LocationMap.css";

const LocationMap = () => {
  return (
    <section className="location-map-section">
      <div className="location-map-container">
        <h2>Our Location</h2>
        <p>Find us easily on the map below</p>

        <div className="map-wrapper">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=Padma%20River%20Bangladesh&z=8&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
