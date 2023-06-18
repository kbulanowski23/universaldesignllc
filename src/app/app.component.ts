import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  isHomeRoute() {
    return this.router.url === '/';
  }
  
  title = 'Universal Design LLC';

  images = [  
    { img: "../assets/images/1.jpeg" },  
    { img: "../assets/images/2.jpeg" },  
    { img: "../assets/images/3.jpeg" },  
    { img: "../assets/images/4.jpeg" },  
    { img: "../assets/images/5.jpeg" },  
    { img: "../assets/images/6.jpeg" },  
  ];  
  
  // slickConfig: Slick.Config = {
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 2,
  //   dots: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000
  // };

  slideConfig = { 
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000
  };
  addSlide() {
  }
  removeSlide() {
    this.images.length = this.images.length - 1;
  }
  slickInit(e: any) {
  }
  breakpoint(e: any) {
  }
  afterChange(e: any) {
  }
  beforeChange(e: any) {
  }
}
