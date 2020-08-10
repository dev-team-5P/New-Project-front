import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EtablissementService } from '../../../services/etablissement.service';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent implements OnInit {
  mailForm: FormGroup;
  constructor(private etablisementservice: EtablissementService,
    private router: Router,
    private toasterService: ToasterService
    ) { }

  ngOnInit(): void {
    this.mailForm = new FormGroup({
      subject: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });
  }
  sendmail() {
    this.etablisementservice.SendToAllCandidat(this.mailForm.value).subscribe((res: any) => {});
    this.toasterService.pop('success', 'success', 'mail has been sended ');
    this.router.navigateByUrl("/dashboard");
  }

}
