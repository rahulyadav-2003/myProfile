import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMore = false;

  projects = [
    { title: 'Frontend Project', category: 'web design', image: 'assets/images/banner.jpg' },
    { title: 'Geo Based App', category: 'mobile app', image: 'assets/images/banner.jpg' },
    { title: 'Photography Site', category: 'web design', image: 'assets/images/banner.jpg' },
    { title: 'UI/UX Designing', category: 'ui/ux design', image: 'assets/images/banner.jpg' },
    { title: 'E-Commerce Website', category: 'web app', image: 'assets/images/banner.jpg' },
    { title: 'Portfolio Site', category: 'personal project', image: 'assets/images/banner.jpg' },
    { title: 'Dashboard UI', category: 'ui/ux design', image: 'assets/images/banner.jpg' },
    { title: 'API Integration App', category: 'mobile app', image: 'assets/images/banner.jpg' }
  ];

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
}
