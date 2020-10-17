import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Question } from '../../types/play.types';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    getQuestions() {
        return this.http.get('https://opentdb.com/api.php', {
            params: {
                amount: '12',
                type: 'multiple'
            }
        })
            .pipe(
                map((resp: { results: Question[] }) => this.composeAnswers(resp.results))
            );
    }

    private composeAnswers(questions: Question[]): Question[] {
        return questions.map((item, i) => {
            item.id = i;
            item.answers = [...item.incorrect_answers];
            const index = Math.round(Math.random() * 10) % 4;
            item.answers.splice(index, 0, item.correct_answer);
            return item;
        });
    }

}
