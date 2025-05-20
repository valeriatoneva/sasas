import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { MasterView1Component } from './master-view-1/master-view-1.component';

export const routes: Routes = [
  { path: '', redirectTo: 'master-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master-view', loadChildren: () => import('./master-view/master-view.routes').then(m => m.routes), data: { text: 'Master-View' } },
  { path: 'master-view-1', component: MasterView1Component, data: { text: 'Master-View-1' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
