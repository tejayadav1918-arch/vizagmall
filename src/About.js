import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <div>
    <section className="about-us-section">
      <div className="overlay"></div>
      <h1 className="about-title">About Us</h1>
      <p className="about-subtitle">
        Welcome to VizagMall, your ultimate shopping destination with world-class brands, entertainment, and dining experiences.
      </p>
      <br></br>
      <p className="about-subtitle" >We pride ourselves on creating a welcoming environment that balances convenience with luxury. With spacious corridors, natural lighting, and a thoughtfully designed layout, navigating the mall is effortless, making every shopping trip enjoyable and stress-free.</p>
    </section>

    
    <section className="intro-section">
        <div className="intro-row">
          {/* Left Column - Text */}
          <div className="intro-col text-col">
            <h2>Welcome to Vizag Mall</h2>
            <p>
              At <strong>Vizag Mall</strong>, we believe shopping is not just about
              buying—it’s about creating memorable experiences. Situated in the heart
              of Visakhapatnam, our mall combines modern architecture,
              state-of-the-art facilities, and a vibrant atmosphere to offer
              something for everyone. Whether you’re here for fashion, electronics,
              lifestyle, or simply to unwind, Vizag Mall ensures an unforgettable
              visit for families, friends, and tourists alike.
            </p>
            <p>
              We pride ourselves on creating a welcoming environment that balances
              convenience with luxury. With spacious corridors, natural lighting, and
              a thoughtfully designed layout, navigating the mall is effortless,
              making every shopping trip enjoyable and stress-free.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="intro-col image-col">
            <img
              src="https://images.unsplash.com/photo-1567958436049-f2903793328b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHBpbmclMjBtYWxsJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D"
              alt="Vizag Mall"
            />
          </div>
        </div>
      </section>
      {/* Facilities & Services Section */}
<section className="facilities-section">
  <h2><b>Facilities & Services</b></h2>

  {/* Facility 1 - Image Left */}
  <div className="facility-row">
    <div className="facility-image">
      <img
         src={ require ('./components/381ea24c-c533-481f-9c3e-3d3a4f466bbd.png')}
        alt="Shopping"
      />
    </div>
    <div className="facility-text">
      <h3>Shopping</h3>
      <p>
        Featuring a diverse range of national and international brands, from
        fashion to electronics, Vizag Mall ensures every visitor finds exactly
        what they need.
      </p>
    </div>
  </div>

  {/* Facility 2 - Image Right */}
  <div className="facility-row reverse-row">
  <div className="facility-image">
    <img
      src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80"
      alt="Fashion & Clothes"
    />
  </div>
  <div className="facility-text">
    <h3>Fashion & Clothes</h3>
    <p>
      Explore the latest trends in fashion with a wide variety of clothing
      stores for men, women, and children. From casual wear to formal attire,
      Vizag Mall has something for every style and occasion.
    </p>
  </div>
</div>

  {/* Facility 3 - Image Left */}
  

  {/* Facility 4 - Image Right */}
  <div className="facility-row">
    <div className="facility-image">
      <img
        src={ require ('./components/full-car-parking-lot-mall.jpg')}
        alt="Shopping"
      />
    </div>
    <div className="facility-text">
      <h3>Convenience</h3>
      <p>
        Ample parking, free Wi-Fi, friendly customer service, and 24/7 security
        make your visit smooth and stress-free.
      </p>
    </div>
  </div>

  {/* Facility 5 - Image Left */}
  
</section>


      </div>
    
  );
};

export default About;
