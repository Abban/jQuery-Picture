/**
 * jQuery Picture
 * http://jquerypicture.com
 * http://github.com/Abban/jQuery-Picture
 * 
 * May 2012
 * 
 * @version 0.5
 * @author Abban Dunne http://abandon.ie
 * @license MIT
 * 
 * jQuery Picture is a plugin to add support for responsive images to your layouts.
 * It supports both figure elements with some custom data attributes and the new
 * proposed picture format. This plugin will be made redundant when the format is
 * approved and implemented by browsers. Lets hope that happens soon. In the meantime
 * this plugin will be kept up to date with latest developments.
 * 
 */(function(a){a.fn.picture=function(b){function h(){var b=0;d=a(window).width();a.each(c.breakpoints,function(a,c){d>c&&(b=c)});if(e!==b){e=b;c.type=="figure"?j():i()}}function i(){var b=new Object;f.find("source").each(function(){var c,d,e;c=a(this).attr("media");d=a(this).attr("src");c?e=c.replace(/[^\d.]/g,""):e=0;b[e]=d});f.find("img").attr("src",b[e])}function j(){var b=new Object,c=f.data();a.each(c,function(a,c){var d;d=a.replace(/[^\d.]/g,"");d||(d=0);b[d]=c});f.find("img").attr("src",b[e])}var c=a.extend({type:"figure",breakpoints:[100,200]},b),d,e,f,g;f=this;h();g=!1;a(window).resize(function(){g!==!1&&clearTimeout(g);g=setTimeout(h,200)})}})(jQuery);