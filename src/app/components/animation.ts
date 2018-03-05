import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const fundido: AnimationEntryMetadata = 
    trigger('componentAnimation', [
        transition(':enter', [
          style({
              opacity: 0,
              transform: 'translateY(-10%)'
          }), 
          animate('400ms linear', style({
              opacity: 1, 
              transform: 'translateY(0%)'
          }))
        ])
    ])
