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
  templateUrl: './person-form.html'
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
        alert('Pessoa atualizada!');
        this.router.navigate(['/']);
      });
    } else {
      this.personService.create(this.person).subscribe(() => {
        alert('Pessoa cadastrada!');
        this.router.navigate(['/']);
      });
    }
  }
}
