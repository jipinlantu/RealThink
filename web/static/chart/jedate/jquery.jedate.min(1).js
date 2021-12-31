/**
 @Name : jeDate v3.7 日期控件
 @Author: chen guojun
 @Date: 2016-11-23
 @QQ群：516754269
 @官网：http://www.jayui.com/jedate/ 或 https://github.com/singod/jeDate
 */

window.console&&(console=console||{log:function(){}}),function(a,b){"function"==typeof define&&define.amd?define(["$"],b):"object"==typeof exports?module.exports=b():a.jeDate=b(window.jQuery||$)}(this,function(a){function g(a,b){this.opts=b,this.valCell=a,this.init()}var h,b={},c=document,d=/\w+|d+/g,e=function(a){return window.parseInt(a,10)},f={skinCell:"jedateblue",format:"YYYY-MM-DD hh:mm:ss",minDate:"1900-01-01 00:00:00",maxDate:"2099-12-31 23:59:59"};return a.fn.jeDate=function(b){return this.each(function(){return new g(a(this),b||{})})},a.extend({jeDate:function(b,c){return a(b).each(function(){return new g(a(this),c||{})})}}),b.docScroll=function(a){return a=a?"scrollLeft":"scrollTop",c.body[a]|c.documentElement[a]},b.winarea=function(a){return c.documentElement[a?"clientWidth":"clientHeight"]},b.isShow=function(a,b){a.css({display:1!=b?"none":"block"})},b.isLeap=function(a){return 0!==a%100&&0===a%4||0===a%400},b.getDaysNum=function(a,c){var d=31;switch(e(c)){case 2:d=b.isLeap(a)?29:28;break;case 4:case 6:case 9:case 11:d=30}return d},b.getYM=function(a,b,c){var d=new Date(a,b-1);return d.setMonth(b-1+c),{y:d.getFullYear(),m:d.getMonth()+1}},b.getPrevMonth=function(a,c,d){return b.getYM(a,c,0-(d||1))},b.getNextMonth=function(a,c,d){return b.getYM(a,c,d||1)},b.digit=function(a){return 10>a?"0"+(0|a):a},b.IsNum=function(a){return null!=a&&""!=a?!isNaN(a):!1},b.parse=function(a,c,d){a=a.concat(c);var e="hh:mm"==b.parseCheck(d,!1).substring(0,5),f=2;return d.replace(/YYYY|MM|DD|hh|mm|ss/g,function(){var g=e?++f:a.index=0|++a.index;return b.digit(a[g])})},b.parseCheck=function(a,b){var c=[];return a.replace(/YYYY|MM|DD|hh|mm|ss/g,function(a){c.push(a)}),c.join(1==b?"-":":")},b.checkFormat=function(a){var b=[];return a.replace(/YYYY|MM|DD|hh|mm|ss/g,function(a){b.push(a)}),b.join("-")},b.parseMatch=function(a){var b=a.split(" ");return b[0].match(d)},b.checkDate=function(a){var b=a.match(d);if(isNaN(b[0])||isNaN(b[1])||isNaN(b[2]))return!1;if(b[1]>12||b[1]<1)return!1;if(b[2]<1||b[2]>31)return!1;if((4==b[1]||6==b[1]||9==b[1]||11==b[1])&&b[2]>30)return!1;if(2==b[1]){if(b[2]>29)return!1;if((0==b[0]%100&&0!=b[0]%400||0!=b[0]%4)&&b[2]>28)return!1}return!0},b.initDates=function(a,c){var d,f,g,h,i,j,k,l;return c=c||"YYYY-MM-DD hh:mm:ss","string"==typeof a?d=new Date(1e3*e(a.substring(0,10))):(a=0|a,d=new Date,f=d.getTime()+864e5*a,d.setTime(f)),g=d.getFullYear(),h=d.getMonth()+1,i=d.getDate(),j=d.getHours(),k=d.getMinutes(),l=d.getSeconds(),b.parse([g,b.digit(h),b.digit(i)],[b.digit(j),b.digit(k),b.digit(l)],c)},b.montharr=[1,2,3,4,5,6,7,8,9,10,11,12],b.weeks=["日","一","二","三","四","五","六"],b.isValHtml=function(a){return/textarea|input/.test(a[0].tagName.toLocaleLowerCase())},b.isBool=function(a){return void 0==a||1==a?!0:!1},b.addDateTime=function(a,c,f,g){var h="hh-mm"==b.checkFormat(g).substring(0,5)?!0:!1,i=h?a.replace(/^(\d{2})(?=\d)/g,"$1,"):a.substr(0,4).replace(/^(\d{4})/g,"$1,")+a.substr(4).replace(/^(\d{2})(?=\d)/g,"$1,"),j=b.IsNum(a)?i.match(d):a.match(d),k=new Date,l=e(j[0]),m=void 0==j[1]?k.getMonth()+1:e(j[1]),n=void 0==j[2]?k.getDate():e(j[2]),o=void 0==j[3]?k.getHours():e(j[3]),p=void 0==j[4]?k.getMinutes():e(j[4]),q=void 0==j[5]?k.getMinutes():e(j[5]),r=new Date(l,b.digit(m)-1,"DD"==f?n+c:n,"hh"==f?o+c:o,"mm"==f?p+c:p,b.digit(q));return b.parse([r.getFullYear(),r.getMonth()+1,r.getDate()],[r.getHours(),r.getMinutes(),r.getSeconds()],g)},b.boxCell="#jedatebox",h=g.prototype,h.init=function(){var i,c=this,d=c.opts,e=void 0==d.zIndex?2099:d.zIndex,g=void 0==d.isinitVal||0==d.isinitVal?!1:!0,h=a("<div id="+b.boxCell.replace(/\#/g,"")+" class='jedatebox "+(d.skinCell||f.skinCell)+"'></div");b.fixed=b.isBool(d.fixed),h.attr("author","chen guojun--www.jayui.com--version:3.5"),h.css({"z-index":e,position:1==b.fixed?"absolute":"fixed",display:"block"}),i=function(a){var g,h,i,j,c=d.format||f.format,e=d.initAddVal||[0];1==e.length?(g=e[0],h="DD"):(g=e[0],h=e[1]),i=b.initDates(0,c),j=b.addDateTime(i,g,h,c),""==(a.val()||a.text())?b.isValHtml(a)?a.val(j):a.text(j):b.isValHtml(a)?a.val():a.text()},g&&b.isBool(d.insTrigger)&&c.valCell.each(function(){i(a(this))}),b.isBool(d.insTrigger)?c.valCell.on("click",function(e){e.stopPropagation(),a(b.boxCell).length>0||(b.format=d.format||f.format,b.minDate=d.minDate||f.minDate,b.maxDate=d.maxDate||f.maxDate,a("body").append(h),c.setHtml(d))}):(b.format=d.format||f.format,b.minDate=d.minDate||f.minDate,b.maxDate=d.maxDate||f.maxDate,a("body").append(h),c.setHtml(d))},h.orien=function(a,c,d){var e,f,g,h,i=b.fixed?c[0].getBoundingClientRect():a[0].getBoundingClientRect();b.fixed?(f=i.right+a.outerWidth()/1.5>=b.winarea(1)?i.right-a.outerWidth():i.left+(d?0:b.docScroll(1)),e=i.bottom+a.outerHeight()/1<=b.winarea()?i.bottom-1:i.top>a.outerHeight()/1.5?i.top-a.outerHeight()-1:b.winarea()-a.outerHeight(),g=Math.max(e+(d?0:b.docScroll())+1,1)+"px",h=f+"px"):(g="50%",h="50%",a.css({"margin-top":-(i.height/2),"margin-left":-(i.width/2)})),a.css({top:g,left:h})},h.dateClose=function(){a(b.boxCell).remove()},h.setHtml=function(c){var o,p,q,r,s,t,u,v,w,x,y,z,f=this,g=f.valCell,h=a(b.boxCell),i="",j="",k=new Date,l=b.checkFormat(b.format),m="YYYY-MM"==l||"YYYY"==l?!0:!1,n="hh-mm"==l.substring(0,5)?!0:!1;b.formatType=l,""==(g.val()||g.text())?(j=[k.getFullYear(),k.getMonth()+1,k.getDate(),k.getHours(),k.getMinutes(),k.getSeconds()],b.currDate=new Date(j[0],e(j[1])-1,j[2],j[3],j[4],j[5]),b.ymdDate=j[0]+"-"+b.digit(j[1])+"-"+b.digit(j[2])):(o=b.isValHtml(g)?g.val():g.text(),p=n?o.replace(/^(\d{2})(?=\d)/g,"$1,"):o.substr(0,4).replace(/^(\d{4})/g,"$1,")+o.substr(4).replace(/^(\d{2})(?=\d)/g,"$1,"),q=b.IsNum(o)?p.match(d):o.match(d),n?(j="hh-mm"==l?[q[0],q[1],k.getSeconds()]:[q[0],q[1],q[2]],b.currDate=new Date(k.getFullYear(),k.getMonth()-1,k.getDate())):(j=[q[0],q[1],q[2],void 0==q[3]?k.getHours():q[3],void 0==q[4]?k.getMinutes():q[4],void 0==q[5]?k.getSeconds():q[5]],b.currDate=new Date(j[0],e(j[1])-1,j[2],j[3],j[4],j[5]),b.ymdDate=j[0]+"-"+b.digit(j[1])+"-"+b.digit(j[2]))),b.currMonth=j[1],b.currDays=j[2],r='<div class="jedatetop">'+(m?'<div class="jedateym" style="width:100%;"><i class="prev triangle ymprev"></i><span class="jedateyy"><em class="jedateyearmonth"></em></span><i class="next triangle ymnext"></i></div>':'<div class="jedateym" style="width:50%;"><i class="prev triangle yearprev"></i><span class="jedateyy" ym="24"><em class="jedateyear"></em><em class="pndrop"></em></span><i class="next triangle yearnext"></i></div><div class="jedateym" style="width:50%;"><i class="prev triangle monthprev"></i><span class="jedatemm" ym="12"><em class="jedatemonth"></em><em class="pndrop"></em></span><i class="next triangle monthnext"></i></div>')+"</div>",s=m?"YYYY"==l?'<ul class="jedayy"></ul>':'<ul class="jedaym"></ul>':'<div class="jedatetopym" style="display: none;"><ul class="ymdropul"></ul><p><span class="jedateymchle">&lt;&lt;</span><span class="jedateymchri">&gt;&gt;</span><span class="jedateymchok">关闭</span></p></div>',t='<ol class="jedaol"></ol><ul class="jedaul"></ul>',u=m?"YYYY"==l?'<div class="botflex jedatebtn"><span class="jedateok" style="width:47.8%">确认</span><span class="jedateclear" style="width:47.8%">清空</span></div>':'<div class="botflex jedatebtn"><span class="jedateok">确认</span><span class="jedatetodaymonth">本月</span><span class="jedateclear">清空</span></div>':'<div class="botflex jedatehmsshde"><ul class="jedatehms"><li><input type="text" /></li><i>:</i><li><input type="text" /></li><i>:</i><li><input type="text" /></li></ul></div><div class="botflex jedatebtn"><span class="jedateok">确认</span><span class="jedatetodaymonth">今天</span><span class="jedateclear">清空</span></div>',v='<div class="jedatebot">'+u+"</div>",w='<div class="jedateprophms '+(n?"jedatepropfix":"jedateproppos")+'"><div class="jedatepropcon"><div class="jedatehmstitle">时间选择<div class="jedatehmsclose">&times;</div></div><div class="jedateproptext">小时</div><div class="jedateproptext">分钟</div><div class="jedateproptext">秒数</div><div class="jedatehmscon jedateprophours"></div><div class="jedatehmscon jedatepropminutes"></div><div class="jedatehmscon jedatepropseconds"></div></div></div>',x=m?r+s+v:n?r+w+v:r+s+t+w+v,h.html(x),b.isBool(c.isClear)?"":b.isShow(h.find(".jedatebot .jedateclear"),!1),m||(b.isBool(c.isToday)?"":b.isShow(h.find(".jedatebot .jedatetodaymonth"),!1)),b.isBool(c.isOk)?"":b.isShow(h.find(".jedatebot .jedateok")[0],!1),/\hh-mm/.test(l)?(y=function(d){var e;e=""!=g.val()||""!=g.text()?d?[j[0],j[1],j[2]]:[j[3],j[4],j[5]]:[b.currDate.getHours(),b.currDate.getMinutes(),b.currDate.getSeconds()],h.find(".jedatebot .jedatehms input").each(function(d){a(this).val(b.digit(e[d])),b.isBool(c.ishmsVal)?"":a(this).attr("readOnly","true")})},n?(y(!0),h.find(".jedateyear").text(b.currDate.getFullYear()+"年"),h.find(".jedatemonth").text(b.digit(b.currDate.getMonth()+1)+"月")):b.isBool(c.isTime)?y(!1):(b.isShow(h.find(".jedatebot .jedatehmsshde"),!1),h.find(".jedatebot .jedatebtn").css("width","100%"))):(m||b.isShow(h.find(".jedatebot .jedatehmsshde"),!1),h.find(".jedatebot .jedatebtn").css("width","100%")),/\YYYY-MM-DD/.test(l)&&(a.each(b.weeks,function(a,b){i+='<li class="weeks" data-week="'+b+'">'+b+"</li>"}),h.find(".jedaol").html(i),f.createDaysHtml(b.currDate.getFullYear(),b.currDate.getMonth()+1,c),f.chooseYM(c)),m&&(z=h.find(".jedateym .jedateyearmonth"),"YYYY"==l?(z.attr("data-onyy",j[0]).text(j[0]+"年"),h.find(".jedayy").html(f.onlyYear(j[0]))):(z.attr("data-onym",j[0]+"-"+b.digit(j[1])).text(j[0]+"年"+e(j[1])+"月"),h.find(".jedaym").html(f.onlyYMStr(j[0],e(j[1])))),f.onlyYMevents(j,c)),f.orien(h,g),setTimeout(function(){c.success&&c.success(g)},2),f.events(j,c)},h.createDaysHtml=function(c,f,g){var r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,h=this,i=a(b.boxCell),j=e(c),k=e(f),l="",m=0,n=b.minDate.match(d),o=n[0]+n[1]+n[2],p=b.maxDate.match(d),q=p[0]+p[1]+p[2];for(i.find(".jedaul").html(""),r=new Date(j,k-1,1).getDay()||7,s=b.getDaysNum(j,k),t=b.getPrevMonth(j,k),u=b.getDaysNum(j,t.m),v=b.getNextMonth(j,k),w=b.currDate.getFullYear()+"-"+b.digit(b.currDate.getMonth()+1)+"-"+b.digit(1),x=j+"-"+b.digit(k)+"-"+b.digit(1),i.find(".jedateyear").attr("year",j).text(j+"年"),i.find(".jedatemonth").attr("month",k).text(k+"月"),y=function(c,d,e){var f=g.marks,h=function(a,b){for(var c=a.length;c--;)if(a[c]===b)return!0;return!1};return a.isArray(f)&&f.length>0&&h(f,c+"-"+b.digit(d)+"-"+b.digit(e))?'<i class="marks"></i>':""},z=function(a,b,c){var d,e,f,h;return 1==g.festival?(e=jeLunar(a,b-1,c),f=e.solarFestival||e.lunarFestival,h=""!=(f&&e.jieqi)?f:e.jieqi||e.showInLunar,d='<p><span class="solar">'+c+'</span><span class="lunar">'+h+"</span></p>"):d='<p class="nolunar">'+c+"</p>",d},A=function(a,c,d,f){var g=(a+"-"+b.digit(c)+"-"+b.digit(d)).replace(/\-/g,"");if(f){if(e(g)>=e(o)&&e(g)<=e(q))return!0}else if(e(o)>e(g)||e(q)<e(g))return!0},B=u-r+1;u>=B;B++,m++)C=y(t.y,t.m,B),D=A(t.y,t.m,B,!1)?"disabled":"other",l+='<li year="'+t.y+'" month="'+t.m+'" day="'+B+'" class='+D+">"+(z(t.y,t.m,B)+C)+"</li>";for(E=1;s>=E;E++,m++)F="",G=y(j,k,E),H=j+"-"+b.digit(k)+"-"+b.digit(E),F=A(j,k,E,!0)?b.ymdDate==H?"action":w!=x&&x==H?"action":"":"disabled",l+='<li year="'+j+'" month="'+k+'" day="'+E+'" '+(""!=F?"class="+F:"")+">"+(z(j,k,E)+G)+"</li>";for(I=1,J=42-m;J>=I;I++)K=y(v.y,v.m,I),L=A(v.y,v.m,I,!1)?"disabled":"other",l+='<li year="'+v.y+'" month="'+v.m+'" day="'+I+'" class='+L+">"+(z(v.y,v.m,I)+K)+"</li>";i.find(".jedaul").html(l),h.chooseDays(g)},h.onlyYMStr=function(c,d){var e="";return a.each(b.montharr,function(a,f){var g=b.parseMatch(b.minDate),h=b.parseMatch(b.maxDate),i=new Date(c,b.digit(f),"01"),j=new Date(g[0],g[1],g[2]),k=new Date(h[0],h[1],h[2]);e+=j>i||i>k?"<li class='disabled' ym='"+c+"-"+b.digit(f)+"'>"+c+"年"+b.digit(f)+"月</li>":"<li "+(d==f?'class="action"':"")+' ym="'+c+"-"+b.digit(f)+'">'+c+"年"+b.digit(f)+"月</li>"}),e},h.onlyYear=function(c){var d="";return b.yearArr=new Array(15),a.each(b.yearArr,function(e){var f=b.parseMatch(b.minDate),g=b.parseMatch(b.maxDate),h=f[0],i=g[0],j=c-7+e,k=a(b.boxCell).find(".jedateym .jedateyearmonth").attr("data-onyy");d+=h>j||j>i?"<li class='disabled' yy='"+j+"'>"+j+"年</li>":"<li "+(k==j?'class="action"':"")+" yy='"+j+"'>"+j+"年</li>"}),d},h.setStrhms=function(c){var o,p,q,r,g=a(b.boxCell),h=b.format,i=[],j=g.find(".jedatehms li"),k=g.find(".jedatepropcon .jedateproptext"),l=g.find(".jedatepropcon .jedatehmscon"),m=function(a){var b=a.match(d).join("-"),c="YYYY-MM-DD-hh-mm"==b?a.split(" "):b,e="YYYY-MM-DD-hh-mm"==b?c[1]:c;return e.match(d).join("-")},n="hh-mm"==m(h);return n&&(o=j.css("width").replace(/\px|em|rem/g,""),p=g.find(".jedatehms i").css("width").replace(/\px|em|rem/g,""),q=k.css("width").replace(/\px|em|rem/g,""),r=Math.round(e(o)+e(o)/2+e(p)/2),j[0].style.width=j[1].style.width=r+"px",k[0].style.width=k[1].style.width=l[0].style.width=l[1].style.width=Math.round(e(q)+e(q)/2+2)+"px"),a.each([24,60,60],function(a,d){var o,p,e="",f="",h=g.find(".jedatehms input"),m=h.eq(a).val();for(h.eq(a).attr("maxlength",2).attr("numval",d-1).attr("item",a),o=0;d>o;o++)o=b.digit(o),c.ishmsLimit?f=m>o?"disabled":o==m?"action":"":(f=n&&2==a?m==o?"disabled action":"disabled":m==o?"action":"",n&&2==a&&(p=j.eq(2),p.css({display:"none"}).prev().css({display:"none"}),k.eq(a).css({display:"none"}),l.eq(a).css({display:"none"}))),e+='<p class="'+f+'">'+o+"</p>";i.push(e)}),i},h.onlyYMevents=function(c,d){var h,f=this,g=a(b.boxCell),i=g.find(".jedateym .ymprev"),j=g.find(".jedateym .ymnext"),k=e(c[0]),l=parseFloat(c[1]);a.each([i,j],function(a,c){c.on("click",function(a){a.stopPropagation(),"YYYY"==b.checkFormat(b.format)?(h=c==i?g.find(".jedayy li").attr("yy"):g.find(".jedayy li").eq(b.yearArr.length-1).attr("yy"),g.find(".jedayy").html(f.onlyYear(e(h)))):(h=c==i?k-=1:k+=1,g.find(".jedaym").html(f.onlyYMStr(h,l))),f.ymPremNextEvents(d)})})},h.nongliorien=function(a,c,d){var e,f,g,h,i=c[0].getBoundingClientRect();return f=i.right+a[0].offsetWidth/1.5>=b.winarea(1)?i.right-a[0].offsetWidth:i.left+(d?0:b.docScroll(1)),e=i.bottom+a[0].offsetHeight/1<=b.winarea()?i.bottom-1:i.top>a[0].offsetHeight/1.5?i.top-a[0].offsetHeight-1:b.winarea()-a[0].offsetHeight,g=Math.max(e+(d?0:b.docScroll())+1,1)+"px",h=f+"px",{top:g,left:h}},h.chooseDays=function(c){var d=this,f=d.valCell,g=a(b.boxCell);g.find(".jedaul li").on("click",function(h){var k,l,m,n,i=a(this),j=[];i.hasClass("disabled")||(h.stopPropagation(),g.find(".jedatehms input").each(function(){j.push(a(this).val())}),k=e(i.attr("year")),l=parseFloat(i.attr("month")),m=parseFloat(i.attr("day")),n=b.parse([k,l,m],[j[0],j[1],j[2]],b.format),b.isValHtml(f)?f.val(n):f.text(n),d.dateClose(),c.festival&&a("#jedatetipscon").remove(),(a.isFunction(c.choosefun)||null!=c.choosefun)&&c.choosefun&&c.choosefun(f,n))}),c.festival&&g.find(".jedaul li").on("mouseover",function(){var o,b=a(this),d=e(b.attr("year")),f=parseFloat(b.attr("month")),g=parseFloat(b.attr("day")),i=a("<div/>",{id:"jedatetipscon","class":"jedatetipscon"}),j=jeLunar(d,f-1,g),k="<p>"+j.solarYear+"年"+j.solarMonth+"月"+j.solarDate+"日 "+j.inWeekDays+'</p><p class="red">农历：'+j.shengxiao+"年 "+j.lnongMonth+"月"+j.lnongDate+"</p><p>"+j.ganzhiYear+"年 "+j.ganzhiMonth+"月 "+j.ganzhiDate+"日</p>",l=""!=(j.solarFestival||j.lunarFestival)?'<p class="red">'+("节日："+j.solarFestival+j.lunarFestival)+"</p>":"",m=""!=j.jieqi?'<p class="red">'+(""!=j.jieqi?"节气："+j.jieqi:"")+"</p>":"",n=""!=(j.solarFestival||j.lunarFestival||j.jieqi)?l+m:"";a("body").append(i),i.html(k+n),o=h.nongliorien(i,b),i.css({"z-index":void 0==c.zIndex?2104:c.zIndex+5,top:o.top,left:o.left,position:"absolute",display:"block"})}).on("mouseout",function(){a("#jedatetipscon").length>0&&a("#jedatetipscon").remove()})},h.chooseYM=function(c){function t(b){var d,c="";return a.each(new Array(15),function(a){if(7===a){var g=k.attr("year");d=e(b)>=e(p[0])&&e(b)<=e(r[0])?g==b?'class="action"':"":'class="disabled"',c+="<li "+d+' yy="'+b+'">'+b+"年</li>"}else d=e(b-7+a)>=e(p[0])&&e(b-7+a)<=e(r[0])?"":'class="disabled"',c+="<li "+d+' yy="'+(b-7+a)+'">'+(b-7+a)+"年</li>"}),c}function u(c,d){var f="";12==d?(a.each(b.montharr,function(a,c){var g,d=l.attr("month");c=b.digit(c),g=e(k.attr("year")+c)>=e(q)&&e(k.attr("year")+c)<=e(s)?b.digit(d)==c?'class="action"':"":'class="disabled"',f+="<li "+g+' mm="'+c+'">'+c+"月</li>"}),a.each([m,n],function(a,c){b.isShow(c,!1)})):(f=t(c),a.each([m,n],function(a,c){b.isShow(c,!0)})),h.removeClass(12==d?"jedatesety":"jedatesetm").addClass(12==d?"jedatesetm":"jedatesety"),g.find(".jedatetopym .ymdropul").html(f),b.isShow(h,!0)}function v(d){g.find(".ymdropul li").on("click",function(g){var i=a(this),j=i.attr("yy"),k=e(l.attr("month"));i.hasClass("disabled")||(g.stopPropagation(),d.attr("year",j).html(j+"年"),b.isShow(h,!1),f.createDaysHtml(j,k,c))})}var w,f=this,g=a(b.boxCell),h=g.find(".jedatetopym"),i=g.find(".jedateyy"),j=g.find(".jedatemm"),k=g.find(".jedateyy .jedateyear"),l=g.find(".jedatemm .jedatemonth"),m=g.find(".jedateymchri"),n=g.find(".jedateymchle"),o="hh-mm"==b.checkFormat(b.format).substring(0,5)?!0:!1,p=b.minDate.match(d),q=p[0]+p[1],r=b.maxDate.match(d),s=r[0]+r[1];!o&&i.on("click",function(){var b=a(this),c=e(b.attr("ym")),d=e(k.attr("year"));u(d,c),v(k)}),!o&&j.on("click",function(){var d=a(this),i=e(d.attr("ym")),j=e(k.attr("year"));u(j,i),g.find(".ymdropul li").on("click",function(d){if(!a(this).hasClass("disabled")){d.stopPropagation();var g=a(this),i=k.attr("year"),j=e(g.attr("mm"));l.attr("month",j).html(j+"月"),b.isShow(h,!1),f.createDaysHtml(i,j,c)}})}),g.find(".jedateymchok").on("click",function(a){a.stopPropagation(),b.isShow(h,!1)}),w=e(k.attr("year")),a.each([n,m],function(a,b){b.on("click",function(b){b.stopPropagation(),0==a?w-=15:w+=15;var c=t(w);g.find(".jedatetopym .ymdropul").html(c),v(k)})})},h.ymPremNextEvents=function(c){var e=this,f=e.valCell,g=a(b.boxCell),h=new Date,i="YYYY"==b.checkFormat(b.format),j=i?g.find(".jedayy li"):g.find(".jedaym li");j.on("click",function(g){if(!a(this).hasClass("disabled")){g.stopPropagation();var j=i?a(this).attr("yy").match(d):a(this).attr("ym").match(d),k=i?b.parse([j[0],h.getMonth()+1,1],[0,0,0],b.format):b.parse([j[0],j[1],1],[0,0,0],b.format);b.isValHtml(f)?f.val(k):f.text(k),e.dateClose(),(a.isFunction(c.choosefun)||null!=c.choosefun)&&c.choosefun(f,k)}})},h.events=function(c,f){var s,t,u,v,w,g=this,h=g.valCell,i=a(b.boxCell),j=new Date,k=i.find(".yearprev"),l=i.find(".yearnext"),m=i.find(".monthprev"),n=i.find(".monthnext"),o=i.find(".jedateyear"),p=i.find(".jedatemonth"),q="YYYY-MM"==b.checkFormat(b.format)||"YYYY"==b.checkFormat(b.format)?!0:!1,r="hh-mm"==b.checkFormat(b.format).substring(0,5)?!0:!1;q?(g.ymPremNextEvents(f),i.find(".jedatebot .jedatetodaymonth").on("click",function(c){c.stopPropagation();var d=[j.getFullYear(),j.getMonth()+1,j.getDate()],e=b.parse([d[0],d[1],0],[0,0,0],b.format);b.isValHtml(h)?h.val(e):h.text(e),g.dateClose(),(a.isFunction(f.choosefun)||null!=f.choosefun)&&f.choosefun(h,e)})):(!r&&a.each([k,l],function(a,b){b.on("click",function(a){if("block"!=i.find(".jedatetopym").css("display")){a.stopPropagation();var c=e(o.attr("year")),d=e(p.attr("month")),h=b==k?--c:++c;b==g.createDaysHtml(h,d,f)}})}),!r&&a.each([m,n],function(a,c){c.on("click",function(a){if("block"!=i.find(".jedatetopym").css("display")){a.stopPropagation();var d=e(o.attr("year")),h=e(p.attr("month")),j=b.getPrevMonth(d,h),k=b.getNextMonth(d,h);c==m?g.createDaysHtml(j.y,j.m,f):g.createDaysHtml(k.y,k.m,f)}})}),s=g.setStrhms(f),t=function(c){a.each(c,function(a,b){""==b.html()&&b.html(s[a])}),r?(b.isShow(i.find(".jedatehmsclose"),!1),b.isShow(i.find(".jedatetodaymonth"),!1)):b.isShow(i.find(".jedateprophms"),!0),a.each(["hours","minutes","seconds"],function(c,d){var g,e=i.find(".jedateprop"+d),f=i.find(".jedateprop"+d+" .action");e[0].scrollTop=f[0].offsetTop-146,g=i.find(".jedateprop"+d+" p"),g.on("click",function(){var d=a(this);d.hasClass("disabled")||(g.each(function(){a(this).removeClass("action")}),d.addClass("action"),i.find(".jedatebot .jedatehms input").eq(c).val(b.digit(d.text())),r||b.isShow(i.find(".jedateprophms"),!1))})})},u=i.find(".jedateprophours"),v=i.find(".jedatepropminutes"),w=i.find(".jedatepropseconds"),r?t([u,v,w]):i.find(".jedatehms").on("click",function(){"block"!==i.find(".jedateprophms").css("display")&&t([u,v,w]),i.find(".jedateprophms .jedatehmsclose").on("click",function(){b.isShow(i.find(".jedateprophms"),!1)})}),i.find(".jedatebot .jedatetodaymonth").on("click",function(){var c=[j.getFullYear(),j.getMonth()+1,j.getDate(),j.getHours(),j.getMinutes(),j.getSeconds()],d=b.parse([c[0],c[1],c[2]],[c[3],c[4],c[5]],b.format);g.createDaysHtml(c[0],c[1],f),b.isValHtml(h)?h.val(d):b.text(d),g.dateClose(),(a.isFunction(f.choosefun)||null!=f.choosefun)&&f.choosefun(h,d),q||g.chooseDays(f)})),i.find(".jedatehms input").on("keyup",function(){var b=a(this),c=b.val(),d=e(b.attr("numval")),f=e(b.attr("item"));b.val(c.replace(/\D/g,"")),c>d&&(b.val(d),alert("输入值不能大于"+d)),""==c&&b.val("00"),i.find(".jedatehmscon").eq(f).children().each(function(){a(this).removeClass("action")}),i.find(".jedatehmscon").eq(f).children().eq(e(b.val().replace(/^0/g,""))).addClass("action"),a.each(["hours","minutes","seconds"],function(a,b){var c=i.find(".jedateprop"+b),d=i.find(".jedateprop"+b+" .action");c[0].scrollTop=d[0].offsetTop-118})}),i.find(".jedatebot .jedateclear").on("click",function(c){c.stopPropagation();var d=b.isValHtml(h)?h.val():h.text();b.isValHtml(h)?h.val(""):h.text(""),g.dateClose(),""!=d&&(b.isBool(f.clearRestore)&&(b.minDate=f.startMin||b.minDate,b.maxDate=f.startMax||b.maxDate),(a.isFunction(f.clearfun)||null!=f.clearfun)&&f.clearfun(h,d))}),i.find(".jedatebot .jedateok").on("click",function(k){var l,m,n,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;k.stopPropagation(),l=""!=(h.val()||h.text()),m="YYYY"==b.checkFormat(b.format),n="",s=function(){var b=[];return i.find(".jedatehms input").each(function(){b.push(a(this).val())}),b},t=b.minDate.match(d),u=t[0]+t[1]+t[2],v=b.maxDate.match(d),w=v[0]+v[1]+v[2],l?(x=b.isValHtml(h)?h.val():h.text(),y=x.match(d),q?(D=m?i.find(".jedayy .action"):i.find(".jedaym .action"),m?(E=D?D.attr("yy").match(d):y,n=b.parse([e(E[0]),j.getMonth()+1,1],[0,0,0],b.format)):(F=D?D.attr("ym").match(d):y,n=b.parse([e(F[0]),e(F[1]),1],[0,0,0],b.format))):(z=s(),A=[e(o.attr("year")),e(p.attr("month")),y[2]],B=A[0]+A[1]+A[2],C=e(B)>=e(u)&&e(B)<=e(w)?!0:!1,n=l&&C?b.parse([A[0],A[1],A[2]],[z[0],z[1],z[2]],b.format):b.parse([y[0],y[1],y[2]],[z[0],z[1],z[2]],b.format),r||g.createDaysHtml(A[0],A[1],f),g.chooseDays(f))):(G=s(),H=i.find(".jedateyearmonth")[0],E="",r?n=b.parse([c[0],c[1],c[2]],[G[0],G[1],G[2]],b.format):(E=q?"YYYY"==b.checkFormat(b.format)?H.attr("data-onyy").match(d):H.attr("data-onym").match(d):[j.getFullYear(),j.getMonth()+1,j.getDate()],n=m?b.parse([e(E[0]),j.getMonth(),1],[0,0,0],b.format):b.parse([e(E[0]),e(E[1]),j.getDate()],[G[0],G[1],G[2]],b.format))),b.isValHtml(h)?h.val(n):h.text(n),g.dateClose(),(a.isFunction(f.okfun)||null!=f.okfun)&&f.okfun(b.elemCell,n)}),a(document).on("mouseup",function(c){c.stopPropagation();var d=a(b.boxCell);d&&"none"!==d.css("display")&&d.remove()}),a(b.boxCell).on("mouseup",function(a){a.stopPropagation()})},a.dateVer="3.7",a.nowDate=function(a){return b.initDates(a)},a.getLunar=function(a){if(/\YYYY-MM-DD/.test(b.formatType)){var c=a.substr(0,4).replace(/^(\d{4})/g,"$1,")+a.substr(4).replace(/^(\d{2})(?=\d)/g,"$1,"),f=b.IsNum(a)?c.match(d):a.match(d),g=jeLunar(f[0],f[1]-1,f[2]);return{nMonth:g.lnongMonth,nDays:g.lnongDate,yYear:e(g.solarYear),yMonth:e(g.solarMonth),yDays:e(g.solarDate),cWeek:g.inWeekDays,nWeek:g.solarWeekDay}}},a.addDate=function(a,c,d){return c=0|c,d=d||"DD",b.addDateTime(a,c,d,b.format)},g}),function(a,b){a.jeLunar=b(a.jeLunar)}(this,function(a){function m(a){var w,m=function(a,b){var d=new Date(31556925974.7*(a-1900)+6e4*c[b]+Date.UTC(1900,0,6,2,5));return d.getUTCDate()},n=function(a){var c,d=348;for(c=32768;c>8;c>>=1)d+=b[a-1900]&c?1:0;return d+p(a)},o=function(a){return d.charAt(a%10)+e.charAt(a%12)},p=function(a){var c=q(a)?65536&b[a-1900]?30:29:0;return c},q=function(a){return 15&b[a-1900]},r=function(a,c){return b[a-1900]&65536>>c?30:29},s=function(a){var b,c=0,d=0,e=new Date(1900,0,31),f=(a-e)/864e5;for(this.dayCyl=f+40,this.monCyl=14,b=1900;2050>b&&f>0;b++)d=n(b),f-=d,this.monCyl+=12;for(0>f&&(f+=d,b--,this.monCyl-=12),this.year=b,this.yearCyl=b-1864,c=q(b),this.isLeap=!1,b=1;13>b&&f>0;b++)c>0&&b==c+1&&0==this.isLeap?(--b,this.isLeap=!0,d=p(this.year)):d=r(this.year,b),1==this.isLeap&&b==c+1&&(this.isLeap=!1),f-=d,0==this.isLeap&&this.monCyl++;0==f&&c>0&&b==c+1&&(this.isLeap?this.isLeap=!1:(this.isLeap=!0,--b,--this.monCyl)),0>f&&(f+=d,--b,--this.monCyl),this.month=b,this.day=f+1},t=function(a){return 10>a?"0"+(0|a):a},u=function(a,b){var c=a;return b.replace(/dd?d?d?|MM?M?M?|yy?y?y?/g,function(a){switch(a){case"yyyy":var b="000"+c.getFullYear();return b.substring(b.length-4);case"dd":return t(c.getDate());case"d":return c.getDate().toString();case"MM":return t(c.getMonth()+1);case"M":return c.getMonth()+1}})},v=function(a,b){var c;switch(b){case 10:c="初十";break;case 20:c="二十";break;case 30:c="三十";break;default:c=i.charAt(Math.floor(b/10)),c+=h.charAt(b%10)}return c};this.isToday=!1,this.isRestDay=!1,this.solarYear=u(a,"yyyy"),this.solarMonth=u(a,"M"),this.solarDate=u(a,"d"),this.solarWeekDay=a.getDay(),this.inWeekDays="星期"+h.charAt(this.solarWeekDay),w=new s(a),this.lunarYear=w.year,this.shengxiao=f.charAt((this.lunarYear-4)%12),this.lunarMonth=w.month,this.lunarIsLeapMonth=w.isLeap,this.lnongMonth=this.lunarIsLeapMonth?"闰"+j[w.month-1]:j[w.month-1],this.lunarDate=w.day,this.showInLunar=this.lnongDate=v(this.lunarMonth,this.lunarDate),1==this.lunarDate&&(this.showInLunar=this.lnongMonth+"月"),this.ganzhiYear=o(w.yearCyl),this.ganzhiMonth=o(w.monCyl),this.ganzhiDate=o(w.dayCyl++),this.jieqi="",this.restDays=0,m(this.solarYear,2*(this.solarMonth-1))==u(a,"d")&&(this.showInLunar=this.jieqi=g[2*(this.solarMonth-1)]),m(this.solarYear,2*(this.solarMonth-1)+1)==u(a,"d")&&(this.showInLunar=this.jieqi=g[2*(this.solarMonth-1)+1]),"清明"==this.showInLunar&&(this.showInLunar="清明节",this.restDays=1),this.solarFestival=k[u(a,"MM")+u(a,"dd")],"undefined"==typeof this.solarFestival?this.solarFestival="":/\*(\d)/.test(this.solarFestival)&&(this.restDays=parseInt(RegExp.$1),this.solarFestival=this.solarFestival.replace(/\*\d/,"")),this.showInLunar=""==this.solarFestival?this.showInLunar:this.solarFestival,this.lunarFestival=l[this.lunarIsLeapMonth?"00":t(this.lunarMonth)+t(this.lunarDate)],"undefined"==typeof this.lunarFestival?this.lunarFestival="":/\*(\d)/.test(this.lunarFestival)&&(this.restDays=this.restDays>parseInt(RegExp.$1)?this.restDays:parseInt(RegExp.$1),this.lunarFestival=this.lunarFestival.replace(/\*\d/,"")),12==this.lunarMonth&&this.lunarDate==r(this.lunarYear,12)&&(this.lunarFestival=l["0100"],this.restDays=1),this.showInLunar=""==this.lunarFestival?this.showInLunar:this.lunarFestival}var b=[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42448,83315,21200,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46496,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19415,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448],c=[0,21208,43467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758],d="甲乙丙丁戊己庚辛壬癸",e="子丑寅卯辰巳午未申酉戌亥",f="鼠牛虎兔龙蛇马羊猴鸡狗猪",g=["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],h="日一二三四五六七八九十",i="初十廿卅",j=["正","二","三","四","五","六","七","八","九","十","十一","腊"],k={"0101":"*1元旦节","0202":"湿地日","0214":"情人节","0308":"妇女节","0312":"植树节","0315":"消费者权益日","0401":"愚人节","0422":"地球日","0501":"*1劳动节","0504":"青年节","0512":"护士节","0518":"博物馆日","0520":"母亲节","0601":"儿童节","0623":"奥林匹克日","0630":"父亲节","0701":"建党节","0801":"建军节","0903":"抗战胜利日","0910":"教师节",1001:"*3国庆节",1201:"艾滋病日",1224:"平安夜",1225:"圣诞节"},l={"0100":"除夕","0101":"*2春节","0115":"元宵节","0505":"*1端午节","0707":"七夕节","0715":"中元节","0815":"*1中秋节","0909":"*1重阳节",1015:"下元节",1208:"腊八节",1223:"小年"};return a=function(a,b,c){return new m(new Date(a,b,c))}});