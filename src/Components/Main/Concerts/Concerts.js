import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import './Concerts.css'
import ConcertBox from '../ConcertBox/ConcertBox'

@inject("ConcertsStore")
@observer
class Concerts extends Component {
   render() {
      return (
         <div className="concerts">
            {this.props.ConcertsStore.concerts.map(c => <ConcertBox concert={c} />)}
            {/* <Link to="/concertpage" className="Concerts"> specifiec Concert </Link> */}
         </div>)
   }
}
export default Concerts