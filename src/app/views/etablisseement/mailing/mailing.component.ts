import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EtablissementService } from '../../../services/etablissement.service';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent implements OnInit {
  mailForm: FormGroup;
  constructor(private etablisementservice: EtablissementService) { }

  ngOnInit(): void {
    this.mailForm = new FormGroup({
      subject: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });
  }
  sendmail() {
    this.etablisementservice.SendToAllCandidat(this.mailForm.value).subscribe((res: any) => {});
  }

}
