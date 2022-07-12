import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Service/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLogin:boolean = false
  constructor(
    private usuariosService: UsuariosService
  ) {
    this.usuariosService.isLogin()
    .subscribe( {
      next:(login:boolean) => {
      this.isLogin = login;
    }, error:(error:any) => {
      console.log(error)
    }})
  }
  logOut(){
    this.usuariosService.logOut()
  }
  ngOnInit(): void {
  }

}
