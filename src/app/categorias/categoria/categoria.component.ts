import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})

//Criação dos formGroups para os campos do formulário
export class CategoriaComponent {
  camposForm: FormGroup;

  constructor(){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    });
  }

  salvar(){
    console.log('Valores digitados: ', this.camposForm.value);
    console.log('Está valido? ', this.camposForm.valid);
  }
}
