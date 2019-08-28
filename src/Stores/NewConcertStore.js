import { observable, computed, action } from 'mobx'
import axios from 'axios'
import { UserStore } from './UserStore'



let User = new UserStore

export class NewConcertStore {
   @observable newConcert
   @observable bid

   constructor() {
      this.newConcert = {
         artist: "",
         date: Date,
         hour: Date,
         country: "",
         city: "",
         venue: "",
         num_of_tickets: Number,
         asked_price: Number,
         original_price: Number,
         additional_info: "",
         seller: User.userId
      }
      this.bid = {
         idBid: false,
         bid_end_date: Date,
         bid_end_hour: Date,

      }
   }

   
   @action saveConcert = async (concertInfo) => {
      let concert = { ...concertInfo }
      if (concert.artist && concert.date && concert.hour && 
         concert.country && concert.city && concert.venue && 
         concert.num_of_tickets && concert.asked_price) {
         concert.seller = this.newConcert.seller
         console.log(this.newConcert.seller)
         await axios.post(`http://localhost:5000/concert`, concert)
         this.newConcert = {
            artist: "",
            date: Date,
            hour: Date,
            country: "Israel",
            city: "",
            venue: "",
            num_of_tickets: Number,
            asked_price: Number,
            original_price: Number,
            additional_info: "",
         }
      }else{
         alert("you have an empty mandatory field")
      }
   }

   @action handleInput = (name, value) => {
      console.log(value)
      this.newConcert[name] = value
   }

   @action handleBidInput = (name, value) => {
      console.log(value)
      this.bid[name] = value
   }

   @action chooseBid = () => {
      this.bid.isBid = true
   }

   @action chooseFixedPrice = () => {
      this.bid.isBid = false
   }
}






