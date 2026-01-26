import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './person-form.html',
  styleUrls: ['./person-form.css']
})
export class PersonForm {

  person: Person = {
    nome: '',
    data_nascimento: '',
    cpf: '',
    sexo: 'M',
    altura: 0,
    peso: 0
  };

  id?: number;

  showSuccess = false;
  successMessage = '';

  constructor(
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.personService.getById(this.id).subscribe(person => {
        this.person = person;
      });
    }
  }

  submit() {
    this.person.cpf = this.person.cpf.replace(/\D/g, '');

    if (this.id) {
      this.personService.update(this.id, this.person).subscribe(() => {
        this.showSuccessModal('Pessoa atualizada com sucesso!');
      });
    } else {
      this.personService.create(this.person).subscribe(() => {
        this.showSuccessModal('Pessoa cadastrada com sucesso!');
      });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  showSuccessModal(msg: string) {
    this.successMessage = msg;
    this.showSuccess = true;

    setTimeout(() => {
      this.showSuccess = false;
      this.router.navigate(['/']);
    }, 5000);
  }
}
