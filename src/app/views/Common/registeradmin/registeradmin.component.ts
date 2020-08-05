// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators} from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../../../services/auth.service';
// import { ToasterService } from 'angular2-toaster';

// @Component({
//   selector: 'app-registeradmin',
//   templateUrl: './registeradmin.component.html',
//   styleUrls: ['./registeradmin.component.css']
// })
// export class RegisteradminComponent implements OnInit {


//   RegisteradminForm: FormGroup;
//   hide = true;
//   constructor(private auth: AuthService,
//     private router: Router,
//     private toastr: ToasterService) { }

//   ngOnInit(): void {
//     this.RegisteradminForm = new FormGroup ({
//       name: new FormControl ('', Validators.required),
//       email: new FormControl('', [Validators.required, Validators.email]),
//       password: new FormControl('', Validators.required),
//     });
//   }
//   registeradmin() {
//     this.auth.Registeradm(this.RegisteradminForm.value).subscribe(
//       () => {
//         this.router.navigate(["/login"]);
//         this.toastr.pop('success', 'Args Title', 'Args Body');
//       },
//       (err) => {
//         this.router.navigate(["/registeradmin"]);
//         return this.toastr.pop('warning', 'Args Title', 'Args Body');
//       }
//     );
//   }
// }

