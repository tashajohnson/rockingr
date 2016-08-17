import React from 'react'
import {logos} from '../styles.css'

class Grassfed extends React.Component {
  render() {
    return(
      <div>
        <img className="img-responsive" id={logos} src="https://pixabay.com/static/uploads/photo/2014/04/06/03/42/tuscon-317533_960_720.jpg" />
        <h2>Better for you - Better for the Environment</h2>
        
      </div>
    )
  }
}

export default Grassfed
