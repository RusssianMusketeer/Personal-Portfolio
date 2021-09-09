import { Switch, Route, } from 'react-router';
import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.component';
import { GlobalStyles } from './global.styles';
import HomePage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';
import IMAGE_DATA from './image-data.data';
import PortfolioIndex from './pages/portfolio-index/portfolio-index.component';
import TEXT_DATA from './text-data.data';
import ContactMePage from './pages/contact-me/contact-me.component';
import {AnimatePresence} from 'framer-motion';
import {withRouter} from 'react-router-dom'
import CrownClothing from './pages/portfolio-detail-01-crown-clothing/portfolio-detail-01-crown-clothing.component';
import ThankYou from './pages/thank-you/thank-you.component';  
import Skills from './pages/skills/skills.component';


class App extends Component {
  constructor() {

    super();

    this.state = {
      images: IMAGE_DATA,
      button_text:['GO TO PORTFOLIO','VIEW PROJECT'],
      description_text:TEXT_DATA,
    }; 
  }
  render () {
    const { location} = this.props;
   

    const { images, button_text, description_text } = this.state;
    return (
    
    <div className="App">
      <div className="max-width">
      <GlobalStyles/>
      <Header/>
      <AnimatePresence exitBeforeEnter initial={false}>
      <Switch  key={location.pathname} location={location}>
        <Route exact path='/'><HomePage images={images} button={button_text} text={description_text}/> </Route>
        <Route exact path='/portfolio'><PortfolioIndex images={images} button={button_text} text={description_text}/> </Route>
        <Route exact path='/contact'> <ContactMePage/> </Route>
        <Route exact path='/project-crown-clothing'> <CrownClothing/> </Route>
        <Route exact path='/thank-you'><ThankYou/></Route>
        <Route exact path='/skills'><Skills/></Route>
      </Switch>
      </AnimatePresence>
      </div>
      <Footer/>
    </div>
    )
  }

}

export default withRouter(App);
