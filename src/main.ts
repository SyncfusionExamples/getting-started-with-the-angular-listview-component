import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {registerLicense} from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
registerLicense("ORg4AjUWIQA/Gnt2VVhhQlFac11JW3xNYVF2R2FJe1RzdF9DZkwgOX1dQl9hSXtTcEVhWndceXFdQmY=");
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
