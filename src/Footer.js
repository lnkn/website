import React from 'react';
import {NavLink} from "react-router-dom";
    

class ButtonParent extends React.Component {
    constructor(props) {    
        super(props)
        this.state = {
        condition: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
        condition: !this.state.condition
        })
    }
    render() {
        return (
        <ButtonChild        
            className={ this.state.condition ? "button toggled" : "button" }
            toggleClassName={ this.handleClick }
        >
        hello
        </ButtonChild>
        )
    }
    }
    
class ButtonChild extends React.Component {
    render() {
        return (
        <div
            className={ this.props.className }
            onClick={ this.props.toggleClassName }
        >
            { this.props.children }
        </div>
        )    
    }
}

class LinkList extends React.Component {
    constructor(props) {    
        super(props)
        this.state = {
        condition: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
        condition: !this.state.condition
        })
    }
    render() {
        return (
            <ul className="footer__column">
                <li className="footer__list-header" onClick={ this.handleClick }>
                    <svg className={ this.state.condition ? "footer__arrow is-rotated" : "footer__arrow" }
                    xmlns="http://www.w3.org/2000/svg" width="10"height="12" viewBox="0 0 10 12">
                    <path fillRule="evenodd" d="M4 7V0h2v7h4l-5 5-5-5h4z"></path></svg>
                    <div>{this.props.listTitle}</div>
                </li>
                <span className={ this.state.condition ? "footer__list-items is-expanded" : "footer__list-items" }>
                    {this.props.children}
                </span>
            </ul>
        )
    }
}


const Footer = () => {

    return(
        <div className="footer__outside">
            <footer className="footer__content">
                <div className="footer">
                    <div className="footer__upper">
                        <div className="footer__logo">
                            <div className="spinning-logo">spinner</div>
                        </div>
                    <div className="footer__column-wrapper">
                        <div className="footer__columns">
                            <LinkList listTitle="About">
                                <li className="footer__list-item"><NavLink to="/about" className="footer__link">About</NavLink></li>
                                <li className="footer__list-item"><NavLink to="/" className="footer__link">Contact</NavLink></li>
                                <li className="footer__list-item"><NavLink to="/" className="footer__link">Resume</NavLink></li>
                                <li className="footer__list-item"><NavLink to="/" className="footer__link">FAQ</NavLink></li>
                            </LinkList>
                            <LinkList listTitle="Other Projects">
                                <li className="footer__list-item"><a className="footer__link" rel="noopener noreferrer" target="_blank" href="http://perfectlysalted.co">Perfectly Salted</a></li>
                                <li className="footer__list-item"><a className="footer__link" rel="noopener noreferrer" target="_blank" href="http://thronefantasy.com">Throne Fantasy</a></li>
                                <li className="footer__list-item"><a className="footer__link" rel="noopener noreferrer" target="_blank" href="/frequently-asked-questions">Photography</a></li>
                            </LinkList>
                            <LinkList listTitle="Locations">
                                <li className="footer__list-item"><a className="footer__link" href="/legacy-west">Seattle, WA</a></li>
                            </LinkList>
                        </div>
                        <ul className="footer__column-social">
                            <li className="footer__social-item"><a className="footer__link social-link" target="_blank" rel="noopener noreferrer" href="https://instagram.com/lincolndoyle">Instagram</a></li>
                            <li className="footer__social-item"><a className="footer__link social-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lincolndoyle/">LinkedIn</a></li>
                            <li className="footer__social-item"><a className="footer__link social-link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Linked">Facebook</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <ul className="footer__lower">
                        <li className="footer__copyright">
                            <a className="footer__link" target="blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/All_rights_reserved">
                                © 2020 All Rights Reserved
                            </a>
                        </li>
                        <li className="footer__lower-item">
                            <NavLink to="/terms-and-conditions" className="footer__link">Terms &amp; Conditions</NavLink>
                        </li>
                        {/* <li className="footer__lower-item">
                           <span role="img">💯</span>
                        </li> */}
                    </ul>
            </footer>
        </div>
    )
}

export default Footer;
