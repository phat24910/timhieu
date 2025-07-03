import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-photo',
  template: `
    <img src="https://i.pravatar.cc/150?img=1" alt="Profile Photo">
  `,
  styles: [`
    img {
      border-radius: 50%;
      encapsulation: ViewEncapsulation.None;
    }
  `]
})
export class ProfilePhotoComponent { }
