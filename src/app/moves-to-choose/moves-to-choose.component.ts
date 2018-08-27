import { Component, OnInit } from '@angular/core';
import { MoveForList } from '../models/move-for-list.model';
import { Router } from '@angular/router';
import { MovesListService } from '../moves-list.service';
import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-moves-to-choose',
  templateUrl: './moves-to-choose.component.html',
  styleUrls: ['./moves-to-choose.component.css'],
  providers: [MovesListService]
})
export class MovesToChooseComponent implements OnInit {
  movesForList; //FirebaseListObservable<any[]>;
  moveCategories: string[] = [];

  constructor(private router: Router, private movesListService: MovesListService) {
  }

  ngOnInit() {
    this.movesListService.getMoves().subscribe(dataLastEmittedFromObserver => {
      this.movesForList = dataLastEmittedFromObserver;
    });
    console.log(this.movesForList)
    this.movesForList.forEach(move => {
      console.log(move)
      if (!(this.moveCategories.includes(move.category))) {
        this.moveCategories.push(move.category);
      }
    })
  };



}
