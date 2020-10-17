import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../types/play.types';
import { Observable } from 'rxjs';
import { selectStatusState } from '../../store';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OverGuard implements CanLoad {
    constructor(
        private store: Store<AppState>,
        private router: Router) {
    }

    canLoad(): Observable<boolean> {
        return this.store
            .pipe(
                select(selectStatusState),
                take(1),
                map((status) => {
                    if (status.lives === 0 || (status.totalCount && status.curQuestionNumber === status.totalCount)) {
                        return true;
                    } else {
                        this.router.navigateByUrl('/play');
                    }
                })
            );
    }
}
