import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  constructor() { }

  admin_api_url = 'http://localhost:54455/api';
  api_url = 'http://localhost:54456/api';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log('Outgoing HTTP request', request);

    const final_request = request.clone({
      url: request.url.replace('QAMS_API', this.api_url).replace('ADMIN_API', this.admin_api_url)
    });
    // return next.handle(request).pipe(
    //   tap((event: HttpEvent<any>) => {
    //     console.log('Incoming HTTP response', event);
    //   })
    // );
    return next.handle(final_request);
  }
}