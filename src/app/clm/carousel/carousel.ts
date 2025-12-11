import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { CLMCarouselItem } from '../carousel-item/carousel-item';

@Component({
  selector: 'app-clm-carousel',
  imports: [
    CLMCarouselItem,
  ],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class CLMCarousel implements AfterViewInit{
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;
  @ViewChildren('carouselItemRef', {read: ElementRef}) carouselItems!: QueryList<ElementRef>;
  currentIndex = 0;
  totalItems :number = 0;
  constructor() {
  }
  ngAfterViewInit(){
    this.totalItems = this.carouselItems.length;
    console.log("Carousel has", this.totalItems, "items")
    this.upDateCarousel();
  }
  upDateCarousel(){
    const itemWidth = this.carouselItems.first.nativeElement.getBoundingClientRect().width;
    console.log("Item width is", itemWidth)
    const offset = this.currentIndex * itemWidth;
    console.log("Offset is", offset)
    this.carouselTrack.nativeElement.style.transform = `translateX(-${offset}px)`;
  }

  scrollPrev() {
    console.log("Prev")
    this.currentIndex = (this.currentIndex - 1) % this.totalItems;
    this.upDateCarousel();
  }
  scrollNext(){
    console.log("Next")
    this.currentIndex = (this.currentIndex + 1) % this.totalItems;
    this.upDateCarousel();

  }
}
