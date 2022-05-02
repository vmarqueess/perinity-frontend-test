import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-screen',
  templateUrl: './data-screen.component.html',
  styleUrls: ['./data-screen.component.css']
})
export class DataScreenComponent implements OnInit {

  // Recieving data from EditDialog component
  itemDataId = this.route.snapshot.paramMap.get('itemDataId');
  itemDataUserId = this.route.snapshot.paramMap.get('itemDataUserId');
  itemDataTitle = this.route.snapshot.paramMap.get('itemDataTitle');
  itemDataBody = this.route.snapshot.paramMap.get('itemDataBody');

  // Organizing recieved data into itemData object
  itemData = {
    id: this.itemDataId,
    userId: this.itemDataUserId,
    title: this.itemDataTitle,
    body: this.itemDataBody
  }

  // Getting template elements to be able to manipulate data
  @ViewChild('titleData') titleData:ElementRef<HTMLInputElement> | undefined;
  @ViewChild('bodyData') bodyData:ElementRef<HTMLInputElement> | undefined;
  
  constructor(private route: ActivatedRoute, private router: Router) {
    
   }

  ngOnInit(): void {  }

  // Method used to revert changes made on clicked item data
  revertChanges(){
    this.titleData?.nativeElement.setAttribute('value', String(this.itemData.title));
    this.bodyData?.nativeElement.setAttribute('value', String(this.itemData.body));
  }

  //  Alters (only locally) data recieved from given URL (that is coming through DisplayDataComponent)
  applyChanges(){
    this.itemData.title = String(this.titleData?.nativeElement.value);
    this.itemData.body = String(this.bodyData?.nativeElement.value);
    this.router.navigate(['/display-data', {
      newTitle: this.itemData.title, 
      newBody: this.itemData.body,
      id: this.itemData.id  
    }])
  }

}
