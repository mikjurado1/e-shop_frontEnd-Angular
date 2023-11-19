import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppConfigServiceService } from './app/shared/app-config-service.service';
import { AppModule } from './app/app.module';
import { Injector } from '@angular/core';


console.log('Iniciando la carga de la aplicación...');

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(moduleRef => {
    console.log('Módulo de la aplicación inicializado.');

    const injector: Injector = moduleRef.injector;
    const appConfigService: AppConfigServiceService = injector.get(AppConfigServiceService);

    console.log('Iniciando la carga de la configuración...');

    return appConfigService.initializeApp();
  })
  .then(() => {
    console.log('Configuración cargada con éxito.');

    console.log('Reiniciando el módulo de la aplicación...');
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  })
  .then(() => {
    console.log('Aplicación reiniciada con éxito.');
  })
  .catch(err => console.error('Error loading config:', err));

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
