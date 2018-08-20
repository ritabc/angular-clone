import { Component } from '@angular/core';
import { Move } from './models/move.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  moves: Move[] = [
    new Move("Circle Left", "Circles", 8),
    new Move("Circle Right", "Circles", 8),
    new Move("3/4 Circle Left", "Circles", 6),
    new Move("3/4 Circle Right", "Circles", 6),
    new Move("1/2 Circle Left", "Circles", 4),
    new Move("1/2 Circle Right", "Circles", 4),
    new Move("Petronella Left", "Circles", 8),
    new Move("Petronella Right", "Circles", 8),
    new Move("Left Hand Star", "Stars", 8),
    new Move("Right Hand Star", "Stars", 8),
    new Move("3/4 Left Hand Star", "Stars", 6),
    new Move("3/4 Right Hand Star", "Stars", 6),
    new Move("1/2 Left Hand Star", "Stars", 4),
    new Move("1/2 Right Hand Star", "Stars", 4),
    new Move("Do-si-Do Across Set", "Swings, Do-si-Dos, and Shoulder Rounds" 8)
  ]

}
