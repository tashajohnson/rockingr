import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { ServerRoute } from 'react-project'
import hello from './api/hello'
import App from './components/App'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Header from './components/Header'
import About from './components/About'
import Beef from './components/Beef'
import Pork from './components/Pork'
import Chicken from './components/Chicken'
import Barleygrass from './components/Barleygrass'
import Ordering from './components/Ordering'
import Contact from './components/Contact'
import Grassfed from './components/Grassfed'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Header}/>
      <Route path="/about" component={About}/>
      <Route path="/beefandbeefalo" component={Beef}/>
      <Route path="/pork" component={Pork}/>
      <Route path="/chicken" component={Chicken}/>
      <Route path="/barleygrass" component={Barleygrass}/>
      <Route path="/ordering" component={Ordering}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/grassfed" component={Grassfed}/>
    </Route>
    <ServerRoute path="/api">
      <ServerRoute path=":hello" get={hello}/>
    </ServerRoute>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
