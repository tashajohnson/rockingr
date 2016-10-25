import React from 'react'
import { logos } from '../styles.css'
import Title from 'react-title-component'

class Lamb extends React.Component {
  render() {
    return(
      <div>
      	<Title render={ prev => `${prev} | Beef` }/>
        <img className="img-responsive" id={logos} src="https://s19.postimg.org/vyzte4dn7/lamb.jpg" />
        <hr />
        <br />
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-sm-6">
                    <div className="clearfix"></div>
                    <br />
                    <p className="lead">The lambs from Rocking R Farms are fed on pasture and barley grass
                    until processing. We process our lambs at 1 year of age to 
        						contribute to the tenderness and the mild flavor of the meat. As with all Rocking R Farms animals
        						our lambs are organic, hormone and antibiotic free.</p>
        						<p className="lead">Lamb is an excellent source of protein and is low in fat. The meat is 
        						a great source of B Vitamins and Iron.</p>
        						<p className="lead">Be careful not to overcook lamb or the natural tenderness will be lost.</p>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <figure>
                    <img className="img-responsive" src="https://s19.postimg.org/r8l5ydwyb/lambs3.jpg" alt="" />
                    {/*<figcaption className="pull-right section-heading">Ray on the farm with two of his neices</figcaption>*/}
                  </figure>
                </div>
            </div>
        </div>
        <br />
        
      </div>
    )
  }
}

export default Lamb
