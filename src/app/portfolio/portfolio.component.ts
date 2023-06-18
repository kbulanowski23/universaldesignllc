import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public mybreakpoint: number | undefined;
  constructor() { }
  ngOnInit() {
    this.mybreakpoint = (window.innerWidth <= 600) ? 1 : 6;
    }
    handleSize(event: any) {
    this.mybreakpoint = (event.target.innerWidth <= 600) ? 1 : 6;
    }
}
