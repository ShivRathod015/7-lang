import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
     provideAnimationsAsync(),

     {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          javascript: () => import('highlight.js/lib/languages/javascript'),
          java: () => import('highlight.js/lib/languages/java'),
          cpp: () => import('highlight.js/lib/languages/cpp'),
          c: () => import('highlight.js/lib/languages/c'),
          php: () => import('highlight.js/lib/languages/php'),
          python: () => import('highlight.js/lib/languages/python'),

        },
      }
    }
    ]
};
