import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationController, GestureController, Gesture, Animation } from '@ionic/angular';

@Component({
  selector: 'app-marsweather',
  templateUrl: './marsweather.component.html',
  styleUrls: ['./marsweather.component.scss'],
})
export class MarsweatherComponent implements OnInit {

  @ViewChild('paragraph') p: ElementRef;
  @ViewChild('div') swipe: ElementRef;

  constructor(private gestctl: GestureController, private animationctl: AnimationController, private element: ElementRef) { }



  ngOnInit() {

      const gest: Gesture = this.gestctl.create({
        gestureName: 'swipes',
        el: document.querySelector('.swipable'),
        onMove: detail => this.onMove(detail)
      }, true);
      /*const anim: Animation = this.animationctl.create()
          .addElement(document.querySelector('.swipable'))
          .fromTo('transform', 'translateX(0)', `translateX(${this.translateValue}px)`);*/
      gest.enable();
    }
    private onMove(detail) {
      const type = detail.type;
      const currentX = detail.currentX;
      const deltaX = detail.deltaX;
      const velocityX = detail.velocityX;
      console.log('ok');

      document.querySelector('.swipable').innerHTML = `
        <div>Type: ${type}</div>
        <div>Current X: ${currentX}</div>
        <div>Delta X: ${deltaX}</div>
        <div>Velocity X: ${velocityX}</div>
      `;
    }


}
