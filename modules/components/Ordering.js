import React from 'react'
import Title from 'react-title-component'

class Ordering extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Ordering` }/>
        <img className="img-responsive" src="https://pixabay.com/static/uploads/photo/2014/04/06/03/42/tuscon-317533_960_720.jpg" />
        <h2>How to Order</h2>
        
      </div>
    )
  }
}

export default Ordering
