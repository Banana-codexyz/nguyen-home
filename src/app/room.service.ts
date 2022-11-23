import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) { }

  public getAllRoom(): Observable<Room[]>{
    return this.http.get<Room[]>(`${this.apiServerUrl}/room/getAll`);
  }

  public addRoom(room:Room): Observable<Room>{
    return this.http.post<Room>(`${this.apiServerUrl}/room/add`,room);
  }

  public updateRoom(room: Room): Observable<Room>{
    return this.http.put<Room>(`${this.apiServerUrl}/room/update`,room);
  }

  public deleteRoom(roomId: number): Observable<void>{
    return this.http.get<void>(`${this.apiServerUrl}/room/delete/${roomId}`);
  }
}
