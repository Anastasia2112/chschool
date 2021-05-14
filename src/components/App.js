import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import { default as Header } from './Header/index.jsx';
import { default as About } from './About/index.jsx';
import { default as Way } from './Way/index.jsx';
import { default as Cases } from './Cases/index.jsx';
import { default as Consult } from './Consult/index.jsx';
import { default as Footer } from './Footer/index.jsx';
import '../styles/App.styl';
// import Footer from "./Footer/index.jsx";

const App = () => {
  const location = useLocation();

  React.useEffect(() => {
    let activeLink = document.querySelectorAll('.active_nav_item');
    activeLink.forEach(el => {
      let line = document.querySelector('.navbar__line');
      el.removeChild(line);
      el.classList.remove('active_nav_item');
      el.classList.remove('orange_link');
      el.classList.add('black_link');
    });

    let newActiveLink = document.querySelectorAll(`.nav_list a[href='${location.pathname}']`);

    newActiveLink.forEach(el => {
      let parent = el.parentElement;
      console.log('el ' + el);
      parent.classList.add('active_nav_item');
      parent.classList.remove('black_link');
      parent.classList.add('orange_link');
      let newLine = document.createElement('div');
      newLine.classList.add('navbar__line');
      parent.prepend(newLine);
    });
  }, [location]);

  return (
    <Fragment>
      <Header /> 
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/way" component={Way} />
        <Route exact path="/cases" component={Cases} />
        <Route exact path="/consult" component={Consult} />
      </Switch>
      <Footer /> 
    </Fragment>
  );

}

export default App;