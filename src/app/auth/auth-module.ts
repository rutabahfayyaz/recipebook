import {NgModule} from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AuthGuard } from './auth.guard';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
declarations: [
    AuthComponent
],
imports:[
    FormsModule,
    CommonModule,
    RouterModule.forChild([
        { path: '', component: AuthComponent }
    ]),
    SharedModule
]

})
export class authModule{

}
