import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AnimationController, GestureController, Gesture, Animation, GestureConfig, DomController} from '@ionic/angular';
import { SwappingService } from '../swapping.service';

@Component({
  selector: 'app-marsweather',
  templateUrl: './marsweather.component.html',
  styleUrls: ['./marsweather.component.scss'],
})
export class MarsweatherComponent  implements AfterViewInit{

@ViewChild('weather',{read: ElementRef}) weather: ElementRef;
private gesture: Gesture;





constructor(private swappingService: SwappingService, private element: ElementRef, private gestctl: GestureController)

{

}
  async ngAfterViewInit() {
    this.swappingService.setupGesture(this.weather.nativeElement, this.gesture, 'weathergesture', this.gestctl);

   }
  }
