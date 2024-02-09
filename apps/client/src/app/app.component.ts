import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SVG_PROVIDER} from '@ng-pack/core/providers';
import {
    TUI_SANITIZER,
    TuiAlertModule,
    TuiDialogModule,
    TuiRootModule,
} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

@Component({
    standalone: true,
    imports: [RouterModule, TuiRootModule, TuiDialogModule, TuiAlertModule],
    selector: 'ng-pack-root',
    template: `
        <tui-root>
            <router-outlet></router-outlet>
        </tui-root>
    `,
    styleUrls: ['./app.component.scss'],
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}, SVG_PROVIDER],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
