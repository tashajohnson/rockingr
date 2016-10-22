import React from 'react'
import Title from 'react-title-component'
import { logos, largeFont } from '../styles.css'

class About extends React.Component {
  render() {
    return(
      <div>
        <Title render={ prev => `${prev} | About` }/>
        <img className="img-responsive" id={logos} src="http://s19.postimg.org/h9o2e4d1v/Aboutus.jpg" />
        <hr />
        <br />
        <div className="text-center">
          <br />
          <h2 className={largeFont}>Our products are 100 percent natural from our farm to your family.</h2>
          <h2 className={largeFont}>We provide flavorful products for people with taste.</h2>
          <br />
        </div>

        <img id={logos} className="img-responsive" width="600px" src="https://s19.postimg.org/7xgjnbxqr/familyfarm.jpg"/>
        <br />

        <br />
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-sm-6">
                    <div className="clearfix"></div>
                    <h2 className="section-heading">We put quality first on our family farm.</h2>
                    <p className="lead">Rocking R Farms is family-owned and operated. 
          We keep it small so that we can control quality. 
          My wife Robyn and I guarantee every slice of meat and every heirloom tomato we sell. 
          We personally care for each plant grown on our farm, 
          making sure we can offer you the best organic heirloom products on the local market. 
          We select the best as if we are going to feed it to our own children and grandchildren. 
          In fact, we do!</p>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <figure>
                    <img className="img-responsive" src="https://s19.postimg.org/p4ftq1csz/248.jpg" alt="" />
                    {/*<figcaption className="pull-right section-heading">Ray on the farm with two of his neices</figcaption>*/}
                  </figure>
                </div>
            </div>
        </div>
        <br />
        <div className="container">
          <p className="lead">Robyn and I began the Rocking R Farms in 2010 because we wanted to provide 
          quality locally grown organic beef for the public. 
          I couldn’t find a great tasting grass-fed steak or organic tomato so I decided to grow and raise them myself. 
          We expanded over time to include pork, chicken, eggs, barley grass and vegetables.</p> 
          <br />
        </div>
      
            <div className="container">

                <div className="row">
                    <div className="col-lg-6">
                        <figure>
                          <img className="img-responsive" src="https://s19.postimg.org/454tj6txv/10322601_324812284340874_2050846915248774310_n.jpg" alt="" />
                          {/*<figcaption className="pull-left section-heading">Our horses frolicking in the pasture</figcaption>*/}
                        </figure>
                    </div>
                    <div className="col-lg-6">
                        <div className="clearfix"></div>
                        <p className="lead">Rocking R Farms represents who we want to be. 
                    We want to enjoy our life and what we do. 
                    It’s not just a means to make a living for us; it’s a love for a healthy life for our family 
                    and for you. It makes us look forward to every day, every time the first ripe tomatoes of the 
                    season are ready for harvest, for the days a new herd of cattle arrive, 
                    and for Saturdays at the farmer’s market when we get to meet with you and share our 
                    excitement for our products.</p>
                        <br />
                        <h2 className="section-heading">Our products</h2>
                        <p className="lead">Our products are 100 percent natural and organic from our farm to your family. 
                        Our animals are fed barley grass grown on our farm, so we know exactly what the cattle eat 
                        and how they are treated. Only natural products are used to grow our heirloom tomatoes, 
                        peppers and barley grass. Our chickens and pigs are fed organic feed, pasture and barley grass.</p>
                    </div>
                </div>

        </div>
          
        <div className="container">
          <p className="lead">The label “organic” food doesn’t guarantee good taste. You have to grow it just right to make that 
          tomato burst with flavor. That takes time and daily personal care. That’s something that can only be done on a small family farm. 
          I’m not after a beautiful tomato. I am after a beautiful <strong><em>tasting</em></strong> tomato. </p> 
          <br />
        </div>

        <div className="container">
          <p className="lead">Our tomatoes are grown in a professional greenhouse on our farm. We have taken great care to keep 
          temperatures, humidity and the environment perfect for organic tomatoes. Only natural organic-approved 
          products are used to fertilize our fruit and vegetables.</p> 
          <br />
        </div>

        <div className="container">
          <p className="lead">Our barley grass is grown in an automated and controlled organic environment that allows 
          us to grow it quickly without sacrificing quality.</p> 
          <br />
        </div>

        <div className="container">
          <p><em>Rocking R Farms is an LLC registered farm.</em></p> 
          <br />
        </div>
        
        
      </div>
    )
  }
}

export default About
