import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})

export class BlogHomeService {
  private blogs: Blog[]=[
    {id: 1,imgUrl:'../../assets/blog_1.jpg', title:"Strings and Harmony: The Guitarist's Journey", date:"20 jan 2023", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas."},
    {id: 2,imgUrl:'../../assets/blog_2.jpg', title:"Fretboard Chronicles: Tales from Music Legends", date:"5 feb 2023", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas."},
    {id: 3,imgUrl:'../../assets/blog_3.jpg', title:"Riffs and Rhythms: Exploring the World of Guitar Music", date:"18 march 2023", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas."},
    {id: 4,imgUrl:'../../assets/blog_4.jpg', title:"The Strummer's Guide: Tips, Tricks, and Tunes for Guitar Enthusiasts", date:"20 dec 2023", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas."},
  ]

  getBlogs():Blog[]{
    return [...this.blogs]
  }

  getBlogsById(id: number): Blog | undefined {
    return this.blogs.find(blog => blog.id === id)
  }

}
