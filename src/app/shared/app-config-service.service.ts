import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AppConfigServiceService {
  private config: any;
  private configLoadedSubject = new BehaviorSubject<boolean>(false);
  public configLoaded = this.configLoadedSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<any> {
    console.log("Intentando cargar configuración desde: '../../assets/config.json'");
    return this.http.get('../../assets/config.json').pipe(
      tap(config => {

        this.config = config;
        console.log("Configuración cargada exitosamente:", this.config);
      }),
      catchError(error => {
        console.error("Error al cargar la configuración:", error);
        return throwError(() => error);
      })
    );
  }

  
  get apiBaseUrl(): string{
    console.log("this.config apiBaseUrl():", this.config)
    console.log("this.config.apiUrl apiBaseUrl():", this.config.apiUrl)

    // if (!this.config) {
    //   console.warn("La configuración aún no está cargada.");
    //   return null;
    // }
    console.log("this.config apiUrl:", this.config.apiUrl);

    return this.config.apiUrl;
  }

  initializeApp(): Promise<any> {
   
    return new Promise((resolve, reject) => {
      this.loadConfig().subscribe({
        next: (config) => {
          this.config = config;
          console.log('Configuración cargada:', this.config);


          resolve(true);
        },
        error: (error) => {
          console.log("this.config fracaso:", this.config)

          console.error('Error al cargar la configuración:', error);
          reject(error);
        }
      });
    });
  }
}
