import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { UploadpicsComponent } from './uploadpics/uploadpics.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './loginform/loginform.component';
import { RouteInfo } from './models/routeinfo.model';


/* const eroutes: Routes = [
  { path: RouteInfo.UPLOADID, component: UploadpicsComponent}
];*/

const lroutes: Routes = [
  { path: RouteInfo.HOME, component: LoginFormComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   /* RouterModule.forRoot(eroutes),*/
    RouterModule.forChild(lroutes)  
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
