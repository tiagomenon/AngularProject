import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutesService } from 'src/app/Service/routes.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto:any
  isLoading:boolean = true
  constructor(
    private activatedRoute: ActivatedRoute,
    private routesService: RoutesService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id", id)
    this.routesService.getById(id)
    .then(data=>{
      this.producto = data
    })
    .catch(error =>{
      console.log("error", error)
    })
    .finally(() => {
      this.isLoading = false;
    })
  }

  ngOnInit(): void {
  }

}
