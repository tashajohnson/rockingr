import React from 'react'
import Title from 'react-title-component'
import { logos, network, mail, greyback } from '../styles.css'

const username = "info"
const address = "rockingrfarmsaz"

class Contact extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Contact` }/>
      	<img className="img-responsive" id={logos} src="http://s19.postimg.org/snalpbnkj/contactus.jpg" />
      	<hr />
        <br />
        <h2 className="text-center">(480) 586-5145</h2>
        <br />


        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 text-center">
                  <h3>Connect with us on Facebook</h3>
                  <a href="https://www.facebook.com/Rocking-R-Farms-156564927832278/" target="_blank" className="btn btn-default btn-lg"><i className="fa fa-facebook fa-fw"></i> <span className={network}>Facebook</span></a>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h3>Order Products or ask a Question by Email</h3>
              <a href={`mailto:${username}@${address}.com`}  className="btn btn-default btn-lg"><span id={mail} className="glyphicon glyphicon-envelope"></span>
                <span className={network}>Email Us at <br /> {username}@{address}.com</span>
              </a>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
                  <h3>Follow us on Twitter</h3>
                  <a href="https://twitter.com/RockingRFarms" target="_blank" id={greyback} className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className={network}>Twitter</span></a>
            </div>
            <br />
            <br />
            <br />
          </div>
            <div className="container text-center">
              <br/>
              <p className="lead ">We are located in Queen Creek Arizona</p>
              <br />
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106801.84471992638!2d-111.71165676749142!3d33.225691297508355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872a4c65d79a826d%3A0x222c5c0cfe71e0e0!2sQueen+Creek%2C+AZ!5e0!3m2!1sen!2sus!4v1477355592025" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe> 
              
            </div>
          <br />
          <br />
        </div>
        
      </div>
    )
  }
}

export default Contact
