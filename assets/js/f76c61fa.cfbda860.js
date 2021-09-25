"use strict";(self.webpackChunkdocumentation_website=self.webpackChunkdocumentation_website||[]).push([[429],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2870:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"Mentorship Relation Documentation",title:"Mentorship Relation Documentation"},l=void 0,p={unversionedId:"Main Concept/Mentorship Relation Documentation",id:"Main Concept/Mentorship Relation Documentation",isDocsHomePage:!1,title:"Mentorship Relation Documentation",description:"A Mentorship Relation is when two Users, a mentor, and a mentee are matched together to mentor and support each other. This is a 1 to 1 relation, involving just 2 users, during a certain period of time.",source:"@site/docs/Main Concept/Mentorship Relation Documentation.md",sourceDirName:"Main Concept",slug:"/Main Concept/Mentorship Relation Documentation",permalink:"/mentorship-android/docs/Main Concept/Mentorship Relation Documentation",editUrl:"https://github.com/anitab-org/mentorship-android/tree/develop/docs/docs/Main Concept/Mentorship Relation Documentation.md",version:"current",frontMatter:{id:"Mentorship Relation Documentation",title:"Mentorship Relation Documentation"},sidebar:"docs",previous:{title:"Main Base Concepts",permalink:"/mentorship-android/docs/Main Concept/Main Base Concepts"},next:{title:"Future Ideas",permalink:"/mentorship-android/docs/Future Ideas"}},c=[{value:"Conceptual Implementation",id:"conceptual-implementation",children:[{value:"Relation states and stages",id:"relation-states-and-stages",children:[]}]}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Mentorship Relation")," is when two Users, a mentor, and a mentee are matched together to mentor and support each other. This is a 1 to 1 relation, involving just 2 users, during a certain period of time."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Mentorship Relation request")," is when a User sends a sort of contract in which the other User has to accept so that a mentorship relation can start. This contract contains notes/description, the definition of who will be the mentor and the mentee and the end date of the relation. Currently, this contract cannot be edited after sent by the User."),(0,o.kt)("h2",{id:"conceptual-implementation"},"Conceptual Implementation"),(0,o.kt)("p",null,"Considering two users, ",(0,o.kt)("em",{parentName:"p"},"User 1")," and ",(0,o.kt)("em",{parentName:"p"},"User 2"),". Let's say ",(0,o.kt)("em",{parentName:"p"},"User 1")," sends a mentorship request to ",(0,o.kt)("em",{parentName:"p"},"User 2")," (next image illustrates this)."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"[User 1 sends a mentorship relation request to User 2",src:"https://user-images.githubusercontent.com/11148726/43965132-68650400-9cb6-11e8-8667-92a181823845.png"})),(0,o.kt)("p",null,"Looking at the next image, you can consider these 3 stages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(1): Before a request is sent"),(0,o.kt)("li",{parentName:"ul"},"(2): When the User receives a request"),(0,o.kt)("li",{parentName:"ul"},"(3): After a relation starts")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"relation-states-and-stages"},"Relation states and stages"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"Stages and states of a Mentorship Relation",src:"https://user-images.githubusercontent.com/11148726/43964310-73dd99ac-9cb4-11e8-8353-96abadc53ce1.png"})),(0,o.kt)("p",null,"The next table explains more of the image above."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"State"),(0,o.kt)("th",{parentName:"tr",align:null},"Who can trigger this"),(0,o.kt)("th",{parentName:"tr",align:null},"How is this triggered"),(0,o.kt)("th",{parentName:"tr",align:null},"Constraints"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PENDING"),(0,o.kt)("td",{parentName:"tr",align:null},"Any User (E.g.: User 1 and User 2)"),(0,o.kt)("td",{parentName:"tr",align:null},"A User sends/creates a mentorship relation request using the frontend application or backend API"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ACCEPTED"),(0,o.kt)("td",{parentName:"tr",align:null},"The User that received the request (E.g.: User 2)"),(0,o.kt)("td",{parentName:"tr",align:null},"The User that received the request can accept this using the frontend application or backend API"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets only if the relation is in the PENDING state")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"REJECTED"),(0,o.kt)("td",{parentName:"tr",align:null},"The User that received the request (E.g.: User 2)"),(0,o.kt)("td",{parentName:"tr",align:null},"The User that received the request can reject this using the frontend application or backend API"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets only if the relation is in the PENDING state")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CANCELLED"),(0,o.kt)("td",{parentName:"tr",align:null},"Both Users participation in a current relation (E.g.: User 1 and User 2)"),(0,o.kt)("td",{parentName:"tr",align:null},"Any of the 2 Users participating in the relation can cancel the current relation both on the frontend application or backend API"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets only if the relation is in the ACCEPTED state")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"COMPLETED"),(0,o.kt)("td",{parentName:"tr",align:null},"A cron job running every day 23h59 (automatically)"),(0,o.kt)("td",{parentName:"tr",align:null},"A cron job in the backend iterates over every mentorship relation, in the ACCEPTED state, and sets this states for relations that passed the end date"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets only if the relation is in the ACCEPTED state")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Even though is not represented in the previous image, the User that sent the mentorship request can delete the request if its state wasn't changed by the receiving User."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If you feel this documentation can be improved or has a bug please contact us at ",(0,o.kt)("a",{parentName:"em",href:"https://anitab-org.zulipchat.com/"},"AnitaB.org Open Source Zulip")," or create an issue on GitHub to suggest improvements. We welcome every type of contributions!")))}m.isMDXComponent=!0}}]);