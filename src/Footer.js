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
                            <div className="spinning-logo">
                            <span className="spinner-outer">
  <svg className="spinner-outer-svg"
       data-name="Layer 1"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 180 180"><title>veg-outer</title>	<path  d="M97.41,0.4l-1.24,13.59l7.69,0.7l-0.4,4.36l-12.04-1.1L93.06,0L97.41,0.4z"/>
	<path  d="M115.51,3.76l-4.69,17.41l-4.22-1.14l4.69-17.41L115.51,3.76z"/>
	<path  d="M138.51,13.93l-8.25,16.01l-3.22-1.67l-2.94-13.2l-4.75,9.22l-3.88-2.01l8.25-16.01l3.22,1.67l2.93,13.2
		l4.75-9.22L138.51,13.93z"/>
	<path  d="M151.72,24.78c1.7,1.57,3.07,3.84,3.25,6.28l-4.26,1.5c-0.03-1.99-0.78-3.48-1.92-4.53
		c-2.01-1.85-4.73-1.77-6.57,0.24c-1.84,2.01-1.71,4.72,0.3,6.57c0.64,0.59,1.77,1.38,3.27,1.79l-2.17,3.77
		c-1.44-0.45-2.79-1.17-4.06-2.34c-3.78-3.48-4.02-8.98-0.54-12.77C142.5,21.49,147.94,21.29,151.72,24.78z"/>
	<path  d="M165.51,41.53c2.77,4.33,1.61,9.67-2.71,12.45c-4.32,2.78-9.64,1.61-12.41-2.72
		c-2.77-4.33-1.61-9.67,2.71-12.45C157.42,36.03,162.74,37.19,165.51,41.53z M161.83,43.89c-1.47-2.3-4.09-2.87-6.38-1.4
		s-2.86,4.11-1.4,6.4s4.09,2.87,6.38,1.4C162.73,48.82,163.3,46.19,161.83,43.89z"/>
	<path  d="M174.71,60.49l-12.9,4.36l2.47,7.35l-4.14,1.4l-3.86-11.5l17.04-5.75L174.71,60.49z"/>
	<path  d="M180,91.82l-17.93,1.28l-0.26-3.62l9.7-9.39l-10.32,0.74l-0.31-4.37l17.93-1.28l0.26,3.62l-9.7,9.39
		l10.32-0.74L180,91.82z"/>
	<path  d="M175.03,118.52c-1.63,4.83-6.4,7.04-11.31,5.36c-4.91-1.67-7.34-6.34-5.71-11.16l2.17-6.41l17.01,5.8
		L175.03,118.52z M170.9,117.11l0.77-2.27l-8.75-2.98l-0.77,2.27c-0.84,2.49,0.5,4.76,2.98,5.61
		C167.61,120.58,170.06,119.6,170.9,117.11z"/>
	<path  d="M163.89,140.93c-2.91,4.24-8.27,5.24-12.5,2.32c-4.23-2.92-5.22-8.29-2.31-12.54
		c2.91-4.24,8.27-5.24,12.5-2.31C165.81,131.31,166.8,136.68,163.89,140.93z M160.29,138.44c1.54-2.25,1.06-4.9-1.19-6.45
		c-2.24-1.55-4.88-1.06-6.43,1.19c-1.54,2.25-1.06,4.9,1.19,6.45C156.1,141.18,158.75,140.69,160.29,138.44z"/>
	<path  d="M138.32,143.13l4.3,5.02l13.03,3.81l-3.97,3.42l-7.67-2.25l1.05,7.95l-3.97,3.42L139.3,151l-4.3-5.02
		L138.32,143.13z"/>
	<path  d="M131.48,169.72l-6.19-12.16l-6.88,3.52l-1.98-3.9l10.77-5.51l8.17,16.05L131.48,169.72z"/>
	<path  d="M106.42,178.61l-1.09-4.24l7.33-1.89l-0.61-2.37l-7.33,1.89l-1.09-4.24l7.33-1.89l-0.61-2.37l-7.33,1.89
		l-1.09-4.24l11.56-2.98l4.48,17.45L106.42,178.61z"/>
	<path  d="M82.59,179.6l1.24-13.59l-7.69-0.71l0.4-4.36l12.04,1.1L86.94,180L82.59,179.6z"/>
	<path  d="M64.49,176.24l4.69-17.41l4.22,1.14l-4.69,17.41L64.49,176.24z"/>
	<path  d="M41.49,166.07l8.25-16.01l3.22,1.67l2.94,13.2l4.75-9.22l3.88,2.01l-8.25,16.01l-3.22-1.67l-2.93-13.2
		l-4.75,9.22L41.49,166.07z"/>
	<path  d="M28.28,155.22c-1.7-1.57-3.07-3.84-3.25-6.28l4.26-1.5c0.03,1.99,0.78,3.48,1.92,4.53
		c2.01,1.85,4.73,1.77,6.57-0.24c1.84-2.01,1.71-4.72-0.3-6.57c-0.64-0.59-1.77-1.38-3.27-1.79l2.17-3.77
		c1.44,0.45,2.79,1.17,4.06,2.34c3.78,3.48,4.02,8.98,0.54,12.77C37.5,158.51,32.06,158.71,28.28,155.22z"/>
	<path  d="M14.49,138.47c-2.77-4.34-1.61-9.67,2.71-12.45c4.32-2.78,9.64-1.61,12.41,2.72
		c2.77,4.33,1.61,9.67-2.71,12.45C22.58,143.97,17.26,142.81,14.49,138.47z M18.17,136.11c1.47,2.3,4.09,2.87,6.38,1.4
		c2.29-1.47,2.86-4.1,1.4-6.4c-1.47-2.3-4.09-2.87-6.38-1.4C17.27,131.18,16.7,133.81,18.17,136.11z"/>
	<path  d="M5.29,119.51l12.9-4.36l-2.47-7.35l4.14-1.4l3.86,11.5l-17.04,5.75L5.29,119.51z"/>
	<path  d="M0,88.18l17.93-1.28l0.26,3.62l-9.7,9.39l10.32-0.74l0.31,4.37l-17.93,1.28l-0.26-3.62l9.7-9.4L0.31,92.54
		L0,88.18z"/>
	<path  d="M4.97,61.48c1.63-4.83,6.4-7.04,11.31-5.36c4.91,1.67,7.34,6.34,5.71,11.16l-2.17,6.41l-17.01-5.8L4.97,61.48z
		 M9.1,62.89l-0.77,2.27l8.75,2.98l0.77-2.27c0.84-2.49-0.5-4.76-2.98-5.61C12.39,59.42,9.94,60.4,9.1,62.89z"/>
	<path  d="M16.11,39.07c2.91-4.24,8.27-5.24,12.5-2.32c4.23,2.92,5.22,8.29,2.31,12.54c-2.91,4.24-8.27,5.24-12.5,2.31
		C14.19,48.69,13.2,43.32,16.11,39.07z M19.71,41.56c-1.54,2.25-1.06,4.9,1.19,6.45c2.24,1.55,4.88,1.06,6.43-1.19
		c1.54-2.25,1.06-4.9-1.19-6.45C23.9,38.82,21.25,39.31,19.71,41.56z"/>
	<path  d="M41.68,36.87l-4.3-5.02l-13.03-3.81l3.97-3.42L36,26.87l-1.05-7.95l3.97-3.42L40.7,29l4.3,5.02L41.68,36.87z"
		/>
	<path  d="M48.52,10.28l6.19,12.16l6.88-3.52l1.98,3.9L52.8,28.32l-8.17-16.05L48.52,10.28z"/>
	<path  d="M73.58,1.39l1.09,4.24l-7.33,1.89l0.61,2.37L75.27,8l1.09,4.24l-7.33,1.89l0.61,2.37l7.33-1.89l1.09,4.24
		l-11.56,2.98L62.02,4.37L73.58,1.39z"/></svg>
