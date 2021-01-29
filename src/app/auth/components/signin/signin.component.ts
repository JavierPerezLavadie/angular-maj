import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})




export class SigninComponent implements OnInit {

    durationInSeconds = 5;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
  }

  openSnackBar(message) {
    this._snackBar.open(message, 'Ok', {
      duration: 2000,

    });
  }



  userForm = this.fb.group({
    email: ['samuel@wecolearn.com', [Validators.required, Validators.email]],
    password: ['admin1234', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {
  }

  get emailControl() {
    return this.userForm.get('email');
  }

  get passwordControl() {
    return this.userForm.get('password');
  }

  signin() {

    console.log('submitted : ');

    // toutes les données du formulaire
    console.log(this.userForm.getRawValue());

    this.authService.signin(
      this.emailControl.value,
      this.passwordControl.value


    ).subscribe(
      (result) => {
        this.openSnackBar("Succes") // connexion est réussie !

        this.router.navigate(['dash/home']);


      },
      (err) => {


        this.openSnackBar("Vous ne pouvez acceder à la page")// on peut dire à l'utilisateur qu'il n'a pas donné les bons identifiants
        console.log({ err });
      });
  }








}
