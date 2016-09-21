import React from 'react'
import Title from 'react-title-component'
import { logos } from '../styles.css'

class Ordering extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Ordering` }/>
        <img className="img-responsive" id={logos} src="http://s19.postimg.org/mp1dsttzn/howtoorder.jpg" />
        <hr />
        <h2>How to Order</h2>
        <p>To order our products please view the product page you are interested in on our website</p>
        <p>When you have decided what product you wish to order then you can click the button that says "Order"</p>
        
      </div>
    )
  }
}

export default Ordering
