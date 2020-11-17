import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './Layout/index'
import Search from './Search/Search'
import PropertiesTable from './Properties/PropertiesTable'
import PropertyView from './Property/PropertyView'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/properties" component={PropertiesTable}/>
          <Route exact path="/properties/:propertyReference" component={PropertyView}/>
        </Switch>
      </Layout>
    )
  }
}

export default App
