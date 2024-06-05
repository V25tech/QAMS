import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {

  selectedSection = 'home';

  constructor(private router: Router) {}

  selectSection(section: any){
    this.selectedSection = section;
  }

  navigateTo(navTo: any) {
    if (navTo === 'assigned') {
      this.router.navigate(['/change-controls']);
    } else if (navTo === 'changeControls') {
      this.router.navigate(['/change-controls']);
    } else if (navTo === 'workItems') {
      this.router.navigate(['/workItems']);
    } else if (navTo === 'document-manager') {
      this.router.navigate(['/document-manager']);
    } else if (navTo === 'document-manager') {
      this.router.navigate(['/document-manager']);
    } else if (navTo === 'security-settings') {
      this.router.navigate(['/security-settings']);
    }
  }
}
