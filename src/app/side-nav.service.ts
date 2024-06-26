import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SideNavService {
    public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor() { }


    public toggle() {
        return this.sideNavToggleSubject.next(null);
    }
}
