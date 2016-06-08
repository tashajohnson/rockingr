import React from 'react'
import { IndexLink, Link } from 'react-router'
import Title from 'react-title-component'
import Navigation from './Navigation'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render="Rocking R Farms"/>
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})

