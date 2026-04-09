import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  animations: [
    trigger('bentoReveal', [
      transition(':enter', [
        query('.bento-item', [
          style({ opacity: 0, transform: 'scale(0.9) translateY(40px)', filter: 'blur(8px)' }),
          stagger('100ms', [
            animate('0.8s cubic-bezier(0.16, 1, 0.3, 1)', 
              style({ opacity: 1, transform: 'scale(1) translateY(0)', filter: 'blur(0)' })
            )
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  isLoaded = false;

  stats = [
    { value: '1.5+', label: 'Años de Experiencia', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: '3+', label: 'Proyectos Reales', icon: 'M15.59 14.37a6 6 0 01-5.84 7.3A6 6 0 012 15a6 6 0 015.84-7.3m7.75 6.67l-2.06-2.06m-5.69-5.69A5.99 5.99 0 0012 2c-3.3 0-6 2.7-6 6' },
    { value: '100%', label: 'Compromiso', icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
  ];

  skills = [
    { 
      category: 'Frontend & UI', 
      items: ['Angular', 'React', 'Next.js', 'Framer Motion', 'Tailwind'],
      color: 'from-blue-500 to-cyan-400'
    },
    { 
      category: 'Arquitectura Backend', 
      items: ['Node.js', 'PostgreSQL', 'NestJS', 'REST APIs'],
      color: 'from-emerald-400 to-emerald-600'
    },
    { 
      category: 'DevOps & Cloud', 
      items: ['Docker', 'Vercel', 'Linux', 'GitHub Actions'],
      color: 'from-purple-500 to-fuchsia-400'
    },
    { 
      category: 'Core Types', 
      items: ['TypeScript', 'JavaScript', 'RxJS'],
      color: 'from-orange-400 to-rose-400'
    }
  ];

  ngOnInit() {
    setTimeout(() => this.isLoaded = true, 50);
  }
}
