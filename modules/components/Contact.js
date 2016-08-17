import React from 'react'
import Title from 'react-title-component'

class Contact extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Contact` }/>
        <h2 className="center-align">Contact Us</h2>
        
      </div>
    )
  }
}

export default Contact
