import { ElementRef, Injectable } from '@angular/core';
import { GestureController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SwappingService {


  private gestureX: any;


  constructor() { }



  public setupGesture(elementNode,gestureConst, name: string, gestctl: GestureController) {
    gestureConst =  gestctl.create({
      el: elementNode,
      threshold: 0,
      gestureName: name,
      onMove: ev => {
        this.gestureX = ev.deltaX;
        elementNode.style.transform = `translate(${this.gestureX}px)`;
      },
      onEnd: ev => {
        for (let i = 0; i <Math.ceil(ev.velocityX*10); i++) {
          if (this.gestureX > 0) {
            this.gestureX += 10;
            elementNode.style.transform = `translate(${this.gestureX}px)`;
            console.log(this.gestureX);
          }
          else {
            this.gestureX -= 10;
            elementNode.style.transform = `translate(${this.gestureX}px)`;
            console.log(this.gestureX);
          }
        }
      }
    }, true);
    console.log(elementNode);
    gestureConst.enable(true);
  }
}
