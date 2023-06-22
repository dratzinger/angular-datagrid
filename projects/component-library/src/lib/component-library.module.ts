import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './proxies';
import { defineCustomElements } from '@revolist/revogrid/loader';


@NgModule({
  declarations: [DIRECTIVES],
  imports: [],
  exports: [DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true,
    },
  ],
})
export class RevoGridModule {}
