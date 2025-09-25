import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit{
@ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;


  constructor() { }

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    const video = this.videoPlayer.nativeElement;
    video.autoplay = true;   // autoplay on load
    video.loop = true;       // loop forever
    video.muted = true;      // required for autoplay in most browsers
    video.play();            // start playing
  }

  ngOnInit(): void {
        
  }

}
