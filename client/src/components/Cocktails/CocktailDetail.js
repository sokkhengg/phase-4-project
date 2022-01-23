import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function CocktailDetail({}) {

    const [cocktail, setCocktail] = useState([]);

    const { id } = useParams();

    useEffect(() => {
      fetch(`http://localhost:3000/cocktails/${id}`)
        .then((r) => r.json())
        .then((cocktail) => {
            setCocktail(cocktail);
        });
    }, []);

    const { name, instructions, alcoholic, category, image, glass, iba, ingredient_1_name,
        ingredient_2_name, ingredient_3_name, ingredient_4_name, ingredient_5_name,
        ingredient_6_name, ingredient_1_id, ingredient_2_id, ingredient_3_id, ingredient_4_id,
        ingredient_5_id, ingredient_6_id, measure_1, measure_2, measure_3, measure_4,
        measure_5, measure_6 } = cocktail

        

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <ul>
                {ingredient_1_id ? <li>{ingredient_1_name}  *{measure_1}</li> : null}
                {ingredient_2_id ? <li>{ingredient_2_name}  *{measure_2}</li> : null}
                {ingredient_3_id ? <li>{ingredient_3_name}  *{measure_3}</li> : null}
                {ingredient_4_id ? <li>{ingredient_4_name}  *{measure_4}</li> : null}
                {ingredient_5_id ? <li>{ingredient_5_name}  *{measure_6}</li> : null}
                {ingredient_6_id ? <li>{ingredient_6_name}  *{measure_6}</li> : null}
            </ul>
            <p>{instructions}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CocktailDetail;
