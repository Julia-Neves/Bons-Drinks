import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/footer';
import Contato from './Pages/Contato/contact';
import Header from './Components/Header/header';
import Home from './Pages/Home/home'
import SobreNos from './Pages/SobreNos/aboutUs';
import NossoTime from './Pages/NossoTime/ourTeam';
import Drinks from './Pages/Drinks/Drinks';



function App() {
  return (
    <div className="box">
      <Router>
        <Header/>
        <Switch>

          <Route path="/" exact>
            <Home className="content"/>
          </Route>

          <Route path="/drinks">
            <Drinks/>
          </Route>

          <Route path="/contact">
            <Contato/>
          </Route>

          <Route path="/aboutUs">
            <SobreNos/>
          </Route>

          <Route path="/ourTeam">
            <NossoTime/>
          </Route>

        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;