import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieInterceptor implements HttpInterceptor{
    private accessToken='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzE1ZGI3MGYwOWIxYmUyMjc3MzQ5MzA3ZjhmNmM5ZSIsIm5iZiI6MTcyMzEyMTA1NS4wMzc0MzcsInN1YiI6IjY2OTYwYjdjZGQ1NzRiOTc1YjczYWFiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XfjkGsJRGnuhL-123RCp-mbgt6tH9-XmFMyyKBoL8ms';
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