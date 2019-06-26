import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '@/page/home/home.component';
import {LoginComponent} from '@/page/login/login.component';
import {RegisterComponent} from '@/page/register/register.component';
import {SettingsComponent} from '@/page/settings/settings.component';
import {MyFavoriteBooksComponent} from '@/page/my-favorite-books/my-favorite-books.component';
import {SubscriptionComponent} from '@/page/subscription/subscription.component';
import { ReadingbookComponent } from '@/page/readingbook/readingbook.component';
import {AuthGuard, SubscriptionGuard} from '@/_guard';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    {path: 'my-favorite-books', component: MyFavoriteBooksComponent, canActivate: [AuthGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
    {path: 'subscription', component: SubscriptionComponent, canActivate: [AuthGuard]},
    {path: 'readingbook', component: ReadingbookComponent, canActivate: [AuthGuard, SubscriptionGuard]},
    // otherwise redirect to home
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
