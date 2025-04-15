import styled from "styled-components";

const ContactMap = () => (
  <MapSection id="map">
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.371245955972!2d8.516929315287369!3d11.997637638160168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae814e8b9a5a07%3A0x5d3d1c2c2d1c2c2d!2sChallawa%20Industrial%20Area%2C%20Kano%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1622545600000!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="map-bg"></div>
    </div>
  </MapSection>
);

const MapSection = styled.section`
  position: relative;
  margin: 0 auto;

  .map-container {
    position: relative;
    iframe {
      display: block;
      position: relative;
      margin: 0 auto;
      width: 85%;
      height: 450px;
      z-index: 2;
      border-radius: 20px;
    }
  }

  .map-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50%;
    background-color: #f1f6fe;
    z-index: 1;
  }
`;

export default ContactMap;
