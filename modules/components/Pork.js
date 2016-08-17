import React from 'react'
import { logos } from '../styles.css'
import Title from 'react-title-component'

class Pork extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Pork` }/>
        <img className="img-responsive" id={logos} src="https://s19.postimg.org/4xftoffrn/pigheader2.jpg" />
        
        
      </div>
    )
  }
}

export default Pork
