/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'iconfont\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#x68;',
			'icon-phone' : '&#x70;',
			'icon-map' : '&#x6d;',
			'icon-clock' : '&#x74;',
			'icon-location' : '&#x2e;',
			'icon-facebook' : '&#x46;',
			'icon-facebook-2' : '&#x66;',
			'icon-bubbles' : '&#x73;',
			'icon-thumbs-up' : '&#x5e;',
			'icon-file' : '&#x6c;',
			'icon-camera' : '&#x63;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};