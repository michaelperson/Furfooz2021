import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.page.html',
  styleUrls: ['./alert-dialog.page.scss'],
})
export class AlertDialogPage implements OnInit {

  constructor(public dialogRef: MatDialogRef<AlertDialogPage>) { }

  ngOnInit() {
  }

  closeDialog(b:boolean) {
    this.dialogRef.close(b);
  }
}
