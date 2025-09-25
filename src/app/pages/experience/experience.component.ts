import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experiences = [
    {
      role: 'Frontend Developer',
      company: 'Microsoft',
      period: '2022 - Present',
      description: 'Building responsive and accessible web applications with Angular, React, and TypeScript.',
      icon: '💻'
    },
    {
      role: 'Software Engineer',
      company: 'Tesla',
      period: '2019 - 2022',
      description: 'Worked on high-performance dashboards, APIs, and optimized applications for scalability.',
      icon: '⚡'
    },
    {
      role: 'UI/UX Designer',
      company: 'Apple',
      period: '2016 - 2019',
      description: 'Designed mobile-first interfaces, improved usability, and collaborated with product teams.',
      icon: '🎨'
    }
  ];

   hoveredItem: number | null = null;

}
