import React from 'react'
import Title from 'react-title-component'
import { logos } from '../styles.css'

class Contact extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Contact` }/>
      	<img className="img-responsive" id={logos} src="http://s19.postimg.org/snalpbnkj/contactus.jpg" />
      	<hr />
        <h2 className="center-align">Contact Us</h2>
        
      </div>
    )
  }
}

export default Contact
