import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { SettingsComponent } from './components/settings/settings.component';

export const appRoutes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'settings', component: SettingsComponent }
];
