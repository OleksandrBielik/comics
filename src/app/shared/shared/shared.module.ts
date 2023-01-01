import { FirstLetterPipe } from './../pipes/first-letter.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FirstLetterPipe],
  exports: [FirstLetterPipe],
})
export class SharedModule {}
