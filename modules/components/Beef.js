import React from 'react'
import { logos } from '../styles.css'
import Title from 'react-title-component'

class Beef extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Beef` }/>
        <img className="img-responsive" id={logos} src="https://s19.postimg.org/4tm086aab/cowsheader2.jpg" />
        <h2>Beef and Beefalo</h2>
        
      </div>
    )
  }
}

export default Beef
