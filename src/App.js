import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }


  render(){
    return (
      <div>
        <Navbar dark color="primary"> 
        <div className="container">
          <NavbarBrand href="/">Fusion Restaurant</NavbarBrand>
          </div>       
        </Navbar>
        <Main />
      </div>
    );
  }
}

export default App;
