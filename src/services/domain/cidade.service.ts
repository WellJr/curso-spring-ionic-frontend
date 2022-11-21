import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { CidadeDTO } from "../../models/cidade.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CidadeService {
    constructor(public http: HttpClient) {  
    }

    public cidades: Observable<CidadeDTO[]>;

    findAll(estado_id : string) : Observable<CidadeDTO[]> {
        this.cidades = this.http.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`); 
        return this.cidades;
    }
}