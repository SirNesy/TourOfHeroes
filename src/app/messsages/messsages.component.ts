import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messsages',
  templateUrl: './messsages.component.html',
  styleUrls: ['./messsages.component.css']
})
export class MesssagesComponent {
  constructor (public messageService: MessageService){} 
}
