import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './person-list.html',  
  styleUrls: ['./person-list.css']
})
export class PersonList implements OnInit {

  people: Person[] = [];

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.personService.list().subscribe(data => {
      console.log('DATA:', data, Array.isArray(data)); 
      this.people = data;
    });
  }

  showIdealWeight(id: number) {
    this.personService.getIdealWeight(id).subscribe({
      next: (res) => alert(`Peso ideal: ${res.peso_ideal} kg`),
      error: () => alert('Erro ao calcular peso ideal')
    });
  }

  edit(id: number) {
    this.router.navigate(['/editar', id]);
  }

  delete(id: number) {
    if (confirm('Deseja excluir?')) {
      this.personService.delete(id).subscribe(() => this.load());
    }
  }
}
