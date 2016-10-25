import React from 'react'
import { logos } from '../styles.css'
import Title from 'react-title-component'

class Barleygrass extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Grass` }/>
        <img className="img-responsive" id={logos} src="https://s19.postimg.org/q8hz6fn9v/grassheader2.jpg" />
        <hr />
        
        <div className="container">
          <p className="lead">At Rocking R Farms we grow our own barley grass in a hydroponic growth chamber that Ray desgined and built.
          Our grassfed meats are raised exclusively on barley grass and pasture grass. The human body is formed of building blocks
          absorbed from the foods we consume. Just like us, the meats we eat are also made of what they eat. Barley grass contains a full
          array of vitamins and minerals necessary to the human body and creates healthy fat and proteins in the meat of the animals raised 
          on it.
          </p> 
          <br />
          <p className="lead">By growing our barley grass in a hydroponic growth chamber we have better control over the 
          diet of our beef, pork, chicken and lamb. While other grassfed meat producers may let their stock graze on the wild 
          range and consume whatever greenery they find (that may change the taste of the meat) we have year round access to the 
          most nutritious greenery options for our animals.</p>
        </div>
        
      </div>
    )
  }
}

export default Barleygrass
