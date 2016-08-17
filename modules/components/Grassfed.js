import React from 'react'
import { logos } from '../styles.css'
import Title from 'react-title-component'

class Grassfed extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Grassfed` }/>
        <h2>Better for you - Better for the Environment</h2>
        
      </div>
    )
  }
}

export default Grassfed
