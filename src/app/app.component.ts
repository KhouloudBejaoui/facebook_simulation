import { Component } from '@angular/core';
import Post from 'src/app/post.modal'
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'KodeBook';

  public post: Post;
  public postList: Post[];

  public constructor(private sanitizer: DomSanitizer) {
    this.post = new Post();

    this.postList = [];
  }

  /**** Post TEXT ****/
  public postText() {
    //push method
    //this.postList.push(this.post);

    // splice - using this we can add element to any position
    this.postList.splice(0, 0, this.post);

    //reinitialize
    this.post = new Post();
  }

  public deletePost(itemIndex) {
    this.postList.splice(itemIndex, 1);
  }

  /**** Post image ****/
  public postImage(event) {
    console.log('posting image');

    //it will give access to input element
    const refElement = event.target;
    const uploadedFile = refElement.files[0];

    let uploadedFileAsUrl = URL.createObjectURL(uploadedFile);
    uploadedFileAsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(uploadedFileAsUrl);

    this.post.postType = 'IMAGE';
    this.post.postValue = uploadedFileAsUrl;

    // splice - using this we can add element to any position
    this.postList.splice(0, 0, this.post);

    console.log(uploadedFile);

    //reinitialize
    this.post = new Post();
  }


  /**** upload video ****/
  public uploadVideo(event) {
    console.log('posting video');

    //it will give access to input element
    const refElement = event.target;
    const uploadedFile = refElement.files[0];

    let uploadedFileAsUrl = URL.createObjectURL(uploadedFile);
    uploadedFileAsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(uploadedFileAsUrl);

    this.post.postType = 'VIDEO';
    this.post.postValue = uploadedFileAsUrl;

    // splice - using this we can add element to any position
    this.postList.splice(0, 0, this.post);

    console.log(uploadedFile);

    //reinitialize
    this.post = new Post();
  }



  /**** likess ****/
  public likeCount(item: Post){
    item.likeCount ++;
  }

  /**** subscribes ****/
  public subscribeCount(item: Post){
    item.subscribeCount ++;
  }

  /**** add comment ****/
  public addComment(item: Post) {
    item.commentList.push('thank you');
  }



}
