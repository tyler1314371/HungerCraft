'use strict';
//INT((Base Costs) * (Cost Increase Factor) ^ (level - 1))
//30 * (level) * 1.1 ^ (level) metal

var specialization = {
	Nemesis: {
		metal_cost: 9000,
		metal_cost_ori: 9000,
		crystal_cost: 0,
		crystal_cost_ori: 0,
		current_level: 0
	},
	Cargo_Improvement: {
		metal_cost: 1000,
		metal_cost_ori: 1000,
		crystal_cost: 50,
		crystal_cost_ori: 50,
		current_level: 0
	}

};


var artifacts = {
	1: {
		rarity:"uncommon",
		unlocked: 0,
		current_level: 0
	},
	2: {
		rarity:"rare",
		unlocked: 0,
		current_level: 0
	},
	3: {
		rarity:"epic",
		unlocked: 0,
		current_level: 0
	},
	4: {
		rarity:"legendary",
		unlocked: 0,
		current_level: 0
	}

};





var metal = {
	current_owned:0,
	current_mine_level:1,
	current_cost:50,
	ori_cost: 50,
	income: 5,
	income_base : 5
};

var crystal = {
	current_owned:0,
	current_mine_level:1,
	current_cost:60,
	ori_cost: 60,
	income: 3.5,
	income_base: 3.5
};



var research_lab = {
	current_lab_level: 1,
	current_cost_metal:150,
	base_cost_metal: 150,
	current_cost_crystal:70,
	base_cost_crystal: 70
};


var dark_matter = {
	current_owned:0,
	based_increase: 2,
	current_increase: 2
};


var level = {
	level_metal_req:300,
	level_crystal_req:200,
	level_metal_req_ori:300,
	level_crystal_req_ori:200,
	current_level:1
};


var update_state;









