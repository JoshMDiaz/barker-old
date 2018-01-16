import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BackButtonComponent } from './back-button/back-button';
import { DogCardComponent } from './dog-card/dog-card';

@NgModule({
	declarations: [BackButtonComponent,
    DogCardComponent],
	imports: [IonicModule],
	exports: [BackButtonComponent,
    DogCardComponent]
})
export class ComponentsModule {}
