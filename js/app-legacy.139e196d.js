(function(){"use strict";var t={716:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var o=n(8935),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main-container-wrapper"},[n("div",{staticClass:"section-header"},[t._m(0),n("div",{staticClass:"section-actions"},[n("button",{staticClass:"btn btn-theme",on:{click:t.startTraining}},[t._v("Start Sorting")])]),n("div",{staticClass:"timer-wrapper"},[n("AppTimer")],1)]),t.peoples.length>0?n("div",{staticClass:"main-container-inner"},[n("div",{staticClass:"header-wrapper"},[n("h4",{staticClass:"text-right"},[t._v(t._s(t.peoples.length)+" people in the list")])]),n("AppTable")],1):t._e(),0===t.peoples.length?n("div",{staticClass:"main-container-inner flex-inner"},[n("h2",{staticClass:"gd-text-2"},[t._v("Peoples list is empty")])]):t._e()]),n("AppSortModal"),n("AppResultModal"),n("AppAlertModal")],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title"},[n("span",{staticClass:"gd-text"},[t._v("Sorting Training System")])])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table table-bordered"},[t._m(0),n("draggable",{attrs:{options:{disabled:!1===t.timerStatus&&t.peoples.length>0},tag:"tbody"},on:{end:t.GetSortStatus},model:{value:t.peoples,callback:function(e){t.peoples=e},expression:"peoples"}},t._l(t.peoples,(function(e,o){return n("tr",{key:o+1,staticClass:"unselectable",class:{active:!0===e.active}},[n("td",[n("div",{staticClass:"email-wrapper"},[n("label",{staticClass:"container-checkbox",attrs:{for:"Email"+o}},[n("span",{staticClass:"text"},[t._v(" "+t._s(e.email)+" ")]),n("input",{attrs:{type:"checkbox",id:"Email"+o},on:{change:function(n){return t.SelectUser(e)}}}),n("span",{staticClass:"checkmark"})]),n("div",{staticClass:"arrow"},[n("svg",{attrs:{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1 11L6 6L1 1",stroke:"#999999","stroke-width":"2"}})])])])]),n("td",[t._v(t._s(e.potatoes))]),n("td",[t._v(t._s(e.first_name))]),n("td",[t._v(t._s(e.last_name))])])})),0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Email")]),n("th",[t._v("Potatoes")]),n("th",[t._v("First Name")]),n("th",[t._v("Last Name")])])])}],l=n(6390),u=n.n(l),c={name:"AppTable",data:function(){return{}},computed:{peoples:{get:function(){return this.$store.getters.getPeoples},set:function(t){this.$store.commit("setPeoples",t)}},timerStatus:function(){return this.$store.getters.getTimerStatus}},methods:{CheckListSort:function(t,e){return 1===e||0===e?1:t[e-1].potatoes>t[e-2].potatoes?0:this.CheckListSort(t,e-1)},GetSortStatus:function(){0!==this.CheckListSort(this.peoples,this.peoples.length)&&this.$store.dispatch("SortCompleted",!0)},SelectUser:function(t){t.active=!0!==t.active}},created:function(){},mounted:function(){},components:{draggable:u()}},m=c,d=n(1001),p=(0,d.Z)(m,s,a,!1,null,null,null),f=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ModalComponent",{directives:[{name:"show",rawName:"v-show",value:t.isSortModalVisible,expression:"isSortModalVisible"}],on:{close:t.closeModal},scopedSlots:t._u([{key:"header",fn:function(){return[n("h3",{staticClass:"modal-title"},[t._v("How many people?")])]},proxy:!0},{key:"body",fn:function(){return[n("form",{on:{submit:function(e){return e.preventDefault(),t.StartSort.apply(null,arguments)}}},[n("div",{staticClass:"form-group"},[n("p",[t._v("Enter a number of how many people you want to add to the list.")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter the number of people"},domProps:{value:t.count},on:{keypress:function(e){return t.isNumber(e)},keyup:t.valueValidate,input:function(e){e.target.composing||(t.count=e.target.value)}}}),t.countValidation?n("small",{staticClass:"helper-text text-danger"},[t._v("Value is required and should be between 20 and 100")]):t._e()])])]},proxy:!0},{key:"footer",fn:function(){return[n("div",[n("button",{staticClass:"btn btn-ash",on:{click:t.closeModal}},[t._v("Cancel")]),t._v("   "),n("button",{staticClass:"btn btn-theme",on:{click:t.StartSort}},[t._v("Start")])])]},proxy:!0}])})},v=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal-fade"}},[n("div",{staticClass:"modal-backdrop"},[n("div",{staticClass:"modal open"},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("header",{staticClass:"modal-header"},[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"},on:{click:t.close}},[t._v("✖")]),t._t("header",(function(){return[t._v(" This is the default title! ")]}))],2),n("section",{staticClass:"modal-body "},[t._t("body",(function(){return[t._v(" This is the default body! ")]}))],2),n("footer",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])])},S=[],_={name:"ModalComponent",methods:{close:function(){this.$emit("close")}}},b=_,M=(0,d.Z)(b,g,S,!1,null,null,null),C=M.exports,T={name:"AppSortModal",data:function(){return{count:"",countValidation:!1}},computed:{isSortModalVisible:function(){return this.$store.getters.getStartModal}},methods:{closeModal:function(){this.count="",this.countValidation=!1,this.$store.commit("setStartModal",!1)},StartSort:function(){this.valueValidate(),!1===this.countValidation&&(this.$store.dispatch("generatesPeoples",this.count),this.$store.commit("setTimerStart",!0),this.closeModal())},valueValidate:function(){this.countValidation=!(this.count>=20&&this.count<=100)},isNumber:function(t){t=t||window.event;var e=t.which?t.which:t.keyCode;if(!(e>31&&(e<48||e>57)))return!0;t.preventDefault()}},mounted:function(){},components:{ModalComponent:C}},y=T,w=(0,d.Z)(y,h,v,!1,null,null,null),$=w.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ModalComponent",{directives:[{name:"show",rawName:"v-show",value:t.isResultModalVisible,expression:"isResultModalVisible"}],on:{close:t.closeModal},scopedSlots:t._u([{key:"header",fn:function(){return[n("h3",{staticClass:"modal-title"},[t._v("Result")])]},proxy:!0},{key:"body",fn:function(){return[n("table",[n("tr",[n("td",[t._v("Total number of peoples:")]),n("td",[t._v(t._s(t.PeoplesCount))])]),n("tr",[n("td",[t._v("Time used:")]),n("td",[t._v(t._s(t.formatTime(t.TimeCount)))])]),n("tr",[n("td",[t._v("Average:")]),n("td",[t._v(t._s(parseFloat(t.PeoplesCount/t.TimeCount).toFixed(2))+"/s")])])])]},proxy:!0},{key:"footer",fn:function(){return[n("div",[n("button",{staticClass:"btn btn-ash",on:{click:t.closeModal}},[t._v("Close")])])]},proxy:!0}])})},k=[],A=(n(3112),{name:"AppResultModal",data:function(){return{}},computed:{isResultModalVisible:function(){return this.$store.getters.getResultModal},TimeCount:function(){return this.$store.getters.getTimerSec},PeoplesCount:function(){return this.$store.getters.getPeoplesLength}},methods:{closeModal:function(){this.$store.commit("setResultModal",!1)},formatTime:function(t){var e=Math.floor(t/3600);t%=3600;var n=Math.floor(t/60),o=t%60;return n=String(n).padStart(2,"0"),e=String(e).padStart(2,"0"),o=String(o).padStart(2,"0"),e+":"+n+":"+o}},mounted:function(){},components:{ModalComponent:C}}),P=A,R=(0,d.Z)(P,x,k,!1,null,null,null),I=R.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ModalComponent",{directives:[{name:"show",rawName:"v-show",value:t.isAlertModalVisible,expression:"isAlertModalVisible"}],on:{close:t.closeModal},scopedSlots:t._u([{key:"header",fn:function(){return[n("h3",{staticClass:"modal-title"},[t._v("Alert")])]},proxy:!0},{key:"body",fn:function(){return[n("h3",[t._v("Are you sure ?")]),n("p",[t._v("A training session already in progress.")]),n("p",[t._v("If you continue All progress will be lost")])]},proxy:!0},{key:"footer",fn:function(){return[n("div",[n("button",{staticClass:"btn btn-ash",on:{click:t.closeModal}},[t._v("Close")]),t._v("   "),n("button",{staticClass:"btn btn-danger",on:{click:t.resetTraining}},[t._v("Restart")])])]},proxy:!0}])})},E=[],Z={name:"AppAlertModal",data:function(){return{}},computed:{isAlertModalVisible:function(){return this.$store.getters.getAlertModal}},methods:{closeModal:function(){this.$store.commit("setAlertModal",!1)},resetTraining:function(){this.$store.commit("setTimerReset",!0),this.$store.commit("setAlertModal",!1),this.$store.commit("setStartModal",!0),this.$store.commit("setPeoples",[])}},mounted:function(){},components:{ModalComponent:C}},O=Z,L=(0,d.Z)(O,V,E,!1,null,null,null),j=L.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{domProps:{textContent:t._s(t.formatTime(t.timerCount))}})},H=[],F={name:"AppTimer",data:function(){return{timerCount:0,timer:"00:00",timerInterval:null}},computed:{getTimerStart:function(){return this.$store.getters.getTimerStart},getTimerStop:function(){return this.$store.getters.getTimerStop},getTimerReset:function(){return this.$store.getters.getTimerReset}},watch:{getTimerStart:function(t){!0===t&&(this.initTimer(),this.$store.commit("setTimerStatus",!0),this.$store.commit("setTimerStart",!1))},getTimerStop:function(t){!0===t&&(null!==this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),this.$store.commit("setTimerStatus",!1),this.$store.commit("setTimerStop",!1))},getTimerReset:function(t){!0===t&&(null!==this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),this.timerCount=0,this.timer="00:00",this.$store.commit("setTimerSec",0))},timerCount:function(t){this.$store.commit("setTimerSec",t)}},methods:{pad:function(t){return t>9?t:"0"+t},initTimer:function(){var t=this;null!==this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),this.timer="00:00",this.timerCount=0,this.timerInterval=setInterval((function(){++t.timerCount}),1e3)},formatTime:function(t){var e=Math.floor(t/3600);t%=3600;var n=Math.floor(t/60),o=t%60;return n=String(n).padStart(2,"0"),e=String(e).padStart(2,"0"),o=String(o).padStart(2,"0"),e+" : "+n+" : "+o}},mounted:function(){},components:{}},D=F,G=(0,d.Z)(D,N,H,!1,null,null,null),U=G.exports,q={name:"App",data:function(){return{}},computed:{peoples:function(){return this.$store.getters.getPeoples},timerStatus:function(){return this.$store.getters.getTimerStatus}},methods:{startTraining:function(){!1===this.timerStatus?this.$store.commit("setStartModal",!0):this.$store.commit("setAlertModal",!0)}},components:{AppTable:f,AppSortModal:$,AppResultModal:I,AppAlertModal:j,AppTimer:U}},B=q,z=(0,d.Z)(B,r,i,!1,null,null,null),J=z.exports,K=n(4665),Q=n(6969);o.Z.use(K.ZP);var W=new K.ZP.Store({state:{peoples:[],mailHosts:["gmail.com","yahoo.com","live.com","outlook.com"],startSortModal:!1,resultModal:!1,alertModal:!1,timerSec:0,timerStatus:!1,timerStart:!1,timerStop:!1,timerReset:!1,timerInterval:null},getters:{HostsList:function(t){return t.mailHosts},getPeoples:function(t){return t.peoples},getPeoplesLength:function(t){return t.peoples.length},getStartModal:function(t){return t.startSortModal},getResultModal:function(t){return t.resultModal},getAlertModal:function(t){return t.alertModal},getTimerSec:function(t){return t.timerSec},getTimerStatus:function(t){return t.timerStatus},getTimerStart:function(t){return t.timerStart},getTimerStop:function(t){return t.timerStop},getTimerReset:function(t){return t.timerReset},getTimerInterval:function(t){return t.timerInterval}},mutations:{setPeoples:function(t,e){t.peoples=e},setStartModal:function(t,e){t.startSortModal=e},setResultModal:function(t,e){t.resultModal=e},setAlertModal:function(t,e){t.alertModal=e},setTimerSec:function(t,e){t.timerSec=e},setTimerStatus:function(t,e){t.timerStatus=e},setTimerStart:function(t,e){t.timerStart=e},setTimerStop:function(t,e){t.timerStop=e},setTimerReset:function(t,e){t.timerReset=e},setTimerInterval:function(t,e){t.timerInterval=e}},actions:{generatesPeoples:function(t,e){var n=[];while(e){var o=(0,Q._8)({dictionaries:[Q.R5]}),r=(0,Q._8)({dictionaries:[Q.R5]}),i=(0,Q._8)({dictionaries:[t.state.mailHosts]}),s=o+"@"+i,a=Math.floor(999*Math.random())+1;n.push({email:s,potatoes:a,first_name:o,last_name:r,active:!1}),e--}t.commit("setPeoples",n)},SortCompleted:function(t,e){!0===e&&(t.commit("setTimerStop",!0),t.commit("setResultModal",!0))}}});o.Z.use(K.ZP),o.Z.config.productionTip=!1,new o.Z({el:"#app",store:W,render:function(t){return t(J)}})}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],i=t[c][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(a=!1,i<s&&(s=i));if(a){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,s=o[0],a=o[1],l=o[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var c=l(n)}for(e&&e(o);u<s.length;u++)i=s[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self["webpackChunkpotatostan"]=self["webpackChunkpotatostan"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(716)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.139e196d.js.map