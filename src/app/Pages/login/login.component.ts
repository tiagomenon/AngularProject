
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Service/usuarios.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private usuarioService: UsuariosService
  ) { }
  login(){
    this.usuarioService.Login()
  }
  ngOnInit(): void {
  }

}
