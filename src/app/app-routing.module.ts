import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '@/_guard/auth.guard';
import {HomeComponent} from '@/page/home/home.component';
import {LoginComponent} from '@/page/login/login.component';
import {RegisterComponent} from '@/page/register/register.component';
<<<<<<< HEAD
import {ReadingbookComponent} from '@/page/readingbook/readingbook.component';
=======
import {SettingsComponent} from '@/page/settings/settings.component';
import {SubscriptionComponent} from '@/page/subscription/subscription.component';
>>>>>>> b7dc5003edb0fd0195ce16681e317ea7a59ae2e0

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
<<<<<<< HEAD
    {path: 'book/read', component: ReadingbookComponent},
=======
    {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
    {path: 'subscription', component: SubscriptionComponent, canActivate: [AuthGuard]},
>>>>>>> b7dc5003edb0fd0195ce16681e317ea7a59ae2e0
    // otherwise redirect to home
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
