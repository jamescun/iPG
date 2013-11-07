/* --- Question Functions ---
   -------------------------------------------------- */

function next_q()
{
	if ( $('#end').hasClass('hide') == true )
	{
		
		var question = q.shift();
		
		if (question != 'done')
		{
			$('#question').html(question);
			
			timer_restart();
			display_tip();
		} else
		{
			$('#question').addClass('hide');
			$('#timer').addClass('hide');
			$('.pg').addClass('hide');
			
			$('#end').removeClass('hide');
		}
	}
}



/* --- Timer Functions ---
   -------------------------------------------------- */

function timer_tick()
{
	$('#timer').removeClass('warning');
	$('#timer').removeClass('fail');
	
	timer = timer - 1;
	
	$('#timer').html(timer + ' s');
	
	
	if (timer < 10)
	{
		$('#timer').addClass('warning');
	}
	if (timer < 5)
	{
		$('#timer').removeClass('warning');
		$('#timer').addClass('fail');
	}
	if (timer <= 0)
	{
		$('#timer').addClass('hide');
		$('.pg').removeClass('hide');
	}
	
	 setTimeout('timer_tick();', 1000);
}

function timer_restart()
{
	$('#timer').removeClass('warning');
	$('#timer').removeClass('fail');
	$('.pg').addClass('hide');
	$('#timer').removeClass('hide');
	
	timer = 15;
	
	$('#timer').html('15 s');
}



/* --- Tip Functions ---
   -------------------------------------------------- */

function display_tip()
{
	var tip = tips.shift();
	
	$('#tip').html(tip);
	
	tips.push(tip);
}
