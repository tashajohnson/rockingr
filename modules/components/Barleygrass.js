import React from 'react'
import { logos } from '../styles.css'
import Title from 'react-title-component'

class Barleygrass extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Grass` }/>
        <img className="img-responsive" id={logos} src="https://s19.postimg.org/q8hz6fn9v/grassheader2.jpg" />
        <h2 className="center-align">Barley Grass</h2>
        
      </div>
    )
  }
}

export default Barleygrass
