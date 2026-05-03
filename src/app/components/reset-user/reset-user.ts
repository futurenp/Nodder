import { Component, inject } from '@angular/core';
import { PlatformsService } from '../../services/platforms-service';

@Component({
  selector: 'app-reset-user',
  imports: [],
  templateUrl: './reset-user.html',
  styleUrl: './reset-user.css',
})
export class ResetUser {
  platformService = inject(PlatformsService);

  onClick(){
    //replace with a nicer looking prompt later
    if(!confirm("Are you sure you want to reset user information?")) return;
    this.platformService.resetPlatformInformation();
  }
}
