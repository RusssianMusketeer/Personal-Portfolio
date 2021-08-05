import { Switch, Route, } from 'react-router';
import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.component';
import { GlobalStyles } from './global.styles';
import HomePage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';
import CallToAction from './components/call-to-action/call-to-action.component';
import IMAGE_DATA from './image-data.data';


class App extends Component {
  constructor() {
    super();

    this.state = {
      images: IMAGE_DATA,
    };
  }
  render () {

   
    
    return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <Switch>
        <Route exact path='/'><HomePage images={this.state.images}/> </Route>
        <Route exact path='/portfolio' />
        <Route exact path='/contact' />
      </Switch>
      <CallToAction />
      <Footer/>
    </div>
    )
  }

}

export default App;