</span>

<span className="spinner-inner">
  <svg className="spinner-inner-svg"
       data-name="Layer 1"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 128 128">
    <title>veg-inner</title>
    	<path  d="M69.27,0.28l-0.88,9.66l5.47,0.5l-0.28,3.1l-8.56-0.78L66.18,0L69.27,0.28z"/>
	<path  d="M82.14,2.67l-3.33,12.38l-3-0.81l3.33-12.38L82.14,2.67z"/>
	<path  d="M98.49,9.9l-5.87,11.38l-2.29-1.18l-2.09-9.39l-3.38,6.55l-2.76-1.43l5.87-11.38l2.29,1.18l2.09,9.39
		l3.38-6.55L98.49,9.9z"/>
	<path  d="M107.89,17.62c1.21,1.11,2.18,2.73,2.31,4.46l-3.03,1.06c-0.02-1.41-0.56-2.48-1.37-3.22
		c-1.43-1.31-3.36-1.26-4.67,0.17c-1.31,1.43-1.21,3.36,0.21,4.67c0.46,0.42,1.26,0.98,2.33,1.27l-1.54,2.68
		c-1.02-0.32-1.99-0.84-2.89-1.67c-2.69-2.48-2.86-6.38-0.39-9.08C101.33,15.28,105.2,15.14,107.89,17.62z"/>
	<path  d="M117.69,29.53c1.97,3.08,1.14,6.88-1.93,8.85c-3.07,1.98-6.86,1.15-8.83-1.94c-1.97-3.08-1.14-6.88,1.93-8.85
		C111.94,25.62,115.72,26.45,117.69,29.53z M115.08,31.21c-1.04-1.63-2.91-2.04-4.54-1s-2.04,2.92-0.99,4.55s2.91,2.04,4.54,1
		C115.72,34.72,116.13,32.84,115.08,31.21z"/>
	<path  d="M124.24,43.02l-9.17,3.1l1.75,5.22l-2.94,0.99l-2.74-8.17l12.11-4.09L124.24,43.02z"/>
	<path  d="M128,65.3l-12.75,0.91l-0.18-2.58l6.9-6.68l-7.34,0.53l-0.22-3.1l12.75-0.91l0.18,2.58l-6.9,6.68l7.34-0.53
		L128,65.3z"/>
	<path  d="M124.47,84.28c-1.16,3.43-4.55,5-8.04,3.81c-3.49-1.19-5.22-4.51-4.06-7.94l1.55-4.56l12.1,4.12L124.47,84.28z
		 M121.53,83.28l0.55-1.61l-6.22-2.12l-0.55,1.61c-0.6,1.77,0.36,3.39,2.12,3.99C119.19,85.75,120.93,85.05,121.53,83.28z"/>
	<path  d="M116.54,100.21c-2.07,3.02-5.88,3.72-8.89,1.65c-3.01-2.08-3.71-5.9-1.64-8.91c2.07-3.02,5.88-3.72,8.89-1.65
		C117.91,93.38,118.61,97.2,116.54,100.21z M113.98,98.45c1.1-1.6,0.75-3.48-0.84-4.58c-1.59-1.1-3.47-0.75-4.57,0.85
		c-1.1,1.6-0.75,3.48,0.84,4.58C111.01,100.4,112.89,100.05,113.98,98.45z"/>
	<path  d="M98.36,101.78l3.05,3.57l9.27,2.71l-2.82,2.43l-5.46-1.6l0.75,5.65l-2.83,2.43l-1.26-9.6L96,103.81
		L98.36,101.78z"/>
	<path  d="M93.5,120.69l-4.4-8.64l-4.89,2.5l-1.41-2.77l7.66-3.92l5.81,11.42L93.5,120.69z"/>
	<path  d="M75.68,127.01L74.91,124l5.21-1.35l-0.43-1.68l-5.21,1.35l-0.77-3.01l5.21-1.35l-0.43-1.68l-5.21,1.35
		l-0.77-3.01l8.22-2.12l3.19,12.41L75.68,127.01z"/>
	<path  d="M58.73,127.72l0.88-9.66l-5.47-0.5l0.28-3.1l8.56,0.78L61.82,128L58.73,127.72z"/>
	<path  d="M45.86,125.33l3.33-12.38l3,0.81l-3.33,12.38L45.86,125.33z"/>
	<path  d="M29.51,118.1l5.87-11.38l2.29,1.19l2.09,9.39l3.38-6.55l2.76,1.43l-5.87,11.38l-2.29-1.18l-2.09-9.39
		l-3.38,6.55L29.51,118.1z"/>
	<path  d="M20.11,110.38c-1.21-1.11-2.18-2.73-2.31-4.46l3.03-1.06c0.02,1.41,0.56,2.48,1.37,3.22
		c1.43,1.31,3.36,1.26,4.67-0.17c1.31-1.43,1.21-3.36-0.21-4.67c-0.46-0.42-1.26-0.98-2.33-1.27l1.54-2.68
		c1.02,0.32,1.99,0.84,2.89,1.67c2.69,2.48,2.86,6.38,0.39,9.08S22.8,112.86,20.11,110.38z"/>
	<path  d="M10.31,98.47c-1.97-3.08-1.14-6.88,1.93-8.85c3.07-1.98,6.86-1.15,8.83,1.94c1.97,3.08,1.14,6.88-1.93,8.85
		C16.06,102.38,12.28,101.55,10.31,98.47z M12.92,96.79c1.04,1.63,2.91,2.04,4.54,1c1.63-1.05,2.04-2.92,0.99-4.55
		s-2.91-2.04-4.54-1C12.28,93.28,11.87,95.16,12.92,96.79z"/>
	<path  d="M3.76,84.98l9.17-3.1l-1.75-5.22l2.94-0.99l2.74,8.17L4.76,87.93L3.76,84.98z"/>
	<path  d="M0,62.7l12.75-0.91l0.18,2.58l-6.9,6.68l7.34-0.53l0.22,3.11L0.84,74.54l-0.18-2.57l6.9-6.68l-7.34,0.53
		L0,62.7z"/>
	<path  d="M3.53,43.72c1.16-3.43,4.55-5,8.04-3.81s5.22,4.51,4.06,7.94l-1.55,4.56l-12.1-4.12L3.53,43.72z M6.47,44.72
		l-0.55,1.61l6.22,2.12l0.55-1.61c0.6-1.77-0.36-3.39-2.12-3.99C8.81,42.25,7.07,42.95,6.47,44.72z"/>
	<path  d="M11.46,27.79c2.07-3.02,5.88-3.72,8.89-1.65c3.01,2.08,3.71,5.9,1.64,8.91c-2.07,3.02-5.88,3.72-8.89,1.65
		C10.09,34.62,9.39,30.8,11.46,27.79z M14.02,29.55c-1.1,1.6-0.75,3.48,0.84,4.58c1.59,1.1,3.47,0.75,4.57-0.85
		c1.1-1.6,0.75-3.48-0.84-4.58C16.99,27.6,15.11,27.95,14.02,29.55z"/>
	<path  d="M29.64,26.22l-3.05-3.57l-9.27-2.71l2.82-2.43l5.46,1.6l-0.75-5.65l2.83-2.43l1.26,9.6L32,24.19L29.64,26.22z"
		/>
	<path  d="M34.5,7.31l4.4,8.64l4.89-2.5l1.41,2.77l-7.66,3.92L31.74,8.73L34.5,7.31z"/>
	<path  d="M52.32,0.99L53.09,4l-5.21,1.35l0.43,1.68l5.21-1.35L54.3,8.7l-5.21,1.35l0.43,1.68l5.21-1.35l0.77,3.01
		l-8.22,2.12L44.1,3.11L52.32,0.99z"/></svg>
</span></div>
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
