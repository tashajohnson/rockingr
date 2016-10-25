import React from 'react'
import { logos } from '../styles.css'
import Title from 'react-title-component'

class Recipes extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Pork` }/>
        <img className="img-responsive" id={logos} src="https://s19.postimg.org/3pru1fdlf/meal.jpg" />
        <hr />
        <br />
        <h2 className="section-heading text-center">* Recipe cards coming soon! *</h2>
        <br />
        <div className="container">

        <div className="row">
            <div className="col-lg-6">
            	<br />
            	<br />
                <figure>
                  <img className="img-responsive" src="https://s19.postimg.org/iv0q87j83/beef_cuts.jpg" alt="" />
                  {/*<figcaption className="pull-left section-heading">Our horses frolicking in the pasture</figcaption>*/}
                </figure>
            </div>
            <div className="col-lg-6">
                <div className="clearfix"></div>
                <h2 className="section-heading">How to Cook Grassfed Meat</h2>
                <p className="lead">One of the most frequently asked questions we get is how do you cook grassfed meat. A common 
                misconception is that grassfed meat is tougher than standard feedlot meat. This is mainly due to the fact that
                there are specific considerations for cooking grassfed meat that you might not be aware of. Rocking R Farms grassfed 
                meat is not gamey as our amimals are fed on pasture grass and barely grass year round to give the meat tenderness and 
                flavor. The toughness that can result with traditional cooking methods can be attributed to the higher integrity of the muscle
                fibers in grassfed meat. By adjusting your cooking techniques you can optimize your grassfed meat's flavor and keep it tender.</p>
                
            </div>
        </div>
        <div className="container">
          <p className="lead">The main thing to keep in mind is that the meat should be handled gently when cooking. Lower heat and attention 
                to not overcooking the meat is optimal for juicy and tender results. Grassfed beef in particular does better when cooked to a medium rare finish.
                Marinating and tenderizing your beef are also excellent techniques for a juicy product and cooking with a thermometer is highly recommended.
                Use tongs and not a fork or knife when turning meat to avoid losing juices. Reguardless of cooking technique it is helpful to 
                sear the outside of the cut to retain the juices before grilling, stove top cooking on a lower heat, or roasting.
                Let the meat sit for a few minutes after cooking before serving to allow juices to be absorbed and not lost. </p> 
          <br />
        </div>
        
      </div>
     </div>
    )
  }
}

export default Recipes
