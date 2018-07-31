import { animate, style, transition, trigger } from '@angular/animations';

export const fadeIn = 
trigger('fadeIn', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateX(-1%)'
        }),
        animate('500ms ease-in', style({
            opacity: 1,
            transform: 'translateX(0%)'
        }))
    ])
])