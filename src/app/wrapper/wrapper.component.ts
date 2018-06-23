import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  description = `
    <ng-container
      [ngTemplateOutlet]="t_ref1">
    </ng-container>

    <ng-content></ng-content>

    <button></button>
    <ng-container
      [ngTemplateOutlet]="t_ref1">
    </ng-container>
  `;

  show = true;

  items = [1];

  @ContentChild('ref1') tr1: TemplateRef<any>;
  @ContentChild('ref2') tr2: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
