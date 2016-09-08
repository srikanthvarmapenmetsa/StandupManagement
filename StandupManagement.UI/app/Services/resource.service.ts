import { Injectable } from 'angular2/core';
import {IResource} from '../Interfaces/resource'
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Report} from '../Classes/Report'
import 'rxjs/Rx';

@Injectable()
export class ResourceService {
    private _resourceUrl = "http://localhost/StandupManagement.Services/ResourceService.svc/GetResources";
    private _resourcedataUrl = "http://localhost/StandupManagement.Services/ResourceService.svc/GetReportsByResourceId";
    constructor(private _http: Http) {
    }

    getResources(): Observable<IResource[]> {
        if (this._http != null) {
            return this._http.get(this._resourceUrl)
                .map((res: Response) => <IResource[]>JSON.parse(res.json()));
        }
    }

    getReportsByResourceId(resourceId: string): Observable<Report[]> {
        if (this._http != null) {
            return this._http.get(this._resourcedataUrl + "/" + resourceId)
                .map((res: Response) => <Report[]>JSON.parse(res.json()));
        }
    }
}