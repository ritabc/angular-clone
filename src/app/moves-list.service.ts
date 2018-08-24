import { Injectable } from '@angular/core';
import { MoveForList } from './models/move-for-list.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MovesListService {
  moves: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.moves = database.list('listOfMoves/');
  }

  getMoves() {
    return this.moves;
  }

  getMoveByID(albumId: string) {
    return this.database.object('listOfMoves/' + albumId)
  }

}
