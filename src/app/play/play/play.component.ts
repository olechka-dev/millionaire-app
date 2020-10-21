import { Component, OnInit } from '@angular/core';
import { AppState, PlayStatus } from '../../core/types/play.types';
import { select, Store } from '@ngrx/store';
import { getQuestions } from '../../core/store/questions/actions';
import { selectStatusState } from '../../core/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

    status$: Observable<PlayStatus>;

    constructor(private store: Store<AppState>, private router: Router) {
    }

    ngOnInit(): void {
        this.store.dispatch(getQuestions());
        this.status$ = this.store.pipe(
            select(selectStatusState),
            tap((status) => {
                if (status.lives === 0 || (status.totalCount && status.curQuestionNumber === status.totalCount)) {
                    this.router.navigate(['', { outlets: { 'game-over': 'over' } }]);
                }
            })
        );
    }

}
