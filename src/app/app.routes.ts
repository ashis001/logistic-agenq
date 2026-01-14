import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { OperationsComponent } from './features/operations/operations.component';
import { SettingsComponent } from './features/settings/settings.component';
import { AboutComponent } from './features/about/about.component';
import { GuideComponent } from './features/guide/guide.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'operations', component: OperationsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'guide', component: GuideComponent },
];
