import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


questions:any[]=[];
currentQuestionIndex:number=0;
score:number=0;
quizFinished:boolean=false;


  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>('assets/json/question.json').subscribe(data=>this.questions=data.questions)
  }
  checkAnswer(seletedAnswer:string){
    const currentQuestion =this.questions[this.currentQuestionIndex];
    if(seletedAnswer===currentQuestion.correctAnswer){this.score++;}


    if(this.currentQuestionIndex===this.questions.length-1){
      this.quizFinished=true;
    }
    else{
      this.currentQuestionIndex++;
    }
  }
  
}







