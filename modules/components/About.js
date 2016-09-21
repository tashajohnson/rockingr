import React from 'react'
import Title from 'react-title-component'
import { logos } from '../styles.css'

class About extends React.Component {
  render() {
    return(
      <div>
        <Title render={ prev => `${prev} | About` }/>
        <img className="img-responsive" id={logos} src="http://s19.postimg.org/h9o2e4d1v/Aboutus.jpg" />
        <hr />
        <h2 className="center-align">About Rocking R Farms</h2>
        <p>100% Natural from our farm to your family. We grow the best grass...the animals do the rest!</p> 
        <p>Rocking R Farms grass fed beef, pork, lamb and poultry are healthier for you and your family.</p>
        <p>Compared to feedlot meat, meat from grass fed animals contains less fat, cholesterol and calories.</p>
        <p>It also has more vitamin E, beta-carotene, vitamin C, and a number of health promoting fats including omega-3</p>
        <p>fatty acids and conjugated linoleic acid of CLA. Our pastures and barley grass are free of chemical fertilizers, pesticides and insecticides. We do not treat our livestock with hormones or feed them growth-promoting additives. Rocking R Farms grass fed animals are raised and processed locally, dry-aged 21 days and inspected under Arizona Department of Agriculture regulations.</p>
        <p>Our family farm is committed to providing customers with the healthiest, safest and highest quality grass fed meat.</p>
        
      </div>
    )
  }
}

export default About
