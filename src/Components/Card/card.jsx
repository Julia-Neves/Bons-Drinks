import React from 'react'
import styles from "./card.module.css"

function Card(props) {
    return (
        <div className={styles.divCard}>
            <img className={styles.cardImg} src={props.image}/> 
            <p className={styles.cardTexto}> {props.titulo} </p>
        </div>
    )
}
export default Card;