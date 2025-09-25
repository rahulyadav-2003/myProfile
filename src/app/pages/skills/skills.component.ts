import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  expandedIndex: number | null = null;

  services = [
    {
      icon: '🌐',
      title: 'Web design',
      desc: 'Web development is the process of building, programming...',
      details: [
        'Responsive websites',
        'Landing pages',
        'Portfolio sites'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile app',
      desc: 'Web development is the process of building, programming...',
      details: [
        'iOS and Android apps',
        'Cross-platform solutions',
        'API integrations'
      ]
    },
    {
      icon: '🎨',
      title: 'UI/UX design',
      desc: 'Web development is the process of building, programming...',
      details: [
        'Wireframes & mockups',
        'User research',
        'Prototyping'
      ]
    },
    {
      icon: '🖼️',
      title: 'Graphics design',
      desc: 'Web development is the process of building, programming...',
      details: [
        'Branding & logos',
        'Social media graphics',
        'Posters & flyers'
      ]
    }
  ];

  toggleExpand(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  scrollContainer(direction: 'left' | 'right') {
    const container = document.querySelector('.services-container') as HTMLElement;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  }
  
}
