(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[18],{9018:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(9439),i=n(2791),a=n(1087),s=n(6842),c=n(184),o=function(e){var t=e.data;return(0,c.jsx)("article",{className:"degree-container",children:(0,c.jsxs)("header",{children:[(0,c.jsx)("h4",{className:"degree",children:t.degree}),(0,c.jsxs)("p",{className:"school",children:[(0,c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},u=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"education",children:[(0,c.jsx)("div",{className:"link-to",id:"education"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,c.jsx)(o,{data:e},e.school)}))]})};u.defaultProps={data:[]};var l=u,d=n(7892),h=n.n(d),f=n(2773),m=function(e){var t=e.data,n=t.name,r=t.position,i=t.url,a=t.startDate,s=t.endDate,o=t.summary,u=t.highlights;return(0,c.jsxs)("article",{className:"jobs-container",children:[(0,c.jsxs)("header",{children:[(0,c.jsxs)("h4",{children:[(0,c.jsx)("a",{href:i,children:n})," - ",r]}),(0,c.jsxs)("p",{className:"daterange",children:[" ",h()(a).format("MMMM YYYY")," - ",s?h()(s).format("MMMM YYYY"):"PRESENT"]})]}),o?(0,c.jsx)(f.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:o}):null,u?(0,c.jsx)("ul",{className:"points",children:u.map((function(e){return(0,c.jsx)("li",{children:e},e)}))}):null]})},p=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"experience",children:[(0,c.jsx)("div",{className:"link-to",id:"experience"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,c.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))}))]})};p.defaultProps={data:[]};var y=p,g=n(4942),v=n(1413),b=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,c.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},j=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,a=t.title,s={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},o=(0,v.Z)((0,v.Z)({},s),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return(0,c.jsxs)("div",{className:"skillbar clearfix",children:[(0,c.jsx)("div",{className:"skillbar-title",style:s,children:(0,c.jsx)("span",{children:a})}),(0,c.jsx)("div",{className:"skillbar-bar",style:o}),(0,c.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};j.defaultProps={categories:[]};var x=j,S=function(e){var t=e.skills,n=e.categories,a=Object.fromEntries([["All",!1]].concat(n.map((function(e){return[e.name,!1]})))),s=(0,i.useState)(a),o=(0,r.Z)(s,2),u=o[0],l=o[1],d=function(e){var t=Object.keys(u).reduce((function(t,n){return(0,v.Z)((0,v.Z)({},t),{},(0,g.Z)({},n,e===n&&!u[n]))}),{});t.All=!Object.keys(u).some((function(e){return t[e]})),l(t)};return(0,c.jsxs)("div",{className:"skills",children:[(0,c.jsx)("div",{className:"link-to",id:"skills"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Skills"})}),(0,c.jsx)("div",{className:"skill-button-container",children:Object.keys(u).map((function(e){return(0,c.jsx)(b,{label:e,active:u,handleClick:d},e)}))}),(0,c.jsx)("div",{className:"skill-row-container",children:function(){var e=Object.keys(u).reduce((function(e,t){return u[t]?t:e}),"All");return t.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(t){return"All"===e||t.category.includes(e)})).map((function(e){return(0,c.jsx)(x,{categories:n,data:e},e.title)}))}()})]})};S.defaultProps={skills:[],categories:[]};var $=S,D=function(e){var t=e.data,n=e.last;return(0,c.jsxs)("li",{className:"course-container",children:[(0,c.jsx)("p",{className:"course-name",children:t.title}),!n&&(0,c.jsx)("div",{className:"course-dot",children:(0,c.jsx)("p",{className:"course-name",children:" \u2022"})})]})};D.defaultProps={last:!1};var M=D,k=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,c.jsx)(M,{data:t,last:n===e.length-1},t.title)}))},w=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"courses",children:[(0,c.jsx)("div",{className:"link-to",id:"courses"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Selected Courses"})}),(0,c.jsx)("ul",{className:"course-list",children:k(t)})]})};w.defaultProps={data:[]};var O=w,N=function(){return(0,c.jsxs)("div",{className:"references",children:[(0,c.jsx)("div",{className:"link-to",id:"references"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)(a.rU,{to:"/contact",children:(0,c.jsx)("h3",{children:"References are available upon request"})})})]})},P=[{title:"Data Analysis",university:"Clemson"},{title:"Statistics",university:"Clemson"},{title:"Data Structures and Algorithms",university:"BITS"},{title:"Operating Systems",university:"BITS"},{title:"Object Oriented Programming",university:"BITS"},{title:"Software Engineering",university:"BITS"},{title:"Cryptography",university:"BITS"},{title:"Data Mining",university:"BITS"},{title:"Information Retrieval",university:"BITS"},{title:"Artificial Intelligence",university:"BITS"},{title:"Game Theory",university:"BITS"},{title:"Number Theory",university:"BITS"},{title:"Database Systems",university:"BITS"}],T=[{school:"Clemson University",degree:"M.S. Computer Science",link:"https://clemson.edu",year:2025},{school:"Birla Institute of Technology & Science Pilani",degree:"B.S. Computer Science and Engineering",link:"https://www.bits-pilani.ac.in/",year:2021}],I=[{name:"RBL Bank",position:"Full Stack Software Developer",url:"https://www.rblbank.com/",startDate:"2021-07-01",endDate:"2022-12-15",highlights:["Developed a scaleable IMPS Recon portal and Scheduler for handling of large number of (around ten million) timeout and return case transactions everyday.","Implemented UPI UDIR API for Enhancing Complaint handling and resolution process for UPI transactions as per requirement and guidelines of RBI.","API Testing of UPI application in various UAT scenarios based on consumer feedback.","Development of Partner On-boarding Site (Cashpoint Portal) and API development of various Finacle applications."]},{name:"Glocol Networks",position:"Software Developer Intern",url:"http://www.glocol.net/",startDate:"2020-07-01",endDate:"2021-01-10",highlights:["Developed web dashboard application for analysis on number of people on train, their connectivity to People Sense Network on the train.","A Dashboard was developed for the client company for real time locations of trains."]}],L=n(3433),C=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:5,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"C#",competency:4,category:["Web Development",".Net Framework"]},{title:"VB.net",competency:4,category:["Web Development",".Net Framework"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:3,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MS SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Data Mining",competency:3,category:["ML Engineering"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python","ML Engineering"]},{title:"Tensorflow + Keras",competency:3,category:["ML Engineering","Python"]},{title:"PyTorch",competency:3,category:["ML Engineering","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Python",competency:4,category:["Languages","Python","ML Engineering"]},{title:"C++",competency:2,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:4,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"Pandas",competency:5,category:["Data Engineering","ML Engineering","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","ML Engineering","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","ML Engineering","Python"]}].map((function(e){return(0,v.Z)((0,v.Z)({},e),{},{category:e.category.sort()})})),E=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],A=(0,L.Z)(new Set(C.flatMap((function(e){return e.category})))).sort().map((function(e,t){return{name:e,color:E[t]}})),Y={Education:function(){return(0,c.jsx)(l,{data:T})},Experience:function(){return(0,c.jsx)(y,{data:I})},Skills:function(){return(0,c.jsx)($,{skills:C,categories:A})},Courses:function(){return(0,c.jsx)(O,{data:P})},References:function(){return(0,c.jsx)(N,{})}},_=function(){return(0,c.jsx)(s.Z,{title:"Resume",description:"Trinath Sai Subhash Reddy Pittala's Resume",children:(0,c.jsxs)("article",{className:"post",id:"resume",children:[(0,c.jsx)("header",{children:(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h2",{children:(0,c.jsx)(a.rU,{to:"resume",children:"Resume"})}),(0,c.jsx)("div",{className:"link-container",children:Object.keys(Y).map((function(e){return(0,c.jsx)("h4",{children:(0,c.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object.entries(Y).map((function(e){var t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,c.jsx)(i,{},n)}))]})})}},7892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",s="hour",c="day",o="week",u="month",l="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},g=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:g,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),a=n-i<0,s=t.clone().add(r+(a?-1:1),u);return+(-(r+(n-i)/(a?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:o,d:c,D:h,h:s,m:a,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",j={};j[b]=y;var x=function(e){return e instanceof M},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();j[a]&&(i=a),n&&(j[a]=n,i=a);var s=t.split("-");if(!i&&s.length>1)return e(s[0])}else{var c=t.name;j[c]=t,i=c}return!r&&i&&(b=i),i||!r&&b},$=function(e,t){if(x(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},D=v;D.l=S,D.i=x,D.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function y(e){this.$L=S(e.locale,null,!0),this.parse(e)}var g=y.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return D},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},g.isAfter=function(e,t){return $(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<$(e)},g.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var n=this,r=!!D.u(t)||t,l=D.p(e),f=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(c)},m=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,y=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case d:return r?f(1,0):f(31,11);case u:return r?f(1,y):f(0,y+1);case o:var b=this.$locale().weekStart||0,j=(p<b?p+7:p)-b;return f(r?g-j:g+(6-j),y);case c:case h:return m(v+"Hours",0);case s:return m(v+"Minutes",1);case a:return m(v+"Seconds",2);case i:return m(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var n,o=D.p(e),l="set"+(this.$u?"UTC":""),f=(n={},n[c]=l+"Date",n[h]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[s]=l+"Hours",n[a]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],m=o===c?this.$D+(t-this.$W):t;if(o===u||o===d){var p=this.clone().set(h,1);p.$d[f](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[D.p(e)]()},g.add=function(r,l){var h,f=this;r=Number(r);var m=D.p(l),p=function(e){var t=$(f);return D.w(t.date(t.date()+Math.round(e*r)),f)};if(m===u)return this.set(u,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===c)return p(1);if(m===o)return p(7);var y=(h={},h[a]=t,h[s]=n,h[i]=e,h)[m]||1,g=this.$d.getTime()+r*y;return D.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,s=this.$m,c=this.$M,o=n.weekdays,u=n.months,l=n.meridiem,d=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},h=function(e){return D.s(a%12||12,e,"0")},m=l||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return c+1;case"MM":return D.s(c+1,2,"0");case"MMM":return d(n.monthsShort,c,u,3);case"MMMM":return d(u,c);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,o,2);case"ddd":return d(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(a);case"HH":return D.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(a,s,!0);case"A":return m(a,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,h,f){var m,p=this,y=D.p(h),g=$(r),v=(g.utcOffset()-this.utcOffset())*t,b=this-g,j=function(){return D.m(p,g)};switch(y){case d:m=j()/12;break;case u:m=j();break;case l:m=j()/3;break;case o:m=(b-v)/6048e5;break;case c:m=(b-v)/864e5;break;case s:m=b/n;break;case a:m=b/t;break;case i:m=b/e;break;default:m=b}return f?m:D.a(m)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return j[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},g.clone=function(){return D.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},y}(),k=M.prototype;return $.prototype=k,[["$ms",r],["$s",i],["$m",a],["$H",s],["$W",c],["$M",u],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,M,$),e.$i=!0),$},$.locale=S,$.isDayjs=x,$.unix=function(e){return $(1e3*e)},$.en=j[b],$.Ls=j,$.p={},$}()},4942:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(9142);function i(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=18.d13741ae.chunk.js.map