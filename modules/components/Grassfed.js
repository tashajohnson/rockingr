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
 
        <h2 className="center-align">Better for you - Better for the Environment</h2>
        <p>...It is the diet which maintains true health for humans and animals alike!
Barley grass contains one of the most amazing nutrients, chlorophyll (liquid oxygenated sunshine) and a natural detoxi er that rids the intestines of stored toxins. Chlorophyll bursting barley grass is an excellent nutritional source for humans and animals. Young barley grass contains all the vitamins, minerals, antioxidants, detoxifying compounds, proteins and enzymes that keep the body healthy.
Barley grass contains P4D1; it has a strong anti-in ammatory action and has been shown to repair DNA in the body’s cells. P4D1 aids in the prevention of carcinogenesis, aging, and cell death.
Barley grass helps in the treatment of a variety of illnesses including arthritis, migraine headaches, asthma, fatigue and gastro-intestinal disorders, and can help in clarifying the skin. Barley grass is also credited with helping in more serious illnesses such as
blood clots, diabetes and cancer.</p>
      </div>
    )
  }
}

export default Grassfed
