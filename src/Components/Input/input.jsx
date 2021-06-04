import React from 'react';
import {useState} from 'react';
import '../Input/input.module.css';

export default function Input(props){
    return (
        <div>
            <label htmlFor={props.htmlFor} className="labelInput">{props.children}</label>
            <input type={props.tipo} name={props.name} onChange={props.noChange} className="input"></input>
        </div>
    )
}