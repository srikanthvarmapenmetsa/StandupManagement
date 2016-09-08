import { Injectable } from 'angular2/core';
import {IResource} from '../Interfaces/resource'
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ResourceService {
    private _resourceUrl = "http://localhost/StandupManagement.Services/ResourceService.svc/GetResources";
    constructor(private _http: Http) {
    }

    getResources(): Observable<IResource[]> {
        if (this._http != null) {
            return this._http.get(this._resourceUrl)
                .map((res: Response) => <IResource[]>JSON.parse(res.json()));
        }
    }
}