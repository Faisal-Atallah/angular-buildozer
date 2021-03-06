import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SidebarService, RegisterdSidebar } from 'app/widget/sidebar';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MEDIA_BREAKPOINTS } from '@shared/common';
import { LayoutNavigation } from '@layout/navbar/navigation';
import { LocalStorage } from '@ezzabuzaid/document-storage';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit, OnDestroy {
  @Input() public item: LayoutNavigation;
  @Input() public collapse = false;
  private _subscribtion = new Subject();

  constructor(
    private sidebarService: SidebarService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() { }

  public get toggled() {
    return this.sidebarService.getSidebar(RegisterdSidebar.NAVBAR).toggled;
  }

  // TODO shortcuts service
  addShortcut() { }

  toggleNavbar() {
    if (this.breakpointObserver.isMatched(MEDIA_BREAKPOINTS.DOWN('md')) && !this.collapse) {
      this.sidebarService.getSidebar(RegisterdSidebar.NAVBAR).toggle();
    }
  }

  ngOnDestroy() {
    this._subscribtion.next();
    this._subscribtion.complete();
  }

}


class ShortcutService {

  constructor(
    private localstorage: LocalStorage
  ) {

  }

  addShortcut(item: LayoutNavigation) {
    const shortcuts = this.localstorage.get<LayoutNavigation[]>('shortcuts') || [];
    shortcuts.push(item);
    this.localstorage.set('shortcuts', shortcuts);
  }

  removeShortcut() {
  }


}
