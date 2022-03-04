import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Gesture, GestureController } from '@ionic/angular';
import { SwappingService } from '../swapping.service';

@Component({
  selector: 'app-marsnumbers',
  templateUrl: './marsnumbers.component.html',
  styleUrls: ['./marsnumbers.component.scss'],
})
export class MarsnumbersComponent implements AfterViewInit {
  @ViewChild('numbers',{read: ElementRef}) numbers: ElementRef;
  private gesture3: Gesture;

  constructor(private swappingService3: SwappingService, private element: ElementRef, private gestctl3: GestureController)

  {

  }
    async ngAfterViewInit() {
       this.swappingService3.setupGesture(this.numbers.nativeElement, this.gesture3, 'numbersgesture', this.gestctl3 );

     }
    }
