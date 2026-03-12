import { Component } from '@angular/core'
import { AdminComponent } from './admin/admin'

@Component({
selector: 'app-root',
standalone: true,
imports: [AdminComponent],
templateUrl: './app.html'
})

export class App {

}