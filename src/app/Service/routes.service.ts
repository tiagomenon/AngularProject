import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseProducto } from '../Interfaces/Productos';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(
    private http: HttpClient
  ) {
  }
  getAll():Observable<ResponseProducto[]>{
    return this.http.get<ResponseProducto[]>(environment.apiEndpoint+"sites/MLA/search?q=iphone")
  }
  getById(id:any){
    return lastValueFrom(this.http.get(environment.apiEndpoint+"/items/"+id))
  }
}
