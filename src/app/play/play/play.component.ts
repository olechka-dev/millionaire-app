import { Component, OnInit } from '@angular/core';
import { AppState, PlayStatus } from '../../core/types/play.types';
import { select, Store } from '@ngrx/store';
import { getQuestions } from '../../core/store/questions/actions';
import { selectStatusState } from '../../core/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

    status$: Observable<PlayStatus>;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit(): void {
        this.store.dispatch(getQuestions());
        this.status$ = this.store.pipe(
            select(selectStatusState)
        );
    }

}
