import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '@/_guard/auth.guard';
import {HomeComponent} from '@/page/home/home.component';
import {LoginComponent} from '@/page/login/login.component';
import {RegisterComponent} from '@/page/register/register.component';
import {SettingsComponent} from '@/page/settings/settings.component';

const routes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
