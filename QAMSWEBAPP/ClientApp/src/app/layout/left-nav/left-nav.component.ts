import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

export interface NavItem {
  label: string;
  path: string;
  isOpen: boolean;
  isActive: boolean;
  iconClass: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss'],
})
export class LeftNavComponent {
  isLeftNavCollapsed = false;
  selectedNavitem: any = null;
  label: string = '';

  navItems: NavItem[] = [
    {
      label: 'Home',
      path: '/home',
      isOpen: false,
      isActive: false,
      iconClass: 'bi bi-house-door',
      children: [{
        label: 'Home',
        path: '/home',
        isOpen: false,
        isActive: false,
        iconClass: 'bi bi-house-door',
      }],
    },

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
              path: '/document-types',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            },
            {
              label: 'Action Plans',
              path: '/templates',
              isOpen: false,
              children: [],
              isActive: false,
              iconClass: '',
            },
            {
              label: 'Dossier Print',
              path: '/workflow',
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
          label: 'Deviations',
          path: '/templates',
          isOpen: false,
          children: [],
          isActive: false,
          iconClass: 'bi bi-palette2',
        },
        {
          label: 'Corrective & Preventives ',
          path: '/workflow',
          isOpen: false,
          children: [],
          isActive: false,
          iconClass: 'bi bi-palette2',
        },
        {
          label: 'Market Complaints',
          path: '/docMaster',
          isOpen: false,
          children: [],
          isActive: false,
          iconClass: 'bi bi-palette2',
        },
        {
          label: 'Incidents',
          path: '/docMaster',
          isOpen: false,
          children: [],
          isActive: false,
          iconClass: 'bi bi-palette2',
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
          label: 'Equipment Registration',
          path: '/equipment-registration',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-gear-wide-connected',
        },
        {
          label: 'Market Registration',
          path: '/market-registration',
          isOpen: false,
          isActive: false,
          iconClass: 'bi bi-minecart-loaded',
        },
        {
          label: 'Customer Registration',
          path: '/customer-registration',
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

  toggleLeftNav() {
    this.isLeftNavCollapsed = !this.isLeftNavCollapsed;
  }

  constructor(private router: Router) {
    // Subscribe to router events to update active state on route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveState(event.urlAfterRedirects, this.navItems);
      }
    });
  }

  toggleNavItem(item: any): void {
    if (item.path) this.router.navigate([item.path]);
    else if (!item.path && item.children) {
      item.isOpen = !item.isOpen; // Toggle the open state of the item
    }
  }

  updateActiveState(route: string, items: any[]): void {
    for (const item of items) {
      if (item.path && item.path === route) {
        item.isActive = true; // Set the current item as active if its route matches the current route
        item.isOpen = true;
        this.openParentItems(item);
      } else {
        item.isActive = false; // Set other items as inactive
      }
      // Recursively check children for active state
      if (item.children && item.children.length > 0) {
        this.updateActiveState(route, item.children);
      }
    }
  }

  openParentItems(item: any): void {
    if (item && item.parent) {
      item.isOpen = true; // Open the current item
      this.openParentItems(item.parent); // Recursively open the parent item
    }
  }


  toggleMenu(item: NavItem) {
    item.isOpen = !item.isOpen;
  }

  toggleSubMenu(parentItem: NavItem, childItem: NavItem) {
    // Close all other submenus of the parent item
    parentItem.children?.forEach(child => child.isOpen = false);
    childItem.isOpen = !childItem.isOpen;
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
