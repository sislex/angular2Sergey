import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';


const ROUTES: Routes = [
  { path: '',           component: AboutComponent },
  { path: 'about',    component: AboutComponent },
  { path: 'contacts',      component: ContactsComponent },
  { path: '**',         component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


