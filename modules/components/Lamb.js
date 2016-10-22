import React from 'react'
import { logos } from '../styles.css'
import Title from 'react-title-component'

class Lamb extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Beef` }/>
        <img className="img-responsive" id={logos} src="https://s19.postimg.org/vyzte4dn7/lamb.jpg" />
        <hr />
        
        
      </div>
    )
  }
}

export default Lamb
