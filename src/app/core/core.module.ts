import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ApiService } from './services/api.service';

const CORE_PROVIDERS = [
  ApiService
];

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // throw an error when this module is imported somewhere else except AppModule
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  // provide services for the application
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: CoreModule,
      providers: [...CORE_PROVIDERS]
    };
  }
}
