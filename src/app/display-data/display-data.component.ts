import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'services/get-data.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  constructor(
    public dataService: GetDataService,
    private dialog: MatDialog,
    private route: ActivatedRoute) { }

  postsDataFromUrl: any;

  // Variables to store data from user input
  newTitle = String(this.route.snapshot.paramMap.get('newTitle'));
  newBody = String(this.route.snapshot.paramMap.get('newBody'));
  confirmId = String(this.route.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    this.showPostsData();
    
  }

  openEditDialog(itemData: any){
    // Data flow: GetData Service -> DisplayData Component -> EditDialog Component -> DataScreen Component.
    // This data object send the clicked card data to the next component via MatDialog object 
    this.dialog.open(EditDialogComponent, {data: {userId: itemData.userId, id: itemData.id, title: itemData.title, body: itemData.body}});
    
  }

  showPostsData(){
    this.dataService.getPostsData().subscribe(postsData => {
      this.postsDataFromUrl = postsData;
      this.postsDataFromUrl.forEach((post: any) => {
        if(this.confirmId == post.id){
          post.title = this.newTitle;
          post.body = this.newBody;
        }
      });
    });
    }

}
