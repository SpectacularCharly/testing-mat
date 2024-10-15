import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  valores: number[] = [];
  nuevosValores: number[] = [];
  media: number = 0;
  mediaNuevosValores: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('src/app/media/datos.json').subscribe(data => {
      this.valores = data.valores;
      this.nuevosValores = data.nuevosValores;

      this.calcularMedia();
      this.calcularMediaNuevosValores();
    });
  }

  calcularMedia(): void {
    if (this.valores.length > 0) {
      this.media = this.valores.reduce((acc, val) => acc + val, 0) / this.valores.length;
    }
  }

  calcularMediaNuevosValores(): void {
    if (this.nuevosValores.length > 0) {
      this.mediaNuevosValores = this.nuevosValores.reduce((acc, val) => acc + val, 0) / this.nuevosValores.length;
    }
  }
}

