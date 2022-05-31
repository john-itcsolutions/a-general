import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { icon } from '@fortawesome/fontawesome-svg-core';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';
 
  pages = [
    {
      title: 'Home',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'Contracts & Processes',
      url: '/menu/bpdi',
      icon: 'bookmarks'
    },
    {
      title: 'Strategic Planning',
      url: '/menu/strategicplanning',
      icon: 'locate'
    },
    {
      title: 'Management of Risk',
      url: '/menu/riskmngmnt',
      icon: 'umbrella'
    },
    {
      title: 'Service & Security Status',
      url: '/menu/securitystatus',
      icon: 'logo-tux', 
    },
    {
      title: 'Prodn Analysis & Dashbrds',
      url: '/menu/prodanalysis',
      icon: 'analytics'
    },
    {
      title: 'Property',
      url: '/menu/property',
      icon: 'business'
    },
    {
      title: 'Contacts',
      url: '/menu/contacts',
      icon: 'person-add'
    },
    {
      title: 'Market Research',
      url: '/menu/marketrsch',
      icon: 'globe'
    },
    {
      title: 'Routes/Maps/Time/Tracking',
      url: '/menu/routesmapping',
      icon: 'compass'
    },
    {
      title: 'Bar/QR/Product Codes',
      url: '/menu/barqrcodes',
      icon: 'barcode'
    },
    {
      title: 'Projects',
      url: '/menu/rdevelop',
      icon: 'rocket'
    },
    {
      title: 'Engineering & Design',
      url: '/menu/engdesign',
      icon: 'logo-steam'
    },
    {
      title: 'Sales & Orders Received',
      url: '/menu/sales',
      icon: 'cart'
    },
    {
      title: 'Purchases & Orders Sent',
      url: '/menu/purchases',
      icon: 'reorder'
    },
    {
      title: 'Inventory Management',
      url: '/menu/inventorymngmnt',
      icon: 'stats'
    },
    {
      title: 'Customer Relations',
      url: '/menu/crm',
      icon: 'ribbon'
    },
    {
      title: 'Supplier Relations',
      url: '/menu/srm',
      icon: 'contact'
    },
    {
      title: 'Fleet & Asset Management',
      url: '/menu/assetmngmnt',
      icon: 'clipboard'
    },
    {
      title: 'Field/Floor',
      url: '/menu/workshop',
      icon: 'construct'
    },
    {
      title: 'A.I. Interface',
      url: '/menu/aiinterface',
      icon: 'flash'
    },
    {
      title: 'IoT/Node-Red/ctrl-X',
      url: '/menu/iotcontrol',
      icon: 'git-branch'
    },
    {
      title: 'Human Resources',
      url: '/menu/humanresources',
      icon: 'contacts'
    },
    {
      title: 'Timesheets & Leave',
      url: '/menu/timesheetsleave',
      icon: 'logo-usd'
    },
    {
      title: 'Payroll',
      url: '/menu/payroll',
      icon: 'list-box'
    },
    {
      title: 'Administration',
      url: '/menu/administration',
      icon: 'filing'
    },
    {
      title: 'Finance',
      url: '/menu/finance',
      icon: 'wallet'
    },
    {
      title: 'Reporting & Compliance',
      url: '/menu/reporting',
      icon: 'calendar'
    },    
    {
      title: 'Network Member-Classes',
      url: '/menu/netmemclasses',
      icon: 'snow'
    },
    {
      title: 'Blockchain Access',
      url: '/menu/blockchainaccess',
      icon: 'logo-bitcoin'
    }                                                 
  ];
 
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }
 
  ngOnInit() {
 
  }
}