import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./sections/footer/footer";
import { Contact } from "./sections/contact/contact";
import { FAQs } from "./sections/faqs/faqs";
import { Pricing } from "./sections/pricing/pricing";
import { CTA } from "./sections/cta/cta";
import { DetailedFeatures } from "./sections/detailed-features/detailed-features";
import { Features } from "./sections/features/features";
import { Header } from "./sections/header/header";
import { CommonModule } from '@angular/common';
import { Hero } from "./sections/hero/hero";
import { Team } from "./sections/team/team";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    Header,
    Hero,
    Features,
    DetailedFeatures,
    CTA,
    Pricing,
    FAQs,
    Team,
    Contact,
    Footer
],
  templateUrl: './app.html',
  styles: [`
     body {
      font-family: 'Inter', sans-serif;
      scroll-behavior: smooth;
    }
    .feature-icon {
      background: rgba(22, 178, 178, 0.1);
      color: #16B2B2;
    }
    .accordion-item {
      border-bottom: 1px solid #e5e7eb;
    }
    .accordion-button {
      transition: color 0.3s ease;
    }
    .accordion-button:hover {
      color: #16B2B2;
    }
    `],
})
export class App {
  protected readonly title = signal('AwesomeCompany');

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
