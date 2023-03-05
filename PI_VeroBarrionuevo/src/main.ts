import { enableProdMode, getPlatform } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // try {
  //   platformBrowserDynamic().bootstrapModule(AppModule).catch(e => {
  //     console.log('async');
  //     getPlatform().destroy();
  //   });
  // } catch (err) {
  //   console.log('sync');
  //   getPlatform().destroy();
  // }