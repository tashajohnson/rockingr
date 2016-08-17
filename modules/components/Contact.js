import React from 'react'
import Title from 'react-title-component'

class Contact extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Contact` }/>
        <img className="img-responsive" src="https://pixabay.com/static/uploads/photo/2014/04/06/03/42/tuscon-317533_960_720.jpg" />
        <h2>Contact Us</h2>
        
      </div>
    )
  }
}

export default Contact
