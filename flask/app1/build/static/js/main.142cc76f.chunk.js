(this.webpackJsonpcpslabfarm=this.webpackJsonpcpslabfarm||[]).push([[0],{23:function(t,e,a){t.exports=a(41)},28:function(t,e,a){},29:function(t,e,a){},35:function(t,e,a){},39:function(t,e,a){},40:function(t,e,a){t.exports=a.p+"static/media/m5stack-logo.747f22ab.png"},41:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),l=a(5),s=a.n(l),r=(a(28),a(6)),i=a(7),o=a(11),u=a(8),m=a(12),h=(a(29),a(10)),p=a(2),S=a(9),d=function(){return{type:"DELETE_NAME",name:""}},E=function(t){return{type:"ADD_NAME",name:t}},b={name:"Nanasi"},g=Object(S.b)({user:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_NAME":return Object(p.a)({},t,{name:e.name});case"DELETE_NAME":return Object(p.a)({},t,{name:""});default:return t}}}),f=Object(S.c)(g);console.log(f.getState),console.table(f.getState),console.log(typeof f.getState),console.log(f);a(35);var y=a(15),v=(a(39),function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).onOpenModal=function(t){console.log(t),a.setState({ModalFlag:!0})},a.onCloseModal=function(t){a.setState({ModalFlag:!1})},a.displaySwich=function(){var t={M5Stack_Room1:"M5Stack_iwai",M5Stack_Room2:"M5Stack_iwai",M5Stack_Door1:"M5Stack_interview"};t[a.state.DeviceName]&&a.setState(Object(p.a)({},a.state,{DisplayImg:t[a.state.DeviceName]}))},a.state={ModalFlag:!1,GraphData:"",DeviceName:a.props.deviceName,StatusFlag_Dis:a.props.StatusFlag_Dis,DisplayImg:"M5Stack_Gray_OFF",StatusFlag_Fire:a.props.StatusFlag_Fire,IP:a.props.IP,RSSI:a.props.RSSI,Battery:a.props.Battery},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"componentWillMount",value:function(){this.state.StatusFlag_Dis?this.displaySwich():this.setState(Object(p.a)({},this.state,{DisplayImg:"M5Stack_Gray_OFF"})),this.state.StatusFlag_Fire&&this.setState(Object(p.a)({},this.state,{DisplayImg:"M5Stack_fire"}))}},{key:"componentWillReceiveProps",value:function(t,e){this.setState(Object(p.a)({},this.state,{StatusFlag_Dis:t.StatusFlag_Dis})),t.StatusFlag_Dis?this.displaySwich():this.setState(Object(p.a)({},this.state,{DisplayImg:"M5Stack_Gray_OFF"})),t.StatusFlag_Fire&&this.setState(Object(p.a)({},this.state,{DisplayImg:"M5Stack_fire"}))}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"contentsM5"},c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("img",{src:"".concat("","/M5Stack/").concat(this.state.DisplayImg,".png")}))),c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("p",{onClick:function(e){return t.onOpenModal(e)}},"\u30c7\u30d0\u30a4\u30b9\u540d:",this.state.DeviceName))))),c.a.createElement(y.a,{open:this.state.ModalFlag,onClose:function(e){return t.onCloseModal(e)},closeIconSize:0,center:!0},c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("p",null,"IP:",this.state.IP))),c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("p",null,"RSSI:",this.state.RSSI))),c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("p",null,"Battery:",this.state.Battery)))))))}}]),e}(n.Component)),O={setName:E,deleteName:d},D=Object(h.b)((function(t){return{name:t.user.name}}),O)(v),M=(a(40),function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).handleOnChange=function(t){var e=t.target.checked;e?a.cmdSent("turnON"):a.cmdSent("turnOFF"),a.setState(Object(p.a)({},a.state,{ButtonDisplay:e,ButtonFire:!1}))},a.handleOnChange1=function(t){var e=t.target.checked;a.cmdSent("fire"),a.setState(Object(p.a)({},a.state,{ButtonDisplay:!1,ButtonFire:e}))},a.state={ModalFlag:!1,GraphData:"",ButtonDisplay:!1,ButtonFire:!1,M5stack_STATUS:{}},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"cmdSent",value:function(t){fetch("http://192.168.12.12:8000/M5Stack/CMD",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","X-Auth-LABTOKEN":"4s-DpxhYHhLNtCtNryNaW7bBehiYtDnYmYPHB8-SB6MuDa-Mxt6zVWePjtBYjEuxxQ2"},body:JSON.stringify({cmd:t})})}},{key:"getSensorData",value:function(){var t=this;if(fetch("http://192.168.12.12:8000/M5Stack/Status",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","X-Auth-LABTOKEN":"4s-DpxhYHhLNtCtNryNaW7bBehiYtDnYmYPHB8-SB6MuDa-Mxt6zVWePjtBYjEuxxQ2"}}).then((function(t){return t.json()})).then((function(e){return t.setState({M5stack_STATUS:e,ButtonFire:!1})})),this.state.M5stack_STATUS[0]){var e=this.state.M5stack_STATUS[0].config3;console.log(e),this.setState(Object(p.a)({},this.state,{ButtonDisplay:!e}))}}},{key:"componentDidMount",value:function(){this.intervalId=setInterval(this.getSensorData.bind(this),1e3)}},{key:"render",value:function(){var t=this,e=this.state.M5stack_STATUS;return c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("h1",null,c.a.createElement("img",{src:"".concat("","/m5stack-logo.png")}),"MONIFIVE")),c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"M5Stack\u7aef\u672b")),c.a.createElement("div",{className:"content"},function(){for(var a=[],n=0;n<e.length;n++){var l=e[n];a.push(c.a.createElement(D,{deviceName:l.DeviceName,StatusFlag_Dis:!l.config3,StatusFlag_Fire:t.state.ButtonFire,IP:l.IP,RSSI:l.rssi,Battery:l.Battery}))}return a}()),c.a.createElement("div",{className:"contorl_m5"},c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("h3",null,"Screen\u753b\u9762:")),c.a.createElement("td",{className:"switch"},c.a.createElement("input",{id:"subscription1",type:"checkbox",name:"subscriptions[]",value:"\u753b\u9762\u96fb\u6e90",checked:this.state.ButtonDisplay,onChange:function(e){return t.handleOnChange(e)}}),c.a.createElement("label",{htmlFor:"subscription1"}))))),c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("h3",null,"\u706b\u707d\u8b66\u5831:")),c.a.createElement("td",{className:"switch"},c.a.createElement("input",{id:"subscription2",type:"checkbox",name:"subscriptions[]",value:"\u706b\u707d",checked:this.state.ButtonFire,onChange:function(e){return t.handleOnChange1(e)}}),c.a.createElement("label",{htmlFor:"subscription2"})))))))}}]),e}(n.Component)),k={setName:E,deleteName:d},j=Object(h.b)((function(t){return{name:t.user.name}}),k)(M),F=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement(h.a,{store:f},c.a.createElement(j,null))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.142cc76f.chunk.js.map