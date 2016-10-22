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
          </p> 
          <br />
        </div>
        
      </div>
    )
  }
}

export default Barleygrass
