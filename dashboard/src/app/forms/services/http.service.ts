import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LightDevice } from '../model/light-device';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private lightsSettingsUrl = '/api/lights-settings';

  constructor(private http: HttpClient) { }

  getLightsSettings(): Observable<Array<LightDevice>> {
    return this.http.get<Array<LightDevice>>(this.lightsSettingsUrl);
  }
}
