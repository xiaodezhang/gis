$(document).ready(function(){
        project();
});

function project(){
	menuEventListener();
	//projectTagsLink();
	//frameTabEvent();
}

function menuEventListener(){
	$('.menu_list_name').on('click', function(){
		var menu_list = $(this).parent();
		if(menu_list.hasClass('active_list')){
			menu_list.find('.sub_menu_container').css('height', '0px');
			menu_list.removeClass('active_list');
		} else {
			//关闭其他的菜单栏
			$('.active_list').find('.sub_menu_container').css('height', '0px');
			$('.active_list').removeClass('active_list');
						
			var sub_menu_count = menu_list.find('.sub_menu_list').size();
			var sub_menu_container_height = sub_menu_count * 50;
			menu_list.addClass('active_list');
			menu_list.find('.sub_menu_container').css('height', sub_menu_container_height + 'px');
		}
	});

	$('.menu_icon').on('click', function(){
		$('.main_content .left_bar').toggleClass('close_menu');
	});

}

function projectTagsLink(){
	var menuLinkMap = {
		'工程计划': 'projectPlan.html',
		'工程建设': 'projectConstruct.html',
		'工程历史': 'projectHistory.html',
		'新建合同': 'http://192.168.50.80:33819/hefeiC_web/contractCTRL.html?UserId=78_1#'
	};
	$('.sub_menu_container .sub_menu_list').on('click', function(){
		var clickedTag = $(this).text();
		if($(this).hasClass('active_sub_list')){

		} else {
			$('.sub_menu_container .active_sub_list').removeClass('active_sub_list');
			$(this).addClass('active_sub_list');

			//判断点击的条目窗口是否存在
			var targeWindow  = $('.explore_nav_tab').find('.frame_tab_toggle[tag="' + clickedTag + '"]').size();
			if(targeWindow == 0){
				//新建tab标签
				var frameTab = $("<div class='frame_tab_toggle' tag=''><span class='frame_title'>子页面</span><span class='icon-close iconfont'></span></div>");
				frameTab.attr('tag', clickedTag);
				frameTab.find('.frame_title').text(clickedTag);
				$('.explore_nav_tab .active_frame_tab_toggle').removeClass('active_frame_tab_toggle');
				frameTab.appendTo('.explore_nav_tab');
				frameTab.addClass('active_frame_tab_toggle');

				//打开新的窗口
				var new_frame = $("<iframe target='' class='tag_page show' src=''></iframe>");
				new_frame.attr({
					target: clickedTag,
					src: menuLinkMap[clickedTag]
				});
				new_frame.appendTo('.main_content .right_bar');
				//$('.tag_page.show').not(':last-child').removeClass('show');
			} else if(targeWindow == 1){
				//点击的窗口已经存在，切换到相应的窗口
				if($('.explore_nav_tab .active_frame_tab_toggle').attr('tag') != clickedTag){
					frameToggle(clickedTag);
				}
			}
		}
	});
}

function frameTabEvent(){
	$('.explore_nav_tab').on('click', '.frame_tab_toggle', function(e){
		var clickedTag = $(this).attr('tag'); 
		e.stopPropagation();
		if($(e.target).is('.frame_tab_toggle .icon-close')){
			//关闭窗口
			$(this).remove();
			$('.right_bar .tag_page[target="' + clickedTag + '"]').remove();

			var toggleTag = $('.frame_tab_toggle:last-child').attr('tag');
			$('.explore_nav_tab').find('.frame_tab_toggle[tag="' + toggleTag + '"]').addClass('active_frame_tab_toggle');
			$('.right_bar .tag_page[target="' + toggleTag + '"]').addClass('show');
		} else {
			frameToggle(clickedTag);
		}
	});
}

function frameToggle(clickedTag){
	$('.explore_nav_tab .active_frame_tab_toggle').removeClass('active_frame_tab_toggle');
	$('.right_bar .tag_page.show').removeClass('show');
	$('.explore_nav_tab').find('.frame_tab_toggle[tag="' + clickedTag + '"]').addClass('active_frame_tab_toggle');
	$('.right_bar .tag_page[target="' + clickedTag + '"]').addClass('show');
}
