/* -----------H-ui前端框架-------------
* H-ui.admin.js v3.1.4
* http://www.h-ui.net/
* Created & Modified by guojunhui
* Date modified 2019.01.21
* Copyright 2013-2019 北京颖杰联创科技有限公司 All rights reserved.
* Licensed under MIT license.
* http://opensource.org/licenses/MIT
*/
function displaynavbar(a) {
    if ($(a).hasClass("open")) {
        $(a).removeClass("open");
        $("body").removeClass("big-page")
    } else {
        $(a).addClass("open");
        $("body").addClass("big-page")
    }
}
//  设置Cookie
function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
  return getCookie(cname);
}
//  //获取Cookie
// function getCookie(cname)
// {
//   var name = cname + "=";
//   var ca = document.cookie.split(';');
//   for(var i=0; i<ca.length; i++) 
//   {
//     var c = ca[i].trim();
//     if (c.indexOf(name)==0) return c.substring(name.length,c.length);
//   }
//   return "";
// }
//鼠标移动上去下拉
$(function() {
    $(document).on("mouseenter", ".dropDown", function() {
        $(this).addClass("hover")
    });
    $(document).on("mouseleave", ".dropDown", function() {
        $(this).removeClass("hover")
    });
    $(document).on("mouseenter", ".dropDown_hover", function() {
        $(this).addClass("open")
    });
    $(document).on("mouseleave", ".dropDown_hover", function() {
        $(this).removeClass("open")
    });
    $(document).on("click", ".dropDown-menu li a", function() {
        $(".dropDown").removeClass("open")
    });
    $(document).on("mouseenter", ".menu > li", function() {
        $(this).addClass("open")
    });
    $(document).on("mouseleave", ".menu > li", function() {
        $(this).removeClass("open")
    })
});
//菜单点击上去下拉

! function(a) {
    a.fn.Huifold = function(b) {
    
        var c = {
            titCell: ".item .Huifold-header",
            mainCell: ".item .Huifold-body",
            type: 1,
            trigger: "click",
            className: "selected",
            speed: "first",
        };
        var b = a.extend(c, b);
        this.each(function() {
            var d = a(this);
            d.find(b.titCell).on(b.trigger, function() {
                if (a(this).next().is(":visible")) {
                    if (b.type == 2) {
                        return false
                    } else {
                        a(this).next().slideUp(b.speed).end().removeClass(b.className);
                        if (a(this).find("b")) {
                            a(this).find("b").html("+")
                        }
                    }
                } else {
                    if (b.type == 3) {
                        a(this).next().slideDown(b.speed).end().addClass(b.className);
                        if (a(this).find("b")) {
                            a(this).find("b").html("-")
                        }
                    } else {
                        d.find(b.mainCell).slideUp(b.speed);
                        d.find(b.titCell).removeClass(b.className);
                        if (d.find(b.titCell).find("b")) {
                            d.find(b.titCell).find("b").html("+")
                        }
                        a(this).next().slideDown(b.speed).end().addClass(b.className);
                        if (a(this).find("b")) {
                            a(this).find("b").html("-")
                        }
                    }
                }
            })
        })
    }
}(window.jQuery);

var num=0,oUl=$("#min_title_list"),hide_nav=$("#Hui-tabNav");

/*获取顶部选项卡总长度*/
function tabNavallwidth(){
	var taballwidth=0,
		$tabNav = hide_nav.find(".acrossTab"),
		$tabNavWp = hide_nav.find(".Hui-tabNav-wp"),
		$tabNavitem = hide_nav.find(".acrossTab li"),
		$tabNavmore =hide_nav.find(".Hui-tabNav-more");
	if (!$tabNav[0]){return}
	$tabNavitem.each(function(index, element) {
        taballwidth += Number(parseFloat($(this).width()+60+60+10))
    });
	$tabNav.width(taballwidth+25);
	var w = $tabNavWp.width();
	if(taballwidth+25>w){
		$tabNavmore.show()}
	else{
		$tabNavmore.hide();
		$tabNav.css({left:0});
	}
}

/*左侧菜单响应式*/
function Huiasidedisplay(){
	if($(window).width()>=768){
		$(".Hui-aside").show();
	}
}

