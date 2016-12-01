import React from 'react'
import { logos } from '../styles.css'
import Title from 'react-title-component'

class Beef extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Beef` }/>
        <img className="img-responsive" id={logos} src="https://s19.postimg.org/o5q9w9kpf/beef_field.jpg" />
        <hr />
        <br />
        <div className="container">
	       <p className="lead">The cattle we purchase are young wild Arizona range cattle that weigh about 700
	       to 800 pounds when we get them. We buy our young cattle from ranches we trust. We know the ranchers 
	       d how they treat their cattle.</p>
	       <p className="lead">Any cow can graze on a range and the rancher can call it grass fed. They may be 
	       eating sage, mesquite, weeds and anything else available to them on a wild range. We control what our 
	       cattle each by feeding them barley grass on irrigated pastures. We know they are eating the best mix 
	       of grass to provide you with the best-tasting beef possible.</p>
	       <p className="lead">We finish the cattle for at least 90 days on our farm with our farm-grown barley grass. 
	       The health benefits, flavor, and tenderness are well worth it.</p>
	       <br />
		      <div className="text-center">
		       	<img className="img-responsive" src="https://s19.postimg.org/4ai83pwyb/big_daddy.jpg" />
		      </div>
	       <br />
       </div>
       <div className="container">
          <p className="lead">The cattle also graze on our irrigated pastures, which gets rid of any gamy flavor that some people 
          think comes with range-fed cattle.</p> 
        </div>
        <div className="container">
	        <p className="lead">When cattle are taken from their natural habitat and confined in small quarters, as is done in large 
	          commercial farms and feedlots, the cattle grow at unnatural rates, need medical intervention frequently to compensate and 
	          their stress levels are raised.</p>
	          <p className="lead">By letting cattle graze in our pastoral setting, they lead more stress-free lives without 
	          all of the artificial hormones and antibiotics. Studies have shown that stress in animals toughens the meat and lessens the 
	          flavor. Stress raises adrenaline in the body and, just as in our bodies; the natural product of adrenaline activates to tighten 
	          muscles to prepare for a perceived threat. We “toughen up” to handle the problem and so do the cattle.</p>
	          <p className="lead">Our beef is processed locally; it is hung and dry-aged for 21 days, which builds the flavor
	         and tenderness even more. The industry standard is 7-14 days. Some people don’t like grass-fed meat because they 
	         don’t think it tastes as good. Really, what they taste are range-fed cattle and short aging times. When you age 
	         grass-fed steak for 21 days, you get some of the greatest tasting and most tender steaks in the market.  
         Our beef is then inspected under Arizona Department of Agriculture regulations before it is sold to you.</p>
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
                  <td>Brisket</td>
                  <td>$9.50</td>
                </tr>
                <tr>
                  <td>Chuck Roast</td>
                  <td>$9.50</td>
                </tr>
                <tr>
                  <td>Flat Iron Steak</td>
                  <td>$12.00</td>
                </tr>
                <tr>
                  <td>Ground Beef</td>
                  <td>$7.75</td>
                </tr>
                <tr>
                  <td>New York Strip Steak - 2/Pack</td>
                  <td>$20.00</td>
                </tr>
                <tr>
                  <td>Porterhouse Steak - 2/Pack</td>
                  <td>$24.00</td>
                </tr>
                <tr>
                  <td>Boneless Ribeye Steaks - 2/Pack</td>
                  <td>$22.00</td>
                </tr>
                <tr>
                  <td>Rib Steak - 2/Pack</td>
                  <td>$21.00</td>
                </tr>
                <tr>
                  <td>Round Steak</td>
                  <td>$9.50</td>
                </tr>
                <tr>
                  <td>Round Roast</td>
                  <td>$9.50</td>
                </tr>
                <tr>
                  <td>Short Ribs</td>
                  <td>$7.95</td>
                </tr>
                <tr>
                  <td>Sirloin Tip Roast</td>
                  <td>$12.00</td>
                </tr>
                <tr>
                  <td>Top Sirloin Steak - 2/Pack</td>
                  <td>$14.00</td>
                </tr>
                <tr>
                  <td>Sirloin Steak - 2/Pack</td>
                  <td>$14.00</td>
                </tr>
                <tr>
                  <td>Skirt Steak</td>
                  <td>$14.00</td>
                </tr>
                <tr>
                  <td>Stew Meat</td>
                  <td>$8.50</td>
                </tr>
                <tr>
                  <td>T-Bone Steak - 2/Pack</td>
                  <td>$18.00</td>
                </tr>
                <tr>
                  <td>Tenderlion Steak - 2/Pack</td>
                  <td>$32.00</td>
                </tr>
                <tr>
                  <td>Top Sirloin Steak - 2/Pack</td>
                  <td>$14.00</td>
                </tr>
                <tr>
		              <td>Bratswurst Links</td>
		              <td>$10.00</td>
		            </tr>
		            <tr>
		              <td>Country Style Ribs</td>
		              <td>$7.95</td>
		            </tr>
		            <tr>
		              <td>Cross Rib Roast</td>
		              <td>$9.50</td>
		            </tr>
		            <tr>
		              <td>Cube Steak</td>
		              <td>$9.50</td>
		            </tr>
		            <tr>
		              <td>Del Monico Steaks</td>
		              <td>$12.00</td>
		            </tr>
		            <tr>
		              <td>Flank Steak</td>
		              <td>$15.00</td>
		            </tr>
		            <tr>
		              <td>Flanken Ribs</td>
		              <td>$8.95</td>
		            </tr>
		            <tr>
		              <td>London Broil</td>
		              <td>$9.50</td>
		            </tr>
		            <tr>
		              <td>Shanks</td>
		              <td>$4.95</td>
		            </tr>
		            <tr>
		              <td>Sirloin Tip Steak</td>
		              <td>$12.00</td>
		            </tr>
		            <tr>
		              <td>Petite Tender</td>
		              <td>$15.00</td>
		            </tr>
		            <tr>
		              <td>Tri Tip</td>
		              <td>$12.00</td>
		            </tr>
		            <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
		            <tr>
		              <td>Organ Meats</td>
		              <td>$4.00</td>
		            </tr>
		            <tr>
		              <td>Soup Neck Bones</td>
		              <td>$4.95</td>
		            </tr>
              </tbody>
             </table>
            </div>
        
      </div>
    )
  }
}

export default Beef
