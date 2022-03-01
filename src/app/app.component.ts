import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AnimationController, GestureController, Gesture, Animation, GestureConfig } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('paragraph') p: ElementRef;
  @ViewChild('div') swipe: ElementRef;



  constructor(private gestctl: GestureController, private animationctl: AnimationController, private element: ElementRef) {

  }
  ngOnInit() {

  }

  async ngAfterViewInit() {
    const options: GestureConfig = {
      el: this.element.nativeElement,
      gestureName: 'my-gesture',
      onStart: ev => this.onMoveHandler(ev),
      onMove: ev => console.log(ev)
    };
    const gesture: Gesture = await this.gestctl.create(options);
		gesture.enable();
  }


  private onMoveHandler(ev) {
    console.log(ev);
  }

}
