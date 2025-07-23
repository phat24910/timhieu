import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fullAddress' })
export class FullAddressPipe implements PipeTransform {
  transform(addr: any): string {
    return `${addr.street}, ${addr.city}, ${addr.state}, ${addr.zip}, ${addr.country}`;
  }
}
