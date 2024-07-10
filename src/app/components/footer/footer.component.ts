import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  showSettings: boolean = false;

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

  resetPage() {
    window.location.reload();
  }

  addName() {
    const headerTitle = document.querySelector('.title');
    if (headerTitle) {
      const existingNameSpan = headerTitle.querySelector('.name-span');
      if (existingNameSpan) {
        headerTitle.removeChild(existingNameSpan);
      }
      const nameSpan = document.createElement('span');
      nameSpan.classList.add('name-span');
      nameSpan.textContent = ' Bartłomiej Kwiatkowski';
      headerTitle.appendChild(nameSpan);
    }
  }
}