/*菜单导航*/
function Hui_admin_tab(obj){
	var bStop = false,
		bStopIndex = 0,
		href = $(obj).attr('data-href'),
		title = $(obj).attr("data-title"),
		topWindow = $(window.parent.document),
		show_navLi = topWindow.find("#min_title_list li"),
		iframe_box = topWindow.find("#iframe_box");
	//console.log(topWindow);
	if(!href||href==""){
		alert("data-href不存在，v2.5版本之前用_href属性，升级后请改为data-href属性");
		return false;
	}if(!title){
		alert("v2.5版本之后使用data-title属性");
		return false;
	}
	if(title==""){
		alert("data-title属性不能为空");
		return false;
	}
	show_navLi.each(function() {
		if($(this).find('span').attr("data-href")==href){
			bStop=true;
			bStopIndex=show_navLi.index($(this));
			return false;
		}
	});
	if(!bStop){
		creatIframe(href,title);
		min_titleList();
	}
	else{
		show_navLi.removeClass("active").eq(bStopIndex).addClass("active");
		iframe_box.find(".show_iframe").hide().eq(bStopIndex).show().find("iframe").attr("src",href);
	}
}

/*最新tab标题栏列表*/
function min_titleList(){
	var topWindow = $(window.parent.document),
		show_nav = topWindow.find("#min_title_list"),
		aLi = show_nav.find("li");
}

/*创建iframe*/
function creatIframe(href,titleName){
	var topWindow=$(window.parent.document),
		show_nav=topWindow.find('#min_title_list'),
		iframe_box=topWindow.find('#iframe_box'),
		iframeBox=iframe_box.find('.show_iframe'),
		$tabNav = topWindow.find(".acrossTab"),
		$tabNavWp = topWindow.find(".Hui-tabNav-wp"),
		$tabNavmore =topWindow.find(".Hui-tabNav-more");
	var taballwidth=0;

	show_nav.find('li').removeClass("active");
	show_nav.append('<li class="active"><span data-href="'+href+'">'+titleName+'</span><i></i><em></em></li>');
  console.log('1');

  show_nav.find('li').contextMenu('Huiadminmenu', {
    bindings: {
      'closethis': function(t) {
        var $t = $(t);
        if($t.find("i")){
          $t.find("i").trigger("click");
        }
      },
      'closeall': function(t) {
        show_nav.find('li i').trigger("click");
      },
    }
  });

	var $tabNavitem = topWindow.find(".acrossTab li");
	if (!$tabNav[0]){return}
	$tabNavitem.each(function(index, element) {
    taballwidth+=Number(parseFloat($(this).width()+60+60+10))
  });
	$tabNav.width(taballwidth+25);
	var w = $tabNavWp.width();
	if(taballwidth+25>w){
		$tabNavmore.show()}
	else{
		$tabNavmore.hide();
		$tabNav.css({left:0})
	}
	iframeBox.hide();
	iframe_box.append('<div class="show_iframe"><div class="loading"></div><iframe data-scrollTop="0" frameborder="0" src='+href+'></iframe></div>');
	var showBox=iframe_box.find('.show_iframe:visible');
	showBox.find('iframe').load(function(){
		showBox.find('.loading').hide();
	});
}


/*关闭iframe*/
function removeIframe(){
	var topWindow = $(window.parent.document),
		iframe = topWindow.find('#iframe_box .show_iframe'),
		tab = topWindow.find(".acrossTab li"),
		showTab = topWindow.find(".acrossTab li.active"),
		showBox=topWindow.find('.show_iframe:visible'),
		i = showTab.index();
	tab.eq(i-1).addClass("active");
	tab.eq(i).remove();
	iframe.eq(i-1).show();
	$(iframe.eq(i-1).find("iframe")[0].contentWindow.document).scrollTop(iframe.eq(i-1).find("iframe").attr("data-scrollTop"));
	iframe.eq(i).remove();
}

/*关闭所有iframe*/
function removeIframeAll(){
	var topWindow = $(window.parent.document),
		iframe = topWindow.find('#iframe_box .show_iframe'),
		tab = topWindow.find(".acrossTab li");
	for(var i=0;i<tab.length;i++){
		if(tab.eq(i).find("i").length>0){
			tab.eq(i).remove();
			iframe.eq(i).remove();
		}
	}
}

/*弹出层*/
/*
	参数解释：
	title	标题
	url		请求的url
	id		需要操作的数据id
	w		弹出层宽度（缺省调默认值）
	h		弹出层高度（缺省调默认值）
*/
function layer_show(title,url,w,h){
	if (title == null || title == '') {
		title=false;
	};
	if (url == null || url == '') {
		url="404.html";
	};
	if (w == null || w == '') {
		w=800;
	};
	if (h == null || h == '') {
		h=($(window).height() - 50);
	};
	layer.open({
		type: 2,
		area: [w+'px', h +'px'],
		fix: false, //不固定
		maxmin: true,
		shade:0.4,
		title: title,
		content: url
	});
}
/*关闭弹出框口*/
function layer_close(){
	var index = parent.layer.getFrameIndex(window.name);
	parent.layer.close(index);
}

