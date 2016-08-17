import React from 'react'
import { logos } from '../styles.css'
import Title from 'react-title-component'

class Chicken extends React.Component {
  render() {
    return(
      <div> 
      	<Title render={ prev => `${prev} | Chicken` }/>
        <img className="img-responsive" id={logos} src="https://s19.postimg.org/wd4w60pzn/chickenheader2.jpg" />
        
        
      </div>
    )
  }
}

export default Chicken
