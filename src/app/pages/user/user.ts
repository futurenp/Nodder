import {Component, inject, input, signal} from '@angular/core';
import {PageCard} from '../../components/page-card/page-card';
import { TokenInput } from '../../components/token-input/token-input';
import { ResetUser } from '../../components/reset-user/reset-user';
import { PlatformsService } from '../../services/platforms-service';

@Component({
  selector: 'app-user',
  imports: [PageCard, TokenInput, ResetUser],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  public platformService = inject(PlatformsService);

  platforms = this.platformService.platforms();
}