/*时间*/
function getHTMLDate(obj) {
    var d = new Date();
    var weekday = new Array(7);
    var _mm = "";
    var _dd = "";
    var _ww = "";
    weekday[0] = "星期日";
    weekday[1] = "星期一";
    weekday[2] = "星期二";
    weekday[3] = "星期三";
    weekday[4] = "星期四";
    weekday[5] = "星期五";
    weekday[6] = "星期六";
    _yy = d.getFullYear();
    _mm = d.getMonth() + 1;
    _dd = d.getDate();
    _ww = weekday[d.getDay()];
    obj.html(_yy + "年" + _mm + "月" + _dd + "日 " + _ww);
};
function toNavPos(){
	oUl.stop().animate({'left':-num*100},100);
}
$(function(){
	getHTMLDate($("#top_time"));
// 	getskincookie(); 获取皮肤
	//layer.config({extend: 'extend/layer.ext.js'});
	Huiasidedisplay();
	var resizeID;
	$(window).resize(function(){
		clearTimeout(resizeID);
		resizeID = setTimeout(function(){
			Huiasidedisplay();
		},500);
	});

	$(".nav-toggle").click(function(){
	  
		$(".Hui-aside").slideToggle();
	});
	$(".Hui-aside").on("click",".menu_dropdown dd li a",function(){
	   
		if($(window).width()<768){
			$(".Hui-aside").slideToggle();
		}
	});
	/*左侧菜单*/
 	  	$(".Hui-aside").on("click",".menu_dropdown dl dt" ,function(){ 
        $(this).next("dd").slideToggle();
	});
 

	/*选项卡导航*/
	$(".Hui-aside").on("click",".menu_dropdown a",function(){

		Hui_admin_tab(this);
		$(".Hui-aside").find(".menu_dropdown dl dd ul li").removeClass("current");
		$(this).parent().addClass("current");
	});

	$(document).on("click","#min_title_list li",function(){
	  
		var bStopIndex=$(this).index();
		var iframe_box=$("#iframe_box");
		$("#min_title_list li").removeClass("active").eq(bStopIndex).addClass("active");
		iframe_box.find(".show_iframe").hide().eq(bStopIndex).show();
	});
	$(document).on("click","#min_title_list li i",function(){
		var aCloseIndex=$(this).parents("li").index();
		$(this).parent().remove();
		$('#iframe_box').find('.show_iframe').eq(aCloseIndex).remove();
		num==0?num=0:num--;
		tabNavallwidth();
	});
	$(document).on("dblclick","#min_title_list li",function(){
		var aCloseIndex=$(this).index();
		var iframe_box=$("#iframe_box");
		if(aCloseIndex>0){
			$(this).remove();
			$('#iframe_box').find('.show_iframe').eq(aCloseIndex).remove();
			num==0?num=0:num--;
			$("#min_title_list li").removeClass("active").eq(aCloseIndex-1).addClass("active");
			iframe_box.find(".show_iframe").hide().eq(aCloseIndex-1).show();
			tabNavallwidth();
		}else{
			return false;
		}
	});
	tabNavallwidth();

	$('#js-tabNav-next').click(function(){
		num==oUl.find('li').length-1?num=oUl.find('li').length-1:num++;
		toNavPos();
	});
	$('#js-tabNav-prev').click(function(){
		num==0?num=0:num--;
		toNavPos();
	});
/*获取皮肤cookie*/
function getskincookie(){
	var v =  getCookie("Huiskin");
	 console.log(v )	   ;
	var hrefStr=$("#skin").attr("href");
	if(v==null||v==""){
		v="red";
	}
	if(hrefStr!=undefined){
		var hrefRes=hrefStr.substring(0,hrefStr.lastIndexOf('skin/'))+'skin/'+v+'/skin.css';
		$("#skin").attr("href",hrefRes);
	}
}
	/*换肤 设置cookie*/
	$("#Hui-skin .dropDown-menu li a").click(function(){
		var v = $(this).attr("data-val");
        setCookie("Huiskin", v)
	    console.log( )	   ;
		var hrefStr=$("#skin").attr("href");
		var hrefRes=hrefStr.substring(0,hrefStr.lastIndexOf('skin/'))+'skin/'+v+'/skin.css';
		$(window.frames.document).contents().find("#skin").attr("href",hrefRes);
	});
});
