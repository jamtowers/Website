import { Injectable, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  currentTitle: string;

  @Output() title = new EventEmitter<string>();

  constructor(private titleService: Title, private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 600px)','(max-width: 400px)'])
      .subscribe(result => {
        this.emitTitle();
      }
    );
  }

  setTitle(newTitle: string) {
    this.currentTitle = newTitle;
    var fullTitle = this.getFullTitle();
    this.titleService.setTitle(fullTitle);
    this.emitTitle();
  }

  getFullTitle(): string {
    return "James Towers - " + this.currentTitle;
  }

  emitTitle() {
    if(window.innerWidth > 600) { // big enough for full title
      this.title.emit(this.getFullTitle());
      return
    }
    else if (window.innerWidth > 400) {
      this.title.emit(this.currentTitle);
    }
    else {
      this.title.emit("");
    }
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event?) {
  //   this.screenWidth = window.innerWidth;
  //   console.log(this.screenWidth);
  // }
}
