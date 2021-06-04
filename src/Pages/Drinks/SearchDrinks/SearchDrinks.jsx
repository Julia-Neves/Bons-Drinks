import React from "react";
import styles from "./SearchDrinks.module.css";
import Card from "../../../Components/Card/card";
import Button from "../../../Components/Button/Button";

function SearchDrinks() {
  const [req, setReq] = React.useState(null);
  const [input, setInput] = React.useState('');
  const [isSearch, setIsSearch] = React.useState(false)


  async function searchDrinks() {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
    );
    const bd = await response.json();
    setReq(bd.drinks);
  }

  React.useEffect(() => searchDrinks(), []);
  return (
    <>
      <section>
        <form onSubmit={searchDrinks}>
          <label htmlFor="">Busca</label>
          <input type="text" onChange={(event) => setInput(event.target.value)}/>
          <Button titulo="Pesquisar"/>
        </form>
      </section>
      <div className={styles.container1}>
        {req && req.map((drinks) => (
          <div className={styles.container2} key={drinks.idDrink}>
            <Card image={drinks.strDrinkThumb} titulo={drinks.strDrink} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchDrinks;
