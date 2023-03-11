import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CommonService } from '../services/common.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  userInfo: any = {};
  lang: any = 'es';
  passwordToggleIcon: string = 'eye';
  password_type: string = 'password';


  constructor(
    private afAuth: AngularFireAuth,
    private common: CommonService,
    private translate: TranslateService,
    private router: Router,
    private menuCtrl: MenuController,
    private chRef: ChangeDetectorRef,
  ) {
    this.menuCtrl.enable(false);

   

  }

  ngOnInit() {
    this.lang = localStorage.getItem('lang');
    if (localStorage.getItem('displaySlider') == undefined || localStorage.getItem('displaySlider') == 'true') {

      this.router.navigateByUrl('/welcome')

    }
  }

 togglePasswordMode(){   
   this.password_type = this.password_type === 'text' ? 'password' : 'text';
   if(this.passwordToggleIcon == 'eye') {
    this.passwordToggleIcon = 'eye-off';
  } else {
    this.passwordToggleIcon = 'eye'
  }
  this.chRef.detectChanges();
}

  login() {
    
    
    this.common.showLoader();
    let email = ((this.userInfo.email).toLowerCase().trim());
    this.afAuth.auth.signInWithEmailAndPassword(email, this.userInfo.password).then((data) => {
      console.log(data)
      this.common.hideLoader();
    }
    ).catch(err => {
      console.log(err);
      this.common.hideLoader();
      this.common.showToast(err.message);
    })
  }

  changeLang() {
    console.log(this.lang);
    this.translate.use(this.lang);
    localStorage.setItem('lang', this.lang);
  }
}
