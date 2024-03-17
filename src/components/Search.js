import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';
import axios from "axios";


const SearchComponent = () => {
  const [activeButton, setActiveButton] = useState('Buy');
  const [typedText, setTypedText] = useState('');
  const [radiusValue, setRadiusValue] = useState('');
  const [searchByLocation, setSearchByLocation] = useState(true);
  const [destinations, setDestinations] = useState([]);

  
  const toggleActiveButton = () => {
    setActiveButton(activeButton === 'Buy' ? 'Sell' : 'Buy');
  };

  const handleLocationSearch = (event) => {
    const searchText = event.target.value;
    setTypedText(searchText);
    // Perform location-based search
    // Update destinations state with the search results
  };

  const handleRadiusSearch = (event) => {
    const radius = event.target.value;
    setRadiusValue(radius);
    // Perform radius-based search
    // Update destinations state with the search results
  };

  const handleSearch = async (event) => {
    const searchTerm = event.target.value;

    try {
      const response = await axios.get(
        `http://localhost:4003/api/v1/m_center/search_by_destination?destination=${searchTerm}`
      );
      console.log(response);
      console.log(response.data);
      console.log(
        response.data.map((destination) => destination.destination)
      );
      setDestinations(
        response.data.map((destination) => destination.destination)
      );
    } catch (error) {
      console.error(error);
    }
};








  return (
    
<div className='all-container'>
<div className='fort-img'>
<img src="/images/fort.jpg" alt="Medical" style={{ maxWidth: '100%', height: 'auto' }}/>
</div>

    <div className="search-container" >

      <div
        className="small-rectangle1"
        style={{
          backgroundColor: activeButton === 'Buy' ? '#333' : 'transparent',
          cursor: 'pointer',
        }}
        onClick={() => {
          setActiveButton('Buy');
          setSearchByLocation(true);
        }}
      >
        <p>Location</p>
      </div>

      <div
        className="small-rectangle2"
        style={{
          backgroundColor: activeButton === 'Sell' ? '#333' : 'transparent',
          cursor: 'pointer',
        }}
        onClick={() => {
          setActiveButton('Sell');
          setSearchByLocation(false);
        }}
      >
        <p>Radius</p>
      </div>

      {searchByLocation && (
        <div className='srchbar'> 
           <input type="text" placeholder="Enter Location"  className="search-input" onChange={handleSearch} />
      {destinations && destinations.length > 0 && <div className="results-list">
        {destinations.map((result, id) => {
        return <div
              className="search-result"
              onClick={(e) => alert(`You selected ${result}!`)}
              >
                  {result}
              </div>  
               })}
    </div>}  
        </div>
      )}

      {!searchByLocation && (
        <div className='srchbar'> 
          <input type="text" placeholder="Enter Radius" className="search-input" onChange={handleRadiusSearch} />
          {destinations && destinations.length > 0 && (
            <div className="results-list">
              {destinations.map((result, id) => (
                <div
                  className="search-result"
                  key={id}
                  onClick={(e) => alert(`You selected ${result}!`)}
                >
                  {result}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <Link className="search-button" to="/information">
        <div className="search-icon-container">
          <FontAwesomeIcon icon={faSearch} color="black" />
        </div>
      </Link>


      <p className='square-text1'>
  Discover Nearby Medical Centers 
  <br/>
  Search by Your <span style={{ color: 'rgba(13, 192, 224, 0.959)',fontSize:'34px', fontWeight: 'bold' }}>Location</span> or 
  <br/>
  Define <span style={{ color: 'rgba(13, 192, 224, 0.959)',fontSize:'34px', fontWeight: 'bold' }}>Radius</span> for Exploration
</p>

     



    </div>
    </div>
  );
};

export default SearchComponent;
