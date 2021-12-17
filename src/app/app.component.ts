import { Component } from '@angular/core';
import { ModalService } from './_modal';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modal-window';
  circlebtn:string = "assets/icon/Ellipse3.png"
  plus:string = "assets/icon/plus.png"
  profile:string = "assets/icon/image 2.png"
  template = []
  color:string= '#';
  templateStructure = [
    {
      id : 1,
      name : "A",
      matrix : "2*2",
      color : "#a4a8e7"
    },
    {
      id : 2,
      name : "B",
      matrix : "2*3",
      color : "#fbf906"

    }, {
      id : 3,
      name : "C",
      matrix : "3*3",
      color : "#7bf889"

    }, {
      id : 4,
      name : "D",
      matrix : "3*4",
      color : "#414a37"

    }, {
      id : 5,
      name : "E",
      matrix : "4*2",
      color : "#ad1616"

    }, {
      id : 5,
      name : "F",
      matrix : "4*3",
      color : "#936236"

    }, {
      id : 7,
      name : "G",
      matrix : "5*2",
      color : "#87b493"

    },
  ]


  constructor(public modalService: ModalService){} // this modal service is now accessible from the app component template
  onAddTemplate(val){
    this.template.push(val)
    this.modalService.close('modal-1')
    console.log(this.template)
    this.ngOnInit()
  }
//   getRandomColor(){
//         this.color="#"
//          this.color += Math.random().toString(16).slice(2,8);
//          console.log(this.color)
// };
ngOnInit() {
  console.log(this.template.length)
  // if(this.template.length>0){
  //   this.getRandomColor()
  // }
}
drop(event: CdkDragDrop<string[]>) {
  console.log(event);

  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
  }
  console.log(this.template);

}
}
