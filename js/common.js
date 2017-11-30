//验证方法
function judge() {
	var username = $(":text").val();
	var password = $(":password").eq(0).val();
	var password1 = $(":password").eq(1).val();
	if (username.length > 20 || username.length < 6) {
		alert("用户名长度必须在6-20个字符之间！");
		return false;
	} else if (password.length > 20 || password.length < 6) {
		alert("密码长度必须在6-20个字符之间！");
		return false;
	} else if (password != password1 ) {
		alert("密码与重复密码必须相同！");
		return false;
	}
	alert('保存成功！');
	return true;
}
//全选方法
function checkAll() {
	if($(":checkbox").eq(0).prop("checked") == true) {
				$("input").prop("checked",true);
			} else {
				$("input").prop("checked",false);
			}
}
//删除方法
function delet() {
	$(".c:checked").parent().parent().remove();
}
//查询方法
function select() {
	var username = $(":text").val();
	$("tr.tr1").each(function(i){
		if (username != $(this).children().eq(0).text()) {
			$(this).css("display","none");
		}
		if (username == $(this).children().eq(0).text()) {
			$(this).css("display","");
		}
	})
}
// $(function(){
// 	$(window).resize(function() {
// 		var height = $(window).height()-100;
// 		$("#left").height(height-10);
// 		$("#right").height(height);
// 		$("#left img").css("margin-top",height-182);
// 	})
// })