import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LIFFErrorObject } from 'liff-type';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public os: string;
  public language: string;
  public version: string;
  public isInClient: boolean;
  public isLogin: boolean;

  public pictureUrl: string;
  public userId: string;
  public displayName: string;
  public statusMessage: string;
  public email: string;
  public img: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.main();

    this.img = 'https://cdn3.iconfinder.com/data/icons/covid-19-coronavirus-protection-or-prevention-flat/64/Mask_1-512.png';
    // this.img = '../../assets/newlogo2.png';
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  doRefresh(event) {
    // console.log('Begin async operation');
    window.location.reload();
    // end
    setTimeout(() => {
      // console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  main() {
    liff
      .init({ liffId: '1654187718-l0z2DKvr' })
      .then(() => {
        if (!liff.isLoggedIn()) {
          // liff.login()
          console.log('log out');
        } else {
          // liff.login()
          console.log('login');
          this.isLogin = liff.isLoggedIn();
          this.getUserProfile();
        }
        this.os = liff.getOS();
        this.isLogin = liff.isLoggedIn();
      })
      .catch((err: LIFFErrorObject) => console.error(err.message));
  }
  logIn() {
    liff.login();
  }
  logOut() {
    liff.logout();
    window.location.reload();
  }
  async getUserProfile() {
    const profile = await liff.getProfile();
    // Destructuring
    this.pictureUrl = profile.pictureUrl;
    this.userId = profile.userId;
    this.displayName = profile.displayName;
    this.statusMessage = profile.statusMessage;
    this.email = (await liff.getDecodedIDToken()).email;
  }

  onClick() {
    alert('Hi!');
  }
}
