import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface NavItem {
  label: string;
  path: string;
  isOpen: boolean;
  isActive: boolean;
  iconClass: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  selectedSection = 'home';
  currentItems: NavItem[] = [];
  navItems: NavItem[] = [

    {
      label: 'QM Activities',
      path: '',
      isOpen: false,
      isActive: false,
      iconClass: 'bi bi-palette2',

      children: [
        {
          label: 'Change Controls',
          path: '',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-palette2',
          children: [
            {
              label: 'Change Controls',
              path: '/change-controls',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            },
            {
              label: 'Audit Trails',
              path: '/cc-audit-trails',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            },
            {
              label: 'Reports',
              path: '/docMaster',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            }
          ]

        },
        {
          label: 'Deviations',
          path: '',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-palette2',
          children: [
            {
              label: 'Deviations',
              path: '/deviations',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            },
            {
              label: 'Audit Trails',
              path: '/deviations-auditTrails',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            },
            {
              label: 'Reports',
              path: '/docMaster',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            }
          ]
        },
        {
          label: 'Corrective & Preventive Actions',
          path: '/',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-palette2',
          children: [
            {
              label: 'CAPA',
              path: '/capa',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            },
            {
              label: 'Audit Trails',
              path: '/capa-audit-trails',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            },
            {
              label: 'Reports',
              path: '/docMaster',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            }
          ]
        },
        {
          label: 'Market Complaints',
          path: '',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-palette2',
          children: [
            {
              label: 'Market Complaints',
              path: '/market-complaints',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            },
            {
              label: 'Audit Trails',
              path: '/docMaster',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            },
            {
              label: 'Reports',
              path: '/docMaster',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            }
          ]
        },
        {
          label: 'Incidents',
          path: '/docMaster',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-palette2',
          children: [
            {
              label: 'Incidents',
              path: '/incidents',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            },
            {
              label: 'Audit Trails',
              path: '/incidents-auditTrails',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            },
            {
              label: 'Reports',
              path: '/docMaster',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            }
          ]
        }
      ],
    },
    {
      label: 'System Manager',
      path: '/docRepo',
      isOpen: false,
      isActive: false,
      iconClass: 'bi bi-database-up',
      children: [
        {
          label: 'Roles',
          path: '/roles',
          isOpen: false,
          isActive: false,
          iconClass: 'fa fa-cogs',
        },
        {
          label: 'Users',
          path: '/users',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-person',
        },

        // {
        //   label: 'Set Functional Profile',
        //   path: '/functional-profile',
        //   isOpen: false,
        //   isActive: false,
        //   iconClass: 'bi bi-house-door',
        // },

        // {
        //   label: 'Manage Users',
        //   path: '/home',
        //   isOpen: false,
        //   isActive: false,
        //   iconClass: 'bi bi-person-fill-gear',
        // },
        // {
        //   label: 'Plant Assignments',
        //   path: '/home',
        //   isOpen: false,
        //   isActive: false,
        //   iconClass: 'fa fa-industry',
        // },
        {
          label: 'User Groups',
          path: '/user-groups',
          isOpen: false,
          isActive: false,
          iconClass: 'fa fa-users',
        },
        // {
        //   label: 'User Status Settings',
        //   path: '/home',
        //   isOpen: false,
        //   isActive: false,
        //   iconClass: 'bi bi-person-heart',
        // },
        // {
        //   label: 'Reset Passwords',
        //   path: '/home',
        //   isOpen: false,
        //   isActive: false,
        //   iconClass: 'bi bi-house-door',
        // },
        {
          label: 'Departments',
          path: '/departments',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-buildings',
        },
        {
          label: 'Plants',
          path: '/plants',
          isOpen: false,
          isActive: false,
          iconClass: 'fa fa-industry',
        },
        {
          label: 'Product/Materials',
          path: '/products-materials',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-joystick',
        },
        {
          label: 'Batch/Lot Particulars',
          path: '/batch-lot-particulars',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-files',
        },
        {
          label: 'Equipments',
          path: '/equipments',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-gear-wide-connected',
        },
        {
          label: 'Markets',
          path: '/markets',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-minecart-loaded',
        },
        {
          label: 'Customers',
          path: '/customers',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-person-raised-hand',
        },
        {
          label: 'Security Settings',
          path: '/security-settings',
          isOpen: false,
          isActive: false,
          iconClass: 'fa fa-shield',
        },
        {
          label: 'Audit Trails',
          path: '/home',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-diagram-3',
        },
      ]
    }
  ];

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.currentItems = this.navItems;
  }

  selectSection(section: any) {
    this.selectedSection = section;
  }

  navItemClick(item: NavItem) {
    if (item.children && item.children.length > 0) {
      this.currentItems = item.children
    }
    else {
      this.router.navigate([item.path]);
    }
  }
}
