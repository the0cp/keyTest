var FALSE_FUNCTION=new Function("return false");
var key_prefix='#key';
$(document).bind('keydown',function(e){keyPressed(e.keyCode?e.keyCode:e.which);});var layout_reg='';var layout_dvorak='';function keyPressed(code){if(code>=124&&code<=135)
$('#fnKeyA').fadeIn();if(code>=136&&code<=143)
$('#fnKeyB').fadeIn();if(code==186||code==59)
code='colon';if(code==189)
code=173;if(code==187)
code=61;if($(key_prefix+code))
key_highlight(code);if($(key_prefix+code+'b'))
key_highlight(code+'b');}
$(document).ready(function(){disableShortcuts();reset_keyboard();layout_reg=$('#main_keyboard').html();layout_dvorak=$('#dvorak_keyboard').html();$('#dvorak_keyboard').detach();$('select#select_layout').on('change click keyup',function(){var selectValue=$(this).val();var layoutClass='layout-'+selectValue;var $kdb=$('#main_keyboard');if($kdb.hasClass(layoutClass))
return;$kdb.html(selectValue=='dvorak'?layout_dvorak:layout_reg).removeClass('layout-dvorak layout-standard').addClass(layoutClass);});});function key_highlight(key_num){key_clear(key_num);$(key_prefix+key_num).addClass('key_highlight');setTimeout("key_pressed('"+key_num+"')",300);}
function key_pressed(key_num){key_clear(key_num);if(key_num==16||key_num==17||key_num==18||key_num==13||key_num.match(/b$/))
new_class='key_pressed_m';else
new_class='key_pressed';$(key_prefix+key_num).addClass(new_class);}
function key_clear(key_num){$(key_prefix+key_num).removeClass('key_un key_pressed key_pressed_m key_highlight');}
function reset_keyboard(){var keys=$(".key_pressed");keys.each(function(i,obj){obj.className='key_un';});keys=$(".key_highlight");keys.each(function(i,obj){obj.className='key_un';});$('#testarea').attr('value','');$('#testarea').focus();}
function go_testarea(){$('#testarea').focus();}
function disableShortcuts(){document.onhelp=FALSE_FUNCTION;window.onhelp=FALSE_FUNCTION;document.onkeydown=function disableKeys(){if(typeof event!='undefined'){if((event.keyCode>=112)&&(event.keyCode<=123)){event.keyCode=0;return false;}}};for(var i=1;i<13;i++)
shortcut.add("f"+i,FALSE_FUNCTION);shortcut.add("'",FALSE_FUNCTION);}