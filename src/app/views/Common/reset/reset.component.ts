import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToasterService } from 'angular2-toaster';
=======
>>>>>>> 4848802e2f79438afb79f48a821ea5e7f0445872

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

<<<<<<< HEAD
  constructor(private auth: AuthService,
    private router: Router,
    private toastr: ToasterService) { }
=======
  constructor() { }
>>>>>>> 4848802e2f79438afb79f48a821ea5e7f0445872

  ngOnInit(): void {
  }

}
