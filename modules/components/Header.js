import React from 'react'
import { 
  introHeader, 
  introDivider, 
  introMessage, 
  contentsectiona, 
  contentsectionb,
  banner,
  networkname,
  mail, 
  circle } from '../styles.css'

class Header extends React.Component {
  render() {
    return(
      <div>

        <div className={introHeader}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={introMessage}>
                            <h1>Rocking R Farms</h1>
                            <h3>The Highest Quality in Grass Fed Meat</h3>
                            <hr className={introDivider} />
                            <ul className="list-inline intro-social-buttons">
                                <li>
                                    <a href="https://www.facebook.com/Rocking-R-Farms-156564927832278/" className="btn btn-default btn-lg"><i className="fa fa-facebook fa-fw"></i> <span className={networkname}>Facebook</span></a>
                                </li>
                                <li>
                                    <a href="http://www.arizonacommunityfarmersmarkets.com/" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-grain"></span> <span className={networkname}>AZ Farmers Markets</span></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/RockingRFarms" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className={networkname}>Twitter</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={contentsectiona}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-6">
                        <hr className="section-heading-spacer" />
                        <div className="clearfix"></div>
                        <h2 className="section-heading">About Rocking R Farms:</h2>
                        <h3>Meet the Cowboy</h3>
                        <p className="lead">Something here about the farm and a link to the "about" page.</p>
                        <a className="btn btn-lg btn-default" href="/about">About our Farm</a>
                    </div>
                    <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                        <img className="img-responsive" src="http://s19.postimg.org/fii0r74wj/headshot.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className={contentsectionb}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <hr className="section-heading-spacer-center"/>
                        <div className="clearfix"></div>
                        <h2 className="section-heading text-center">Our Products:</h2>
                        <p className="text-center">Click for more information</p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div id={circle} className="col-md-3 col-sm-12">
                        <a href="/beefandbeefalo"><img className="img-responsive center" src="https://s19.postimg.org/r992kguqb/cowround.png" alt=""/></a>
                        <br />
                        <h3 className="text-center">Beef/Beefalo</h3>
                    </div>
                    <div id={circle} className="col-md-3 col-sm-12">
                        <a href="/pork"><img className="img-responsive" src="https://s19.postimg.org/7stev25xv/piground.png"/></a>
                        <br />
                        <h3 className="text-center">Pork</h3>
                    </div>
                    <div id={circle} className="col-md-3 col-sm-12">
                        <a href="/chicken"><img className="img-responsive" src="https://s19.postimg.org/o14l7f8gj/chickenround.png"/></a>
                        <br />
                        <h3 className="text-center">Chicken</h3>
                    </div>
                    <div id={circle} className="col-md-3 col-sm-12">
                        <a href="/barleygrass"><img className="img-responsive" src="https://s19.postimg.org/ej4u7dms3/grassround.png"/></a>
                        <br />
                        <h3 className="text-center">Barley Grass</h3>
                    </div>
                </div>
            </div>
        </div>

        <div className={contentsectiona}>

            <div className="container">

                <div className="row">
                    <div className="col-lg-5 col-sm-6">
                        <hr className="section-heading-spacer" />
                        <div className="clearfix"></div>
                        <h2 className="section-heading">Grass Fed Meat:</h2>
                        <h3>Better for the Environment - Better for you</h3>
                        <p className="lead">Here will be a few snippets of info with a button to a page about why you should buy grass fed meat</p>
                        <a className="btn btn-default btn-lg" href="/grassfed">Why buy grassfed?</a>
                    </div>
                    <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                        <img className="img-responsive" src="http://s19.postimg.org/pgbvmlmz7/rayonhorse.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <div className={banner}>

            <div className="container">

                <div className="row">
                    <div className="col-lg-7">
                        <h2>Contact Rocking R Farms:</h2>
                    </div>
                    <div className="col-lg-5">
                        <a href="mailto:info@rockingrfarmsaz.com" className="btn btn-default btn-lg"><span id={mail} className="glyphicon glyphicon-envelope"></span>
                          <span className={networkname}>Email Us at <br /> info@rockingrfarms.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

      </div>
    )
  }
}
export default Header
