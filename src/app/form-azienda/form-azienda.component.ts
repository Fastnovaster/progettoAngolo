import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
@Component({
  selector: 'app-form-azienda',
  templateUrl: './form-azienda.component.html',
  styleUrls: ['./form-azienda.component.css']
})
export class FormAziendaComponent implements OnInit {

  form_azienda = this.fb.group({
    domanda_1 : ["",Validators.required],
    domanda_2_html: [""],
    domanda_2_javascript: [""],
    domanda_2_CSS: [""],
    domanda_2_Angular: [""],
    domanda_2_SB: [""],
    domanda_3:["nessuno",],
    domanda_4:["nessuno",],
    domanda_5:[""]
    });
    domanda = this.form_azienda.get("domanda_5");
    onSubmit(){
    
      console.log(this.form_azienda)
    }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
