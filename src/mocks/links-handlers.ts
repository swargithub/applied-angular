import { ApiLink } from '../app/features/links/types';
import { http, HttpResponse, delay } from 'msw';
const fakeLinks: ApiLink[] = [
  {
    id: '1',
    title: 'Applied Angular - Hypertheory',
    url: 'https://applied-angular.hypertheory.com/',
    description: 'Training Materials for the Applied Angular Class',
    tags: ['angular', 'training', 'hypertheory'],
  },
  {
    id: '2',
    title: 'Angular Docs',
    url: 'https://angular.io/docs',
    description: 'The official Angular documentation',
    tags: ['angular', 'docs'],
  },
  {
    id: '3',
    title: 'NGRX Docs',
    url: 'https://ngrx.io/docs',
    description: 'The official NGRX documentation',
  },
  {
    id: '4',
    title: 'RxJS Docs',
    url: 'https://rxjs.dev/guide/overview',
    description: 'The official RxJS documentation',
    tags: ['rxjs', 'docs'],
  },
  {
    id: '5',
    title: 'TypeScript Docs',
    url: 'https://www.typescriptlang.org/docs/',
    description: 'The official TypeScript documentation',
    tags: ['typescript', 'docs'],
  },
  {
    id: '6',
    title: 'JavaScript Info',
    url: 'https://javascript.info/',
    description: 'Modern JavaScript Tutorial',
    tags: ['javascript', 'tutorial'],
  },
  {
    id: '7',
    title: 'MDN Web Docs',
    url: 'https://developer.mozilla.org/',
    description: 'Resources for developers, by developers',
    tags: ['web', 'docs', 'mdn'],
  },
  {
    id: '8',
    title: 'Stack Overflow',
    url: 'https://stackoverflow.com/',
    description: 'Where developers learn, share, and build careers',
    tags: ['community', 'questions', 'answers'],
  },
  {
    id: '9',
    title: 'CSS Tricks',
    url: 'https://css-tricks.com/',
    description: 'Tips, tricks, and techniques on using CSS',
    tags: ['css', 'web', 'design'],
  },
  {
    id: '10',
    title: 'FreeCodeCamp',
    url: 'https://www.freecodecamp.org/',
    description: 'Learn to code for free',
    tags: ['coding', 'learning', 'free'],
  },
  {
    id: '11',
    title: 'Dev.to',
    url: 'https://dev.to/',
    description: 'A constructive and inclusive social network for developers',
    tags: ['community', 'blog', 'developers'],
  },
  {
    id: '12',
    title: 'GitHub Docs',
    url: 'https://docs.github.com/',
    description: 'Documentation for GitHub',
    tags: ['github', 'docs', 'version-control'],
  },
  {
    id: '13',
    title: 'Node.js Docs',
    url: 'https://nodejs.org/en/docs/',
    description: 'The official Node.js documentation',
    tags: ['nodejs', 'docs', 'backend'],
  },
];

export const LinkHandlers = [
  http.get('https://some-service.com/api/links', async () => {
    await delay(); // about 100ms - 200ms (to simulate network latency)
    return HttpResponse.json(fakeLinks);
  }),
];
