import React, { useState, useEffect } from "react";
import Card from "../../../Components/Card/card";
import styles from "./PopDrinks.module.css";
import axios from "axios";
import Button from '../../../Components/Button/Button'

function PopDrinks() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      );

      setData(result.data.drinks);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Drinks Populares</h1>

        <section className={styles.container}>
          {data &&
            data.slice(0, 10).map((drinks) => (
              <div className={styles.card} key={drinks.idDrink}>
                <Card image={drinks.strDrinkThumb} titulo={drinks.strDrink} />
                {/* <Button titulo="Saiba mais" onClick={() => console.log('oi')}></Button> */}
              </div>
            ))}
        </section>
      </div>
    </>
  );
}

export default PopDrinks;
