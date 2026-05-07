import { Component } from '@angular/core';
import { PageCard } from '../../components/page-card/page-card';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-home',
  imports: [PageCard, NgxTypedJsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
