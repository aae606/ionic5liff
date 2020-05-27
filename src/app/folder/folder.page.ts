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

    this.img =
      'https://cdn3.iconfinder.com/data/icons/covid-19-coronavirus-protection-or-prevention-flat/64/Mask_1-512.png';
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

  openWindow() {
    liff.openWindow({
      url: 'https://line.me',
      external: true,
    });
  }

  async scanCode() {
    const result = await liff.scanCode();
    document.getElementById('scanCode').append(result.value);
  }

  closed() {
    liff.closeWindow();
  }

  async shareMsg() {
    await liff.shareTargetPicker([
      {
        type: 'text',
        text: 'This message was sent by ShareTargetPicker',
      },
    ]);
  }

  async sendMsg() {
    if (liff.getContext().type !== 'none') {
      await liff.sendMessages([
        {
          type: 'flex',
          altText: 'Flex Message',
          contents: {
            type: 'bubble',
            direction: 'ltr',
            body: {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: 'แบบประเมินสุขภาพจิต',
                  margin: 'md',
                  size: 'lg',
                  align: 'center',
                  weight: 'bold',
                  color: '#05683A',
                  wrap: true,
                },
                {
                  type: 'separator',
                  margin: 'md',
                  color: '#585454',
                },
                {
                  type: 'text',
                  text: 'แบบประเมินภาวะซึมเศร้า',
                  margin: 'md',
                  align: 'center',
                  weight: 'bold',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'PHQ-9',
                    uri: 'https://liff.line.me/1654187718-l0z2DKvr',
                  },
                  color: '#05683A',
                  margin: 'sm',
                  style: 'primary',
                  gravity: 'top',
                },
                {
                  type: 'separator',
                  margin: 'md',
                  color: '#6B5C5C',
                },
                {
                  type: 'text',
                  text: 'แบบประเมินความเครียด',
                  margin: 'md',
                  size: 'md',
                  align: 'center',
                  weight: 'bold',
                  wrap: true,
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'ST-5',
                    uri: 'https://linecorp.com',
                  },
                  color: '#05683A',
                  margin: 'sm',
                  height: 'md',
                  style: 'primary',
                },
                {
                  type: 'separator',
                  margin: 'md',
                  color: '#767474',
                },
                {
                  type: 'text',
                  text: 'แบบประเมินสภาวะหมดไฟ',
                  margin: 'md',
                  align: 'center',
                  weight: 'bold',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'Burn Out',
                    uri: 'https://linecorp.com',
                  },
                  color: '#05683A',
                  margin: 'sm',
                  style: 'primary',
                },
                {
                  type: 'separator',
                  margin: 'md',
                  color: '#535151',
                },
                {
                  type: 'text',
                  text: 'แบบประเมินความกังวลต่อไวรัส',
                  margin: 'md',
                  align: 'center',
                  weight: 'bold',
                  wrap: true,
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'COVID-19',
                    uri: 'https://linecorp.com',
                  },
                  color: '#05683A',
                  margin: 'sm',
                  style: 'primary',
                },
              ],
            },
            styles: {
              body: {
                backgroundColor: '#CFCFCF',
                separator: true,
                separatorColor: '#1A1818',
              },
            },
          },
        },
      ]);
      liff.closeWindow();
      //  alert("Message sent")
    }
  }

  
}
