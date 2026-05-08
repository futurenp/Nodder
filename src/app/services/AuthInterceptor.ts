import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageKeys } from '../model/StorageKeys';
import { inject } from '@angular/core';
import { StorageService } from './storage-service';
import { Platform } from '../model/Platform';
const keys = StorageKeys;

//probably shouldn't use an interceptor if using multiple
// (different) platforms, but this works for now
export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const storageService = inject(StorageService);

  if (!req.url.includes('api.modrinth.com')) {
    return next(req);
  }

  const platform: Platform = storageService.get(StorageKeys.Platforms.MODRINTH);

  //append the auth key to the request
  if (platform && platform.apiKey) {
    const reqWithAuth = req.clone({
      headers: req.headers.append('Authorization', platform.apiKey),
    });
    return next(reqWithAuth);
  }

  return next(req);
}
