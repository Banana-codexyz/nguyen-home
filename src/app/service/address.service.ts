import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { District } from '../model/district';
import { Province } from '../model/province';
import { Ward } from '../model/ward';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) { }

  getAllProvince(): Observable<Province[]> {
    return this.http.get<Province[]>(`${this.apiServerUrl}/address/getAllProvince`);
  }

  getDistrictByProvinceId(proviceId: string): Observable<District[]> {
    return this.http.get<District[]>(`${this.apiServerUrl}/address/getDistrictByProvinceId/${proviceId}`);
  }

  getWardByDistrictId(districtId: string): Observable<Ward[]> {
    return this.http.get<Ward[]>(`${this.apiServerUrl}/address/getWardByDistrictId/${districtId}`);
  }
}
