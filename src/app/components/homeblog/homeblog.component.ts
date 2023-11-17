import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-homeblog',
  templateUrl: './homeblog.component.html',
  styleUrls: ['./homeblog.component.css']
})
export class HomeblogComponent {
  @Input() blog: Blog = {id:0, imgUrl:'', title:'', date:'', text:''};
}
