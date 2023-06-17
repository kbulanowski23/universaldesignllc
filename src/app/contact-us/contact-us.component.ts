import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  neededWorkArea = [
    { area: "Kitchen" },  
    { area: "Living Room" },  
    { area: "Bathroom" },
    { area: "Bedroom" },    
    { area: "Basement" },  
    { area: "Roof" },
    { area: "Front Yard" },
    { area: "Back Yard" },  
  ]
}
