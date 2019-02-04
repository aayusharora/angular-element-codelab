import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class SliderComponent implements OnInit {
  selectedIndex: number;
  transform: number;
  counter: number;

  constructor() {
    // this.selectedIndex = 0;
    // this.transform = 100;
    this.counter = 0;
  }

  sliderArray = [
    { img: 'http://bloquo.cc/img/works/1.jpg', alt: '', text: '365 Days Of weddings a year' },
    { img: 'http://bloquo.cc/img/works/2.jpg', alt: '', text: '365 Days Of weddings a year' },
    { img: 'http://bloquo.cc/img/works/3.jpg', alt: '', text: '365 Days Of weddings a year' },
    { img: 'http://bloquo.cc/img/works/4.jpg', alt: '', text: '365 Days Of weddings a year' },
    { img: 'http://bloquo.cc/img/works/5.jpg', alt: '', text: '365 Days Of weddings a year' }
  ];

  ngOnInit() {
    this.sliderAutorun()
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
    this.counter = x;   // Track the clicked slider to continue the autorun from them

  }

  keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }
  downSelected(i) {
    this.transform = 100 - (i) * 50;
    this.selectedIndex = this.selectedIndex + 1;
    if (this.selectedIndex > 4) {
      this.selectedIndex = 0;
    }
  }

  /** Runs the slider automatically */
  sliderAutorun() {
    this.keySelected(this.counter);
    this.counter = this.counter + 1;
    if (this.counter > 4) {
      this.counter = 0;
    }
    setTimeout(() => { this.sliderAutorun(); }, 5000);
  }

}
