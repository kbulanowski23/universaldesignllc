import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-outdoor',
  templateUrl: './outdoor.component.html',
  styleUrls: ['./outdoor.component.css']
})
export class OutdoorComponent {
  public outdoor: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 23; i++) {
      const src = 'assets/images/Outdoor/outdoor' + i + '.jpeg';
      const thumb = 'assets/images/Outdoor/outdoor' + i + '.jpeg';
      const album = {
         src: src,
         thumb: thumb
      };

      this.outdoor.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.outdoor, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
