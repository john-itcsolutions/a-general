import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EngdesignPage } from '../engdesign/engdesign.page';

@Component({
  selector: 'app-aiinterface',
  templateUrl: './aiinterface.page.html',
  styleUrls: ['./aiinterface.page.scss'],
})
export class AiinterfacePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

  //Get value on ionChange on IonRadioGroup
  //selectedRadioGroup:any;
  //Get value on ionSelect on IonRadio item
  //selectedRadioItem:any;
 
  const radio_list = [
    {
      id: '0',
      name: 'radio_list',
      value: '/menu/property/purchaseproperty',
      text: 'Purchase Property',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '1',
      name: 'radio_list',
      value: '/menu/property/acquireproperty',
      text: 'Acquire Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '2',
      name: 'radio_list',
      value: '/menu/property/registerproperty',
      text: 'Register Property',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '3',
      name: 'radio_list',
      value: '/menu/property/importregisterwebprop',
      text: 'Import & Register Web Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '4',
      name: 'radio_list',
      value: '/menu/property/searchprops',
      text: 'Search Properties',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '5',
      name: 'radio_list',
      value: '/menu/property/searchproptxes',
      text: 'Search Property Transactions',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '6',
      name: 'radio_list',
      value: '/menu/property/searchowners',
      text: 'Search Owners of Properties',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '7',
      name: 'radio_list',
      value: '/menu/property/schmchamenitiesbyprop',
      text: 'Search/Match Amenities to Customer by Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '8',
      name: 'radio_list',
      value: '/menu/property/searchrepmainthistbyprop',
      text: 'Search Repairs & Maintenance Histories of Properties',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '9',
      name: 'radio_list',
      value: '/menu/property/searchtenantsbyprop',
      text: 'Search Tenants by Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '10',
      name: 'radio_list',
      value: '/menu/property/searchacctsrecordsbyprop',
      text: 'Search Accounts Records by Property',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '11',
      name: 'radio_list',
      value: '/menu/property/propertyvaluessale',
      text: 'Property Values (Sale)',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '12',
      name: 'radio_list',
      value: '/menu/property/propertyvaluesrental',
      text: 'Property Values (Rental)',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '13',
      name: 'radio_list',
      value: '/menu/property/searchdocsbyprop',
      text: 'Search Documents by Property',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '14',
      name: 'radio_list',
      value: '/menu/property/keyregisterproperty',
      text: 'Key Register',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '15',
      name: 'radio_list',
      value: '/menu/property/filing',
      text: 'Filing',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '16',
      name: 'radio_list',
      value: '/menu/property/linktoconveyit',
      text: 'Link to convey-IT (skeleton Title Transfer Data)',
      disabled: false,
      checked: false,
      color: 'primary'
    }
  ];

function radioGroupChange(event: Event) {
  throw new Error('Function not implemented.');
}


function radioFocus() {
  throw new Error('Function not implemented.');
}


function radioSelect(event: Event) {
  throw new Error('Function not implemented.');
}


function radioBlur() {
  throw new Error('Function not implemented.');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //RouterModule.forChild(routes)
  ],
  declarations: [EngdesignPage]
})
export class EngdesignPageModule {}


function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

