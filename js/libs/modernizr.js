/*! modernizr 3.9.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-setclasses !*/
!function(n,e,s){function o(n,e){return typeof n===e}var a=[],t={_version:"3.9.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var s=this;setTimeout(function(){e(s[n])},0)},addTest:function(n,e,s){a.push({name:n,fn:e,options:s})},addAsyncTest:function(n){a.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=t,Modernizr=new Modernizr;var i=[],l=e.documentElement,f="svg"===l.nodeName.toLowerCase();!function(){var n,e,s,t,l,f,r;for(var c in a)if(a.hasOwnProperty(c)){if(n=[],e=a[c],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)n.push(e.options.aliases[s].toLowerCase());for(t=o(e.fn,"function")?e.fn():e.fn,l=0;l<n.length;l++)f=n[l],r=f.split("."),1===r.length?Modernizr[r[0]]=t:(Modernizr[r[0]]&&(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean)||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i.push((t?"":"no-")+r.join("-"))}}(),function(n){var e=l.className,s=Modernizr._config.classPrefix||"";if(f&&(e=e.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");e=e.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(n.length>0&&(e+=" "+s+n.join(" "+s)),f?l.className.baseVal=e:l.className=e)}(i),delete t.addTest,delete t.addAsyncTest;for(var r=0;r<Modernizr._q.length;r++)Modernizr._q[r]();n.Modernizr=Modernizr}(window,document);