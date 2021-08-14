import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Forums from "./Forums";
import Manga from "./Manga";
import Shop from "./Shop";
import Anime from "./Anime";
import News from "./News";
import Support from "./Support";
import Welcome from "./Welcome";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="banner">
            <li className="leftBanner"></li>
            <li className="midBanner"></li>
            <li className="rightBanner"></li>
          </div>
            <div className="flexContainer">
              <nav>
                <ul className="links">
                  <li><NavLink to="/shop">Shop</NavLink></li>
                  <li><NavLink to="/manga">Manga</NavLink></li>
                  <li><NavLink to="/anime">Anime</NavLink></li>
                  <li><NavLink to="/forums">Forums</NavLink></li>
                  <li><NavLink to="/news">News</NavLink></li>
                  <li><NavLink to="/support">Support</NavLink></li>
                </ul>
              </nav>
              <div className="content">
                <Route exact path="/" component={Welcome}/>
                <Route path="/shop" component={Shop}/>
                <Route path="/manga" component={Manga}/> 
                <Route path="/anime" component={Anime}/>
                <Route path="/forums" component={Forums}/> 
                <Route path="/news" component={News}/>            
                <Route path="/support" component={Support}/>            
              </div>
            </div>
          </div>
      </HashRouter>
    );
  }
}
export default Main;