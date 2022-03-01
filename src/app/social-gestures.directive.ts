import { ComponentFactoryResolver, Directive, OnInit, ElementRef  } from '@angular/core';
import { Animation, AnimationController,Gesture,GestureController } from '@ionic/angular';

@Directive({
  selector: '[appSocialGestures]'
})
export class SocialGesturesDirective {
  private translateValue: number;
  private started = false;


  constructor(private gestctl: GestureController, private animationctl: AnimationController, private element: ElementRef) {
}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    const gest: Gesture = this.gestctl.create({
      el: this.element.nativeElement,
      threshold: 0,
      gestureName : 'swipes',
      onStart: detail => this.swipeSlices(detail),
      onMove: detail => this.swipeSlices(detail)
    }, true);
    const anim: Animation = this.animationctl.create()
        .addElement(document.querySelector('.swipable'))
        .fromTo('transform', 'translateX(0)', `translateX(${this.translateValue}px)`);
    gest.enable();
  }

  swipeSlices(detail) {
      console.log('ok');
  }


}
