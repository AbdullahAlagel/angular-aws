import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { OilOutput } from '../types/Oil';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { OilRequestedOutput } from '../types/OilRequestedOutput';
@Injectable({
  providedIn: 'root',
})
export class OilService {
  
  
  
  findOilById(id: number) {
    return this.http.get<OilOutput>(
      environment.apiBaseUrl + `api/v1/oil/${id}`
    );
  }
  updateOil(v: UntypedFormGroup, file: File[],userId:number) {
   
    let queryParams = new HttpParams();
    queryParams = queryParams.append('oilNameAr', v.value.oilNameEn);
    queryParams = queryParams.append('oilNameEn', v.value.oilNameEn);
    queryParams = queryParams.append('oilType', v.value.oilType);
    queryParams = queryParams.append('oilPrice', v.value.oilPrice);
    queryParams = queryParams.append('oilDescription', v.value.oilDesc);
    console.log('FFFFFFF', file);
    const fileupload: FormData = new FormData();
    fileupload.append('image', file[0]);
    // file.append('image2', re.images[1]);
    // file.append('image3', re.images[2]);
    // file.append('image4', re.images[3]);

    return this.http.put(
      environment.apiBaseUrl + `api/v1/oil-update/${userId}`,
      fileupload,
      { params: queryParams }
    );
  }

  AddOil(v: UntypedFormGroup, file: File[]) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('oilNameAr', v.value.oilNameEn);
    queryParams = queryParams.append('oilNameEn', v.value.oilNameEn);
    queryParams = queryParams.append('oilType', v.value.oilType);
    queryParams = queryParams.append('oilPrice', v.value.oilPrice);
    queryParams = queryParams.append('oilDescription', v.value.oilDesc);
    console.log('FFFFFFF', file);
    const fileupload: FormData = new FormData();
    fileupload.append('image', file[0]);
    // file.append('image2', re.images[1]);
    // file.append('image3', re.images[2]);
    // file.append('image4', re.images[3]);

    return this.http.post(
      environment.apiBaseUrl + `api/v1/add-oil`,
      fileupload,
      { params: queryParams }
    );
  }

  constructor(private http: HttpClient) {}

  getAllOil() {
    return this.http.get<OilOutput[]>(
      environment.apiBaseUrl + `api/v1/find-all-oil`
    );
  }


  getAllRequestedOil() {
    return this.http.get<OilRequestedOutput[]>(
      environment.apiBaseUrl + `api/v1/find-all-requested-oil`
    );
  }


}
