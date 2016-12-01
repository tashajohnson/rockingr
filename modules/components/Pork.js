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
           <div className="container" width="75%">
             <table className="table table-hover lead">
              <thead>
                <tr>
                  <th><h4>Item</h4></th>
                  <th><h4>Price</h4></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Baby Back Ribs</td>
                  <td>$13.50</td>
                </tr>
                <tr>
                  <td>Bacon</td>
                  <td>$12.50</td>
                </tr>
                <tr>
                  <td>Blade Roast</td>
                  <td>$9.00</td>
                </tr>
                <tr>
                  <td>Blade Steak</td>
                  <td>$9.00</td>
                </tr>
                <tr>
                  <td>Ground Breakfast Sausage</td>
                  <td>$9.00</td>
                </tr>
                <tr>
                  <td>Ground Italian Sausage</td>
                  <td>$9.00</td>
                </tr>
                <tr>
                  <td>Ground Pork</td>
                  <td>$8.00</td>
                </tr>
                <tr>
                  <td>Ham Roast, cured</td>
                  <td>$11.50</td>
                </tr>
                <tr>
                  <td>Hame Steak</td>
                  <td>$10.50</td>
                </tr>
                <tr>
                  <td>Hocks</td>
                  <td>$8.50</td>
                </tr>
                <tr>
                  <td>Italian Sausage Links</td>
                  <td>$9.50</td>
                </tr>
                <tr>
                  <td>Loin Roast</td>
                  <td>$9.50</td>
                </tr>
                <tr>
                  <td>Pork Chops - 2/Pack</td>
                  <td>$12.50</td>
                </tr>
                <tr>
                  <td>Shoulder Roast</td>
                  <td>$11.50</td>
                </tr>
                <tr>
                  <td>Spare Ribs</td>
                  <td>$12.50</td>
                </tr>
                <tr>
                  <td>Stew Meat</td>
                  <td>$10.00</td>
                </tr>
                <tr>
                  <td>Tenderloin Roast</td>
                  <td>$14.50</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Neck Bones</td>
                  <td>$4.95</td>
                </tr>
              </tbody>
             </table>
            </div>
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
