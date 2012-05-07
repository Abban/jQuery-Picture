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
 */
(function($){

	$.fn.picture = function(args){

		var settings = $.extend({
			'breakpoints' : false
		}, args);

		this.each(function(){

			var windowWidth, currentMedia, element, timeoutOffset;

			// Save off the element so it can be easily used inside a function
			element = $(this);
			
			// Initialise the images
			getCurrentMedia();

			// Only call the image resize function 200ms after window stops being resized
			timeoutOffset = false;
			
			$(window).resize(function(){
				
				if(timeoutOffset !== false)
					clearTimeout(timeoutOffset);
				
				timeoutOffset = setTimeout(getCurrentMedia, 200);
			
			});


			/**
			 * getCurrentMedia
			 * 
			 * Checks the window width off the media query types and selects the current one.
			 * Calls the setPicture or setFigure function to set the image.
			 * 
			 */
			function getCurrentMedia(){

				var c = 0;
				windowWidth = $(window).width();

				// Set the c variable to the current media width
				$.each(settings.breakpoints, function(i,v){
					
					if(windowWidth > v)
						c = v;

				});

				if(currentMedia !== c){
					currentMedia = c;

					//console.log(element.get(0).tagName);

					if(element.get(0).tagName == 'FIGURE')
						setFigure();
					else
						setPicture();
				}

			}


			/**
			 * setPicture
			 * 
			 * Pulls the image src and media attributes from the source tags and sets
			 * the src of the enclosed img tag to the appropriate one.
			 * 
			 */
			function setPicture(){

				var sizes = new Object();

				element.find('source').each(function(){

					var media, path, num;
					media = $(this).attr('media');
					path = $(this).attr('src');

					if(media)
						num = media.replace(/[^\d.]/g, '');
					else
						num = 0;

					sizes[num] = path;

				});

				element.find('img').attr('src', sizes[currentMedia]);

			}


			/**
			 * setFigure
			 * 
			 * Pulls the image src and and media values from the data attributes
			 * and sets the src of the enclosed img tag to the appropriate one.
			 * 
			 */
			function setFigure(){

				var sizes = new Object();

				var mediaObj = element.data();

				$.each(mediaObj, function(media, path){

					var num;

					num = media.replace(/[^\d.]/g, '');

					if(!num)
						num = 0;

					sizes[num] = path;

				});

				element.find('img').attr('src', sizes[currentMedia]);

			}

		});

	};

})(jQuery);