import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LightDevice } from "../model/light-device";
import { Observable } from "rxjs";
import { TemperatureDevice } from "../model/temperature-device";

@Injectable({
    providedIn: "root"
})
export class HttpService {
    private lightConfigurationsUrl = "api/light-configurations";
    private lightConfigurationUrl = "api/light-configuration";
    private temperatureConfigurationsUrl = "api/temperature-configurations";
    private temperatureConfigurationUrl = "api/temperature-configuration";
    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        })
    };

    constructor(private http: HttpClient) {}

    getLightConfigurations(): Observable<Array<LightDevice>> {
        return this.http.get<Array<LightDevice>>(this.lightConfigurationsUrl);
    }

    saveLightConfiguration(val: LightDevice): void {
        this.http
            .post<LightDevice>(
                this.lightConfigurationUrl,
                JSON.stringify(val),
                this.httpOptions
            )
            .subscribe();
    }

    getTemparetureConfigurations(): Observable<Array<TemperatureDevice>> {
        return this.http.get<Array<TemperatureDevice>>(
            this.temperatureConfigurationsUrl
        );
    }

    saveTemperatureConfiguration(val: TemperatureDevice): void {
        this.http
            .post<TemperatureDevice>(
                this.temperatureConfigurationUrl,
                JSON.stringify(val),
                this.httpOptions
            )
            .subscribe();
    }
}
