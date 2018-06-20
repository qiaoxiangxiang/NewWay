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