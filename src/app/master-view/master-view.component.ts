import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-master-view',
  imports: [IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, RouterOutlet, RouterLink],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent {}
