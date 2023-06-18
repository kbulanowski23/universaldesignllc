import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.css']
})
export class InteriorComponent {
  public interior: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 22; i++) {
      const src = 'assets/images/Interior/interior' + i + '.jpeg';
      const thumb = 'assets/images/Interior/interior' + i + '.jpeg';
      const album = {
         src: src,
         thumb: thumb
      };

      this.interior.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.interior, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
