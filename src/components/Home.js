import { Link } from 'react-router-dom';
import './Home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';




const Home = () => {
  const carouselImages = [
    'images/image6.jpg',
    'images/image2.jpg',
    'images/galle1.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const incrementSlide = () => {
    setCurrentSlide((currentSlide + 1) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(incrementSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleMouseEnter = (type) => {
    // Handle mouse enter event for each image type
    console.log(`Mouse enter: ${type}`);
  };

  const handleMouseLeave = () => {
    // Handle mouse leave event for both images
    console.log('Mouse leave');
  };


  useEffect(() => {
    return () => {
      setShownews1(false);
    };
  }, []);

  const [showValue1, setShowValue1] = useState(false);
  const [showValue2, setShowValue2] = useState(false);
  const [showValue3, setShowValue3] = useState(false);
  const [showValue4, setShowValue4] = useState(false);
  const [shownews1, setShownews1] = useState(false);
  const [shownews2, setShownews2] = useState(false);
  const [shownews3, setShownews3] = useState(false);
  


  return (
    <div className="App">
      <header className="App-header">
        <div className='logo-image'> 
        <img src="/images/logo.png" style={{ width: '70px', height: '70px' }} />
      </div>
        <nav>
          <ul className="nav-list">
            <li><a href="/projects">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <div>
              <Link className="btn" to="/login">Login</Link>
            </div>
          </ul>
        </nav>
      </header>

      <div className="carousel">
        <Carousel
          showStatus={false}
          showThumbs={false}
          selectedItem={currentSlide}
          infiniteLoop={true}
          autoPlay={false}
        >
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
              
            </div>
          ))}
        </Carousel>
      </div>
      <div className="image-text">
                <p>Welcome to </p>
                <p>Discover Best Medical Center Near By,</p>
                <p>During Your Visit Downsouth</p>
                <div>
        <p className='logo-text'>Healthy Roam</p>
        </div>       
        <div className='btnsrch'>
      <Link className="btn " to="/search">
            Search Location
          </Link>
          </div>
              </div>
       

      <div className="image-container1">
        <div
          className="image-card"
          onMouseEnter={() => handleMouseEnter('tourist')}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/images/signup.png" alt="Patient" />
          <div className='image-text-on'>
    <p>Tourist</p>
  </div>
          <div className="overlay-text">
            
            <Link className="btn" to="/register">Sign Up</Link>
          </div>
        </div>

        <div
          className="image-card"
          onMouseEnter={() => handleMouseEnter('medical')}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/images/register.png" alt="Medical" />

<div className='image-text-on'>
<p>Medical Center</p>
</div>

          <div className="overlay-text">
           
            <Link className="btn" to="/medical">Register</Link>
          </div>
        </div>
      </div>


<div className='circle1'> </div>
<div className='circle2'> </div>
<div className='circle3'> </div>
<div className='circle4'> </div>           
          

<div className='square'>

</div>

<p className='square-text'>50+ </p>
<p className='square-text-1'>Medical Service Providers</p>

<div className='line'>
</div>

<p className='square-text-2'>
  Join With Us
  </p>
  <p className='square-text-2'>
  This is the best way to find a medical center
  </p>
  <div className='square-text-3'>
  <p>
  Tourists venturing through the enchanting landscapes of the South can now
  <br/>
  seamlessly navigate their health needs. With our user-friendly platform, 
  <br/>
  finding nearby medical centers and arranging appointments is hassle-free,
  <br/> 
  leaving you more time to explore and enjoy your travels
 
  </p> 

  </div>

  <div>
  
  <p className='text-1'>
    What We Provide You  
  </p>



  <div className="container1">
      <button id="toggleButton" className="icon-button1" onClick={() => setShowValue1(!showValue1)}>
        <FontAwesomeIcon icon={faPlus} />
        Quick Medical Facility Search
      </button>
      {showValue1 && <p  className="answer-1">offers users a seamless and efficient way to find nearby healthcare centers in the Southern area. With our intuitive search feature, users can swiftly locate medical facilities tailored to their needs, ensuring convenient access to essential healthcare services.</p>}
    </div>

    <br/>

    <div className="container1">
      <button id="toggleButton" className="icon-button2" onClick={() => setShowValue2(!showValue2)}>
        <FontAwesomeIcon icon={faPlus} />
        Interactive Map Feature
      </button>
      {showValue2 && <p  className="answer-2">offers users a seamless and efficient way to find nearby healthcare centers in the Southern area. With our intuitive search feature, users can swiftly locate medical facilities tailored to their needs, ensuring convenient access to essential healthcare services.</p>}
    </div>
    <br/>

    <div className="container1">
      <button id="toggleButton" className="icon-button3" onClick={() => setShowValue3(!showValue3)}>
        <FontAwesomeIcon icon={faPlus} />
        Easy Online Appointment Scheduling
      </button>
      {showValue3 && <p  className="answer-3">offers users a seamless and efficient way to find nearby healthcare centers in the Southern area. With our intuitive search feature, users can swiftly locate medical facilities tailored to their needs, ensuring convenient access to essential healthcare services.</p>}
    </div>
    <br/>
    <div className="container1">
      <button id="toggleButton" className="icon-button4" onClick={() => setShowValue4(!showValue4)}>
        <FontAwesomeIcon icon={faPlus} />
        Destination-Based Notifications Included
      </button>
      {showValue4 && <p  className="answer-4">offers users a seamless and efficient way to find nearby healthcare centers in the Southern area. With our intuitive search feature, users can swiftly locate medical facilities tailored to their needs, ensuring convenient access to essential healthcare services.</p>}
    </div>

 
 <br/>
 
  
</div>

<p className='sponser-text'>Featured Medical Centers</p>
<br/>
    <a href="/information">
      <img src="/images/m1.webp" alt="Description of the image" className="m-1" />
   
      <img src="/images/m2.webp" alt="Description of the image" className="m-1" />
      <img src="/images/m3.webp" alt="Description of the image" className="m-1" />
      
       </a>




       <div class='articles'>
  <h2>News</h2>
  <div class="article-container">



  <div class="article-box move-on-hover">
    <img src="/images/Galle.jpg" alt="Article 1 Image" class='n-1' />
    <h3 class='news-head'>What should I know while traveling to Galle?</h3>
    <button id="readButton" class="read-button1" onClick={() => setShownews1(!shownews1)}>
        {shownews1 ? 'Read Less' : 'Read More'}
    </button>
    <p class='news-des'>
        Traveling to Galle is a great adventure. Remember to get travel insurance that covers health costs. 
        This site is to find doctors and medicine if you need them. Prices for things like food and 
        places to stay are usually reasonable.
    </p>
    <div class="container">
        {shownews1 && 
            <p class="news-1">
                Galle is pretty safe, but be careful of small thefts. Respect local customs and maybe learn a few words
                in Sinhala, the local language. There's lots to do in Galle, like exploring the old Galle Fort and 
                chilling on beautiful beaches nearby. Galle is a fun place to visit and make great memories!
                <br/>
                <a href="https://hikersbay.com/travel-informations/srilanka/galle/galle-tourist-information.html?lang=en#num-crime">Find Read</a>
            </p>
        }
    </div>
</div>

    
    



    <div className="article-box move-on-hover">
      <img src="/images/weather.jpg" alt="Article 1 Image" className='n-1'/>
      <h3 className='news-head'>Galle Weather</h3>
      <button id="readButton" className="read-button1" onClick={() => setShownews2(!shownews2)}>
        {shownews2 ? 'Read Less' : 'Read More'}
      </button >
      <p className='news-des'>
      Galle, Sri Lanka, enjoys a tropical climate characterized by warm temperatures and high humidity levels 
      year-round. Average temperatures typically range between 25°C to 30°C (77°F to 86°F). The region experiences 
      two distinct monsoon seasons: the Southwest Monsoon from May to September and the Northeast Monsoon from 
      December to February, bringing heavy rainfall. 
                
      </p>

      <div className="container">
        {shownews2 && 
          <p  className="news-1">
            Despite the rain, Galle still sees plenty of sunshine throughout the year. With its balmy weather and 
            occasional showers, Galle offers visitors a lush and vibrant environment to explore its rich history,
             scenic landscapes, and cultural treasures.

          <br/>
          <a href="https://www.accuweather.com/en/lk/galle/309721/weather-forecast/309721">Find More</a>
          </p>
        }
      </div>
    </div>




    <div className="article-box move-on-hover">
      <img src="/images/dalawella.jpg" alt="Article 1 Image" className='n-1'/>
      <h3 className='news-head'>Tourist Destinations</h3>
      <button id="readButton" className="read-button1" onClick={() => setShownews3(!shownews3)}>
        {shownews3 ? 'Read Less' : 'Read More'}
      </button >
      <p className='news-des'>
      Galle, situated along the southern coast of Sri Lanka, boasts a treasure trove of attractions that enthrall
       visitors with its rich history and breathtaking scenery. Within the ancient Galle Fort, a UNESCO World Heritage
        Site, wander cobblestone streets lined with colonial-era buildings, boutique shops, and charming cafes. 
        Explore the historic ramparts, offering panoramic views of the Indian Ocean and the bustling city below
                
      </p>

      <div className="container">
        {shownews3 && 
          <p  className="news-1">
           Nearby, unwind on the picturesque beaches of Unawatuna and Jungle Beach, known for their golden sands 
           and turquoise waters ideal for swimming and snorkeling. For a cultural immersion, visit the Dutch Reformed
            Church, Maritime Museum, and National Museum of Galle. With its blend of cultural heritage and natural 
            beauty, Galle promises an unforgettable journey steeped in charm and allure.

          <br/>
          <a href="https://www.arabiers.lk/guides/places-to-visit-in-galle">Find More</a>
          </p>
        }
      </div>
    </div>



  </div>


</div>








<div className="footer">
      <div className={styles.rectangleParent1}>
      <div className={styles.groupChild12} />
      <div className={styles.privacyPolicy}>
        Privacy Policy | Terms of Use | Contact Us
      </div>
      <div className={styles.turningDreamsIntoContainer}>
              </div>
      <b className={styles.dreamhome1}>Healthy Rome</b>
      <div className={styles.followUs}>Follow us</div>
      
      <img
        className={styles.iconFacebookIcon}
        alt=""
        src="/images/fb.png"
      />
      
      <img
        className={styles.iconInstagram}
        alt=""
        src="/images/in.png"
      />
      <img
        className={styles.iconLinkedinOriginal}
        alt=""
        src="/images/twitter.png"
      />
      <div className={styles.dreamhomeRealtyAllContainer}>
        <p
          className={styles.dreamhomeWhereYour}
        >{`© 2024 Healthy Rome. All rights reserved. `}</p>
      </div>
    </div>
    </div>


    </div>
  );
};

export default Home;
