import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './person-list.html',
  styleUrls: ['./person-list.css']
})
export class PersonList implements OnInit {

  people = signal<Person[]>([]);
  searchTerm = signal('');

  filteredPeople = computed(() => {
    const term = this.searchTerm().toLowerCase();

    return this.people().filter(p =>
      !term ||
      p.nome.toLowerCase().includes(term) ||
      p.cpf.includes(term) ||
      p.sexo.toLowerCase().includes(term) ||
      p.altura.toString().includes(term) ||
      p.peso.toString().includes(term)
    );
  });

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.personService.list().subscribe(data => {
      console.log('DADOS:', data);
      this.people.set(data);
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
