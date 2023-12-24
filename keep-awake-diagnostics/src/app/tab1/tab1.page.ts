import { Component } from '@angular/core';
import { KeepAwake } from '@capacitor-community/keep-awake';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  log:string ="";
  constructor() {
    this.IsKeepAwakeSupported();    
  }

  async IsKeepAwakeSupported(){
    const result = await KeepAwake.isSupported();
    console.log("TEST");
    console.log(result.isSupported);
    this.log = "Awake Is Supported = " + result.isSupported;

  }

  async keepAwake(){
    await KeepAwake.keepAwake();
    const result = await KeepAwake.isKeptAwake();    
    this.log = "After Clicking Keep awake, Keeping Device Awake = " + result.isKeptAwake;
  }

  async allowToSleep(){
    await KeepAwake.allowSleep();
    const result = await KeepAwake.isKeptAwake();
    console.log("KeptAwake = ", result.isKeptAwake)    
    this.log = "After Clicking Allow to Sleep Keeping Device Awake = " + result.isKeptAwake;
  }
}
