import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {
  public kitchen: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 13; i++) {
      const src = 'assets/images/Kitchen/kitchen' + i + '.jpeg';
      const thumb = 'assets/images/Kitchen/kitchen' + i + '.jpeg';
      const album = {
         src: src,
         thumb: thumb
      };

      this.kitchen.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.kitchen, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
