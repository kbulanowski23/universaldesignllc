import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrls: ['./bathroom.component.css']
})
export class BathroomComponent {
  public bathroom: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 9; i++) {
      const src = 'assets/images/Bathroom/bathroom' + i + '.jpeg';
      const thumb = 'assets/images/Bathroom/bathroom' + i + '.jpeg';
      const album = {
         src: src,
         thumb: thumb
      };

      this.bathroom.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.bathroom, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
