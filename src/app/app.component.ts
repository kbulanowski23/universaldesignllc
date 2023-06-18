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
    { img: 'assets/images/HomePageSlider/homepage1.jpeg' },  
    { img: 'assets/images/HomePageSlider/homepage2.jpeg' },  
    { img: 'assets/images/HomePageSlider/homepage3.jpeg' },  
    { img: 'assets/images/HomePageSlider/homepage4.jpeg' },  
    { img: 'assets/images/HomePageSlider/homepage5.jpeg' },  
    { img: 'assets/images/HomePageSlider/homepage6.jpeg' },  
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
