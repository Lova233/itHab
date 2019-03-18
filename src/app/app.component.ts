import { Component, HostBinding, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  quotes:any;
  randomQuote:string;
  randomCit:string;
  isMenuOpen:boolean=true;
  isPastOpen:boolean;
  isPresentOpen:boolean;
  isFutureOpen:boolean;


  constructor() { }


ngOnInit(){
    let quotesIndex = (Math.random() * 3)
    this.quotes=[
      {quote:"Infuse your life with action", cit:"Bradley Whitford"},
      {quote:"The future depends on what you do today", cit:"Mahatma Gandhi"},
      {quote:"All our dreams can come true, if we have the courage to pursue them", cit:"Walt Disney"},
      // {quote:"The future depends on what you do today", cit:"Mahatma Gandhi"},
      // {key:2, quote:"The future depends on what you do today", cit:"Mahatma Gandhi"},
      // {key:2, quote:"The future depends on what you do today", cit:"Mahatma Gandhi"},
    ]
    let quote = this.quotes[Math.floor((Math.random() * this.quotes.length))]
    this.randomQuote = quote.quote 
    this.randomCit = quote.cit
   
  }
menuOpenFuture(){
  this.isFutureOpen = true;
  this.isMenuOpen = !this.isMenuOpen;
} 
menuOpenPresent(){
  this.isPresentOpen = true;
  this.isMenuOpen = !this.isMenuOpen;
} 
menuOpenPast(){
  this.isPastOpen = true;
  this.isMenuOpen = !this.isMenuOpen;
} 
goToMainMenu(){
  this.isMenuOpen = !this.isMenuOpen;
  this.isFutureOpen = false;
  this.isPresentOpen = false;
  this.isPastOpen = false;
}



}


