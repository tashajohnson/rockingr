import React from 'react'
import Title from 'react-title-component'
import { logos, largeFont } from '../styles.css'

class Cowboy extends React.Component {
  render() {
    return(
      <div>
        <Title render={ prev => `${prev} | About` }/>
        <img className="img-responsive" id={logos} src="http://s19.postimg.org/fii0r74wj/headshot.jpg" />
        <hr />
        <br />
        <div className="text-center">
          <br />
          <h2 className="section-heading">Ray Epps "The Cowboy"</h2>
          <br />
        </div>
        <br />
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-sm-6">
                    <div className="clearfix"></div>
                    <p className="lead">Ray Epps, owner of Rocking R Farms, stands out at the Scottsdale Farmer’s Market with his 6 foot, 
                    4-inch frame, broad smile and wide-brimmed cowboy hat. His excitement is contagious as he explains why 
                    his beef is the best meat you have ever tasted and why it is just as good for you as it tastes.</p>
                    <p className="lead">My husband Ray comes from a family of farmers and ranchers but a generational family 
          farm or ranch was never passed down through the family. He was determined to get that family tradition, 
          pride, and intimate approach to farming back through Rocking R Farms.</p>
          <p className="lead">His grandfather raised dairy cows, his mother’s father raised beef cattle and his dad 
          raised hogs while working in construction, which was the work that Ray did before he chose to start a farm 
          n the land we own in Queen Creek, AZ. So he closed his construction business and invested all of his efforts 
          and money into Rocking R Farms. He knew it was risky but it was the only way to make the farm a success and 
          to fulfill his lifelong dream.</p>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <figure>
                    <img className="img-responsive" src="https://s19.postimg.org/wd15dpxqr/216.jpg" alt="" />
                    {/*<figcaption className="pull-right section-heading">Ray on the farm with two of his neices</figcaption>*/}
                  </figure>
                </div>
            </div>
        </div>
        <br />
      
            <div className="container">

                <div className="row">
                    <div className="col-lg-6">
                        <figure>
                          <img className="img-responsive" src="https://s19.postimg.org/qenc3hes3/rayinbarn.jpg" alt="" />
                          {/*<figcaption className="pull-left section-heading">Our horses frolicking in the pasture</figcaption>*/}
                        </figure>
                    </div>
                    <div className="col-lg-6">
                        <div className="clearfix"></div>
                        <p className="lead">Ray began by raising and selling quality beef.  He wanted to focus just on cattle but the commodities market
                         is so undependable that he decided to expand.</p>
                         <p className="lead">He raised and sold beef, pork, chicken and eggs then expanded to barley grass, 
                         vegetables and fruit.</p>
                         <p className="lead">Ray was born in Arizona and has spent most of his life here. His family moved occasionally to California 
                         and Las Vegas due to employment opportunities, but they always came back to Arizona</p>
                        <p className="lead">I do the bookkeeping for the farm and I am director of sales, marketing and advertising for a national publishing 
                        company. I also breed and sell rare liver, lavender and blue AKC Shih Tzus with more than 70 champion lines.</p>
                    </div>
                </div>

        </div>
          
        <div className="container">
          <p className="lead">I was born in Washington and lived in Colorado and then Las Vegas where I met Ray. We were married in 1990 and moved to Arizona
           in 1993. We have nine children and 30 grandchildren who like to help us on the farm occasionally.</p> 
          <br />
        </div>
        
        
      </div>
    )
  }
}

export default Cowboy
