import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogHomeService } from 'src/app/services/blog-home.service';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogHomeService: BlogHomeService
  ){}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.blog = this.blogHomeService.getBlogsById(+idParam)
    }else {
      // Manejar la situación, por ejemplo, mostrando un mensaje de error
      // o redirigiendo al usuario a otra página
    }
  }

}
