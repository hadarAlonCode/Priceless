import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { runInThisContext } from 'vm';
// import './ConcertBid.css'

const moment = require('moment')
@inject("UserStore")
@inject("ConcertStore")
@observer

class ConcertBid extends Component {

    handleBid = (e) => {
        this.props.ConcertStore.handleBid(e.target.value)
    }
    makeBid = () => {
        console.log("makeBid ConcertBid")
        this.props.ConcertStore.makeBid()
    }
    render() {

        return (
            <div className="concert-bid">
                <input type="number" placeholder="$" value={this.props.ConcertStore.bid} onChange={this.handleBid}></input>
                <button onClick={this.makeBid}>Make a bid!</button>
                <div>Bid ends in {moment(this.props.ConcertStore.concert.ends_at).fromNow()}</div>

            </div>)
    }
}
// bid_end_date: Date,
//          bid_end_hour: Date,
export default ConcertBid