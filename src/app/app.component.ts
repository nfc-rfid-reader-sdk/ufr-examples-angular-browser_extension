import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular uFR Browser Extension demo';

  //Use this function to call uFR API function.
  uFRequest(request:any, response:any) {
    let t = new CustomEvent("send-ufr",{ detail: request, bubbles: !0, cancelable: !0});
    document.dispatchEvent(t);
    let u = 0;
    document.addEventListener("get-ufr", function(e) {
      let resp = JSON.parse(window.sessionStorage["response"]);
      0 == u && response(resp), u++
    
  })
  }

  //ReaderOpen example function
  ReaderOpen() { 
    this.uFRequest("ReaderOpen", function(uFResponse:any) {
      console.log(uFResponse);  
      let responseString = JSON.stringify(uFResponse); 
      alert(responseString);
    });
  }
 
 //ReaderUISignal 1 1 example function
  ReaderUISignal() { 
      this.uFRequest("ReaderUISignal 1 1", function(uFResponse:any) {  
        console.log(uFResponse);    
        let responseString = JSON.stringify(uFResponse);    
        alert(responseString);
      });
 }

  //GetCardIdEx example function
  GetCardIdEx() { 
      this.uFRequest("GetCardIdEx", function(uFResponse:any) {    
        console.log(uFResponse);  
        let responseString = JSON.stringify(uFResponse);    
        alert(responseString);
      });
 }
}