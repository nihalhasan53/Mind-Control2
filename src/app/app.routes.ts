import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RandomGeneratorComponent } from './randomgenerator/randomgenerator.component';
import { StarterPageComponent } from './starterpage/starterpage.component';

export const routes: Routes = [
  { path: 'random', component: RandomGeneratorComponent },
  { path: '', component: StarterPageComponent },
];
