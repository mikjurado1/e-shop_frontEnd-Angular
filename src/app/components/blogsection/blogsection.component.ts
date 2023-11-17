import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { BlogHomeService } from 'src/app/services/blog-home.service';

@Component({
  selector: 'app-blogsection',
  templateUrl: './blogsection.component.html',
  styleUrls: ['./blogsection.component.css']
})

export class BlogsectionComponent implements OnInit {
  blogs: Blog[]=[];

  constructor(private blogHomeService: BlogHomeService){}

  ngOnInit(){
    this.blogs = this.blogHomeService.getBlogs()
  }
}
