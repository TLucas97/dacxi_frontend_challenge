(function(t){function e(e){for(var i,s,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],i=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var i={},a={app:0},n=[];function s(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=i,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(r,i,function(e){return t[e]}.bind(null,i));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dacxi_frontend_challenge/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},4226:function(t,e){t.exports="data:image/png;base64,UklGRkYFAABXRUJQVlA4TDkFAAAvBAENEL8gFkzmL90Xw/zPP0G2Lf4IXoJJmmo7Bms4AgAc7QMAQJZt223b3OdH0C8gxGLw4c5/rCiURJe/rIj+TwBeKEspm+KPb4Uky/Kn08yuz383cY7qn23mcPyz2Vj6bxFZnMX+eLIUkkx/u+Bs/jghmbZEr6z284TM7tsEr6f7LSRdq8/V0jTm2zPUmvI45Dl6xDvJg4PvwzrcTll/AdDHvsZVXhbY/Ci8MOVHI3K90VL4Y80NBxDCnmb7eIMzhBCgivHA3ECQ2wTn+A8zNb4ASNpDTHiDjDo7oi9l01x4huCkV7OvyP6v8PFumnn1h8FOsigAxMec7B3OEMIEJxJZ1o1rLGXa6KkybnCeqzO811T4w8HWpGhqELxDvbU24KAhmARmjExYGd9KnTdQlaeIqjxFzWyeXvLKZ51mFloJmJ0lK658IDG91ca3s1xI+qYXZMkk6f9k9rojS2HTF4Fkd/dTGg+vFfA6vlVG3YPaziJ3O99NM7v+byg4ux5Ztz4LB7+AifVRGesEgHW60XkKMsPEU+/EN1PnYBn55KiPLBzOAGLFCGipTnwHkcWZIYX8Toq/RJ3XKy1D7cp4DbkqCidJ11uIzY3ZMNkEQFMKADTFSi1gNsFk01vtVzaFzi/Y2D6zjzmb5cxlSL2V17TmjhaSPBfWhlt81+ojOaD9LGVzFwCTDwQ2VwFgPmCsPaDW1ECo2it+E4B5J6H/LGusaIr3tkZCU0vvrIqiOzWw9lx+GZDUml62NrSF0DsrRzd1hPWGy3J2FL8JVwDQvfp4Wa4y+qVTqtTTjjbCNWhpRNxHly3pe4Q0A3NSICa5kpgaxq0iNwWA2d9mG/AO38zY3O4zF5JcnmR5Hpr5BWRGCAueYXkeYVlQm7/uqM6esOPV2gsX4jX1FuNd1BlkKhQAIiMiABKt0pbQAXJDYAagLZFOojW0QboBgMrL1oqh86+XqyKdrYNS5WvObtGbGL8ArG6JR8kswEbbeRQespPc8FnITQDAKYHFEZkQnNwEmkmfqp3kZswnfW6QWTG+PSk0XBuBvVTxkMbCXq64dCQ1Fg6eN0lMaCbSU2aAU3d6cqY585iVZT14VDvnyINyMGgp684EZ0o8qznzmI1l3Xl2yE0HQuaT4BXdJg0bB6RBt0lD5kBoMAeBhKXkKrBe54qPe+wjCYhcAzN2GiY6Eg0bDVIoACLj4YF2UhIjUArCpFpYIdFg/AI47NaSB6+OWONiALA2LgJAbvQr9coFa8VwizRigNBXWgNkIzMAmR8AJm7lS7jyxM4mPgvJse0K6XOl+wuwP0n8SerXNtYKiFcudzBmAAetgcxCbQhL4+AMnA0U0pDJDTs3MzOhK/xF5KYAoP487CPnANRH8gDUr/xjnQBgKiSZ7yDOGCKprUh+ATsfuvALiQ8xntMnHXUmJ6zkjECf9BGURQN7D+n4BXIRADAfmocQvbPPI5C1l2wEsg6UCGV9oBkrxhtgcpLF0JJCq0gWRSAzdpJlaqwsQCAnIJFkQiZZKJWRuZMu0Q0ANI3oGMTWnI81QFOtDUDtyPmIginVLUDtON39iAJYqrWFmFJKEUh1eCfonEyAyRQAvEhlFgVASDMQogmaajMgZgAwxRgAzDEE08kmIKRZLQBmUi6RrgCgeyfh537W+PTghgZuPpVr5KYAYF7t+NUkun4P0PwElgV19JLwu9EgACAqtwPMr5FuAKCCX843m8o18lD8+D8OdH+C298LUL9QkuDnz+vPA5iPHIq/e+rkgD+97idLNvy5AQA="},"56d7":function(t,e,r){"use strict";r.r(e);var i=r("2b0e"),a=r("7496"),n=r("8336"),s=r("490a"),o=r("8e36"),c=r("b974"),u=r("8654"),l=function(){var t=this,e=t._self._c;return e(a["a"],[e("div",{staticClass:"bg-dacxi-white h-full",attrs:{"data-testid":"dacxi-app"}},[e("Header"),e("div",{staticClass:"flex justify-evenly flex-column flex-md-row align-center w-11/12 sm:w-11/12 mx-auto height-adjust"},[e("div",[e("p",{staticClass:"text-center text-sm"},[t._v(t._s(t.priceTitle))]),t.loading?e("div",{staticClass:"flex justify-center mb-7"},[e(s["a"],{attrs:{indeterminate:"",color:"blue","data-testid":"loading-spinner"}})],1):e("h1",{staticClass:"text-center mb-5 text-h4 fade-in fade-out font-weight-bold text-dacxi-error",attrs:{"data-test-id":"price"}},[t._v(" "+t._s(t.progressView?t.formatCurrency(t.price,t.coin.currentCoin):t.formatCurrency(t.oldPrice,t.coin.currentCoin))+" ")]),t.progressView?e("div",{staticClass:"flex justify-center align-center mb-10 fade-in fade-out"},[e(o["a"],{attrs:{"data-testid":"progress-bar",value:t.progressValue}})],1):t._e(),e(c["a"],{attrs:{items:t.cripto.criptos,label:"Select your criptocurrency","prepend-icon":"mdi-hand-coin",outlined:"","data-testid":"cripto-select"},on:{change:function(e){t.progressView?t.setCripto():t.setDateTime()}},model:{value:t.cripto.currentCripto,callback:function(e){t.$set(t.cripto,"currentCripto",e)},expression:"cripto.currentCripto"}}),e(c["a"],{attrs:{items:t.coin.coins,label:"Select your coin","prepend-icon":"mdi-currency-usd",outlined:"","data-testid":"coin-select"},on:{change:function(e){t.progressView?t.setCripto():t.setDateTime()}},model:{value:t.coin.currentCoin,callback:function(e){t.$set(t.coin,"currentCoin",e)},expression:"coin.currentCoin"}}),e("h3",{staticClass:"mb-4"},[t._v("Filter price by specific date")]),e(u["a"],{attrs:{outlined:"",disabled:!t.progressView,label:"Select date",type:"date","data-testid":"date-input"},model:{value:t.currentTime.date,callback:function(e){t.$set(t.currentTime,"date",e)},expression:"currentTime.date"}}),e(u["a"],{attrs:{outlined:"",disabled:!t.progressView,label:"Select hour",type:"time","data-testid":"hour-input"},model:{value:t.currentTime.hour,callback:function(e){t.$set(t.currentTime,"hour",e)},expression:"currentTime.hour"}}),e(n["a"],{staticClass:"text-capitalize",attrs:{"data-testid":"submit-date-button"},on:{click:function(e){t.progressView?t.setDateTime():t.clearFilters()}}},[t._v(t._s(t.filterButton))])],1),e("div",{staticClass:"mt-10 mt-md-0"},[e("div",{staticClass:"flex justify-center mb-5 font-weight-bold fade-in fade-out"},[e("h3",{staticClass:"text-base"},[e("span",{staticClass:"text-capitalize",attrs:{"data-testid":"current-cripto-title"}},[t._v(t._s(t.cripto.currentCripto))]),t._v(" Graph History from 30 days ago in "),e("span",{staticClass:"text-uppercase text-dacxi-success",attrs:{"data-testid":"current-coin-title"}},[t._v(t._s(t.coin.currentCoin))])])]),e("div",[e("apexchart",{staticClass:"fade-in fade-out",attrs:{width:"600",type:"area",options:t.options,series:t.series,"data-testid":"dacxi-apex-chart"}})],1)])])],1)])},p=[],d=(r("13d5"),r("bc3a"));const h=d["a"].create({baseURL:"https://api.coingecko.com/api/v3"});var m=h;const g=async function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;try{const{data:i}=await m.get(`/coins/${t}/market_chart?`,{params:{vs_currency:e,days:r,interval:"daily"}});return i}catch(i){console.log(i)}},f=async(t,e)=>{try{var r;const{data:i}=await m.get("/coins/"+t);return null===i||void 0===i||null===(r=i.market_data.current_price)||void 0===r?void 0:r[e]}catch(i){console.log(i)}},b=(t,e)=>{const r={future:new Date(t.getTime()+9e7),past:new Date(t.getTime()-9e7)};return r[e]},v=async(t,e,r)=>{const i={pastDate:b(r,"past"),futureDate:b(r,"future")},a={from:C(i.pastDate),to:C(i.futureDate),current:C(r)};try{const{data:r}=await m.get(`/coins/${t}/market_chart/range?`,{params:{vs_currency:e,from:a.from,to:a.to}}),i=r.prices.reduce((t,e)=>Math.abs(e[0]-a.current)<Math.abs(t[0]-a.current)?e:t);return i}catch(n){console.log(n)}},w=(t,e)=>{const r={usd:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumSignificantDigits:3}).format(t),eur:new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",maximumSignificantDigits:3}).format(t),brl:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",maximumSignificantDigits:3}).format(t)};return r[e]},C=t=>t.getTime()/1e3,x=(t,e)=>{const r={bitcoin:1367323200,ethereum:1438947200,"terra-luna":1559217600,dacxi:1625140800},i={bitcoin:C(e)<r[t]?new Date(1e3*r[t]):e,ethereum:C(e)<r[t]?new Date(1e3*r[t]):e,"terra-luna":C(e)<r[t]?new Date(1e3*r[t]):e,dacxi:C(e)<r[t]?new Date(1e3*r[t]):e};return i[t]},y=t=>{const e=new Date;return t>e},A=(t,e)=>new Date(t+" "+e),D=[{coins:[{text:"USD",value:"usd"},{text:"EUR",value:"eur"},{text:"BRL",value:"brl"}],currentCoin:"usd"},{criptos:[{text:"Ethereum",value:"ethereum"},{text:"Bitcoin",value:"bitcoin"},{text:"Luna",value:"terra-luna"},{text:"Dacxi",value:"dacxi"}],currentCripto:"bitcoin"},{options:{chart:{id:"dacxi-cripto-chart"},xaxis:{categories:[]},responsive:[{breakpoint:600,options:{chart:{width:350,height:400},legend:{position:"bottom"}}}]},series:[{name:"",data:[]}]}];var k=function(){var t=this;t._self._c;return t._m(0)},T=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full bg-dacxi-blue px-5 h-17 flex justify-between align-center mb-10 mb-sm-0",attrs:{"data-testid":"dacxi-header"}},[e("img",{staticClass:"py-2 w-20 sm:w-64",attrs:{src:r("4226"),alt:"dacxi-logo","data-testid":"dacxi-logo"}}),e("span",{staticClass:"white--text text-smaller text-sm-subtitle-2"},[t._v("Application data provided by: "),e("a",{staticClass:"font-weight-bold hover:underline transition",attrs:{href:"https://www.coingecko.com/en/api/documentation",target:"_blank","data-testid":"coingecko-link"}},[t._v("CoinGecko Crypto Api")])])])}],F=r("2877"),P={},V=Object(F["a"])(P,k,T,!1,null,null,null),B=V.exports,O={name:"App",components:{Header:B},data:()=>({loading:!1,currentTime:{date:"",hour:""},priceTitle:"Current price",filterButton:"Filter",price:"",oldPrice:"",dateTime:"",progressValue:0,progressView:!0,coin:D[0],cripto:D[1],options:D[2].options,series:D[2].series}),mounted(){this.setCripto(),this.timerUpdate(),this.updateChart()},methods:{async updateChart(){try{const{prices:t}=await g(this.cripto.currentCripto,this.coin.currentCoin),e=t.map(t=>t[1].toFixed(4));this.series=[{data:e,name:this.cripto.currentCripto.toLocaleUpperCase()}]}catch(t){this.$toast.error("Error getting data, possible API error. Visit https://www.coingecko.com/en/api for more info")}},async setCripto(){this.loading=!0,this.progressValue=0;try{this.price=await f(this.cripto.currentCripto,this.coin.currentCoin)||0,await this.updateChart(),this.loading=!1}catch(t){this.loading=!1,this.$toast.error("Error getting data, possible API error. Visit https://www.coingecko.com/en/api for more info")}},timerUpdate(){setInterval(()=>{this.progressView&&(this.progressValue+=1,this.progressValue>100&&(this.progressValue=0,this.setCripto()))},100)},formatCurrency(t,e){return w(t,e)},async setDateTime(){if(""===this.currentTime.date||""===this.currentTime.hour)return void this.$toast.warning("Please select a date and hour");const t=A(this.currentTime.date,this.currentTime.hour);if(y(t))return void this.$toast.warning("You can't select a future date");this.progressView=!1,this.loading=!0;const e=x(this.cripto.currentCripto,t);try{const t=await v(this.cripto.currentCripto,this.coin.currentCoin,e);this.oldPrice=t[1],this.priceTitle="Closest available price",this.filterButton="Clear filters",this.loading=!1}catch(r){this.loading=!1,this.$toast.error("Error getting data, possible API error. Visit https://www.coingecko.com/en/api for more info")}},clearFilters(){this.progressView=!0,this.priceTitle="Current price",this.filterButton="Filter",this.currentTime.date="",this.currentTime.hour="",this.setCripto()}}},j=O,I=Object(F["a"])(j,l,p,!1,null,null,null),_=I.exports,E=r("f309");i["a"].use(E["a"]);var L=new E["a"]({}),z=(r("845f"),r("6c42")),J=(r("da96"),r("1321")),M=r.n(J);i["a"].use(M.a),i["a"].component("apexchart",M.a);const U={position:"top-center",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1,transition:"Vue-Toastification__fade",maxToasts:20,newestOnTop:!0};i["a"].use(z["a"],U),i["a"].config.productionTip=!1,new i["a"]({vuetify:L,render:t=>t(_)}).$mount("#app")},"845f":function(t,e,r){}});
//# sourceMappingURL=app.2a5a7911.js.map