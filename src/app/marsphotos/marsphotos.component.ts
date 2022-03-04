import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Gesture, GestureController } from '@ionic/angular';
import { SwappingService } from '../swapping.service';

@Component({
  selector: 'app-marsphotos',
  templateUrl: './marsphotos.component.html',
  styleUrls: ['./marsphotos.component.scss'],
})
export class MarsphotosComponent implements AfterViewInit {
  @ViewChild('photos',{read: ElementRef}) photos: ElementRef;
  private gesture2: Gesture;

  constructor(private swappingService2: SwappingService, private element: ElementRef, private gestctl2: GestureController)

{

}
  async ngAfterViewInit() {
    this.swappingService2.setupGesture(this.photos.nativeElement, this.gesture2, 'photosgesture', this.gestctl2);

   }
  }
