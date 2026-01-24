import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-ideal-weight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-ideal-weight.html'
})
export class PersonIdealWeight {

  pesoIdeal: number | null = null;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private service: PersonService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getIdealWeight(id).subscribe({
      next: res => {
        this.pesoIdeal = res.peso_ideal;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  back() {
    this.router.navigate(['/']);
  }
}
