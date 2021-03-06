import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CustomHeaders } from '../http';
import { MatSnackBar } from '@angular/material';
import { catchError } from 'rxjs/operators';
import { UserService } from '@shared/user';
import { TokenService } from '@core/helpers/token';

@Injectable()
export class TeardownInterceptor implements HttpInterceptor {
    constructor(
        private userService: UserService,
        private snackbar: MatSnackBar,
        private tokenService: TokenService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = this.removeHeaders(req.headers, ...Object.keys(new CustomHeaders()));
        console.log(this.userService);
        if (this.userService.isAuthenticated) {
            headers = headers.set('Authorization', `${this.tokenService.token}`);
        }

        return next.handle(req.clone({ headers }))
            .pipe(
                // retry(3),
                catchError((event: HttpErrorResponse) => {
                    if (event instanceof HttpErrorResponse) {
                        switch (event.status) {
                            case 401:
                                this.userService.logout();
                                break;
                            case 500:
                                this.snackbar.open(`An error occurred to the server, please contact the maintenance`);
                                break;
                            case 404:
                                return throwError('ENDPOINT NOT FOUND');
                            default:
                                break;
                        }
                    }
                    return throwError(event.error);
                })
            );
    }

    private removeHeaders(requestHeaders: HttpHeaders, ...customHeaders) {
        customHeaders.forEach(one => {
            if (requestHeaders.has(one)) {
                requestHeaders = requestHeaders.delete(one);
            }
        });
        return requestHeaders;
    }

}
