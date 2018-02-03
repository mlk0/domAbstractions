import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
 
@Component({
  selector: 'app-view-child-element-ref',
  templateUrl: './view-child-element-ref.component.html',
  styleUrls: ['./view-child-element-ref.component.css']
})
export class ViewChildElementRefComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {

    let templateReferenceText = (this.elRef.nativeElement as HTMLDivElement).textContent;
    console.log(`templateReferenceText : ${templateReferenceText}`);
  }
  @ViewChild("templateRef", {read : ElementRef}) elRef : ElementRef;
  constructor(private hostElement : ElementRef) { 

    
  }

  ngOnInit() {
    let hostElementItem = this.hostElement;
  }

}
