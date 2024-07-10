import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  content: string[] = [];
  selectedOption: string = ''; // Initialize the variable
  usedContent: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<string[]>('assets/data/content.json').subscribe(data => {
      this.content = data;
    });
  }

  changeContent(action: string) {
    let newContent: string | undefined;

    if (this.selectedOption === 'first') {
      newContent = this.content[0];
    } else if (this.selectedOption === 'second') {
      newContent = this.content[1];
    } else if (this.selectedOption === 'random') {
      const remainingContent = this.content.filter(c => !this.usedContent.includes(c));
      if (remainingContent.length === 0) {
        alert('No unique content left');
        return;
      }
      newContent = remainingContent[Math.floor(Math.random() * remainingContent.length)];
    }

    if (!newContent) {
      return;
    }

    if (action === 'replace') {
      this.usedContent = [newContent];
    } else if (action === 'append' && !this.usedContent.includes(newContent)) {
      this.usedContent.push(newContent);
    }

    this.usedContent.sort();
  }
}
