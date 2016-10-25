import React from 'react'
import Title from 'react-title-component'
import { logos } from '../styles.css'

const username = "info"
const address = "rockingrfarmsaz"

class Ordering extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Ordering` }/>
        <img className="img-responsive" id={logos} src="http://s19.postimg.org/mp1dsttzn/howtoorder.jpg" />
        <hr />
        <br />
        <div className="container">
          <p className="lead text-center">To purchase products from Rocking R Farms there are several options.</p> 
          <br />
          <br />
          <br />
        </div>

        <div className="container">
          <p className="lead text-center">1. Visit the <a href="http://www.arizonafarmersmarkets.com/pageScottsdaleOldtown/ScottsdaleOTsat.htm">Scottsdale Old Town Farmers Market</a> to purchase from our booth</p> 
          
        </div>

        <div className="container">
          <p className="lead text-center">2. Email us at <a href={`mailto:${username}@${address}.com`}>
                {username}@{address}.com</a> with purchase request.</p> 
          
        </div>

        <div className="container">
          <p className="lead text-center">3. Call us at (480) 586-5145</p> 
          <br />
          <br />
          <br />
        </div>

        <div className="container">
          <p className="lead text-center">We are unable to ship products outside of the state of Arizona.</p> 
          
        </div>
        <div className="container">
          <p className="lead text-center">Deliveries may be available depending on your location. Please call or email for details.</p> 
          <br />
        </div>

        
      </div>
    )
  }
}

export default Ordering
