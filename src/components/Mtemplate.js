//the template medical center page for all mc
//display mc information from database here

import React from 'react';


const MTemplate = ({ medicalCenter }) => {
  return (
    <div className="medical-center">
      <div className="photos">
        {/* Display all photos of the medical center */}
        {medicalCenter.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index}`} />
        ))}
      </div>
      <div className="info">
        <h1>{medicalCenter.name}</h1>
        <div className="services">
          <h2>Services:</h2>
          <ul>
            {medicalCenter.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="hours">
          <h2>Open Hours:</h2>
          <p>{medicalCenter.openHours}</p>
        </div>
        <button className="book-btn">Book Now</button>
        <div className="about">
          <h2>About Us:</h2>
          <p>{medicalCenter.description}</p>
        </div>
        <div className="location">
          <h2>Location:</h2>
          <p>{medicalCenter.location}</p>
        </div>
        <div className="license">
          <h2>License No:</h2>
          <p>{medicalCenter.licenseNo}</p>
        </div>
        <div className="contact-info">
          <h2>Contact Info:</h2>
          <p>{medicalCenter.contactInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default MTemplate;
