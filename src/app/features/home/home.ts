import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  animations: [
    trigger('revealLayout', [
      transition(':enter', [
        query('.reveal-item', [
          style({ opacity: 0, transform: 'translateY(50px) rotateX(-10deg)', filter: 'blur(10px)' }),
          stagger('150ms', [
            animate('1s cubic-bezier(0.16, 1, 0.3, 1)', 
              style({ opacity: 1, transform: 'translateY(0) rotateX(0)', filter: 'blur(0)' })
            )
          ])
        ], { optional: true })
      ])
    ]),
    trigger('floatingAvatar', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8) translateY(20px)' }),
        animate('1.2s 400ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  isLoaded = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 50);
  }
}
