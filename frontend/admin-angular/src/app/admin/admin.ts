//admin.ts
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
  //ngoninit runs when the pg loads 
  ngOnInit() {
    //only if the ssr is done else it shows errorr as window isnt defined
    if (typeof window === 'undefined') return;

    //if we login as admin from the login pg and isadmin is set to true
    //params has everthing after ? in the url
    const params = new URLSearchParams(window.location.search);
    if (params.get('auth') === 'admin') {
      localStorage.setItem('isadmin', 'true');
    }

    if (localStorage.getItem('isadmin') !== 'true') {
      //window.location.href is the entire url
      window.location.href = CONFIG.STUDENT_APP_URL;
      return;
    }
    //gets the data from /resources and stores it in resarr
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
    localStorage.removeItem('isadmin'); // isadmin is removed 
    window.location.href = CONFIG.STUDENT_APP_URL;
  }
}