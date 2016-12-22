import { Component, OnInit, NgZone } from '@angular/core';
import * as Uuid from "uuid";
import { PouchService } from "./pouchdb.service";

declare var bootbox: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public items: Array<any>;

    public constructor(private database: PouchService, private zone: NgZone) {
        this.items = [];
    }

    public ngOnInit() {
        this.database.sync("http://localhost:4984/example");
        this.database.getChangeListener().subscribe(data => {
            this.zone.run(() => {
                this.items.push(data.doc);
            });
        });
    }

    public insert() {
        bootbox.prompt("What do you want to add?", result => {
            if(result) {
                this.database.put({type: "list", title: result}, Uuid.v4());
            }
        });
    }

}
