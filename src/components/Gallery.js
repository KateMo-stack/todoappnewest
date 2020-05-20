import React, {Component} from 'react'
import kwiat1 from '../obrazki_kwiaty/kwiat1.jpg'
import kwiat2 from '../obrazki_kwiaty/kwiat2.jpg'
import kwiat3 from '../obrazki_kwiaty/kwiat3.jpg'
import kwiat4 from '../obrazki_kwiaty/kwiat4.jpg'
import kwiat5 from '../obrazki_kwiaty/kwiat5.jpg'
import kwiat6 from '../obrazki_kwiaty/kwiat6.jpg'
import kwiat7 from '../obrazki_kwiaty/kwiat7.jpg'
import kwiat8 from '../obrazki_kwiaty/kwiat8.jpg'
import kwiat9 from '../obrazki_kwiaty/kwiat9.jpg'




class Gallery extends Component {
  state = {
    content: ''
  }

    render(){
      return(
        <div className="grid-container">
          <div className="item1"><img src={kwiat1} alt="kwiat1"/></div>
          <div className="item2"><img src={kwiat2} alt="kwiat2"/></div>
          <div className="item3"><img src={kwiat3} alt="kwiat3"/></div>
          <div className="item4"><img src={kwiat4} alt="kwiat4"/></div>
          <div className="item5"><img src={kwiat5} alt="kwiat5"/></div>
          <div className="item6"><img src={kwiat6} alt="kwiat6"/></div>
          <div className="item7"><img src={kwiat7} alt="kwiat7"/></div>
          <div className="item8"><img src={kwiat8} alt="kwiat8"/></div>
          <div className="item9"><img src={kwiat8} alt="kwiat9"/></div>
        </div>
      )
    }

}

export default Gallery;