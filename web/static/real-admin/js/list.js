

//上传
//onchange="validate()"
function validate(){ 
            var token=document.getElementById("token").value; 
            var fileObj1 =  document.getElementById("imagel").files[0]; // js 获取文件对象  
            var formFile = new FormData(); 
            formFile.append("token",token);
            formFile.append("file", fileObj1);//加入文件对象 
            var xhr= new XMLHttpRequest();
            xhr.open("post","http://api.860148.cn/tesegame.allowedExts.do",true);
            xhr.send(formFile);
            xhr.onreadystatechange=function(){
                if(xhr.ststus==200&&xhr.readyState==4){
                    var res=xhr.responseText;
                    console.log(res);
                }
            }
}  
            /*-添加*/
            function add(title,url){
            	var index = layer.open({
            		type: 2,
                		shade:0.5, //遮罩层透明度
	                    area:['800px','500px'], //弹出层宽高
            		title: title,
                		maxmin:true,
            		content: url
            	});
            	
            }

            /* 编辑*/
            function  edit(title,url,id){
            	var index = layer.open({
            		type: 2,
                		shade:0.5, //遮罩层透明度
	                    area:['500px','500px'], //弹出层宽高
            		title: title,
                		maxmin:true,
                		resize:true,
                		Boolean:true,
            		content: url+"?id="+id
            	});
            	
            }
            
                 function  relo(){
                       location.reload();
                 }
          