import { registerPlugin } from '@capacitor/core';

import type { docxreaderPlugin } from './definitions';

const docxreader = registerPlugin<docxreaderPlugin>('docxreader', {
  web: () => import('./web').then(m => new m.docxreaderWeb()),
});

export * from './definitions';
export { docxreader };
