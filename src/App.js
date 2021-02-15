import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/style.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { NavHeader, Jumbotron, Features, Testimonies,
          Portfolio, Collaborate, Contact, Cta, Footer} from './components/index';
class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render(){
    return(
      <div>
        <NavHeader/>
        <Jumbotron/>
        <Features/>
        <Testimonies/>
        {/* <Portfolio/> */}
        <Collaborate/>
        <Contact/>
        <Cta/>
        <Footer/>
      </div>

    
    )
  }
};

export default App;
