import { WebPlugin } from '@capacitor/core';

import type { docxreaderPlugin } from './definitions';

export class docxreaderWeb extends WebPlugin implements docxreaderPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
