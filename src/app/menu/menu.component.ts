import { InteractionService } from './../Services/interaction.service';
import { AuthService } from './../../../app-ayudavial/src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private auth:AuthService, private interaction:InteractionService, private router:Router) { }

  ngOnInit() {}

  logout(){
    this.auth.logout();
    this.interaction.presentToast('Sesion Finalizada')
    this.router.navigate(['/inicio'])
  }
}
