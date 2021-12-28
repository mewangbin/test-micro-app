import './public-path';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare global {
  interface Window {
    microApp: any;
    __MICRO_APP_NAME__: string;
    __MICRO_APP_ENVIRONMENT__: string;
  }
}

let app: NgModuleRef<AppModule> | null = null;

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((res: NgModuleRef<AppModule>) => (app = res))
  .catch((err) => console.error(err));

// 监听卸载操作
window.addEventListener('unmount', () => {
  if (app) {
    app.destroy();
    app = null;
  }
});
