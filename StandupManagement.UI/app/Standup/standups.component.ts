import { Component, OnInit} from 'angular2/core';
import {ResourceService} from '../Services/resource.service'
import {IResource} from '../Interfaces/resource'
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Report} from '../Classes/Report'

@Component({
    selector: 'pm-standups',
    templateUrl: 'app/Standup/standups.component.html',
    providers: [ResourceService, HTTP_PROVIDERS]
})

export class StandupsComponent implements OnInit {
    selectedResource: string = "";
    header: string = "Team Report";
    availableResources: IResource[];
    resourceReports: Report[];
    constructor(private _resourceService: ResourceService) {
    }
    ngOnInit(): void {
        this._resourceService.getResources().subscribe(p => this.availableResources = p);
    }
    //ngDoCheck() {
    //    if (this.selectedResource == "6") {
    //        this._resourceService.getReportsByResourceId(this.selectedResource).subscribe(p => this.resourceReports = p);

    //    }
    //}
    onGetReport() {
            this._resourceService.getReportsByResourceId(this.selectedResource).subscribe(p => this.resourceReports = p);
    }
}