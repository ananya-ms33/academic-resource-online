import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../config';

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

  resCount = computed(() => this.resArr().length);
  expCount = computed(() => this.expArr().length);

  ngOnInit() {
    //if we login as admin from the login pg and isadmin is set to true
    const params = new URLSearchParams(window.location.search);
    if (params.get('auth') === 'admin') {
      localStorage.setItem('isAdmin', 'true');
    }

    if (localStorage.getItem('isAdmin') !== 'true') {
      window.location.href = CONFIG.STUDENT_APP_URL;
      return;
    }

    this.http.get<any[]>(`${CONFIG.API_URL}/resources`).subscribe(data => {
      this.resArr.set(data);
    });

    this.http.get<any[]>(`${CONFIG.API_URL}/experiences`).subscribe(data => {
      this.expArr.set(data);
    });
  }

  deleteresource(id: any) {
    this.http.delete(`${CONFIG.API_URL}/deleteresource/${id}`).subscribe(() => {
      this.resArr.set(this.resArr().filter(r => r._id !== id));
    });
  }

  deleteexperience(id: any) {
    this.http.delete(`${CONFIG.API_URL}/deleteexperience/${id}`).subscribe(() => {
      this.expArr.set(this.expArr().filter(e => e._id !== id));
    });
  }

  logout() {
    localStorage.removeItem('isAdmin'); // isadmin is removed 
    window.location.href = CONFIG.STUDENT_APP_URL;
  }
}