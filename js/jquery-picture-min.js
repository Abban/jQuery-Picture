/**
 * jQuery Picture
 * http://jquerypicture.com
 * http://github.com/Abban/jQuery-Picture
 * 
 * May 2012
 * 
 * @version 0.6
 * @author Abban Dunne http://abandon.ie
 * @license MIT
 * 
 * jQuery Picture is a plugin to add support for responsive images to your layouts.
 * It supports both figure elements with some custom data attributes and the new
 * proposed picture format. This plugin will be made redundant when the format is
 * approved and implemented by browsers. Lets hope that happens soon. In the meantime
 * this plugin will be kept up to date with latest developments.
 * 
 */(function(a){a.fn.picture=function(b){var c=a.extend({breakpoints:!1},b);this.each(function(){function g(){var f=0;b=a(window).width();a.each(c.breakpoints,function(a,c){b>c&&(f=c)});if(d!==f){d=f;e.get(0).tagName=="FIGURE"?i():h()}}function h(){var b=new Object;e.find("source").each(function(){var c,d,e;c=a(this).attr("media");d=a(this).attr("src");c?e=c.replace(/[^\d.]/g,""):e=0;b[e]=d});e.find("img").attr("src",b[d])}function i(){var b=new Object,c=e.data();a.each(c,function(a,c){var d;d=a.replace(/[^\d.]/g,"");d||(d=0);b[d]=c});e.find("img").attr("src",b[d])}var b,d,e,f;e=a(this);g();f=!1;a(window).resize(function(){f!==!1&&clearTimeout(f);f=setTimeout(g,200)})})}})(jQuery);