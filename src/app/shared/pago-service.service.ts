import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigServiceService } from './app-config-service.service';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PagoServiceService {
    private apiUrl!: string;
  //private apiUrl = environment.apiUrl + '/pagos'; // Ajusta según sea necesario

  constructor(private http: HttpClient, private configService: AppConfigServiceService) { 
    this.configService.configLoaded.subscribe(() => {
      this.apiUrl = this.configService.apiBaseUrl + '/pagos';
      console.log("llamando a this.apiUrl", this.apiUrl)
    });
  }

  crearSesionStripe(clientProductos: any[]): Observable<string> {
    //this.apiUrl = this.configService.apiBaseUrl + '/pagos';

    // if (!this.apiUrl || this.apiUrl.includes('null')) {
    //   // Manejar la situación donde apiUrl no está disponible o no se ha configurado correctamente
    //   return throwError(() => new Error('La URL de la API no está disponible o no está configurada correctamente.'));
    // }
    return this.http.post<string>(`${this.apiUrl}/crear-sesion`, clientProductos);
  }
}
