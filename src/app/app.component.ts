import { Component } from '@angular/core';
// import { Slick } from "ngx-slickjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    // this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    this.images.length = this.images.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
