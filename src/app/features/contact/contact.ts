import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  animations: [
    trigger('splitReveal', [
      transition(':enter', [
        query('.contact-text, .contact-card', [
          style({ opacity: 0, transform: 'translateX(-30px)', filter: 'blur(5px)' })
        ], { optional: true }),
        query('.contact-text', [
          stagger('150ms', [
            animate('0.8s cubic-bezier(0.16, 1, 0.3, 1)', 
              style({ opacity: 1, transform: 'translateX(0)', filter: 'blur(0)' })
            )
          ])
        ], { optional: true }),
        query('.contact-card', [
          style({ transform: 'translateX(50px) rotateY(-10deg)', opacity: 0 }),
          animate('1s 200ms cubic-bezier(0.16, 1, 0.3, 1)', 
            style({ opacity: 1, transform: 'translateX(0) rotateY(0)' })
          )
        ], { optional: true })
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  isLoaded = false;
  email = 'juanchopolas04090@gmail.com';
  phone = '302 598 2458';

  ngOnInit() {
    setTimeout(() => this.isLoaded = true, 50);
  }

  submitForm(event: Event) {
    event.preventDefault();
    alert('Mensaje simulado para frontend. ¡Gracias por contactarme!');
  }
}
