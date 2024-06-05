import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SendPromptService } from 'src/shared_Services/send-prompt.service';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'DERCODA';
  input_entered:string="";
  loading_response:boolean=false;
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  // @ViewChild('chatComponent', { static: true }) chatComponent!: ChatComponent;
  constructor(private ourservic:SendPromptService) {
   }

  ngOnInit(): void {
  }
  handleScroll(event: any): void {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents the default action of the enter key
      this.scrollToBottom();
    }
  }
  private scrollToBottom(): void {
    console.log(this.scrollContainer.nativeElement.last)
    const scrollEl = this.scrollContainer.nativeElement;
    if (scrollEl.scrollHeight > scrollEl.clientHeight) {
      // Only scrolls if the content is larger than the container
      scrollEl.scrollTop = scrollEl.scrollHeight;
    }
  }
}
