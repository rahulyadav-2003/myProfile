import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  popupMessage: string = '';
  popupType: 'success' | 'error' | '' = '';
  sendEmail(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const name = (form.querySelector('input[name="user_name"]') as HTMLInputElement).value.trim();
    const email = (form.querySelector('input[name="user_email"]') as HTMLInputElement).value.trim();
    const message = (form.querySelector('textarea[name="message"]') as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      this.showPopup('Please fill in all fields!', 'error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showPopup('Please enter a valid email address!', 'error');
      return;
    }
    emailjs.sendForm(
      'service_2xuhulk',   // Replace with your EmailJS Service ID
      'template_m9rttpo',  // Replace with your EmailJS Template ID
      form,
      'Ag5fK5TLAVy88j6gi'       // Replace with your EmailJS User ID / Public Key
    ).then(
      (result) => {
        console.log('Email sent:', result.text);
        this.showPopup('✅ Message sent successfully!', 'success');
        form.reset();
      },
      (error) => {
        console.error('Email error:', error.text);
        this.showPopup('❌ Failed to send message. Try again later.', 'error');
      }
    );
  }
  showPopup(message: string, type: 'success' | 'error') {
    this.popupMessage = message;
    this.popupType = type;

    // Hide popup after 3 seconds
    setTimeout(() => {
      this.popupMessage = '';
      this.popupType = '';
    }, 3000);
  }

}
