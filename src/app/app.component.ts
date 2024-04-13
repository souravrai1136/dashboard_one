import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from './side-nav.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SideNavService]
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | any;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  menuList: any[] = [
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: 'dashboard',
    },
    {
      displayName: 'My Wallet',
      iconName: 'account_balance_wallet',
      children: [
        {
          displayName: 'Add New',
          route: '/addNew'
        },
        {
          displayName: 'Card List',
          route: '/cardList'
        },
        {
          displayName: 'History',
          route: '/history'
        }
      ]
    },
    {
      displayName: 'Transaction',
      iconName: 'refresh',
      children: [
        {
          displayName: 'Balance',
          route: '/balance'
        }
      ]
    },
    {
      displayName: 'Crypto',
      iconName: 'trending_up',
      children: [
        {
          displayName: 'Balance',
          route: '/balance'
        }
      ]
    },
    {
      displayName: 'Exchange',
      iconName: 'account_balance',
      children: [
        {
          displayName: 'Balance',
          route: '/balance'
        }
      ]
    },
    {
      displayName: 'Setting',
      iconName: 'settings',
      children: [
        {
          displayName: 'profile',
          route: '/profile'
        }
      ]
    }
  ];

  mobileQuery: MediaQueryList;

  fillerNav = Array(5).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array(2).fill(0).map(() =>
    `Open side nav, and click on any navigation to close the opened side nav.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
