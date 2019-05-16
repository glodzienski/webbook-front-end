import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({providedIn: 'root'})
export class AlertService {

    constructor(public snackBar: MatSnackBar) { }

    success(message: string) {
        const config = {
            panelClass: ['green', 'darken-2']
        };
        this.snackBar.open(message, '', config)
            ._dismissAfter(4000);
    }

    error(message: string) {
        const config = {
            panelClass: ['red', 'darken-2']
        };
        this.snackBar.open(message, '', config)
            ._dismissAfter(4000);
    }
}
