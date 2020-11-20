import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './Layout/index'
import Search from './Search/Search'
import PropertyView from './Property/PropertyView'

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route exact path="/properties/:propertyReference" component={PropertyView}/>
          </Switch>
        </Router>
      </Layout>
    )
  }
}

export default App
