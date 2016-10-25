import React from 'react'
import { logos } from '../styles.css'
import Title from 'react-title-component'

class Chicken extends React.Component {
  render() {
    return(
      <div> 
      	<Title render={ prev => `${prev} | Chicken` }/>
        <img className="img-responsive" id={logos} src="https://s19.postimg.org/wd4w60pzn/chickenheader2.jpg" />
        <hr />
        <br />
        <div className="container">
          <p className="lead">We raise our chickens free-range cage-free in our fertile pastures. They are hormone and 
          antibiotic free. The fresh air and open spaces result in a healthier and happier chicken which means you
          get the best quailty poultry available.</p>
          <br />
          <p className="lead">We have cage free eggs available at our farmer's market stands.</p> 
          <p className="lead">Poultry will available on a seasonal basis - first availability Spring 2017</p>
          <br />
        </div>
        <div className="text-center">
        	<img className="img-responsive" src="https://s19.postimg.org/fuymn6mfn/free_range.jpg" alt="chickens in a pasture" />
        </div>
        <br />
        <br />
      </div>
    )
  }
}

export default Chicken
