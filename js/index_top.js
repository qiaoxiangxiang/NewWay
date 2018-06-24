function isNull(data) {
    return data == undefined || data == 0 || data == "" || data == "null" || data == " ";
}

function checkTel(tel) {
    var reg = /^1[34578]\d{9}$/;
    return reg.test(tel);
}

function checkMail(mail) {
	var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	return reg.test(mail);
}
function checkShenfen(shenfen) {
	var reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
	return reg.test(shenfen);
}
