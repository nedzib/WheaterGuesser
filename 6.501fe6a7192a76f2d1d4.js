(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Bxvx:function(t,i,e){"use strict";e.r(i),e.d(i,"GameModule",function(){return f});var o=e("ofXK"),r=e("tyNb");function n(t,i,e,o){return new(e||(e=Promise))(function(r,n){function a(t){try{c(o.next(t))}catch(i){n(i)}}function s(t){try{c(o.throw(t))}catch(i){n(i)}}function c(t){var i;t.done?r(t.value):(i=t.value,i instanceof e?i:new e(function(t){t(i)})).then(a,s)}c((o=o.apply(t,i||[])).next())})}var a=e("fXoL"),s=e("on2l");let c=(()=>{class t{constructor(){this.country="",this.capital="",this.capitalID=""}randomNumber(){return Math.floor(255*Math.random())+1}randomCapital(){return n(this,void 0,void 0,function*(){const t=this.randomNumber();return yield fetch("https://restcountries.eu/rest/v2/all").then(t=>t.json()).then(i=>{this.country=i[t].name,this.capital=i[t].capital,this.capitalID=this.capital.replace(" ","+")}),{capital:this.capital,country:this.country,capitalID:this.capitalID}})}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=a.Bb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=e("AytR");let p=(()=>{class t{constructor(){this.temp=0}randomNumber(){return Math.floor(10*Math.random())+1}weatherC(t){return n(this,void 0,void 0,function*(){return yield fetch("https://api.openweathermap.org/data/2.5/weather?q="+t+"&appid="+h.a.apiOpenWeather).then(t=>t.json()).then(t=>{try{return this.temp=Math.floor(t.main.temp-273.15),{temp:this.temp,opt1:this.temp+this.randomNumber(),opt2:this.temp+this.randomNumber()}}catch(i){return console.log(i),"error"}}),{temp:this.temp,opt1:this.temp+this.randomNumber(),opt2:this.temp+this.randomNumber()}})}weatherF(t){return n(this,void 0,void 0,function*(){return yield fetch("https://api.openweathermap.org/data/2.5/weather?q="+t+"&appid="+h.a.apiOpenWeather).then(t=>t.json()).then(t=>{this.temp=Math.floor(1.8*(t.main.temp-273.15)+32)}),{temp:this.temp,opt1:this.temp+this.randomNumber(),opt2:this.temp+this.randomNumber()}})}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=a.Bb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),l=(()=>{class t{transform(t,i,e){return!0===i?t+" \xb0C":t+" \xb0F"}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=a.Eb({name:"metric",type:t,pure:!0}),t})();const b=function(t){return{"gameButton-wrong":t}},u=function(t){return{"gameButton-right":t}},d=[{path:"",component:(()=>{class t{constructor(t,i,e,o){this.UService=t,this.CService=i,this.WService=e,this.router=o,this.score=0,this.country="",this.capital="",this.payload={temp:!0,name:"Player",score:0},this.rightOpt=4,this.opt=[0,0,0],this.right=[!1,!1,!1],this.wrong=[!1,!1,!1]}ngOnInit(){return n(this,void 0,void 0,function*(){this.resetButtons();let t={capital:"",country:"",capitalID:""};for(;""===t.capital||""===t.country;)t=yield this.CService.randomCapital();if(console.log(t),this.country=t.country,this.capital=t.capital,this.payload=this.UService.getSessionData(),console.log(this.payload),!0===this.payload.temp){const i=yield this.WService.weatherC(t.capitalID);this.fillData(i)}else{const i=yield this.WService.weatherF(t.capitalID);this.fillData(i)}})}onSelect(t){let i=new Audio;t===this.rightOpt?(console.log("right"),this.right[t]=!0,this.score=this.score+1,this.payload.score=this.score,i.src="assets/sounds/right.mp3",i.play(),this.reload()):(console.log("NO right"),this.wrong[t]=!0,this.score=this.score-1,this.payload.score=this.score,i.src="assets/sounds/noright.mp3",i.play())}fillData(t){console.log(t);const i=Math.floor(3*Math.random());this.rightOpt=i,this.opt[i]=t.temp,0===i&&(this.opt[1]=t.opt1,this.opt[2]=t.opt2),1===i&&(this.opt[0]=t.opt1,this.opt[2]=t.opt2),2===i&&(this.opt[1]=t.opt1,this.opt[0]=t.opt2)}reload(){return n(this,void 0,void 0,function*(){this.resetButtons();let t={capital:"",country:"",capitalID:""};for(;""===t.capital||""===t.country;)t=yield this.CService.randomCapital();if(console.log(t),this.country=t.country,this.capital=t.capital,console.log(this.payload),!0===this.payload.temp){const i=yield this.WService.weatherC(t.capitalID);this.fillData(i)}else{const i=yield this.WService.weatherF(t.capitalID);this.fillData(i)}})}resetButtons(){this.right=[!1,!1,!1],this.wrong=[!1,!1,!1]}onSubmit(){console.log("--onSubmit--End"),this.UService.setSessionData(this.payload),this.router.navigate(["/end"])}}return t.\u0275fac=function(i){return new(i||t)(a.Fb(s.a),a.Fb(c),a.Fb(p),a.Fb(r.b))},t.\u0275cmp=a.zb({type:t,selectors:[["app-game"]],decls:32,vars:33,consts:[[1,"gameContainer"],[1,"left"],[1,"leftContainer"],[1,"internalLeft"],[1,"cityContainer"],[1,"city"],[1,"country"],["href","www.google.com/maps/place/Bogot\xe1/","target","\u201d_blank\u201d"],[1,"ubi"],[1,"right"],[1,"rightContainer"],[1,"buttonContainer"],[1,"gameButton",3,"ngClass","click"],[1,"answer"],[1,"score"],[1,"gameButton",2,"height","10%","margin-bottom","2%",3,"click"]],template:function(t,i){1&t&&(a.Ib(0,"body"),a.Ib(1,"div",0),a.Ib(2,"div",1),a.Ib(3,"div",2),a.Ib(4,"div",3),a.Ib(5,"div",4),a.Ib(6,"h1",5),a.Wb(7),a.Hb(),a.Ib(8,"h2",6),a.Wb(9),a.Hb(),a.Hb(),a.Ib(10,"a",7),a.Gb(11,"div",8),a.Hb(),a.Hb(),a.Hb(),a.Hb(),a.Ib(12,"div",9),a.Ib(13,"div",10),a.Ib(14,"div",11),a.Ib(15,"div",12),a.Nb("click",function(){return i.onSelect(0)}),a.Ib(16,"div",13),a.Wb(17),a.Pb(18,"metric"),a.Hb(),a.Hb(),a.Ib(19,"div",12),a.Nb("click",function(){return i.onSelect(1)}),a.Ib(20,"div",13),a.Wb(21),a.Pb(22,"metric"),a.Hb(),a.Hb(),a.Ib(23,"div",12),a.Nb("click",function(){return i.onSelect(2)}),a.Ib(24,"div",13),a.Wb(25),a.Pb(26,"metric"),a.Hb(),a.Hb(),a.Hb(),a.Ib(27,"h1",14),a.Wb(28),a.Hb(),a.Ib(29,"div",15),a.Nb("click",function(){return i.onSubmit()}),a.Ib(30,"div",13),a.Wb(31," End "),a.Hb(),a.Hb(),a.Hb(),a.Hb(),a.Hb(),a.Hb()),2&t&&(a.wb(7),a.Xb(i.capital),a.wb(2),a.Xb(i.country),a.wb(6),a.Rb("ngClass",a.Sb(21,b,i.wrong[0]))("ngClass",a.Sb(23,u,i.right[0])),a.wb(2),a.Yb(" ",a.Qb(18,12,i.opt[0],i.payload.temp)," "),a.wb(2),a.Rb("ngClass",a.Sb(25,b,i.wrong[1]))("ngClass",a.Sb(27,u,i.right[1])),a.wb(2),a.Yb(" ",a.Qb(22,15,i.opt[1],i.payload.temp)," "),a.wb(2),a.Rb("ngClass",a.Sb(29,b,i.wrong[2]))("ngClass",a.Sb(31,u,i.right[2])),a.wb(2),a.Yb(" ",a.Qb(26,18,i.opt[2],i.payload.temp)," "),a.wb(3),a.Yb("Score: ",i.score,""))},directives:[o.h],pipes:[l],styles:[""]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.Db({type:t}),t.\u0275inj=a.Cb({imports:[[r.c.forChild(d)],r.c]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.Db({type:t}),t.\u0275inj=a.Cb({imports:[[o.b,m]]}),t})()}}]);