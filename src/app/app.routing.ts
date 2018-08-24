import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { CreateYourOwnComponent } from './create-your-own/create-your-own.component';
import { DesignedDancesComponent } from './designed-dances/designed-dances.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'create-your-own',
    component: CreateYourOwnComponent
  },
  {
    path: 'designed-dance',
    component: DesignedDancesComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
