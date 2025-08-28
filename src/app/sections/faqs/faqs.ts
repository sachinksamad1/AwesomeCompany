import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-faqs',
  imports: [CommonModule],
  templateUrl: './faqs.html',
  styles: ``
})
export class FAQs {
    isMobileMenuOpen = signal(false);
  openAccordionIndex = signal(-1);

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  toggleAccordion(index: number) {
    if (this.openAccordionIndex() === index) {
      this.openAccordionIndex.set(-1); // Close if already open
    } else {
      this.openAccordionIndex.set(index); // Open the new one
    }
  }

  submitContactForm(event: Event) {
    event.preventDefault();
    console.log('Contact form submitted!');
    // In a real application, you would handle form submission here
    // e.g., send data to a backend API
  }
}
