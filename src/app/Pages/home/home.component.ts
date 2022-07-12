import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Interfaces/Productos';
import { RoutesService } from 'src/app/Service/routes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  routes:Producto[]=[]
  isLoading:boolean= true
  constructor(
    private routeService : RoutesService
  ) {
    this.routeService.getAll()
    .subscribe ({
      next:(data:any) =>{
      console.log("data",data);
      this.routes = data["results"];
      this.isLoading = false;
    }, error:error=>{} 
    })
  }

  ngOnInit(): void {
  }

}
