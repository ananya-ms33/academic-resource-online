import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.html'
})
export class AdminComponent {

  resources: any[] = []
  experiences: any[] = []

  constructor(private http: HttpClient) {
    this.loadData()
  }

  // Load data from server
  loadData() {
    this.http.get('http://localhost:3000/resources').subscribe((data: any) => {
      this.resources = data
    })

    this.http.get('http://localhost:3000/experiences').subscribe((data: any) => {
      this.experiences = data
    })
  }

  // Delete resource
  deleteresource(id: string) {
    this.http.delete(`http://localhost:3000/deleteresource/${id}`).subscribe(() => {
      this.resources = this.resources.filter(r => r._id !== id)
    })
  }

  // Delete experience
  deleteexperience(id: string) {
    this.http.delete(`http://localhost:3000/deleteexperience/${id}`).subscribe(() => {
      this.experiences = this.experiences.filter(e => e._id !== id)
    })
  }
}