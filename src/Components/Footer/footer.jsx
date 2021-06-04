import React, { Component } from 'react';
import './footer.module.css';
import styleFooter from '../Footer/footer.module.css'

class Footer extends Component{
    render(){
        const url = 'https://github.com/Julia-Neves';
        return(
            <footer className={styleFooter.footer}>
                <p className={styleFooter.footerText}>
                    A project made by <a className={styleFooter.linkGithub} href = {url}>Julia Neves</a>
                </p>
            </footer>
        )
    }
}

export default Footer;