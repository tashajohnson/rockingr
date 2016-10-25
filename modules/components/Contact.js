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
                  <a href="https://www.facebook.com/Rocking-R-Farms-156564927832278/" className="btn btn-default btn-lg"><i className="fa fa-facebook fa-fw"></i> <span className={network}>Facebook</span></a>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h3>Order Products or ask a Question by Email</h3>
              <a href={`mailto:${username}@${address}.com`} className="btn btn-default btn-lg"><span id={mail} className="glyphicon glyphicon-envelope"></span>
                <span className={network}>Email Us at <br /> {username}@{address}.com</span>
              </a>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
                  <h3>Follow us on Twitter</h3>
                  <a href="https://twitter.com/RockingRFarms" id={greyback} className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className={network}>Twitter</span></a>
            </div>
          </div>
          <br />
          <br />
        </div>
        
      </div>
    )
  }
}

export default Contact
