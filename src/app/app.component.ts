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

    new Move("Do-si-Do Across Set", "Swings, Do-si-Dos, and Shoulder Rounds" 8),
    new Move("Do-si-Do on Side of Set", "Swings, Do-si-Dos, and Shoulder Rounds" 8),
    new Move("Right Shoulder Round Across Set", "Swings, Do-si-Dos, and Shoulder Rounds" 8)
    new Move("Right Shoulder Round on Side of Set", "Swings, Do-si-Dos, and Shoulder Rounds" 8),
    new Move("Swing on Side of Set", "Swings, Do-si-Dos, and Shoulder Rounds" 8),
    new Move("Swing Across Set", "Swings, Do-si-Dos, and Shoulder Rounds" 8),
    new Move("Balance and Swing Across Set", "Swings, Do-si-Dos, and Shoulder Rounds" 8),
    new Move("Balance and Swing on Side of Set", "Swings, Do-si-Dos, and Shoulder Rounds" 8),

    new Move("Ravens Allemande One and a Half", "Allemandes", 8),
    new Move("Larks Allemande One and a Half", "Allemandes", 8),
    new Move("Allemande One and a Half on Side of Set", "Allemandes", 8),
    new Move("Allemande One and a Half Across Set", "Allemandes", 8),
    new Move("Allemande Once Across Set", "Allemandes", 8),
    new Move("Allemande Once on Side of Set", "Allemandes", 8),

    new Move("Hey for Four", "Heys", 16),
    new Move("Half Hey", "Heys", 8),

    new Move("Long Lines, Forward and Back", "Miscellaneous", 8),
    new Move("Down the Hall, Turn Alone", "Miscellaneous", 16),
    new Move("Down the Hall, Turn as a Couple", "Miscellaneous", 16),
    new Move("Promenade Across", "Miscellaneous", 8),
    new Move("Right and Left Through", "Miscellaneous", 8),
    new Move("Ladies Chain", "Miscellaneous", 8),
    new Move("Pass Through", "Miscellaneous", 8),
    new Move("Pause", "Miscellaneous", 2),
    new Move("California Twirl", "Miscellaneous", ?),
    new Move("Box the Gnat", "Miscellaneous", ?),
    new Move("Long Wavy Lines", "Miscellaneous", ?),
    new Move("Ocean wave", "Miscellaneous", ?),
    new Move("Mad Robin Ravens in Front", "Miscellaneous", ?),
    new Move("Mad Robin Larks in Front", "Miscellaneous", ?),
  ]

}
