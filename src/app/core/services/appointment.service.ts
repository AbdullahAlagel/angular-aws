import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { TimeBooked } from '../types/TimeBooked';
import { AppointmentsOutput } from 'src/app/pages/appointment/types/AppointmentsOutput';
import { AppointmentsDto } from 'src/app/pages/appointment/types/AppointmentsDto';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient, private router: Router) {}

  addTime(fullDate: string, city: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('fullDate', fullDate);
    queryParams = queryParams.append('city', city);
    return this.http.post<TimeBooked>(
      environment.apiBaseUrl + `api/v1/add-time`,
      queryParams
    );
  }

  findAllTime() {
    return this.http.get<TimeBooked[]>(
      environment.apiBaseUrl + `api/v1/find-all-time`
    );
  }

  addNewAppointment(appointments: AppointmentsDto) {
    return this.http.post<AppointmentsOutput>(
      environment.apiBaseUrl + `api/v1/book-appointment`,
      appointments
    );
  }

  findAppointmentById(id: number) {
    return this.http.get<AppointmentsOutput>(
      environment.apiBaseUrl + `api/v1/find-appointment/${id}`
    );
  }

  appointmentStatus(id: number, status: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('status', status);

    return this.http.get<AppointmentsOutput>(
      environment.apiBaseUrl + `api/v1/find-appointment/${id}`,
      { params: queryParams }
    );
  }
}
