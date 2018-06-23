import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  description = `
  <wrapper>

    <ng-template #ref1>
        <counter></counter>
    </ng-template>

    <counter></counter>

    <ng-template #ref2>
        <counter></counter>
    </ng-template>

  <wrapper>
  `;
}
