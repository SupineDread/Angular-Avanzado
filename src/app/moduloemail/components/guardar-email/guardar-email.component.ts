import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'guardar-email',
  template: `
      <h4>{{title}}</h4>
      <input type="text" [(ngModel)]="emailContacto">
      <button (click)="saveEmail()">Guardar email</button>
  `,
})
export class GuardarEmailComponent{
  title = 'Guardar email';

  emailContacto: string

  saveEmail(){
      localStorage.setItem('emailContacto', this.emailContacto)
  }
}