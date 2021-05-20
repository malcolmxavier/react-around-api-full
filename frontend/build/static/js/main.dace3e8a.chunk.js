(this["webpackJsonpreact-around-api-full"]=this["webpackJsonpreact-around-api-full"]||[]).push([[0],{17:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/logo.8f7611ae.svg"},26:function(e,t,a){e.exports=a(36)},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),i=a.n(o),c=a(6),s=(a(17),a(24)),l=a(1),u=a(2);var m=function(e){var t=r.a.useState(""),a=Object(l.a)(t,2),n=a[0],o=a[1],i=r.a.useState(""),s=Object(l.a)(i,2),u=s[0],m=s[1];function p(t){t.preventDefault(),e.handleSignup(n,u)}return r.a.createElement("main",{className:"content"},r.a.createElement("h2",{className:"form__name"},"Sign up"),r.a.createElement("form",{className:"form",onSubmit:p},r.a.createElement("input",{className:"form__input",type:"email",placeholder:"Email",required:!0,onChange:function(e){o(e.target.value)}}),r.a.createElement("span",{className:"form__error"}),r.a.createElement("input",{className:"form__input",type:"text",placeholder:"Password",required:!0,minLength:"8",onChange:function(e){m(e.target.value)}}),r.a.createElement("span",{className:"form__error"}),r.a.createElement("button",{className:"form__button",type:"submit","aria-label":"Sign Up",onClick:p},"Sign up")),r.a.createElement(c.b,{to:"/signin",className:"form__link"},"Already a member? Log in here!"))};var p=function(e){var t=r.a.useState(""),a=Object(l.a)(t,2),n=a[0],o=a[1],i=r.a.useState(""),s=Object(l.a)(i,2),u=s[0],m=s[1];function p(t){t.preventDefault(),e.handleLogin(n,u)}return r.a.createElement("main",{className:"content"},r.a.createElement("h2",{className:"form__name"},"Log in"),r.a.createElement("form",{className:"form",onSubmit:p},r.a.createElement("input",{className:"form__input",type:"email",placeholder:"Email",required:!0,onChange:function(e){o(e.target.value)}}),r.a.createElement("span",{className:"form__error"}),r.a.createElement("input",{className:"form__input",type:"text",placeholder:"Password",required:!0,onChange:function(e){m(e.target.value)}}),r.a.createElement("span",{className:"form__error"}),r.a.createElement("button",{className:"form__button",type:"submit","aria-label":"Log In",onClick:p},"Log in")),r.a.createElement(c.b,{to:"/signup",className:"form__link"},"Not a member yet? Sign up here!"))};var d=function(e){return r.a.createElement("div",null,r.a.createElement("section",{className:e.isOpen?"popup popup_type_".concat(e.name," popup_opened"):"popup popup_type_".concat(e.name)},r.a.createElement("div",{className:"popup__container popup__container_type_form"},r.a.createElement("button",{className:"close-button","aria-label":"Close ".concat(e.action," Popup"),onClick:e.onClose}),r.a.createElement("h2",{className:"popup__title"},e.title),r.a.createElement("form",{className:"popup__form popup__form_type_".concat(e.name),onSubmit:e.onSubmit},e.children,r.a.createElement("button",{className:"popup__button ".concat(e.button,"-button"),type:"submit","aria-label":"".concat(e.action),onClick:e.onClose})))))};var f=function(e){return r.a.createElement(d,{name:"login",action:"Login ".concat(e.valid?"Success":"Failure"),button:"info-tooltip",onClose:e.onClose,isOpen:e.isOpen},r.a.createElement("div",{className:"popup__icon ".concat(e.valid?"success-icon":"failure-icon")}),r.a.createElement("p",{className:"popup__text"},e.valid?"Success! You have now been registered":"Oops, something went wrong! Please try again."))},h=a(25),_=a(21),E=a.n(_);var g=function(e){return r.a.createElement("div",{className:"Header"},r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:E.a,alt:"Around The U.S. text logo",className:"logo"}),r.a.createElement("div",{className:"header__content"},r.a.createElement("p",{className:"header__username"},e.userEmail),r.a.createElement(c.b,{to:e.link,className:"header__link",onClick:e.onClick},e.linkText))))};var b=function(e){var t=e.component,a=Object(h.a)(e,["component"]);return r.a.createElement(u.b,null,(function(){return a.isLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{userEmail:a.userEmail,link:"/signin",linkText:"Sign Out",onClick:a.onHandleSignOut}),r.a.createElement(t,a)):r.a.createElement(u.a,{to:"/signin"})}))},v=r.a.createContext();var C=function(e){var t=r.a.useContext(v),a=e.card.owner._id===t._id,n=e.card.likes.some((function(e){return e._id===t._id}));return r.a.createElement("li",{className:"photo-grid__item",key:e.id},r.a.createElement("div",{className:"photo-grid__image",style:{backgroundImage:"url(".concat(e.image,")")},onClick:function(){e.onCard(e.image,e.title)}}),r.a.createElement("button",{className:a?"trash-button":"trash-button_hidden","aria-label":"Delete Card",onClick:function(){e.onDeleteCard(e.card)}}),r.a.createElement("div",{className:"photo-grid__description"},r.a.createElement("h3",{className:"photo-grid__label"},e.title),r.a.createElement("div",{className:"photo-grid__likes"},r.a.createElement("button",{className:n?"like-button like-button_clicked":"like-button","aria-label":"Like Card",onClick:function(){e.onCardLike(e.card)}}),r.a.createElement("p",{className:"photo-grid__likes-count"},e.likesCount))))};var k=function(e){var t=r.a.useContext(v);return r.a.createElement(v.Provider,{value:t},r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar"},r.a.createElement("img",{src:t.avatar,alt:"Profile avatar",className:"avatar avatar_profile"}),r.a.createElement("div",{className:"avatar__edit-overlay"},r.a.createElement("button",{className:"edit-button edit-button_avatar","aria-label":"Edit Avatar",onClick:e.onEditAvatar}))),r.a.createElement("div",{className:"profile__info"},r.a.createElement("h1",{className:"profile__name"},t.name),r.a.createElement("button",{className:"edit-button edit-button_profile","aria-label":"Edit Profile",onClick:e.onEditProfile}),r.a.createElement("p",{className:"profile__occupation"},t.about)),r.a.createElement("button",{className:"add-button","aria-label":"Add Card",onClick:e.onAddCard})),r.a.createElement("section",{className:"photo-grid"},r.a.createElement("ul",{className:"photo-grid__list"},e.cards.map((function(t){return r.a.createElement(C,{card:t,key:t._id,id:t._id,image:t.link,title:t.name,likesCount:t.likes.length,onCardLike:e.onCardLike,onDeleteCard:e.onDeleteCard,onCard:e.onCard})}))))))};var N=function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"\xa9 2020 Around The U.S.")))};var j=function(e){var t=r.a.useRef("");return r.a.createElement(d,{name:"edit-avatar",action:"Edit Avatar",title:"Change profile picture",button:"save",onClose:e.closeAllPopups,isOpen:e.isOpen,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar(t.current.value)}},r.a.createElement("input",{name:"avatar",id:"avatar-url",className:"popup__input popup__input_type_url",type:"url",placeholder:"Image URL",required:!0,ref:t}),r.a.createElement("span",{id:"avatar-url-error",className:"popup__error"}))};var S=function(e){var t=r.a.useContext(v),a=r.a.useState(t.name),n=Object(l.a)(a,2),o=n[0],i=n[1],c=r.a.useState(t.about),s=Object(l.a)(c,2),u=s[0],m=s[1];return r.a.useEffect((function(){i(t.name),m(t.about)}),[t]),r.a.createElement(d,{name:"edit-profile",action:"Edit Profile",title:"Edit profile",button:"save",onClose:e.onClose,isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:u})}},r.a.createElement("input",{name:"userName",value:o,id:"profile-name",className:"popup__input popup__input_type_name",type:"text",placeholder:"Name",required:!0,minLength:"2",maxLength:"40",onChange:function(e){i(e.target.value)}}),r.a.createElement("span",{id:"profile-name-error",className:"popup__error"}),r.a.createElement("input",{name:"userOccupation",value:u,id:"profile-occupation",className:"popup__input popup__input_type_occupation",type:"text",placeholder:"About Me",required:!0,minLength:"2",maxLength:"200",onChange:function(e){m(e.target.value)}}),r.a.createElement("span",{id:"profile-occupation-error",className:"popup__error"}))};var y=function(e){var t=r.a.useState(""),a=Object(l.a)(t,2),n=a[0],o=a[1],i=r.a.useState(""),c=Object(l.a)(i,2),s=c[0],u=c[1];return r.a.createElement(d,{name:"add-card",action:"Add Card",title:"New Place",button:"create",onClose:e.onClose,isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onAddCardSubmit({name:n,link:s})}},r.a.createElement("input",{name:"name",id:"card-label",className:"popup__input popup__input_type_label",type:"text",placeholder:"Label",required:!0,minLength:"1",maxLength:"30",onChange:function(e){o(e.target.value)}}),r.a.createElement("span",{id:"card-label-error",className:"popup__error"}),r.a.createElement("input",{name:"link",id:"card-url",className:"popup__input popup__input_type_url",type:"url",placeholder:"Image URL",required:!0,onChange:function(e){u(e.target.value)}}),r.a.createElement("span",{id:"card-url-error",className:"popup__error"}))};var O=function(e){return r.a.createElement("div",null,r.a.createElement("section",{className:e.isOpen?"popup popup_type_image popup_opened":"popup popup_type_image"},r.a.createElement("div",{className:"popup__container popup__container_type_image"},r.a.createElement("figure",{className:"figure"},r.a.createElement("button",{className:"close-button","aria-label":"Close Image Popup",onClick:e.onClose}),r.a.createElement("img",{className:"popup__image",alt:e.title,src:e.image}),r.a.createElement("figcaption",{className:"popup__caption"},e.title)))))},L="https://api.malcolmxavier.students.nomoreparties.site",x=a(22),P=a(23),T=function(){function e(t){var a=t.baseURL,n=t.headers;Object(x.a)(this,e),this._baseURL=a,this._headers=n}return Object(P.a)(e,[{key:"getUserInfo",value:function(){return fetch(this._baseURL+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status+" Error: "+e.statusText)}))}},{key:"setUserInfo",value:function(e,t){return fetch(this._baseURL+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status+" Error: "+e.statusText)}))}},{key:"setUserAvatar",value:function(e){return fetch(this._baseURL+"/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject(e.status+" Error: "+e.statusText)}))}},{key:"getCardList",value:function(){return fetch(this._baseURL+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status+" Error: "+e.statusText)}))}},{key:"addCard",value:function(e){var t=e.name,a=e.link;return fetch(this._baseURL+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:t,link:a})}).then((function(e){return e.ok?e.json():Promise.reject(e.status+" Error: "+e.statusText)}))}},{key:"removeCard",value:function(e){return fetch(this._baseURL+"/cards/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject(e.status+" Error: "+e.statusText)}))}},{key:"addCardLike",value:function(e){return fetch(this._baseURL+"/cards/likes/"+e,{headers:this._headers,method:"PUT"}).then((function(e){return e.ok?e.json():Promise.reject(e.status+" Error: "+e.statusText)}))}},{key:"removeCardLike",value:function(e){return fetch(this._baseURL+"/cards/likes/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject(e.status+" Error: "+e.statusText)}))}}]),e}(),U=localStorage.getItem("jwt"),A=new T({baseURL:"https://api.malcolmxavier.students.nomoreparties.site",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(U)}});var w=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),i=Object(l.a)(o,2),c=i[0],h=i[1],_=r.a.useState(!1),E=Object(l.a)(_,2),C=E[0],x=E[1],P=r.a.useState({}),T=Object(l.a)(P,2),U=T[0],w=T[1],I=r.a.useState({avatar:"",name:"",about:""}),D=Object(l.a)(I,2),R=D[0],q=D[1],J=r.a.useState({}),H=Object(l.a)(J,2),B=H[0],F=H[1],z=r.a.useState([]),M=Object(l.a)(z,2),W=M[0],G=M[1],Y=r.a.useState(!1),$=Object(l.a)(Y,2),K=$[0],Q=$[1],V=r.a.useState(!1),X=Object(l.a)(V,2),Z=X[0],ee=X[1],te=r.a.useState(!1),ae=Object(l.a)(te,2),ne=ae[0],re=ae[1],oe=r.a.useState(!1),ie=Object(l.a)(oe,2),ce=ie[0],se=ie[1],le=r.a.useState(!1),ue=Object(l.a)(le,2),me=ue[0],pe=ue[1],de=r.a.useState(""),fe=Object(l.a)(de,2),he=fe[0],_e=fe[1],Ee=r.a.useState(""),ge=Object(l.a)(Ee,2),be=ge[0],ve=ge[1],Ce=Object(u.g)();function ke(){x(!1),Q(!1),ee(!1),re(!1),se(!1),pe(!1)}return r.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(L,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject(e.status+" Error: "+e.statusText)})).then((function(e){return e}))}(e).then((function(e){var t={username:e.username,email:e.email};n(!0),w(t)})).then((function(){A.getCardList().then((function(e){G(e)}))})).then((function(){A.getUserInfo().then((function(e){q(e)}))})).then((function(){Ce.push("/")})).catch((function(e){return console.log(e)}))})),r.a.createElement(v.Provider,{value:R},r.a.createElement("div",{className:"page"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/signup"},r.a.createElement(g,{link:"/signin",linkText:"Log in"}),r.a.createElement(m,{handleSignup:function(e,t){(function(e,t){return console.log(e,t),fetch("".concat(L,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status+" Error: "+e.statusText)}))})(e,t).then((function(e){if(!e||400===e.status)throw x(!0),new Error("Something is not right.");return h(!0),x(!0),Ce.push("/signin"),e})).catch((function(e){return console.log(e)}))}})),r.a.createElement(u.b,{path:"/signin"},r.a.createElement(g,{link:"/signup",linkText:"Sign up"}),r.a.createElement(p,{handleLogin:function(e,t){e&&t&&function(e,t){return fetch("".concat(L,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status+" Error: "+e.statusText)})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e}))}(e,t).then((function(e){if(!e)throw new Error("Something is not right.")})).then((function(){A.getCardList().then((function(e){G(e)}))})).then((function(){A.getUserInfo().then((function(e){q(e)}))})).then((function(){n(!0),w(U),Ce.push("/")})).catch((function(e){return console.log(e)}))}})),r.a.createElement(b,{exact:!0,path:"/",isLoggedIn:a,userEmail:U.email,onHandleSignOut:function(){localStorage.removeItem("jwt"),n(!1),Ce.push("/signin")},component:k,cards:W,onEditAvatar:function(){Q(!0)},onEditProfile:function(){ee(!0)},onAddCard:function(){re(!0)},onCardLike:function(e){e.likes.some((function(e){return e._id===R._id}))?A.removeCardLike(e._id).then((function(t){var a=W.map((function(a){return a._id===e._id?t:a}));G(a)})).catch((function(e){return console.log(e)})):A.addCardLike(e._id).then((function(t){var a=W.map((function(a){return a._id===e._id?t:a}));G(a)})).catch((function(e){return console.log(e)}))},onDeleteCard:function(e){se(!0),F(e)},onCard:function(e,t){pe(!0),_e(e),ve(t)}})),r.a.createElement(f,{valid:c,isOpen:C,onClose:ke}),r.a.createElement(j,{isOpen:K,onClose:ke,onUpdateAvatar:function(e){A.setUserAvatar(e).then((function(){q({avatar:e,name:R.name,about:R.about})})).then((function(){ke()})).catch((function(e){return console.log(e)}))}}),r.a.createElement(S,{isOpen:Z,onClose:ke,onUpdateUser:function(e){var t=e.name,a=e.about;A.setUserInfo(t,a).then((function(){q({avatar:R.avatar,name:t,about:a})})).then((function(){ke()})).catch((function(e){return console.log(e)}))}}),r.a.createElement(y,{isOpen:ne,onClose:ke,onAddCardSubmit:function(e){var t=e.name,a=e.link;A.addCard({name:t,link:a}).then((function(e){G([].concat(Object(s.a)(W),[e]))})).then((function(){ke()})).catch((function(e){return console.log(e)}))}}),r.a.createElement(O,{image:he,title:be,onClose:ke,isOpen:me}),r.a.createElement(d,{name:"delete-card",action:"Delete Card",title:"Are you sure?",button:"yes",onClose:ke,isOpen:ce,onSubmit:function(e){e.preventDefault(),A.removeCard(B._id).then((function(){var e=W.filter((function(e){return e._id!==B._id}));G(e)})).catch((function(e){return console.log(e)}))}}),r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.dace3e8a.chunk.js.map