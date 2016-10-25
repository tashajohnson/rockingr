import React from 'react'
import { logos } from '../styles.css'
import Title from 'react-title-component'

class Grassfed extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Grassfed` }/>
      	<img className="img-responsive" id={logos} src="http://s19.postimg.org/euw6towsz/grassfed.jpg" />
        <hr />
 
        <h2 className="section-heading text-center">We grow the best grass...the animals do the rest!</h2>
        <div className="container">
          <p className="lead">Rocking R Farms grass-fed beef, pork, lamb and poultry are healthier for you 
          and your family than traditional feedlot meat. Our family farm is committed to providing you with 
          the healthiest, safest and highest quality grass-fed meat you can buy.</p> 
          <br />
        </div>
        <div className="container">
          <p className="lead">Compared to feedlot meat, meat from grass-fed animals contains less of the bad fat, 
          cholesterol and calories and more of the good fat (omega-3 fatty acids and conjugated linoleic acid or CLA). 
           contains more Vitamin E, beta-carotene, and Vitamin C. Our pastures and barley grass are free of chemical 
           fertilizers, pesticides and herbicides. Our fruits and vegetables are grown in a greenhouse and growing 
           shed to control the environment for our products.</p> 
          <br />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-6">
                    <div className="clearfix"></div>
                    <h2 className="section-heading">From the Rocking R Farm to your table</h2>
                    <p className="lead">The cattle we purchase are young wild Arizona range cattle that weigh about 700
                     to 800 pounds when we get them. We buy our young cattle from ranches we trust. We know the ranchers 
                     d how they treat their cattle.</p>
                     <p className="lead">Any cow can graze on a range and the rancher can call it grass fed. They may be 
                     eating sage, mesquite, weeds and anything else available to them on a wild range. We control what our 
                     cattle each by feeding them barley grass on irrigated pastures. We know they are eating the best mix 
                     of grass to provide you with the best-tasting beef possible.</p>
                     <p className="lead">We finish the cattle for at least 90 days on our farm with our farm-grown barley grass. 
                     The health benefits, flavor, and tenderness are well worth it.</p>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <figure>
                    <img className="img-responsive" src="https://s19.postimg.org/569nm20b7/234.jpg" alt="" />
                    {/*<figcaption className="pull-right section-heading">Ray on the farm with two of his neices</figcaption>*/}
                  </figure>
                </div>
            </div>
        </div>
        <div className="container">
          <p className="lead">The cattle also graze on our irrigated pastures, which gets rid of any gamy flavor that some people 
          think comes with range-fed cattle.</p> 
        </div>

        <div className="container">
          <div className="row">
              <div className="col-lg-4 col-sm-12">
                  <figure>
                    <img className="img-responsive" src="https://s19.postimg.org/f64k1ybkj/pics_ray_s_camera_963.jpg" alt="" />
                    {/*<figcaption className="pull-left section-heading">Our horses frolicking in the pasture</figcaption>*/}
                  </figure>
              </div>
              <div className="col-lg-8 col-sm-12">
                  <div className="clearfix"></div>
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
          </div>
        </div>

        <div className="container">
          <p className="lead">We sell our beef, pork and chicken by the pound at the <a href="http://www.arizonafarmersmarkets.com/pageScottsdaleOldtown/ScottsdaleOTsat.htm" target="_blank">Scottsdale Old Town Farmer’s Market</a> every 
                  Saturday morning. The market is open in the fall through spring. It is at 3806 E. Brown Road in Scottsdale, AZ, 85251 
                  (corner of Brown & First Street).  Additionally, we take orders by email and deliver the product to our customers at 
                  the market.</p>
           
          <br />
        </div>
        <img className="img-responsive" width="800px" id={logos} src="https://s19.postimg.org/51ay9hzbn/big_daddy.jpg" />
        <div className="container">
          <h2 className="section-heading">It is lower in fat content than feedlot cattle.</h2>
          <p className="lead">Cattle that are grass-fed, the way nature intended, generally have one-third to one-half the amount of fat as
           their grain counterparts. We take it a step further and finish them on irrigated pastures and barley grass. Commercially used 
           grain feeding was developed as a way to speed up the growth process in cattle. However, as a result of the unnatural diet, 
           grain-fed beef contains a great deal more fat. It’s a myth that the fat content creates the tenderness in the meat. 
           The way cattle are raised and how long the meat is aged does this.</p> 
          <br />
        </div>


        <div className="container">
          <h2 className="section-heading">Its fat is “good fat.”</h2>
          <p className="lead">While grass-fed beef is low in bad fat, it is one of the best sources for the good fats, 
          including Omega-3 fatty acids and conjugated linoleic acid or CLA. Studies have shown that the American diet 
          is generally deficient in these valuable nutrients that have been linked directly to better brain function, 
          better heart health and a decreased risk of cancer.</p> 
          <br />
        </div>

        <div className="container">
          <p className="lead">It’s time for you to get your family on a healthier path through our meat and organic 
          vegetables and fruit!</p> 
          <br />
        </div>

      </div>
    )
  }
}

export default Grassfed
