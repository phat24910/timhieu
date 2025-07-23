import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTitle',
})
export class AppTitlePipe implements PipeTransform {
  transform(resourceId: string): string {
    console.log('AppTitlePipe transform called with resourceId:', resourceId);
    return resourceId ? 'Edit' : 'Add';
  }
}
