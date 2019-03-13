import { Component, HostBinding, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  quotes:object;
  randomQuote:string;
  randomCit:string;
  
  constructor() { }


  ngOnInit(){
    let quotesIndex = Math.floor((Math.random() * 3) + 1)
    this.quotes=[
      {quote:"Infuse your life with action", cit:"Bradley Whitford"},
      {quote:"The future depends on what you do today", cit:"Mahatma Gandhi"},
      {quote:"All our dreams can come true, if we have the courage to pursue them", cit:"Walt Disney"},
      // {quote:"The future depends on what you do today", cit:"Mahatma Gandhi"},
      // {key:2, quote:"The future depends on what you do today", cit:"Mahatma Gandhi"},
      // {key:2, quote:"The future depends on what you do today", cit:"Mahatma Gandhi"},
    ]
    this.randomQuote = this.quotes[quotesIndex].quote 
    this.randomCit = this.quotes[quotesIndex].cit
   
  }




}


