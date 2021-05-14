import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

// dans src/app/pipes/pluralize.pipe.ts

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'pluralize'
// })
// export class PluralizePipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return value;
//   }

// } // Fin de la class PluralizePipe