angular.module('xenon.controllers', []).
	controller('LoginCtrl', function($scope, $rootScope)
	{
		$rootScope.isLoginPage        = true;
		$rootScope.isLightLoginPage   = false;
		$rootScope.isLockscreenPage   = false;
		$rootScope.isMainPage         = false;
	}).
	controller('GameCtrl', function($scope, $rootScope, $cookies, $modal, $sce, $layout, $location)
	{
		$rootScope.layoutOptions.horizontalMenu.isVisible = true;


/*		var poll_notification = window.setInterval(function(){

		var AUTHOR_URL = 'http://localhost:5000/get_notification/'.concat('Tyler');
			$.ajax({
				dataType: 'json',
				type: 'GET',
				url: AUTHOR_URL,
				success: function(message) {
					console.log(message);

				}
			});

		}, 2000);


		window.onbeforeunload = function (event) {
	  var message = 'Sure you want to leave?';
		console.log("leave");
	  if (typeof event == 'undefined') {
	    event = window.event;
	  }
	  if (event) {
	    event.returnValue = message;
	  }
	  return message;
	}
*/


		$scope.metal = metal;
		$scope.crystal = crystal;
		$scope.research_lab = research_lab;
		$scope.artifacts = artifacts;
		$scope.specialization = specialization;


		$scope.ClickMetal = function(number){
		    metal.current_owned = Math.round(metal.current_owned + number);

		};
		$scope.ClickCrystal = function(number){
		    crystal.current_owned = Math.round(crystal.current_owned + number);
		};



		$scope.BuyMetalMine = function(){
		    if(metal.current_owned >= metal.current_cost){

		         metal.current_mine_level = metal.current_mine_level + 1;
		    	   metal.current_owned = metal.current_owned - metal.current_cost;
						 metal.current_cost = Math.floor(metal.ori_cost * Math.pow(1.45,metal.current_mine_level));

		    };
		};


		$scope.BuyCrystalMine = function(){
		    if(crystal.current_owned >= crystal.current_cost){

		         crystal.current_mine_level = crystal.current_mine_level + 1;
		    	   crystal.current_owned = crystal.current_owned - crystal.current_cost;
						 crystal.current_cost = Math.floor(crystal.ori_cost * Math.pow(1.5,crystal.current_mine_level));

		    };
		};

		$scope.UpgradeLab = function(){
		    if((metal.current_owned >= research_lab.current_cost_metal) && (crystal.current_owned >= research_lab.current_cost_crystal)){

		         research_lab.current_lab_level = research_lab.current_lab_level +1;
						 metal.current_owned = metal.current_owned - research_lab.current_cost_metal;
						 crystal.current_owned = crystal.current_owned - research_lab.current_cost_crystal;

						 research_lab.current_cost_metal = Math.floor(research_lab.base_cost_metal * Math.pow(1.5,research_lab.current_lab_level));
						 research_lab.current_cost_crystal = Math.floor(research_lab.base_cost_crystal * Math.pow(1.5,research_lab.current_lab_level));

		    };
		};


		$scope.unlock_test = function(){

		    for (var key in artifacts) {
				 artifacts[key]["unlocked"] = 1;
				}
		};
		$scope.lock_test = function(){

		    for (var key in artifacts) {
				 artifacts[key]["unlocked"] = 0;
				}
		};






		$scope.Research = function(research_name)
		{
			if((metal.current_owned >= specialization[research_name].metal_cost) && (crystal.current_owned >= specialization[research_name].crystal_cost)){

					 specialization[research_name].current_level += 1;
					 crystal.current_owned = crystal.current_owned - specialization[research_name].crystal_cost;
					 metal.current_owned = metal.current_owned - specialization[research_name].metal_cost;


					 specialization[research_name].metal_cost = Math.floor(specialization[research_name].metal_cost_ori * Math.pow(1.5,specialization[research_name].current_level));
					 specialization[research_name].crystal_cost = Math.floor(specialization[research_name].crystal_cost_ori * Math.pow(1.5,specialization[research_name].current_level));

			};



		};



		if (typeof update_state != 'number') {

			update_state = window.setInterval(function(){

			if (specialization["Nemesis"].current_level != 0){
				if (Math.floor((Math.random() * 100) + 1) >80){

					console.log("NEMESIS: add ".concat(metal.income_base * metal.current_mine_level * Math.pow(1.1,metal.current_mine_level)* specialization["Nemesis"].current_level * 0.02));

					$scope.ClickMetal(crystal.income_base  * crystal.current_mine_level * Math.pow(1.1,crystal.current_mine_level) * specialization["Nemesis"].current_level * 0.02);
					$scope.ClickCrystal(metal.income_base  * metal.current_mine_level * Math.pow(1.1,metal.current_mine_level)* specialization["Nemesis"].current_level * 0.02);
				}

			}



			metal.income = Math.floor(metal.income_base  * metal.current_mine_level * Math.pow(1.1,metal.current_mine_level));
			crystal.income = Math.floor(crystal.income_base  * crystal.current_mine_level * Math.pow(1.1,crystal.current_mine_level));



			$scope.ClickMetal(metal.income);


			$scope.ClickCrystal(crystal.income);


			$scope.$apply();

				}, 1000);

			}

			var destroy = $rootScope.$watch(function() {
      return $location.path();
	    },
	    function(a){
	      //console.log('url has changed: ' + a);

			if (a.indexOf("dashboard-variant") > -1 ){



			}else
			{
				clearInterval(update_state);
				destroy();
				update_state='';
			}


	      // show loading div, etc...
	    });

	}).

	controller('LoginLightCtrl', function($scope, $rootScope, $cookies, $modal)
	{


		$rootScope.isLoginPage        = true;
		$rootScope.isLightLoginPage   = true;
		$rootScope.isLockscreenPage   = false;
		$rootScope.isMainPage         = false;
		$rootScope.layoutOptions.horizontalMenu.isVisible = false;

		//var current_user = $cookies['current_user'];;
		$rootScope.setCurrentUser = function (user) {
			$cookies.current_user= user;
		};

		$scope.openModal = function(modal_id, modal_size, modal_backdrop)
		{
			$rootScope.currentModal = $modal.open({
				templateUrl: modal_id,
				size: modal_size,
				backdrop: typeof modal_backdrop == 'undefined' ? true : modal_backdrop
			});
		};

		$rootScope.forgot_pwd = function(){
			var email = $("#forgot_pwd_email").val();

							var opts = {
								"closeButton": true,
								"debug": false,
								"positionClass": "toast-top-full-width",
								"onclick": null,
								"showDuration": "300",
								"hideDuration": "1000",
								"timeOut": "5000",
								"extendedTimeOut": "1000",
								"showEasing": "swing",
								"hideEasing": "linear",
								"showMethod": "fadeIn",
								"hideMethod": "fadeOut"
								};



			if (!email){
					toastr.error("Please fill in Email"
					, "Email is empty"
					, opts);
				return false;
			}

			toastr.success("Your password has been emailed to your email address", "Success", opts);
			$rootScope.currentModal.close();
		};


		$rootScope.register = function(){
			var username = $("#reg_username").val();
			var password = $("#reg_password").val();
			var email = $("#reg_email").val();

			var opts = {
				"closeButton": true,
				"debug": false,
				"positionClass": "toast-top-full-width",
				"onclick": null,
				"showDuration": "300",
				"hideDuration": "1000",
				"timeOut": "5000",
				"extendedTimeOut": "1000",
				"showEasing": "swing",
				"hideEasing": "linear",
				"showMethod": "fadeIn",
				"hideMethod": "fadeOut"
				};

			if (!username){
					toastr.error("Please fill in Username"
					, "Username is empty"
					, opts);
				return false;
			}
			if (!password){
					toastr.error("Please fill in Password"
					, "Password is empty"
					, opts);
				return false;
			}
			if (!email){
					toastr.error("Please fill in Email"
					, "Email is empty"
					, opts);
				return false;
			}
			 toastr.success("Account created", "Success", opts);
			 $rootScope.currentModal.close();
		};


	}).
	controller('LockscreenCtrl', function($scope, $rootScope)
	{
		$rootScope.isLoginPage        = false;
		$rootScope.isLightLoginPage   = false;
		$rootScope.isLockscreenPage   = true;
		$rootScope.isMainPage         = false;
	}).

	controller('MainCtrl', function($scope, $rootScope, $location, $layout, $layoutToggles, $pageLoadingBar, Fullscreen)
	{

		$rootScope.isLoginPage        = false;
		$rootScope.isLightLoginPage   = false;
		$rootScope.isLockscreenPage   = false;
		$rootScope.isMainPage         = true;




		$rootScope.layoutOptions = {
			horizontalMenu: {
				isVisible		: false,
				isFixed			: true,
				minimal			: true,
				clickToExpand	: false,

				isMenuOpenMobile: false
			},
			sidebar: {
				isVisible		: true,
				isCollapsed		: true,
				toggleOthers	: true,
				isFixed			: true,
				isRight			: false,

				isMenuOpenMobile: false,

				// Added in v1.3
				userProfile		: false
			},
			chat: {
				isOpen			: true,
			},
			settingsPane: {
				isOpen			: false,
				useAnimation	: true
			},
			container: {
				isBoxed			: false
			},
			skins: {
				sidebarMenu		: '',
				horizontalMenu	: '',
				userInfoNavbar	: ''
			},
			pageTitles: true,
			userInfoNavVisible	: false
		};

		//$layout.loadOptionsFromCookies(); // remove this line if you don't want to support cookies that remember layout changes


		$scope.updatePsScrollbars = function()
		{
			var $scrollbars = jQuery(".ps-scrollbar:visible");

			$scrollbars.each(function(i, el)
			{
				if(typeof jQuery(el).data('perfectScrollbar') == 'undefined')
				{
					jQuery(el).perfectScrollbar();
				}
				else
				{
					jQuery(el).perfectScrollbar('update');
				}
			})
		};


		// Define Public Vars
		public_vars.$body = jQuery("body");

		// Init Layout Toggles
		$layoutToggles.initToggles();


		// Other methods
		$scope.setFocusOnSearchField = function()
		{
			public_vars.$body.find('.search-form input[name="s"]').focus();

			setTimeout(function(){ public_vars.$body.find('.search-form input[name="s"]').focus() }, 100 );
		};


		// Watch changes to replace checkboxes
		$scope.$watch(function()
		{
			cbr_replace();
		});

		// Watch sidebar status to remove the psScrollbar
		$rootScope.$watch('layoutOptions.sidebar.isCollapsed', function(newValue, oldValue)
		{
			if(newValue != oldValue)
			{
				if(newValue == true)
				{
					public_vars.$sidebarMenu.find('.sidebar-menu-inner').perfectScrollbar('destroy')
				}
				else
				{
					public_vars.$sidebarMenu.find('.sidebar-menu-inner').perfectScrollbar({wheelPropagation: public_vars.wheelPropagation});
				}
			}
		});


		// Page Loading Progress (remove/comment this line to disable it)
		$pageLoadingBar.init();

		$scope.showLoadingBar = showLoadingBar;
		$scope.hideLoadingBar = hideLoadingBar;


		// Set Scroll to 0 When page is changed
		$rootScope.$on('$stateChangeStart', function()
		{
			var obj = {pos: jQuery(window).scrollTop()};

			TweenLite.to(obj, .25, {pos: 0, ease:Power4.easeOut, onUpdate: function()
			{
				$(window).scrollTop(obj.pos);
			}});
		});


		// Full screen feature added in v1.3
		$scope.isFullscreenSupported = Fullscreen.isSupported();
		$scope.isFullscreen = Fullscreen.isEnabled() ? true : false;

		$scope.goFullscreen = function()
		{
			if (Fullscreen.isEnabled())
				Fullscreen.cancel();
			else
				Fullscreen.all();

			$scope.isFullscreen = Fullscreen.isEnabled() ? true : false;
		}

	}).
	controller('SidebarMenuCtrl', function($scope, $rootScope, $menuItems, $timeout, $location, $state, $layout, $modal, $sce)
	{


		$scope.openModal = function(modal_id, modal_size, modal_backdrop)
		{
			$rootScope.currentModal = $modal.open({
				templateUrl: modal_id,
				size: modal_size,
				backdrop: typeof modal_backdrop == 'undefined' ? true : modal_backdrop
			});
		};







		// Menu Items
		var $sidebarMenuItems = $menuItems.instantiate();

		$scope.menuItems = $sidebarMenuItems.prepareSidebarMenu().getAll();

		// Set Active Menu Item
		$sidebarMenuItems.setActive( $location.path() );

		$rootScope.$on('$stateChangeSuccess', function()
		{
			$sidebarMenuItems.setActive($state.current.name);
		});

		// Trigger menu setup
		public_vars.$sidebarMenu = public_vars.$body.find('.sidebar-menu');
		$timeout(setup_sidebar_menu, 1);

		ps_init(); // perfect scrollbar for sidebar
	}).
	controller('HorizontalMenuCtrl', function($scope, $rootScope, $menuItems, $timeout, $location, $state,  $modal, $sce)
	{
		$scope.openModal = function(modal_id, modal_size, modal_backdrop)
		{
			$rootScope.currentModal = $modal.open({
				templateUrl: modal_id,
				size: modal_size,
				backdrop: typeof modal_backdrop == 'undefined' ? true : modal_backdrop
			});
		};


		var $horizontalMenuItems = $menuItems.instantiate();

		$scope.menuItems = $horizontalMenuItems.prepareHorizontalMenu().getAll();
		$scope.metal = metal;
		$scope.crystal = crystal;
		$scope.dark_matter = dark_matter;


		// Trigger menu setup
		$timeout(setup_horizontal_menu, 1);













	}).
	controller('SettingsPaneCtrl', function($rootScope)
	{
		// Define Settings Pane Public Variable
		public_vars.$settingsPane = public_vars.$body.find('.settings-pane');
		public_vars.$settingsPaneIn = public_vars.$settingsPane.find('.settings-pane-inner');
	}).
	controller('ChatCtrl', function($scope, $element)
	{


		$scope.level = level;
		$scope.metal = metal;
		$scope.crystal = crystal;
		$scope.NextLevel = function(){





				var level_metal_req_temp = Math.floor(level.level_metal_req_ori * Math.pow(1.5,level.current_level));
		    var level_crystal_req_temp = Math.floor(level.level_crystal_req_ori  * Math.pow(1.4,level.current_level));       //works out the cost of this cursor

				if (level.current_level ==1){
		      level_metal_req_temp = level.level_metal_req_ori;
		      level_crystal_req_temp = level.level_crystal_req_ori;
		    }




		    if((metal.current_owned >= level_metal_req_temp) && (crystal.current_owned >= level_crystal_req_temp)){
		      level.current_level = level.current_level + 1
		      crystal.current_owned = crystal.current_owned - level_crystal_req_temp;
		      metal.current_owned = metal.current_owned - level_metal_req_temp;

					level.level_metal_req = Math.floor(level.level_metal_req_ori* Math.pow(1.5,level.current_level));
					level.level_crystal_req = Math.floor(level.level_crystal_req_ori * Math.pow(1.4,level.current_level));

		    };


		};


	}).
	controller('UIModalsCtrl', function($scope, $rootScope, $modal, $sce)
	{
		// Open Simple Modal
		$scope.openModal = function(modal_id, modal_size, modal_backdrop)
		{
			$rootScope.currentModal = $modal.open({
				templateUrl: modal_id,
				size: modal_size,
				backdrop: typeof modal_backdrop == 'undefined' ? true : modal_backdrop
			});
		};

		// Loading AJAX Content
		$scope.openAjaxModal = function(modal_id, url_location)
		{
			$rootScope.currentModal = $modal.open({
				templateUrl: modal_id,
				resolve: {
					ajaxContent: function($http)
					{
						return $http.get(url_location).then(function(response){
							$rootScope.modalContent = $sce.trustAsHtml(response.data);
						}, function(response){
							$rootScope.modalContent = $sce.trustAsHtml('<div class="label label-danger">Cannot load ajax content! Please check the given url.</div>');
						});
					}
				}
			});

			$rootScope.modalContent = $sce.trustAsHtml('Modal content is loading...');
		}
	}).
	controller('PaginationDemoCtrl', function($scope)
	{
		$scope.totalItems = 64;
		$scope.currentPage = 4;

		$scope.setPage = function (pageNo)
		{
			$scope.currentPage = pageNo;
		};

		$scope.pageChanged = function()
		{
			console.log('Page changed to: ' + $scope.currentPage);
		};

		$scope.maxSize = 5;
		$scope.bigTotalItems = 175;
		$scope.bigCurrentPage = 1;
	}).
	controller('LayoutVariantsCtrl', function($scope, $layout, $cookies)
	{
		$scope.opts = {
			sidebarType: null,
			fixedSidebar: null,
			sidebarToggleOthers: null,
			sidebarVisible: null,
			sidebarPosition: null,

			horizontalVisible: null,
			fixedHorizontalMenu: null,
			horizontalOpenOnClick: null,
			minimalHorizontalMenu: null,

			sidebarProfile: null
		};

		$scope.sidebarTypes = [
			{value: ['sidebar.isCollapsed', false], text: 'Expanded', selected: $layout.is('sidebar.isCollapsed', false)},
			{value: ['sidebar.isCollapsed', true], text: 'Collapsed', selected: $layout.is('sidebar.isCollapsed', true)},
		];

		$scope.fixedSidebar = [
			{value: ['sidebar.isFixed', true], text: 'Fixed', selected: $layout.is('sidebar.isFixed', true)},
			{value: ['sidebar.isFixed', false], text: 'Static', selected: $layout.is('sidebar.isFixed', false)},
		];

		$scope.sidebarToggleOthers = [
			{value: ['sidebar.toggleOthers', true], text: 'Yes', selected: $layout.is('sidebar.toggleOthers', true)},
			{value: ['sidebar.toggleOthers', false], text: 'No', selected: $layout.is('sidebar.toggleOthers', false)},
		];

		$scope.sidebarVisible = [
			{value: ['sidebar.isVisible', true], text: 'Visible', selected: $layout.is('sidebar.isVisible', true)},
			{value: ['sidebar.isVisible', false], text: 'Hidden', selected: $layout.is('sidebar.isVisible', false)},
		];

		$scope.sidebarPosition = [
			{value: ['sidebar.isRight', false], text: 'Left', selected: $layout.is('sidebar.isRight', false)},
			{value: ['sidebar.isRight', true], text: 'Right', selected: $layout.is('sidebar.isRight', true)},
		];

		$scope.horizontalVisible = [
			{value: ['horizontalMenu.isVisible', true], text: 'Visible', selected: $layout.is('horizontalMenu.isVisible', true)},
			{value: ['horizontalMenu.isVisible', false], text: 'Hidden', selected: $layout.is('horizontalMenu.isVisible', false)},
		];

		$scope.fixedHorizontalMenu = [
			{value: ['horizontalMenu.isFixed', true], text: 'Fixed', selected: $layout.is('horizontalMenu.isFixed', true)},
			{value: ['horizontalMenu.isFixed', false], text: 'Static', selected: $layout.is('horizontalMenu.isFixed', false)},
		];

		$scope.horizontalOpenOnClick = [
			{value: ['horizontalMenu.clickToExpand', false], text: 'No', selected: $layout.is('horizontalMenu.clickToExpand', false)},
			{value: ['horizontalMenu.clickToExpand', true], text: 'Yes', selected: $layout.is('horizontalMenu.clickToExpand', true)},
		];

		$scope.minimalHorizontalMenu = [
			{value: ['horizontalMenu.minimal', false], text: 'No', selected: $layout.is('horizontalMenu.minimal', false)},
			{value: ['horizontalMenu.minimal', true], text: 'Yes', selected: $layout.is('horizontalMenu.minimal', true)},
		];

		$scope.chatVisibility = [
			{value: ['chat.isOpen', false], text: 'No', selected: $layout.is('chat.isOpen', false)},
			{value: ['chat.isOpen', true], text: 'Yes', selected: $layout.is('chat.isOpen', true)},
		];

		$scope.boxedContainer = [
			{value: ['container.isBoxed', false], text: 'No', selected: $layout.is('container.isBoxed', false)},
			{value: ['container.isBoxed', true], text: 'Yes', selected: $layout.is('container.isBoxed', true)},
		];

		$scope.sidebarProfile = [
			{value: ['sidebar.userProfile', false], text: 'No', selected: $layout.is('sidebar.userProfile', false)},
			{value: ['sidebar.userProfile', true], text: 'Yes', selected: $layout.is('sidebar.userProfile', true)},
		];

		$scope.resetOptions = function()
		{
			$layout.resetCookies();
			window.location.reload();
		};

		var setValue = function(val)
		{
			if(val != null)
			{
				val = eval(val);
				$layout.setOptions(val[0], val[1]);
			}
		};

		$scope.$watch('opts.sidebarType', setValue);
		$scope.$watch('opts.fixedSidebar', setValue);
		$scope.$watch('opts.sidebarToggleOthers', setValue);
		$scope.$watch('opts.sidebarVisible', setValue);
		$scope.$watch('opts.sidebarPosition', setValue);

		$scope.$watch('opts.horizontalVisible', setValue);
		$scope.$watch('opts.fixedHorizontalMenu', setValue);
		$scope.$watch('opts.horizontalOpenOnClick', setValue);
		$scope.$watch('opts.minimalHorizontalMenu', setValue);

		$scope.$watch('opts.chatVisibility', setValue);

		$scope.$watch('opts.boxedContainer', setValue);

		$scope.$watch('opts.sidebarProfile', setValue);
	}).
	controller('ThemeSkinsCtrl', function($scope, $layout)
	{
		var $body = jQuery("body");

		$scope.opts = {
			sidebarSkin: $layout.get('skins.sidebarMenu'),
			horizontalMenuSkin: $layout.get('skins.horizontalMenu'),
			userInfoNavbarSkin: $layout.get('skins.userInfoNavbar')
		};

		$scope.skins = [
			{value: '', 			name: 'Default'			,	palette: ['#2c2e2f','#EEEEEE','#FFFFFF','#68b828','#27292a','#323435']},
			{value: 'aero', 		name: 'Aero'			,	palette: ['#558C89','#ECECEA','#FFFFFF','#5F9A97','#558C89','#255E5b']},
			{value: 'navy', 		name: 'Navy'			,	palette: ['#2c3e50','#a7bfd6','#FFFFFF','#34495e','#2c3e50','#ff4e50']},
			{value: 'facebook', 	name: 'Facebook'		,	palette: ['#3b5998','#8b9dc3','#FFFFFF','#4160a0','#3b5998','#8b9dc3']},
			{value: 'turquoise', 	name: 'Truquoise'		,	palette: ['#16a085','#96ead9','#FFFFFF','#1daf92','#16a085','#0f7e68']},
			{value: 'lime', 		name: 'Lime'			,	palette: ['#8cc657','#ffffff','#FFFFFF','#95cd62','#8cc657','#70a93c']},
			{value: 'green', 		name: 'Green'			,	palette: ['#27ae60','#a2f9c7','#FFFFFF','#2fbd6b','#27ae60','#1c954f']},
			{value: 'purple', 		name: 'Purple'			,	palette: ['#795b95','#c2afd4','#FFFFFF','#795b95','#27ae60','#5f3d7e']},
			{value: 'white', 		name: 'White'			,	palette: ['#FFFFFF','#666666','#95cd62','#EEEEEE','#95cd62','#555555']},
			{value: 'concrete', 	name: 'Concrete'		,	palette: ['#a8aba2','#666666','#a40f37','#b8bbb3','#a40f37','#323232']},
			{value: 'watermelon', 	name: 'Watermelon'		,	palette: ['#b63131','#f7b2b2','#FFFFFF','#c03737','#b63131','#32932e']},
			{value: 'lemonade', 	name: 'Lemonade'		,	palette: ['#f5c150','#ffeec9','#FFFFFF','#ffcf67','#f5c150','#d9a940']},
		];

		$scope.$watch('opts.sidebarSkin', function(val)
		{
			if(val != null)
			{
				$layout.setOptions('skins.sidebarMenu', val);

				$body.attr('class', $body.attr('class').replace(/\sskin-[a-z]+/)).addClass('skin-' + val);
			}
		});

		$scope.$watch('opts.horizontalMenuSkin', function(val)
		{
			if(val != null)
			{
				$layout.setOptions('skins.horizontalMenu', val);

				$body.attr('class', $body.attr('class').replace(/\shorizontal-menu-skin-[a-z]+/)).addClass('horizontal-menu-skin-' + val);
			}
		});

		$scope.$watch('opts.userInfoNavbarSkin', function(val)
		{
			if(val != null)
			{
				$layout.setOptions('skins.userInfoNavbar', val);

				$body.attr('class', $body.attr('class').replace(/\suser-info-navbar-skin-[a-z]+/)).addClass('user-info-navbar-skin-' + val);
			}
		});
	}).
	// Added in v1.3
	controller('FooterChatCtrl', function($scope, $element)
	{
		$scope.isConversationVisible = false;

		$scope.toggleChatConversation = function()
		{
			$scope.isConversationVisible = ! $scope.isConversationVisible;

			if($scope.isConversationVisible)
			{
				setTimeout(function()
				{
					var $el = $element.find('.ps-scrollbar');

					if($el.hasClass('ps-scroll-down'))
					{
						$el.scrollTop($el.prop('scrollHeight'));
					}

					$el.perfectScrollbar({
						wheelPropagation: false
					});

					$element.find('.form-control').focus();

				}, 300);
			}
		}
	});
