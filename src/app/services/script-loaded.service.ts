import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScriptLoaderService {
  private scripts: any = {};

  loadScripts(scriptUrls: string[]): Promise<void[]> {
    const scriptPromises: Promise<void>[] = [];

    scriptUrls.forEach(scriptUrl => {
      if (!this.scripts[scriptUrl]) {
        const promise = new Promise<void>((resolve, reject) => {
          const scriptElement = document.createElement('script');
          scriptElement.src = scriptUrl;
          scriptElement.onload = () => {
            this.scripts[scriptUrl] = true;
            resolve();
          };
          scriptElement.onerror = (error: any) => reject(error);
          document.head.appendChild(scriptElement);
        });

        scriptPromises.push(promise);
      }
    });

    return Promise.all(scriptPromises);
  }
}
