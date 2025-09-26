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
      title: 'Full Stack Web Development',
      desc: 'Creating scalable, efficient web applications with modern technologies and frameworks.',
      details: [
        'Responsive websites & web applications',
        'E-commerce platforms (like Flipkart clone)',
        'Task management systems with role-based authentication',
        'ASP.NET Core, Angular, SQL Server, REST APIs'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      desc: 'Building high-performance mobile applications for iOS and Android with seamless API integrations.',
      details: [
        'iOS & Android mobile app development',
        'Cross-platform mobile applications with Angular & REST APIs',
        'Real-time data synchronization for apps'
      ]
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      desc: 'Designing intuitive and visually appealing interfaces that enhance user experience.',
      details: [
        'Wireframes, mockups, and prototypes',
        'User research and usability testing',
        'UI/UX design for both web and mobile applications'
      ]
    },
    {
      icon: '⚙️',
      title: 'API Development & Integration',
      desc: 'Developing robust APIs for seamless communication between frontend and backend.',
      details: [
        'REST API development and integration',
        'API security, versioning, and testing',
        'Integration of third-party services (payment gateways, etc.)'
      ]
    },
    {
      icon: '🛠️',
      title: 'Database Management & Optimization',
      desc: 'Designing, managing, and optimizing databases for high-performance applications.',
      details: [
        'SQL Server database design and optimization',
        'Data migration and backup strategies',
        'Query optimization and performance tuning'
      ]
    },
    {
      icon: '🔒',
      title: 'Security & Authentication',
      desc: 'Implementing security measures to protect user data and ensure safe application interactions.',
      details: [
        'OAuth and JWT authentication',
        'Role-based access control (RBAC)',
        'Data encryption and security best practices'
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
