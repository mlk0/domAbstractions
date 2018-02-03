import { Component, OnInit, ElementRef } from '@angular/core';
 
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  outerElementString : any; 
  constructor(private hostElement : ElementRef) {
    let outerHtml = hostElement.nativeElement.outerHTML;
    this.outerElementString = outerHtml;

   var nel = this.hostElement.nativeElement
   }

   

  ngOnInit() {
  }

}
