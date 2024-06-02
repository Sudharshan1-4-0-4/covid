import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import AboutComponent from './components/AboutComponent'
import StateSpecificDetailsComponent from './components/StateSpecificDetailsComponent'
import VaccinationComponent from './components/VaccinationComponent'
import NotFoundComponent from './components/NotFoundComponent'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/state/:stateCode" component={StateSpecificDetailsComponent} />
    <Route exact path="/about" component={AboutComponent} />
    <Route exact path="/vaccination" component={VaccinationComponent} />
    <Route component={NotFoundComponent} />
  </Switch>
)

export default App
