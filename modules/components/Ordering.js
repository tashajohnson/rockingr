import React from 'react'
import Title from 'react-title-component'

class Ordering extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Ordering` }/>
        <h2>How to Order</h2>
        
      </div>
    )
  }
}

export default Ordering
