import { Component, Injectable } from 'angular2/core';
import {StandupsComponent} from './Standup/standups.component'
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'pm-app',
    template: `
            <pm-standups></pm-standups> `,
    directives: [StandupsComponent],
    providers:[HTTP_PROVIDERS]
})

export class AppComponent {
    pageTitle: string = 'Standup Management ';
}

