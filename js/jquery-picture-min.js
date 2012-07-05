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
 */(function(e){e.fn.picture=function(t){var n={container:null},r=e.extend({},n,t);this.each(function(){function u(o){if(o)if(s.get(0).tagName.toLowerCase()=="figure"){var u=s.data();e.each(u,function(e){var n;n=e.replace(/[^\d.]/g,"");n&&t.push(n)})}else s.find("source").each(function(){var n,r;n=e(this).attr("media");if(n){r=n.replace(/[^\d.]/g,"");t.push(r)}});var l=0;r.container==null?n=e(window).width():n=e(r.container).width();e.each(t,function(e,t){parseInt(n)>=parseInt(t)&&parseInt(l)<=parseInt(t)&&(l=t)});if(i!==l){i=l;s.get(0).tagName.toLowerCase()=="figure"?f():a()}}function a(){var t=new Object;s.find("source").each(function(){var n,r,i;n=e(this).attr("media");r=e(this).attr("src");n?i=n.replace(/[^\d.]/g,""):i=0;t[i]=r});if(s.find("img").length==0){var n='<img src="'+t[i]+'" style="'+s.attr("style")+'" alt="'+s.attr("alt")+'">';s.find("a").length==0?s.append(n):s.find("a").append(n)}else s.find("img").attr("src",t[i])}function f(){var t=new Object,n=s.data();e.each(n,function(e,n){var r;r=e.replace(/[^\d.]/g,"");r||(r=0);t[r]=n});if(s.find("img").length==0){var r='<img src="'+t[i]+'" alt="'+s.attr("title")+'">';s.find("a").length==0?s.prepend(r):s.find("a").prepend(r)}else s.find("img").attr("src",t[i])}var t=new Array,n,i,s,o;s=e(this);u(!0);o=!1;e(window).resize(function(){o!==!1&&clearTimeout(o);o=setTimeout(u,200)})})}})(jQuery);