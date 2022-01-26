import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import { Link } from "react-router-dom";

function CocktailCarousel() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cocktails-random')
      .then((res) => res.json())
      .then((data) => setCocktails(data));
  }, []);

  console.log(cocktails);

  return (
    
    <section >
      <h1>Welcome to the Cocktail App</h1>
      <Carousel className="carousel">
        {cocktails.map((cock, index) => {
          return (
            
            <Carousel.Item interval={2500}>
              <Link to={cock ? `/cocktails/${cock.id}` : null}>
              <img
                // className="d-block w-100"
                className='image'
                src="https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg"
                // src={cock.image}
                alt={cock.name}
              />
              <Carousel.Caption >
                <h3 className='caption'>{cock.name}</h3>
              </Carousel.Caption>
              </Link>
            </Carousel.Item>
            
          );
        })}
      </Carousel>
      <h6>Login or create an account and enjoy a lenthy list of cocktail recipes. Add ingredients to My Liquor Cabinet and see which cocktails you have all the ingredients for in My Cocktails! The Cocktails page provides a long list of cocktail recipes that let you know which ingredients you still need!</h6>
    </section>
  );
}

export default CocktailCarousel;