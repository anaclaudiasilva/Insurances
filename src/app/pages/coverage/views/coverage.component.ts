import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalDetailsComponent } from 'src/app/shared/components/modal-details/modal-details.component';
import { CoverageService } from '../services/coverage.service';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss']
})

export class CoverageComponent implements OnInit {
  public residencials: any;
  public products: any;
  public coverages: any;
  public image: string;

  constructor(
    private modal$: BsModalService,
    public coverages$: CoverageService
  ) { }

  ngOnInit() {
    this.showResidencials();
  }

  public showResidencials() {
    this.coverages$.getResidencial().subscribe(res => {
      this.residencials = res;

      this.residencials.forEach(product => {
        return this.products = product.produtos;
      });

      this.products.forEach(item => {
        return this.coverages = item.coberturas;
      });
    });
  }

  public showImages(id: string) {
    const url = 'https://itau-mkt-place-seguros.s3-sa-east-1.amazonaws.com/images/residencial/ilustracoes';

    if (id === '13ee29a3-1df3-4466-9e41-43753ec74d82') {
      return this.image = `${url}/incendio.svg`;
    } else if (id === '74a8d6b0-5287-4b5d-ab7d-686ad09d16c5') {
      return this.image = `${url}/de.svg`;
    } else if (id === 'b9d27537-9833-444c-9a77-cfcf85cae486') {
      return this.image = `${url}/subbens.svg`;
    } else if (id === '5d75a882-3916-411b-93c9-c306aab91084') {
      return this.image = `${url}/vidros.svg`;
    } else if (id === 'da772d2e-f390-4cfd-a190-d9b8c4ef19a9') {
      return this.image = `${url}/rcfam.svg`;
    } else if (id === 'd943c4c4-eee2-4478-be27-5dfa6f130b4f') {
      return this.image = `${url}/vaz_tub.svg`;
    } else if (id === 'aa9eb39f-cb64-4404-9b43-bf2f6408017b') {
      return this.image = `${url}/pagaluguel.svg`;
    } else if (id === '820edf05-bfe0-4274-93e3-cecaff333daf') {
      return this.image = `${url}/neg_casa.svg`;
    } else if (id === 'aa05ec8c-e1df-4654-bea9-557923cba29f') {
      return this.image = `${url}/vendaval.svg`;
    } else if (id === '61b70d59-5900-4709-9d78-04bb6bfc08ba') {
      return this.image = `${url}/tremor.svg`;
    } else if (id === '8e4005d3-4b8d-497f-b398-7bde6fb8cb0b') {
      return this.image = `${url}/rcfam.svg`;
    } else if (id === '4cf481d4-4da4-4d31-b054-dfb160e9c9b2') {
      return this.image = `${url}/impacve.svg`;
    } else if (id === '00e33efe-a32b-419e-b0c3-6e719b6bf1cc') {
      return this.image = `${url}/sub_bike.svg`;
    }
  }

  public callModalDetails(residencial: any) {
    this.modal$.show(ModalDetailsComponent, {
      class: 'modal-md',
      animated: true,
      backdrop: true,
      ignoreBackdropClick: true,
      initialState: {
        image: this.showImages(residencial.id_cobertura),
        nome: residencial.nome,
        descricao: residencial.descricao,
      }
    });
  }
}
