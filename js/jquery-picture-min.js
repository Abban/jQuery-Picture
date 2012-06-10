/**
 * jQuery Picture
 * http://jquerypicture.com
 * http://github.com/Abban/jQuery-Picture
 * 
 * May 2012
 * 
 * @version 0.9
 * @author Abban Dunne http://abandon.ie
 * @license MIT
 * 
 * jQuery Picture is a plugin to add support for responsive images to your layouts.
 * It supports both figure elements with some custom data attributes and the new
 * proposed picture format. This plugin will be made redundant when the format is
 * approved and implemented by browsers. Lets hope that happens soon. In the meantime
 * this plugin will be kept up to date with latest developments.
 * 
 */(function(a){a.fn.picture=function(b){this.each(function(){function g(f){if(f)if(e.get(0).tagName.toLowerCase()=="figure"){var g=e.data();a.each(g,function(a){var c;c=a.replace(/[^\d.]/g,"");c&&b.push(c)})}else e.find("source").each(function(){var c,d;c=a(this).attr("media");if(c){d=c.replace(/[^\d.]/g,"");b.push(d)}});var j=0;c=a(window).width();a.each(b,function(a,b){c>b&&j<b&&(j=b)});if(d!==j){d=j;e.get(0).tagName.toLowerCase()=="figure"||e.get(0).tagName.toLowerCase()=="a"?i():h()}}function h(){var b=new Object;e.find("source").each(function(){var c,d,e;c=a(this).attr("media");d=a(this).attr("src");c?e=c.replace(/[^\d.]/g,""):e=0;b[e]=d});if(e.find("img").length==0){var c='<img src="'+b[d]+'" style="'+e.attr("style")+'" alt="'+e.attr("alt")+'">';e.find("a").length==0?e.append(c):e.find("a").append(c)}else e.find("img").attr("src",b[d])}function i(){var b=new Object,c=e.data();a.each(c,function(a,c){var d;d=a.replace(/[^\d.]/g,"");d||(d=0);b[d]=c});if(e.find("img").length==0){var f='<img src="'+b[d]+'" alt="'+e.attr("title")+'">';e.find("a").length==0?e.prepend(f):e.find("a").prepend(f)}else e.find("img").attr("src",b[d])}var b=new Array,c,d,e,f;e=a(this);g(!0);f=!1;a(window).resize(function(){f!==!1&&clearTimeout(f);f=setTimeout(g,200)})})}})(jQuery);