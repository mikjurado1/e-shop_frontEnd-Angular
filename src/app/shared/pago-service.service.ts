import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PagoServiceService {

  private apiUrl = environment.apiUrl + '/pagos';; // Ajusta según sea necesario

  constructor(private http: HttpClient) { }

  crearSesionStripe(clientProductos: any[]): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/crear-sesion`, clientProductos);
  }

}
