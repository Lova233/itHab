import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { UserService } from '../../services/user.service';
import { FormGroup, FormControl, EmailValidator, Validators } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
    form: FormGroup;
    mailStep: Step;
    pswStep: Step;
    step: Step;
    recoveryStepOne: Step;
    recoveryStepTwo: Step;
    resetPassword: Step;

    constructor(private router: Router,
                // private userService: UserService
                ) 
                {}

    ngOnInit(): void {
        // if (this.userService.isLoggedIn()) {
        //     this.goToDashboard();
        // }
        this.form = new FormGroup({
            username: new FormControl(''),
            password: new FormControl(''),
            code: new FormControl('', Validators.minLength(5)),
            newpassword : new FormControl(''),
            confirmpassword: new FormControl(''),
        });
        this.mailStep = {
            type: 'mail',
            titleText: 'Accedi al tuo account.',
            subText:'inserisci la tua e-mail',
            linkText: '',
            buttonText: 'NEXT',
            error: ''
        };
        this.pswStep = {
            type: 'psw',
            titleText: 'Inserisci la tua password',
            subText:'insersisci la tua password',
            linkText: 'Password dimenticata?',
            buttonText: 'ACCEDI',
            error: ''
        };
        // this.recoveryStepOne = {
        //   type: 'recoveryOne',
        //   titleText: 'Password dimenticata',
        //   subText:'inserisci la tua e-mail',
        //   linkText: 'Torna al log In',
        //   buttonText: 'INVIA',
        //   error: ''
        // }
        this.recoveryStepOne = {
          type: 'recoveryTwo',
          titleText: 'Password dimenticata',
          subText:'Controlla la tua mail e inserisci il codice di conferma',
          linkText: 'Torna al log In',
          buttonText: 'CONFERMA',
          error: ''
        }
        this.resetPassword = {
          type: 'recoveryThree',
          titleText: 'Modifica la tua password',
          subText:'Inserisci una nuova password',
          linkText: 'Torna al log In',
          buttonText: 'CONFERMA',
          error: ''
        }
        this.step = this.mailStep;
    }

    goNext(){
      if(this.step == this.mailStep){
        this.step = this.pswStep;}
      else if(this.step == this.recoveryStepOne){
      {this.step = this.resetPassword}
      }
    




      this.mailStep.error = '';
    }

    goRecovery(){
      console.log(this.step,"--ACTUAL STEP")
      if (this.step == this.recoveryStepOne || this.step == this.resetPassword){
          this.step = this.mailStep;
      }else{ this.step = this.recoveryStepOne;}
      console.log(this.step,"--MUTATE STEP")

      
      this.mailStep.error = '';
    
    }

    onSubmit(form): void {
        // this.userService
        //     .login(form)
        //     .subscribe(
        //         data => {
        //             this.goToDashboard();
        //         },
        //         error => {
        //             this.mailStep.error = 'The email and password you entered did not match our records';
        //             this.step = this.mailStep;
        //         }
        //     );
    }

    goToDashboard() {
        this.router.navigate(['/dashboard']);
    }
}

interface Step {
    type: string;
    titleText: string;
    subText:string;
    linkText: string;
    buttonText: string;
    error: string;
    
}