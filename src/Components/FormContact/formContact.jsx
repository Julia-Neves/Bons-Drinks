import React from 'react';
import Input from '../Input/input';
import '../FormContact/formContact.css';
import {useState} from 'react';

export default function FormContact(){

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")
    

    return (
        <div className="divContato">
            <h1 className="formTitle">Contato</h1>
            <div className="conteudo"><img className="formImg" src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=825&q=80"></img>
            <form className="form">
                <div>
                    <label htmlFor="">Nome:</label>
                    <input htmlFor="name" onChange={(event) => setNome(event.target.value)} tipo="text" name="name"/ >
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input htmlFor="email" onChange={(event) => setEmail(event.target.value)} tipo="text" name="email" />
                </div>
                <div>
                    <label htmlFor="message" className="labelInput">Mensagem:</label>
                    <textarea className="textArea" onChange={(event) => setMensagem(event.target.value)} name="message" />
                </div>
                <div>
                    <button class="btn">Enviar</button>
                </div>
            </form></div>
            
        </div>
    )
}