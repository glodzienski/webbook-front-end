import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {IConfig, NgxMaskModule} from 'ngx-mask';

// Components
import {AppComponent} from './app.component';
import {HomeComponent} from './page/home/home.component';
import {LoginComponent} from './page/login/login.component';
import { MyFavoriteBooksComponent } from './page/my-favorite-books/my-favorite-books.component';
import {RegisterComponent} from './page/register/register.component';
import {SettingsComponent} from './page/settings/settings.component';
import {BookDetailComponent} from './_component/book-detail/book-detail.component';
import {UserFormComponent} from './_component/user-form/user-form.component';
import {LoadingComponent} from './_component/loading/loading.component';
import {AddressRegisterModalComponent} from './_component/address-register-modal/address-register-modal.component';
import {AddressSettingsComponent} from './_component/address-settings/address-settings.component';
import {SubscriptionComponent} from './page/subscription/subscription.component';
import {SubscriptionRegisterModalComponent} from './_component/subscription-register-modal/subscription-register-modal.component';
import {ReadingbookComponent} from './page/readingbook/readingbook.component';


// Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorInterceptorHelper} from '@/_helper/error.interceptor.helper';
import { BookCaseComponent } from './_component/book-case/book-case.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        SettingsComponent,
        UserFormComponent,
        LoadingComponent,
        AddressRegisterModalComponent,
        AddressSettingsComponent,
        BookDetailComponent,
        SubscriptionComponent,
        SubscriptionRegisterModalComponent,
        MyFavoriteBooksComponent,
        ReadingbookComponent,
        BookCaseComponent
    ],
    entryComponents: [
        AddressRegisterModalComponent,
        BookDetailComponent,
        SubscriptionRegisterModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatCheckboxModule,
        MatButtonModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatStepperModule,
        MatTabsModule,
        MatExpansionModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatBottomSheetModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        NgxMaskModule.forRoot(options)
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorHelper, multi: true},
        MatNativeDateModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
