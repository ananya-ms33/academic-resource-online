import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class AdminComponent implements OnInit {
  resArr = signal<any[]>([]);
  expArr = signal<any[]>([]);
  http = inject(HttpClient);

  // computed - sginals update automatically when there is a change in resArr or expArr
  resCount = computed(() => this.resArr().length);
  expCount = computed(() => this.expArr().length);

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/resources').subscribe(data => {
      this.resArr.set(data);
    });

    this.http.get<any[]>('http://localhost:3000/experiences').subscribe(data => {
      this.expArr.set(data);
    });
  }

  deleteresource(id: any) {
    this.http.delete('http://localhost:3000/deleteresource/' + id).subscribe(() => {
      // We update the signal directly instead of refreshing the page
      this.resArr.set(this.resArr().filter(r => r._id !== id));
    });
  }

  deleteexperience(id: any) {
    this.http.delete('http://localhost:3000/deleteexperience/' + id).subscribe(() => {
      // We update the signal directly instead of refreshing the page
      this.expArr.set(this.expArr().filter(e => e._id !== id));
    });
  }

  logout() {
    window.location.href = 'http://localhost:5173';
  }
}