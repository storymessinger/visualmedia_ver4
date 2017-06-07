import { Directive, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[videoThumbnail]',
  host: {
    '[srcset]':'srcset',
  }
})
export class VideoThumbnailDirective implements OnInit {


  constructor() { 
  }

  @Input() srcset:string;
  @Input() videoUrl;

  @HostListener('click', ['$event'])
  sendToLink(event: Event) {
    window.location.href= this.videoUrl;
  }

  ngOnInit() {
    let urlArr = this.videoUrl.split('/');

    // if you find 'youtube' wihtin the arr, get the thumbnail like...
    if ( urlArr.some( item => item === "youtu.be") ) {
      const videoId = (urlArr[urlArr.length -1 ]);
      const smallImg = "https://img.youtube.com/vi/" + videoId + "/sddefault.jpg";
      // const bigImg = "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg";
      // this.srcset = bigImg + " 800w, " + smallImg + " 300w ";
      this.srcset = smallImg;
    } else if ( urlArr.some(item => item === "player.vimeo.com")) {
      const videoId = (urlArr[urlArr.length -1 ]);
      this.srcset = "./assets/imgs/no_image.jpg";
      // const smallImg = "https://img.youtube.com/vi/" + videoId + "/mqdefault.jpg";
      // const bigImg = "https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg";
      // this.srcset = smallImg + " 800w, " + bigImg + " 300w ";
    }
  }

}
