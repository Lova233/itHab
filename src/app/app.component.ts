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




}


