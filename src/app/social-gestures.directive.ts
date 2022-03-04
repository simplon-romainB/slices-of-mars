import { ComponentFactoryResolver, Directive, OnInit, ElementRef, AfterViewInit  } from '@angular/core';
import { Animation, AnimationController,DomController,Gesture,GestureController } from '@ionic/angular';

@Directive({
  selector: '[appSocialGestures]'
})
export class SocialGesturesDirective {
  private translateValue: number;
  private started = false;


  constructor(private gestctl: GestureController, private animationctl: AnimationController, private element: ElementRef, private domCtrl: DomController) {
}

}





