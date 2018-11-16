import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();

    this.form.get('search').valueChanges
      .subscribe((data: string) => {
        console.log(data);
      });
  }

  private createForm(): void {
    this.form = this.fb.group({
      search: null
    });
  }
}
