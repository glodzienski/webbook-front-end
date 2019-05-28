import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({providedIn: 'root'})
export class AlertHelper {

    constructor(public snackBar: MatSnackBar) { }

    public success(message: string): void {
        const config = {
            panelClass: ['green', 'darken-2']
        };
        this.snackBar.open(message, '', config)
            ._dismissAfter(4000);
    }

    public error(message: string): void {
        const config = {
            panelClass: ['red', 'darken-2']
        };
        this.snackBar.open(message, '', config)
            ._dismissAfter(4000);
    }

    public warn(message: string): void {
        const config = {
            panelClass: ['amber', 'darken-4']
        };
        this.snackBar.open(message, '', config)
            ._dismissAfter(4000);
    }
}
