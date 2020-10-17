import { AppModule } from './../app.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuItems = [{
    id: 1,
    name: 'French Fries',
    description: "Oily, salty and hot",
    price: 5,
    amount: 0,
    featured: false,
    image: 'https://cdn3.iconfinder.com/data/icons/fast-food-flat-tasty-happy-meal/512/French_fries-512.png'
    },
  {
    id: 2,
   name: 'Burger',
   description: 'Beefy, fresh and hot',
   price: 10,
   amount: 0,
   featured: true,
   image: 'https://webstockreview.net/images/burger-clipart-clear-background-20.png'
  },
   {
   id: 3,
   name: 'Soda',
   description: 'Sweeter than water and cold',
   price: 2,
   amount: 0,
   featured: false,
   image: 'https://webstockreview.net/images/film-clipart-soda-6.png'
}]

cart = 0;
total = 0;

upAmount(menuItem){
  menuItem.amount++;
  this.cart++;
  this.total += menuItem.price;
}

downAmount(menuItem){
  if(menuItem.amount > 0){
    menuItem.amount--;
    this.cart--;
    this.total -= menuItem.price;
  }
}

}
