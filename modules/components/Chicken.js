import React from 'react'
import {logos} from '../styles.css'

class Chicken extends React.Component {
  render() {
    return(
      <div>
        <img className="img-responsive" id={logos} src="https://s19.postimg.org/wd4w60pzn/chickenheader2.jpg" />
        <h2>Chicken</h2>
        
      </div>
    )
  }
}

export default Chicken
