var arrLang = {
		'en' : {

		},

		'pl' : {

		},
	};
	

	$(function(){
		
		if(Cookies.get('language') != 'en' && Cookies.get('language') != 'pl')
		{
		Cookies.set('language', 'pl');
		}
		
		var a = Cookies.get('language');
		
		var lang = 'en';	
		$('.lang').each(function(index, element){$(this).text(arrLang[a][$(this).attr('key')])});

		
		$('.translate').click(function(){
			a = $(this).attr('id');
			Cookies.set('language', a);
			$('.lang').each(function(index, element){$(this).text(arrLang[a][$(this).attr('key')])});
		});
		
	});		