import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LightDevice } from "../model/light-device";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class HttpService {
    private lightsConfigurationUrl = "api/lights-configuration";
    private lightConfigurationUrl = "api/light-configuration";
    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        })
    };

    constructor(private http: HttpClient) {}

    getLightsConfiguration(): Observable<Array<LightDevice>> {
        return this.http.get<Array<LightDevice>>(this.lightsConfigurationUrl);
    }

    saveLightConfiguration(val: LightDevice): void {
        this.http
            .post<LightDevice>(
                this.lightConfigurationUrl,
                JSON.stringify(val),
                this.httpOptions
            ).subscribe();
    }
}
