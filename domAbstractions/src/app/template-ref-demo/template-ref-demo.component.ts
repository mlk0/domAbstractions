import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-demo',
  templateUrl: './template-ref-demo.component.html',
  styleUrls: ['./template-ref-demo.component.css']
})
export class TemplateRefDemoComponent implements OnInit {
  state: string;
  displayLoadingTemplate: boolean;

  constructor() { }

  ngOnInit() {
    this.displayLoadingTemplate = false;
    this.state = "whatever";
  }

  togleTemplate(){
    this.displayLoadingTemplate = !this.displayLoadingTemplate;
  }

  setState(uiState : string) : void {
    this.state = uiState;
  }
}
