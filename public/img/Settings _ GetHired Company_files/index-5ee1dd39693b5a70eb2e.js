_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"/EDR":function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("QeBL")}])},CBqD:function(e,s,t){"use strict";var l=t("nKUr"),c=(t("q1tI"),t("TSYQ")),a=t.n(c);s.a=function(e){var s=e.text,t=e.onClick,c=e.isTransparent,i=e.radius,r=void 0===i?"rounded-lg":i,n=e.classNames,d=e.isFullWidth,j=void 0===d||d,x=e.children;return Object(l.jsxs)("button",{className:a()("outline-none focus:outline-none my-8 btn-hover cool-transition h-1xl ",{"text-white bg-primary":!c,"bg-transparent":!0===c,"w-full":j},r,n),onClick:t,children:[s,x]})}},Elb9:function(e,s,t){"use strict";var l=t("nKUr"),c=(t("q1tI"),t("TSYQ")),a=t.n(c);s.a=function(e){var s=e.cardTitle,t=e.children,c=e.classNames,i=e.size,r=void 0===i?"medium":i;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:a()("bg-white shadow-main rounded-xl flex flex-wrap",{"p-6":"medium"===r,"p-0":"small"===r,"p-8":"large"===r},c),children:[s?Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("h1",{className:"text-1xl text-titles",children:s})}):null,t]})})}},IKAe:function(e,s,t){"use strict";var l=t("nKUr"),c=t("q1tI"),a=t("Elb9"),i=t("CBqD"),r=t("TSYQ"),n=t.n(r),d=function(e){var s=e.sentMessage;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"w-full flex flex-wrap bg-primary px-6 rounded-bl-4xl rounded-t-4xl py-4 my-6",children:Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("p",{className:"text-white font-sans",children:s})})})})},j=function(e){var s=e.message,t=e.profilePic;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"w-full flex flex-wrap bg-secondary-light2 px-6 rounded-r-4xl rounded-bl-4xl pb-2",children:[Object(l.jsx)("div",{className:"w-16 -ml-12 -mt-10 p-2 bg-white rounded-full",children:Object(l.jsx)("img",{src:t,alt:""})}),Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("p",{className:"text-titles font-sans",children:s})})]})})},x=t("/MKj"),m=Object(x.b)((function(e){return{initiaterName:e.store.chatInitiaterHeaderInfo.username,initiaterRoll:e.store.chatInitiaterHeaderInfo.roll,initiaterPic:e.store.chatInitiaterHeaderInfo.userPic}}))((function(e){var s=e.onCrossClick,t=e.onMinusClick,c=e.initiaterName,a=e.initiaterRoll,i=e.initiaterPic;return Object(l.jsxs)("div",{className:"w-full flex items-center self-start border-b border-secondary-elements lg:mx-5 lg:px-0 px-5 py-6 lg:static relative lg:z-0 z-50 lg:bg-transparent bg-white",children:[Object(l.jsxs)("div",{className:"lg:w-1/2 w-ful flex items-center",children:[Object(l.jsx)("div",{className:"lg:w-1/3 w-11 h-11 lg:h-auto bg-secondary-elements lg:p-1 rounded-full mr-3",children:Object(l.jsx)("img",{src:i,alt:""})}),Object(l.jsxs)("div",{className:"w-3/4 pl-1",children:[Object(l.jsx)("h1",{className:"lg:text-3xl text-titles",children:c}),Object(l.jsx)("p",{className:"lg:text-xs text-xss text-secondary uppercase",children:a})]})]}),Object(l.jsxs)("div",{className:"lg:w-1/2 flex justify-end ml-auto",children:[Object(l.jsx)("button",{className:"bg-transparent outline-none focus:outline-none",onClick:t,children:Object(l.jsx)("img",{src:"/img/icons/minimize-icon.svg",alt:""})}),Object(l.jsx)("button",{className:"bg-transparent outline-none focus:outline-none ml-5",onClick:s,children:Object(l.jsx)("img",{src:"/img/icons/cross-circle-icon.svg",alt:""})})]})]})})),o=function(e){var s=e.isFooterVisible;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:n()("flex bottom-0 fixed items-center z-50 h-16 lg:w-1/3 md:w-1/2 w-full bg-white cool-transition",{"right-0":s,"-right-full":!s}),children:[Object(l.jsx)("button",{className:"lg:px-6 lg:mx-0 mx-4 lg:w-auto w-7 bg-transparent outline-none focus:outline-none",children:Object(l.jsx)("img",{src:"/img/icons/clip-icon.svg",alt:"",className:"lg:w-auto w-full"})}),Object(l.jsxs)("div",{className:"flex items-center h-full bg-secondary-light2 px-6 lg:rounded-tl-3xl rounded-tl-2xl w-full justify-between",children:[Object(l.jsx)("input",{type:"text",className:"lg:pr-0 pr-4 h-full bg-transparent text-sm outline-none focus:outline-none text-secondary",placeholder:"Start typing here..."}),Object(l.jsx)("button",{className:"outline-none focus:outline-none",children:Object(l.jsx)("img",{src:"/img/icons/send-message-icon.svg",alt:""})})]})]})})},b=function(e){var s=e.isChatOpen,t=e.closeSidebar;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:n()("fixed bg-black left-0 right-0 bottom-0 top-0 opacity-20",{block:!0===s,hidden:!1===s}),style:{zIndex:1e16},onClick:t}),Object(l.jsxs)("div",{className:n()("h-screen bg-white cool-transition fixed top-0 bottom-0 lg:w-1/3 md:w-1/2 w-full flex flex-wrap shadow-light pb-16",{"right-0":!0===s,"-right-full":!1===s}),style:{zIndex:9999999999999},children:[Object(l.jsx)(m,{onCrossClick:t,onMinusClick:t}),Object(l.jsxs)("div",{className:"w-full flex flex-wrap self-end pr-5 pl-8 pt-10 max-h-screen overflow-scroll lg:pb-0 pb-36",children:[Object(l.jsx)("div",{children:Object(l.jsx)(j,{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis nunc commodo pharetra vel elit. Elementum enim, mollis id dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem feugiat lacus et se?",profilePic:"/img/chat-initiater.png"})}),Object(l.jsx)("div",{className:"mt-12",children:Object(l.jsx)(j,{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis nunc commodo pharetra vel elit. Elementum enim, mollis id dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem feugiat lacus et se?",profilePic:"/img/chat-initiater.png"})}),Object(l.jsx)("div",{children:Object(l.jsx)(d,{sentMessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis nunc commodo pharetra vel elit. Elementum enim, mollis id dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem feugiat lacus et se?"})})]}),Object(l.jsx)(o,{isFooterVisible:s})]})]})};s.a=function(e){var s=e.classNames,t=e.headerWidth,r=void 0===t?"md:w-2/3 w-full":t,d=e.imgWidth,j=void 0===d?"w-1/2":d,x=e.initiaterInfoWidth,m=void 0===x?"w-1/2":x,o=e.hasDivider,u=Object(c.useState)(!1),h=u[0],O=u[1],p=function(){O(h=!h)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(a.a,{classNames:s,children:[Object(l.jsxs)("div",{className:"flex flex-wrap w-full",children:[Object(l.jsxs)("div",{className:n()("flex items-center mx-auto",{"border-b border-secondary-elements":o,"border-b-0":!o},r),children:[Object(l.jsx)("div",{className:n()(j),children:Object(l.jsx)("img",{src:"/img/chat-initiater.png",alt:""})}),Object(l.jsxs)("div",{className:n()(m),children:[Object(l.jsx)("h1",{className:"text-titles text-lg",children:"Kelly"}),Object(l.jsx)("p",{className:"text-xs text-secondary upprecase mb-2",children:"gethired chat support"}),Object(l.jsx)("p",{className:"text-sm text-titles mb-2",children:"kelly@gethired.ai"}),Object(l.jsx)("p",{className:"text-sm text-primary",children:"+44 1632 960673"})]})]}),Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)(i.a,{text:"+ Initiate Chat",onClick:p,classNames:"bg-secondary-light2 text-primary"})}),Object(l.jsx)("div",{className:"w-2/3 mx-auto text-center",children:Object(l.jsxs)("p",{className:"text-secondary text-sm",children:["(2)"," ",Object(l.jsx)("span",{className:"font-sans",children:"people in queue before you. Average wait time"})," ","less than 5 mins."]})})]}),Object(l.jsx)(b,{isChatOpen:h,closeSidebar:p})]})})}},QeBL:function(e,s,t){"use strict";t.r(s);var l=t("nKUr"),c=t("q1tI"),a=t.n(c),i=t("L3vG"),r=t("cpVT"),n=t("Elb9"),d=t("CBqD"),j=t("/MKj"),x=t("OS56"),m=t.n(x);function o(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);s&&(l=l.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,l)}return t}function b(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?o(Object(t),!0).forEach((function(s){Object(r.a)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var u=Object(j.b)((function(e){return{latestTalents:e.store.latestTalents}}))((function(e){var s=e.latestTalents,t=Object(c.useState)({dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,dotsClass:"latest-opts-dots"}),i=t[0],r=t[1];Object(c.useEffect)((function(){r(i)}),[]);var j=s.map((function(e){return Object(l.jsx)(a.a.Fragment,{children:Object(l.jsxs)("div",{className:"w-full flex items-center border-b border-secondary-elements py-4",children:[Object(l.jsx)("div",{className:"w-1/2",children:Object(l.jsx)("p",{className:"text-sm text-titles",children:e.opportunityName})}),Object(l.jsx)("div",{className:"w-1/4 pl-5",children:Object(l.jsx)("p",{className:"text-sm uppercase text-titles",children:e.match})}),Object(l.jsx)("div",{className:"w-1/4 pl-5",children:Object(l.jsx)("p",{className:"text-xs uppercase text-secondary",children:e.reviewTime})})]})},e.id)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(n.a,{cardTitle:"Latest Talents",classNames:"pb-0 mb-6 lg:block hidden",children:[Object(l.jsxs)("div",{className:"w-full flex my-4",children:[Object(l.jsxs)("div",{className:"w-3/4 flex items-end",children:[Object(l.jsx)("h1",{className:"text-3xl text-primary -mb-2",children:"12"}),Object(l.jsxs)("div",{className:"flex items-center ml-3",children:[Object(l.jsx)("img",{src:"/img/icons/success-arrow.svg",alt:"",className:"mr-2"}),Object(l.jsx)("span",{className:"text-xs text-secondary",children:"11% growth of last 30 days"})]})]}),Object(l.jsx)("div",{className:"w-1/4 flex justify-end",children:Object(l.jsx)("img",{src:"/img/icons/group-user-icon.svg",alt:""})})]}),Object(l.jsxs)("div",{className:"w-full flex mt-4",children:[Object(l.jsx)("div",{className:"w-1/2",children:Object(l.jsx)("p",{className:"text-xss text-secondary uppercase",children:"oppeortunity name"})}),Object(l.jsx)("div",{className:"w-1/4 pl-5",children:Object(l.jsx)("p",{className:"text-xss uppercase text-secondary",children:"match%"})}),Object(l.jsx)("div",{className:"w-1/4 pl-5",children:Object(l.jsx)("p",{className:"text-xss uppercase text-secondary",children:"review time"})})]}),j,Object(l.jsx)("div",{className:"w-full -mb-4 -mt-6",children:Object(l.jsx)(d.a,{text:"Show All Applicants",isTransparent:!0,classNames:"text-primary mb-4"})})]}),Object(l.jsxs)("div",{className:"lg:hidden flex flex-wrap",children:[Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("h1",{className:"text-titles text-1xl",children:"Latest Talents"})}),Object(l.jsxs)("div",{className:"w-full flex my-5",children:[Object(l.jsxs)("div",{className:"w-3/4 flex items-end",children:[Object(l.jsx)("h1",{className:"text-3xl text-primary -mb-2",children:"12"}),Object(l.jsxs)("div",{className:"flex items-center ml-3",children:[Object(l.jsx)("img",{src:"/img/icons/success-arrow.svg",alt:"",className:"mr-2"}),Object(l.jsx)("span",{className:"text-xs text-secondary",children:"11% growth of last 30 days"})]})]}),Object(l.jsx)("div",{className:"w-1/4 flex justify-end",children:Object(l.jsx)("img",{src:"/img/icons/group-user-icon.svg",alt:""})})]}),Object(l.jsxs)("div",{className:"w-full mt-5 mb-10 relative",children:[Object(l.jsxs)(m.a,b(b({},i),{},{children:[Object(l.jsx)("div",{className:"p-1",children:Object(l.jsxs)("div",{className:"w-full flex flex-wrap bg-white rounded-xl p-5 shadow-xl",children:[Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("h1",{className:"text-titles text-1xl",children:"Front-end Developer"})}),Object(l.jsx)("div",{className:"w-full my-2",children:Object(l.jsx)("p",{className:"text-titles",children:"95% Match"})}),Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("p",{className:"text-secondary text-xs",children:"16 hours review time"})})]})}),Object(l.jsx)("div",{className:"p-1",children:Object(l.jsxs)("div",{className:"w-full flex flex-wrap bg-white rounded-xl p-5 shadow-xl",children:[Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("h1",{className:"text-titles text-1xl",children:"Front-end Developer"})}),Object(l.jsx)("div",{className:"w-full my-2",children:Object(l.jsx)("p",{className:"text-titles",children:"85% Match"})}),Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("p",{className:"text-secondary text-xs",children:"1 day"})})]})}),Object(l.jsx)("div",{className:"p-1",children:Object(l.jsxs)("div",{className:"w-full flex flex-wrap bg-white rounded-xl p-5 shadow-xl",children:[Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("h1",{className:"text-titles text-1xl",children:"Front-end Developer"})}),Object(l.jsx)("div",{className:"w-full my-2",children:Object(l.jsx)("p",{className:"text-titles",children:"65% Match"})}),Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("p",{className:"text-secondary text-xs",children:"4 days"})})]})}),Object(l.jsx)("div",{className:"p-1",children:Object(l.jsxs)("div",{className:"w-full flex flex-wrap bg-white rounded-xl p-5 shadow-xl",children:[Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("h1",{className:"text-titles text-1xl",children:"Back-End Developer"})}),Object(l.jsx)("div",{className:"w-full my-2",children:Object(l.jsx)("p",{className:"text-titles",children:"55% Match"})}),Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("p",{className:"text-secondary text-xs",children:"28 days"})})]})}),Object(l.jsx)("div",{className:"p-1",children:Object(l.jsxs)("div",{className:"w-full flex flex-wrap bg-white rounded-xl p-5 shadow-xl",children:[Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("h1",{className:"text-titles text-1xl",children:"Back-End Developer"})}),Object(l.jsx)("div",{className:"w-full my-2",children:Object(l.jsx)("p",{className:"text-titles",children:"53% Match"})}),Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("p",{className:"text-secondary text-xs",children:"28 days"})})]})}),Object(l.jsx)("div",{className:"p-1",children:Object(l.jsxs)("div",{className:"w-full flex flex-wrap bg-white rounded-xl p-5 shadow-xl",children:[Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("h1",{className:"text-titles text-1xl",children:"Back-End Developer"})}),Object(l.jsx)("div",{className:"w-full my-2",children:Object(l.jsx)("p",{className:"text-titles",children:"53% Match"})}),Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("p",{className:"text-secondary text-xs",children:"28 days"})})]})})]})),Object(l.jsx)("button",{className:"bg-transparent outline-none focus:outline-none text-primary text-xs absolute right-4 mt-4",children:"Show All Applicants"})]})]})]})})),h=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(n.a,{classNames:"flex items-center justify-center",children:Object(l.jsx)("button",{className:"flex w-full justify-center cursor-pointer",children:Object(l.jsxs)("div",{className:"w-full",children:[Object(l.jsx)("img",{src:"/img/icons/create-opportunity-icon.svg",alt:"",className:"mx-auto mb-3"}),Object(l.jsx)("p",{className:"text-sm text-secondary",children:"+ Create new Opportunity"})]})})})})},O=t("TSYQ"),p=t.n(O),f=function(e){var s=e.profile_img,t=e.username,c=e.deliveredTime,a=e.unreadMsg,i=e.classNames;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:p()("flex flex-wrap border-b border-secondary-elements py-4",i),children:[Object(l.jsxs)("div",{className:"w-full flex items-center",children:[Object(l.jsxs)("div",{className:"w-1/2 flex items-center",children:[Object(l.jsx)("img",{src:s,alt:""}),Object(l.jsx)("p",{className:"text-xs ml-2 text-titles",children:t})]}),Object(l.jsx)("div",{className:"w-1/2 text-right",children:Object(l.jsx)("p",{className:"text-xss text-secondary",children:c})})]}),Object(l.jsxs)("div",{className:"w-full flex items-center mt-3",children:[Object(l.jsx)("div",{className:"w-2 h-2 rounded-full bg-primary mr-4"}),Object(l.jsx)("div",{className:"flex-1",children:Object(l.jsx)("p",{className:"text-titles text-sm",children:a})})]})]})})};function N(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);s&&(l=l.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,l)}return t}function g(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?N(Object(t),!0).forEach((function(s){Object(r.a)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var w=Object(j.b)((function(e){return{unreadMessages:e.store.unreadMessages}}))((function(e){var s=e.unreadMessages,t=Object(c.useState)({dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,dotsClass:"latest-opts-dots",adaptiveHeight:!0}),i=t[0],r=t[1];Object(c.useEffect)((function(){r(i)}),[]);var j=s.map((function(e){return Object(l.jsx)(a.a.Fragment,{children:Object(l.jsx)(f,{profile_img:e.profile_img,username:e.username,deliveredTime:e.deliveredTime,unreadMsg:e.unreadMsg})},e.id)})),x=s.map((function(e){return Object(l.jsx)("div",{className:"px-2 mb-2",children:Object(l.jsxs)("div",{className:"flex flex-wrap bg-white py-3 px-5 shadow-xl rounded-xl",children:[Object(l.jsxs)("div",{className:"w-full flex items-center my-3",children:[Object(l.jsx)("div",{className:"w-7 h-7 rounded-full",children:Object(l.jsx)("img",{src:e.profile_img,alt:"",className:"w-7 h-7 rounded-full"})}),Object(l.jsx)("h1",{className:"text-titles ml-2",children:e.username}),Object(l.jsx)("p",{className:"text-secondary text-xss ml-auto",children:e.deliveredTime})]}),Object(l.jsxs)("div",{className:"w-full flex items-center my-3",children:[Object(l.jsx)("div",{className:"w-1/5",children:Object(l.jsx)("div",{className:"w-2 h-2 bg-primary rounded-full"})}),Object(l.jsx)("p",{className:"text-titles text-sm",children:e.unreadMsg})]})]})},e.id)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(n.a,{cardTitle:"Unread Messages",classNames:"mb-6 lg:block hidden",children:[Object(l.jsxs)("div",{className:"w-full flex my-4",children:[Object(l.jsxs)("div",{className:"w-4/5 flex items-end",children:[Object(l.jsx)("h1",{className:"text-3xl text-primary -mb-1 mr-3",children:"6"}),Object(l.jsx)("div",{className:"flex items-center ml-3",children:Object(l.jsx)("span",{className:"text-xs text-secondary",children:"It takes 2-3 hours on average from Candidate to asnwer since Accept."})})]}),Object(l.jsx)("div",{className:"w-1/5 flex justify-end",children:Object(l.jsx)("img",{src:"/img/icons/message-icon.svg",alt:""})})]}),Object(l.jsx)("div",{className:"w-full",children:j}),Object(l.jsx)("div",{className:"w-full -mb-1",children:Object(l.jsx)(d.a,{text:"Show All Messages",isTransparent:!0,classNames:"text-primary h-0 mt-3 -mb-6 p-0"})})]}),Object(l.jsxs)("div",{className:"lg:hidden flex flex-wrap mt-5 mb-8",children:[Object(l.jsx)("div",{className:"w-full",children:Object(l.jsx)("h1",{className:"text-titles text-1xl",children:"Unread Messages"})}),Object(l.jsxs)("div",{className:"w-full flex my-5",children:[Object(l.jsxs)("div",{className:"w-4/5 flex items-end",children:[Object(l.jsx)("h1",{className:"text-3xl text-primary -mb-1 mr-3",children:"6"}),Object(l.jsx)("div",{className:"flex items-center",children:Object(l.jsx)("span",{className:"text-xs text-secondary",children:"It takes 2-3 hours on average from Candidate to asnwer since Accept."})})]}),Object(l.jsx)("div",{className:"w-1/5 flex justify-end",children:Object(l.jsx)("img",{src:"/img/icons/message-icon.svg",alt:""})})]}),Object(l.jsxs)("div",{className:"w-full mt-2 relative",children:[Object(l.jsx)(m.a,g(g({},i),{},{children:x})),Object(l.jsx)("button",{className:"bg-transparent outline-none focus:outline-none text-primary text-xs absolute right-4 mt-4",children:"Show All Messages"})]})]})]})})),v=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(n.a,{classNames:"flex items-center justify-center",children:Object(l.jsx)("button",{className:"flex w-full justify-center cursor-pointer",children:Object(l.jsxs)("div",{className:"w-full",children:[Object(l.jsx)("img",{src:"/img/icons/user-invite-icon.svg",alt:"",className:"mx-auto mb-3"}),Object(l.jsx)("p",{className:"text-sm text-secondary",children:"Invite new Member to Team"})]})})})})},y=function(e){var s=e.cardValue,t=e.cardTitle,c=e.cardSubtitle,a=e.cardSubtitleBreak,i=e.classNames;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(n.a,{classNames:i,children:[Object(l.jsx)("h1",{className:"w-full text-3xl text-primary text-center",children:s}),Object(l.jsx)("p",{className:"w-full text-xs text-titles text-center my-4",children:t}),Object(l.jsxs)("p",{className:"w-full text-secondary text-xs text-center",children:[c," ",Object(l.jsx)("br",{})," ",a]})]})})},T=t("IKAe"),S=function(){return Object(l.jsx)(i.a,{title:"Home | Gethired Company",children:Object(l.jsx)("section",{className:"min-h-screen bg-secondary-light pt-24 px-6 lg:pb-0 pb-10",children:Object(l.jsxs)("div",{className:"flex w-full flex-wrap items-start",children:[Object(l.jsx)("div",{className:"lg:w-1/3 w-full lg:pr-3",children:Object(l.jsx)(u,{})}),Object(l.jsx)("div",{className:"lg:w-1/3 w-full lg:my-0 my-5 lg:px-3",children:Object(l.jsx)(w,{})}),Object(l.jsxs)("div",{className:"lg:w-1/3 w-full lg:pl-3 flex flex-wrap",children:[Object(l.jsx)("div",{className:"w-1/2 pr-3 mb-5",children:Object(l.jsx)(y,{cardValue:"1",cardTitle:"Active Opportunity",cardSubtitle:"24 days remaining",cardSubtitleBreak:"(Expires: 12 Oct, 2019)",classNames:"md:p-6 p-0"})}),Object(l.jsx)("div",{className:"w-1/2 pl-3 lg:mb-0 mb-5",children:Object(l.jsx)(y,{cardValue:"82%",cardTitle:"Average % of Match",cardSubtitle:"This is your match",cardSubtitleBreak:"percentage per opportunity",classNames:"md:p-6 p-0"})}),Object(l.jsx)("div",{className:"w-1/2 pr-3 lg:mb-0 mb-5",children:Object(l.jsx)(y,{cardValue:"1",cardTitle:"Latest Invited Talents",cardSubtitle:"On average you invite 1-2",cardSubtitleBreak:"Talent per Opportunity",classNames:"md:p-6 p-0"})}),Object(l.jsx)("div",{className:"w-1/2 pl-3 lg:mb-0 mb-5",children:Object(l.jsx)(y,{cardValue:"3",cardTitle:"Members in Team",cardSubtitle:"You have 3 Members",cardSubtitleBreak:"in your Team so far",classNames:"md:p-6 p-0"})})]}),Object(l.jsx)("div",{className:"lg:w-1/3 w-full lg:pr-3",children:Object(l.jsx)(h,{})}),Object(l.jsx)("div",{className:"lg:w-1/3 w-full lg:my-0 my-5 lg:px-3",children:Object(l.jsx)(v,{})}),Object(l.jsx)("div",{className:"lg:w-1/3 w-full lg:pl-3 flex flex-wrap lg:mt-46",children:Object(l.jsx)(T.a,{classNames:"pb-4 pt-2"})})]})})})};s.default=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(S,{})})}}},[["/EDR",0,2,1,3,4,5,7]]]);