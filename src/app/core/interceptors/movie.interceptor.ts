import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class MovieInterceptor implements HttpInterceptor{
    private token=environment.API_READ_ACCESS_TOKEN;
    private accessToken='Bearer ${token}';
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cloneRequest = req.clone({
            setHeaders:{
                Authorization:this.accessToken,
                'Content-Type':'application/json'
            }
        });
        return next.handle(cloneRequest);
    }
}