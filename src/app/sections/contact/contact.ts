import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styles: ``
})
export class Contact {
    submitContactForm(event: Event) {
    event.preventDefault();
    console.log('Contact form submitted!');
    // In a real application, you would handle form submission here
    // e.g., send data to a backend API
  }
}
