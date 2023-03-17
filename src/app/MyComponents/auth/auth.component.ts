import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = ''
  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective

  private closeSubs : Subscription;


  constructor(private authService: AuthService, private router: Router, private coponentFactoryResolver: ComponentFactoryResolver) { }

  ngOnDestroy(): void {
    if(this.closeSubs){
      this.closeSubs.unsubscribe();
    }
  }

  onHandleError() {
    this.error = '';
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    let authObs: Observable<AuthResponseData>

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      response => {
        console.log(response)
        this.isLoading = false;
        this.router.navigate(['./recipes'])
      }, errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  showErrorAlert(error: string) {
    // const alertComponent = new AlertComponent()
    const alertCmpFactory = this.coponentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = error;
    this.closeSubs=componentRef.instance.close.subscribe(()=>{
      this.closeSubs.unsubscribe();
       hostViewContainerRef.clear();
    });

  };

}
