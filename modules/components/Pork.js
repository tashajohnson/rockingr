import React from 'react'
import { logos } from '../styles.css'
import Title from 'react-title-component'

class Pork extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Pork` }/>
        <img className="img-responsive" id={logos} src="https://s19.postimg.org/4xftoffrn/pigheader2.jpg" />
        <hr />
        <br />
        <div className="container">
        <br />
        	<div className="container">
		        <p className="lead">The pigs we raise on our farm are only fed Organic Hog feed and barley grass. 
		        	We do not feed our pigs swill or slop! All pork is hormone and antibiotic free. We strive to feed 
		        	all our animals a diet that keeps them happy and healthy so you get the best meat for your family!
		        </p>
		       </div>
		       <br />
	       </div>
        <br />
        <div className="col-md-offset-2">
        	<img className="img-responsive" src="https://s19.postimg.org/llot0wufn/078.jpg" />
        </div>
       	<br />
        <div className="col-md-offset-2">
        	<img className="img-responsive" src="https://s19.postimg.org/459ewxjbn/068.jpg" />
        </div>
        <br />
      </div>
    )
  }
}

export default Pork
