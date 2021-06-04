import React, { useState, useEffect } from "react";
import SearchDrinks from "./SearchDrinks/SearchDrinks";
import PopDrinks from "./PopDrinks/PopDrinks"
import { NavLink, Switch, Route } from "react-router-dom";
import styles from "./Drinks.module.css"


function Drinks() {

  return (
    <section className={styles.conteudo}>
    <h1 className = {styles.tituloConteudo}>Drinks</h1>

    <nav className = {styles.navConteudo}>
        <NavLink className={styles.btnNav} to="/drinks/populares">
          Drinks Populares
        </NavLink>
    
        <NavLink className={styles.btnNav} to="/drinks/buscar">
          Buscar Drinks
        </NavLink>
  </nav>
    
   
      <Switch>
        <Route path="/drinks/buscar">
          <SearchDrinks />
        </Route>
        <Route path="/drinks/populares">
          <PopDrinks />
        </Route>
      </Switch>
    </section>
  );
}
export default Drinks;