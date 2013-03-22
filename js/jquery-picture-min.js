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
 */(function(a){a.fn.picture=function(b){var c={container:null,ignorePixelRatio:!1,useLarger:!1},d=a.extend({},c,b);this.each(function(){function i(g){if(g){if("figure"==f.get(0).tagName.toLowerCase()){var i=f.data();a.each(i,function(a){var c;c=a.replace(/[^\d.]/g,""),c&&b.push(c)})}else f.find("source").each(function(){var c,d;c=a(this).attr("media"),c&&(d=c.replace(/[^\d.]/g,""),b.push(d))});b.sort()}var l=0;c=null==d.container?a(window).width()*h:a(d.container).width()*h,a.each(b,function(a,b){parseInt(c)>=parseInt(b)&&parseInt(l)<=parseInt(b)&&(l=b)}),d.useLarger&&(idx=b.indexOf(l),b.length-1>idx&&(l=b[idx+1])),e!==l&&(e=l,"figure"==f.get(0).tagName.toLowerCase()?k():j())}function j(){var b=Object();if(f.find("source").each(function(){var c,d,e;c=a(this).attr("media"),d=a(this).attr("src"),e=c?c.replace(/[^\d.]/g,""):0,b[e]=d}),0==f.find("img").length){var c='<img src="'+b[e]+'" style="'+f.attr("style")+'" alt="'+f.attr("alt")+'">';0==a(">a",f).length?f.append(c):a(">a",f).append(c)}else f.find("img").attr("src",b[e])}function k(){var b=Object(),c=f.data();if(a.each(c,function(a,c){var d;d=a.replace(/[^\d.]/g,""),d||(d=0),b[d]=c}),0==f.find("img").length){var d='<img src="'+b[e]+'" alt="'+f.attr("title")+'">';0==a(">a",f).length?f.append(d):a(">a",f).append(d)}else f.find("img").attr("src",b[e])}var c,e,f,g,b=Array(),h=1;d.ignorePixelRatio||void 0===window.devicePixelRatio||(h=window.devicePixelRatio),f=a(this),i(!0),g=!1,a(window).resize(function(){g!==!1&&clearTimeout(g),g=setTimeout(i,200)})})}})(jQuery);