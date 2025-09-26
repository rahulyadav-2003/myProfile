import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
 textToDisplay: string = '.NET Developer'; // Initial text to show
  typingInterval: any;
  isTyping: boolean = false;
  currentText: string = '';
  fullText: string = '';

  constructor() {}

  ngOnInit(): void {
    this.fullText = '.NET Developer'; // Start with .NET Developer
    this.startTypingEffect();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval); // Cleanup interval when the component is destroyed
    }
  }

  startTypingEffect() {
    let index = 0;
    const targetText = this.fullText;
    this.currentText = ''; // Reset text

    this.isTyping = true;

    // Type the text letter by letter
    this.typingInterval = setInterval(() => {
      this.currentText += targetText[index];
      index++;

      if (index === targetText.length) {
        clearInterval(this.typingInterval);
        this.isTyping = false;
        
        // After typing finishes, toggle to the next text
        setTimeout(() => {
          this.toggleText();
          this.startTypingEffect();
        }, 1000); // Pause for 1 second before switching
      }
    }, 100); // Typing speed (100ms per character)
  }

  toggleText() {
    // Switch between .NET Developer and Angular Developer
    if (this.fullText === '.NET Developer') {
      this.fullText = 'Angular Developer';
    } else {
      this.fullText = '.NET Developer';
    }
  }
}
