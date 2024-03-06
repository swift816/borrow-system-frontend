import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from 'src/app/models/Items';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  imageUrl: string | null = null;
  googleDriveLink: string = '';
  constructor(
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item
  ) {}

  ngOnInit(): void {}

  loadImageFromGoogleDrive(): void {
    const match = this.googleDriveLink.match(/\/(?:file\/d\/|thumbnail\?id=)([\w-]+)(?:\/|$)/);
    
    if (match) {
      const imageId = match[1];
      this.imageUrl = `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`;
      console.log('Image URL:', this.imageUrl);
    } else {
      this.imageUrl = null;
    }
  }
}
