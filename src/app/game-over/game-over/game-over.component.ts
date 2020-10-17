import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState, PlayStatus } from '../../core/types/play.types';
import { select, Store } from '@ngrx/store';
import { selectStatusState } from '../../core/store';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-game-over',
    templateUrl: './game-over.component.html',
    styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {
    name = new FormControl('', Validators.required);
    status$: Observable<PlayStatus>;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit(): void {
        this.status$ = this.store.pipe(
            select(selectStatusState),
            take(1)
        );
    }

    onNameSubmit() {
        window.open('/play', '_self');
    }

}
