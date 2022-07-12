import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/Interfaces/Productos';
import { UsuariosService } from 'src/app/Service/usuarios.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  data!:Producto
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
  ngOnInit(): void {
  }

}
