import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
    answers = ['Octopus', 'Giant Squid', 'Jellyfish', 'Nubibranch'];
    showMessage = false;

    constructor() {
    }

    ngOnInit(): void {
    }

}
