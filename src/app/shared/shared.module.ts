import { ModuleWithProviders, NgModule } from '@angular/core';
import { SkipExpiredPipe } from './pipes';

const SHARED_PROVIDERS = [];
const SHARED_PIPES = [
  SkipExpiredPipe
];

@NgModule({
  imports: [],
  exports: [
    // pipes should be available for other modules that imports SharedModule
    ...SHARED_PIPES
  ],
  declarations: [
    ...SHARED_PIPES
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: SharedModule,
      providers: [...SHARED_PROVIDERS]
    };
  }
}
