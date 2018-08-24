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
  movesForList: FirebaseListObservable<any[]>;

  constructor(private router: Router, private movesListService: MovesListService) { }

  ngOnInit() {
    this.movesForList = this.movesListService.getMoves();
  }

}
