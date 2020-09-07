import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../../skills/skills.service';
import { delay } from 'rxjs/operators';
import { addBusinessDays } from 'date-fns';

@Component({
  selector: 'app-json-server',
  templateUrl: './json-server.component.html',
  styleUrls: ['./json-server.component.scss'],
})
export class JsonServerComponent implements OnInit {
  constructor(private service: SkillsService) {}

  result: any;
  loading = false;

  ngOnInit(): void {}

  getSkills(): void {
    this.loading = true;
    this.service
      .getSkills()
      .pipe(delay(2000))
      .subscribe((data) => {
        this.result = data;
        this.loading = false;
      });
  }

  addSkill(): void {
    const skill = {
      name: 'Cooking Pad Krapao',
      hours: 1,
      completed: false,
      dueDate: addBusinessDays(new Date(), 5),
    };
    this.loading = true;

    this.service
      .addSkill(skill)
      .pipe(delay(1000))
      .subscribe((response) => {
        console.log('response from addSkill: ', response);
        this.loading = false;
      });
  }
}
