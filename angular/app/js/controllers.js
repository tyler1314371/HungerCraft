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


//ships
var ships ={
	light_fighter:{
		unlocked:0,
		current_owned:0,
		metal_cost:300,
		crystal_cost:170,
		stats:{
			HP:100,
			shield:10,
			attack:30
		},
		skills:{
			rapid_fire:{
				unlocked:0,
				level:1
			}
		}
	},
	heavy_fighter:{
		unlocked:0,
		current_owned:0,
		metal_cost:1200,
		crystal_cost:710,
		stats:{
			HP:450,
			shield:100,
			attack:100
		},
		skills:{
			loaded_ammo:{
				unlocked:0,
				level:1
			}
		}
	},
	worg:{
		unlocked:0,
		current_owned:0,
		metal_cost:4200,
		crystal_cost:900,
		stats:{
			HP:250,
			shield:50,
			attack:80
		},
		skills:{
			shield_piercing:{
				unlocked:0,
				level:1
			},
			predators_reward:{
				unlocked:0,
				level:1
			}
		}
	},
	destroyer:{
		unlocked:0,
		current_owned:0,
		metal_cost:31000,
		crystal_cost:19000,
		stats:{
			HP:10000,
			shield:500,
			attack:450
		},
		skills:{
			rapid_fire:{
				unlocked:0,
				level:1
			},
			critical_strike:{
				unlocked:0,
				level:1
			},
			tough_as_nails:{
				unlocked:0,
				level:1
			}
		}
	},
	succubus:{
		unlocked:0,
		current_owned:0,
		metal_cost:20000,
		crystal_cost:45000,
		stats:{
			HP:4300,
			shield:1200,
			attack:150
		},
		skills:{
			corrosive_ammo:{
				unlocked:0,
				level:1
			},
			lethal_dose:{
				unlocked:0,
				level:1
			},
			weaken:{
				unlocked:0,
				level:1
			}
		}
	},
	colossus:{
		unlocked:0,
		current_owned:0,
		metal_cost:8500000,
		crystal_cost:290000,
		stats:{
			HP:150000,
			shield:10000,
			attack:200
		},
		skills:{
			taunt:{
				unlocked:0,
				level:1
			},
			reinforced_armor:{
				unlocked:0,
				level:1
			},
			advanced_communication:{
				unlocked:0,
				level:1
			},
			reflect:{
				unlocked:0,
				level:1
			}
		}
	},
	medusa:{
		unlocked:0,
		current_owned:0,
		metal_cost:4500000,
		crystal_cost:3900000,
		stats:{
			HP:10000,
			shield:20000,
			attack:100
		},
		skills:{
			restrict:{
				unlocked:0,
				level:1
			},
			mind_control:{
				unlocked:0,
				level:1
			},
			siphon_shield:{
				unlocked:0,
				level:1
			},
			evasion:{
				unlocked:0,
				level:1
			}
		}
	},
	science_vessel:{
		unlocked:0,
		current_owned:0,
		metal_cost:7500000,
		crystal_cost:8900000,
		stats:{
			HP:20000,
			shield:13000,
			attack:140
		},
		skills:{
			restoration:{
				unlocked:0,
				level:1
			},
			toughness:{
				unlocked:0,
				level:1
			},
			force_field:{
				unlocked:0,
				level:1
			},
			advanced_repairbot:{
				unlocked:0,
				level:1
			},
			ionic_storm:{
				unlocked:0,
				level:1
			}
		}
	},
	pantheon:{
		unlocked:0,
		current_owned:0,
		metal_cost:3500000000,
		crystal_cost:190000000,
		stats:{
			HP:70000,
			shield:20000,
			attack:400
		},
		skills:{
			rapid_fire:{
				unlocked:0,
				level:1
			},
			enlarged_cargo_space:{
				unlocked:0,
				level:1
			},
			enrage:{
				unlocked:0,
				level:1
			},
			imposing_presence:{
				unlocked:0,
				level:1
			},
			leadership:{
				unlocked:0,
				level:1
			}
		}
	},
	wormhole_device:{
		unlocked:0,
		current_owned:0,
		metal_cost:0,
		crystal_cost:0,
		stats:{
			HP:0,
			shield:0,
			attack:0
		},
		skills:{
			rapid_fire:{
				unlocked:0,
				level:1
			}
		}
	},
}



//ARTIFACTS
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


//RAIDS
var raids = {
	Oatis:{
		timer:"00:00:00",
		section:3,
		difficulty:0,
		unlocked:0,
		required_level:2,
		enemy:{
			1:{
				light_fighter:1
			},
			2:{
				light_fighter:2
			}
		}
	},
	Clade:{
		timer:"00:00:00",
		section:5,
		difficulty:0,
		unlocked:0,
		required_level:2,
		enemy:{
			1:{
				light_fighter:1
			},
			2:{
				light_fighter:2
			}
		}
	},
	Neibos:{
		timer:"00:00:00",
		section:5,
		difficulty:0,
		unlocked:0,
		required_level:20,
		enemy:{
			1:{
				light_fighter:1
			},
			2:{
				light_fighter:2
			}
		}
	},
	Veotis:{
		timer:"00:00:00",
		section:5,
		difficulty:0,
		unlocked:0,
		required_level:20,
		enemy:{
			1:{
				light_fighter:1
			},
			2:{
				light_fighter:2
			}
		}
	},
	Shora:{
		timer:"00:00:00",
		section:5,
		difficulty:0,
		unlocked:0,
		required_level:20,
		enemy:{
			1:{
				light_fighter:1
			},
			2:{
				light_fighter:2
			}
		}
	},
	Dasloth:{
		timer:"00:00:00",
		section:7,
		difficulty:0,
		unlocked:0,
		required_level:20,
		enemy:{
			1:{
				light_fighter:1
			},
			2:{
				light_fighter:2
			}
		}
	},
	Aria:{
		timer:"00:00:00",
		section:7,
		difficulty:0,
		unlocked:0,
		required_level:20,
		enemy:{
			1:{
				light_fighter:1
			},
			2:{
				light_fighter:2
			}
		}
	},
	Juiria:{
		timer:"00:00:00",
		section:7,
		difficulty:0,
		unlocked:0,
		required_level:20,
		enemy:{
			1:{
				light_fighter:1
			},
			2:{
				light_fighter:2
			}
		}
	},
	Stara:{
		timer:"00:00:00",
		section:7,
		difficulty:0,
		unlocked:0,
		required_level:20,
		enemy:{
			1:{
				light_fighter:1
			},
			2:{
				light_fighter:2
			}
		}
	},
	Quamia:{
		timer:"00:00:00",
		section:7,
		difficulty:0,
		unlocked:0,
		required_level:20,
		enemy:{
			1:{
				light_fighter:1
			},
			2:{
				light_fighter:2
			}
		}
	},
	Nosmov:{
		timer:"00:00:00",
		section:10,
		difficulty:0,
		unlocked:0,
		required_level:20,
		enemy:{
			1:{
				light_fighter:1
			},
			2:{
				light_fighter:2
			}
		}
	},
}






//RESOURCES
var metal = {
	current_owned:0,
	current_mine_level:0,
	current_cost:50,
	ori_cost: 50,
	income: 5,
	income_base : 5
};

var crystal = {
	current_owned:0,
	current_mine_level:0,
	current_cost:60,
	ori_cost: 60,
	income: 3.5,
	income_base: 3.5
};

var dark_matter = {
	current_owned:2,
	based_increase: 2,
	current_increase: 2
};




//BUILDING
var research_lab = {
	current_lab_level: 0,
	current_cost_metal:150,
	base_cost_metal: 150,
	current_cost_crystal:70,
	base_cost_crystal: 70
};

var dm_lab = {
	current_lab_level: 0,
	current_cost_metal:550000,
	base_cost_metal: 550000,
	current_cost_crystal:260000,
	base_cost_crystal: 260000,
	counter:0,
	income:1
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
//REMOVE LATER, TEST CODE

		$scope.unlock_test = function(){

		    for (var key in artifacts) {
				 artifacts[key]["unlocked"] = 1;
				}
			for (var key in ships) {
				 ships[key]["unlocked"] = 1;
				 for (var skill in ships[key]['skills']){
				 	ships[key]['skills'][skill]['unlocked'] = 1;
				 }

				}
			for (var key in raids) {
				 raids[key]["unlocked"] = 1;
				}
		};
		$scope.lock_test = function(){

		    for (var key in artifacts) {
				 artifacts[key]["unlocked"] = 0;
				}
			for (var key in ships) {
				 ships[key]["unlocked"] = 0;
				}
			for (var key in raids) {
				 raids[key]["unlocked"] = 0;
				}
		};

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
		$rootScope.layoutOptions.horizontalMenu.isVisible = true;

		$scope.metal = metal;
		$scope.crystal = crystal;
		$scope.research_lab = research_lab;
		$scope.dm_lab = dm_lab;
		$scope.artifacts = artifacts;
		$scope.specialization = specialization;
		$scope.raids = raids;
		$scope.ships = ships;
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


		$scope.openModal = function(modal_id, modal_size, modal_backdrop)
		{
			$rootScope.currentModal = $modal.open({
				templateUrl: modal_id,
				size: modal_size,
				backdrop: typeof modal_backdrop == 'undefined' ? true : modal_backdrop
			});
		};


		$scope.Build = function(building_name)
		{
			if(building_name == 'metal_mine'){
				metal['current_mine_level'] +=1;
			}
			if(building_name == 'crystal_mine'){
				if(metal['current_mine_level'] < 3){
					toastr.error("Requirements not fulfilled"
						, opts);
					return false;
				}
				crystal['current_mine_level'] +=1;
			}
			if(building_name == 'research_lab'){
				if(metal['current_mine_level'] < 10 || crystal['current_mine_level'] < 7 || level['current_level'] < 10){
					toastr.error("Requirements not fulfilled"
						, opts);
					return false;
				}
				research_lab['current_lab_level'] +=1;
			}
			if(building_name == 'dm_lab'){
				if(metal['current_mine_level'] < 20 || crystal['current_mine_level'] < 13 || level['current_level'] < 17){
					toastr.error("Requirements not fulfilled"
						, opts);
					return false;
				}
				dm_lab['current_lab_level'] +=1;
			}
		};


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
		$scope.UpgradeDMLab = function(){
		    if((metal.current_owned >= dm_lab.current_cost_metal) && (crystal.current_owned >= dm_lab.current_cost_crystal)){

		         dm_lab.current_lab_level = dm_lab.current_lab_level +1;
						 metal.current_owned = metal.current_owned - dm_lab.current_cost_metal;
						 crystal.current_owned = crystal.current_owned - dm_lab.current_cost_crystal;

						 dm_lab.current_cost_metal = Math.floor(dm_lab.base_cost_metal * Math.pow(1.8,dm_lab.current_lab_level));
						 dm_lab.current_cost_crystal = Math.floor(dm_lab.base_cost_crystal * Math.pow(1.8,dm_lab.current_lab_level));

		    };
		};

		$scope.EnterInstance = function(instance_name){

			if(raids[instance_name]['unlocked']!=1){

				toastr.error("Instance is Locked"
						, opts);
				return false;

		    }else{

		    	if(raids[instance_name]['timer']!="00:00:00"){

				toastr.error("Instance is on cooldown"
						, opts);
				return false;

			    }


			    //raids[instance_name]['timer']= "02:00:00";


			    $rootScope.currentModal.close();
			    $scope.openModal('research', 'lg');
		    }


		};

		$scope.RefreshRaidCD = function(instance_name){

			if(raids[instance_name]['unlocked']!=1){

				toastr.error("Instance is Locked"
						, opts);
				return false;

		    }else{

		    	if(dark_matter['current_owned']<2){

				toastr.error("Not enough dark matter"
						, opts);
				return false;

			    }


			    if(raids[instance_name]['timer']== "00:00:00"){

				toastr.error(instance_name+" is already ready"
						, opts);
				return false;

			    }



			    	dark_matter['current_owned'] -=2;
			    	toastr.success(instance_name+" refreshed!"
						, opts);

			    	raids[instance_name]['timer']= "00:00:00";


		    }


		};






		$scope.BuildShip = function(ship_name, amount){

			if(ships[ship_name]['unlocked']!=1){

				toastr.error("Ship is Locked"
						, opts);
				return false;

		    }else{

		    	var metal_cost;
		    	var crystal_cost;
		    	var unit;
		    	if(amount=='1'){
		    		metal_cost = ships[ship_name]['metal_cost'];
		    		crystal_cost = ships[ship_name]['crystal_cost'];
		    		unit = 1;
		    	}else if (amount=='100'){
		    		metal_cost = ships[ship_name]['metal_cost'] * 100;
		    		crystal_cost = ships[ship_name]['crystal_cost'] * 100;
		    		unit = 100;
		    	}else if (amount=='1000'){
		    		metal_cost = ships[ship_name]['metal_cost'] * 1000;
		    		crystal_cost = ships[ship_name]['crystal_cost'] * 1000;
		    		unit = 1000;
		    	}else if (amount=='max'){
		    		var temp1 = parseInt(metal.current_owned / ships[ship_name]['metal_cost']);
		    		var temp2 = parseInt(crystal.current_owned / ships[ship_name]['crystal_cost']);

		    		if (temp1 == 0){
		    			toastr.error("Not enough metal"
						, opts);
						return false;
		    		}if (temp2 == 0){
		    			toastr.error("Not enough crystal"
						, opts);
						return false;
		    		}

		    		metal_cost = ships[ship_name]['metal_cost'] * Math.min(temp1, temp2);
		    		crystal_cost = ships[ship_name]['crystal_cost'] * Math.min(temp1, temp2);
		    		unit = Math.min(temp1, temp2);
		    	}


		    	if(metal_cost>metal.current_owned){

				toastr.error("Not enough metal"
						, opts);
				return false;

			    }
			    if(crystal_cost>crystal.current_owned){

				toastr.error("Not enough crystal"
						, opts);
				return false;

			    }

			    metal.current_owned -= metal_cost;
			    crystal.current_owned -= crystal_cost;

			    ships[ship_name]['current_owned'] +=unit;

				return false;
		    }


		};



		$scope.PaypalCheckout = function(){

			var amount_dm = 0;
			var amount_CAD = 0;


			if (document.getElementById("shop_10_dm").checked == true){
				amount_dm += 10;
				amount_CAD += 0.99;
			}
			if (document.getElementById("shop_50_dm").checked == true){
				amount_dm += 50;
				amount_CAD += 2.49;
			}
			if (document.getElementById("shop_100_dm").checked == true){
				amount_dm += 100;
				amount_CAD += 3.99;
			}
			if (document.getElementById("shop_200_dm").checked == true){
				amount_dm += 200;
				amount_CAD += 5.99;
			}


			console.log(amount_dm);
			console.log(amount_CAD);

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


			metal.income = Math.floor(metal.income_base  * metal.current_mine_level * Math.pow(1.1,metal.current_mine_level));
			crystal.income = Math.floor(crystal.income_base  * crystal.current_mine_level * Math.pow(1.1,crystal.current_mine_level));



			$scope.ClickMetal(metal.income);
			$scope.ClickCrystal(crystal.income);






			for (var key in raids) {
				var current_time = raids[key]["timer"].split(":");
				var hour = Number(current_time[0]);
				var minute = Number(current_time[1]);
				var second = Number(current_time[2]);



				if(second == 0 && minute ==0 && hour ==0){
					continue;
				}

				second -= 1;

				if(second < 0){
					second = 0;
					minute -=1;
					if(minute<0){
						minute = 0;
						if(hour!=0){
							hour-=1;
							minute+=59;
							second+=59;
						}
					}else
					{
						second+=59;
					}
				}



				//parse back

				if(hour<10){
					hour = "0"+String(hour);
				}else{
					hour = String(hour);
				}
				if(minute<10){
					minute = "0"+String(minute);
				}else{
					minute = String(minute);
				}
				if(second<10){
					second = "0"+String(second);
				}else{
					second = String(second);
				}


				raids[key]["timer"] = hour+":"+minute+":"+second

			}










			dm_lab['counter']+=1;
			if(dm_lab['counter'] == (60*60*24)){
				dark_matter.current_owned+=(dm_lab['current_lab_level']*1);
				dm_lab['counter']=0;
			}















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
		$scope.raids = raids;

		$scope.NextLevel = function(){





			var level_metal_req_temp = Math.floor(level.level_metal_req_ori * Math.pow(1.5,level.current_level));
		    var level_crystal_req_temp = Math.floor(level.level_crystal_req_ori  * Math.pow(1.4,level.current_level));       //works out the cost of this cursor

				if (level.current_level ==1){
		      level_metal_req_temp = level.level_metal_req_ori;
		      level_crystal_req_temp = level.level_crystal_req_ori;
		    }




		    if((metal.current_owned >= level_metal_req_temp) && (crystal.current_owned >= level_crystal_req_temp)){
		    	//LEVEL UP
		      level.current_level = level.current_level + 1
		      crystal.current_owned = crystal.current_owned - level_crystal_req_temp;
		      metal.current_owned = metal.current_owned - level_metal_req_temp;

				level.level_metal_req = Math.floor(level.level_metal_req_ori* Math.pow(1.5,level.current_level));
				level.level_crystal_req = Math.floor(level.level_crystal_req_ori * Math.pow(1.4,level.current_level));

				//CHECK RAIDS

				for (var key in raids) {
					if(level.current_level>=raids[key]['required_level'])
					{
						raids[key]['unlocked']=1;
					}
				}

		    };


		};



		(function() {
  var globe = planetaryjs.planet();
  // Load our custom `autorotate` plugin; see below.
  globe.loadPlugin(autorotate(10));
  // The `earth` plugin draws the oceans and the land; it's actually
  // a combination of several separate built-in plugins.
  //
  // Note that we're loading a special TopoJSON file
  // (world-110m-withlakes.json) so we can render lakes.
  globe.loadPlugin(planetaryjs.plugins.earth({
    topojson: { file:   'assets/world-110m-withlakes.json' },
    oceans:   { fill:   '#000080' },
    land:     { fill:   '#339966' },
    borders:  { stroke: '#008000' }
  }));
  // Load our custom `lakes` plugin to draw lakes; see below.
  globe.loadPlugin(lakes({
    fill: '#000080'
  }));
  // The `pings` plugin draws animated pings on the globe.
  	//globe.loadPlugin(planetaryjs.plugins.pings());
  // The `zoom` and `drag` plugins enable
  // manipulating the globe with the mouse.
  globe.loadPlugin(planetaryjs.plugins.zoom({
    scaleExtent: [50, 300]
  }));
  globe.loadPlugin(planetaryjs.plugins.drag({
    // Dragging the globe should pause the
    // automatic rotation until we release the mouse.
    onDragStart: function() {
      this.plugins.autorotate.pause();
    },
    onDragEnd: function() {
      this.plugins.autorotate.resume();
    }
  }));
  // Set up the globe's initial scale, offset, and rotation.
  globe.projection.scale(50).translate([50, 50]).rotate([0, -10, 0]);

  var canvas = document.getElementById('rotatingGlobe');
  // Special code to handle high-density displays (e.g. retina, some phones)
  // In the future, Planetary.js will handle this by itself (or via a plugin).
  if (window.devicePixelRatio == 2) {
    canvas.width = 300;
    canvas.height = 300;
    context = canvas.getContext('2d');
    context.scale(2, 2);
  }
  // Draw that globe!
  globe.draw(canvas);

  // This plugin will automatically rotate the globe around its vertical
  // axis a configured number of degrees every second.
  function autorotate(degPerSec) {
    // Planetary.js plugins are functions that take a `planet` instance
    // as an argument...
    return function(planet) {
      var lastTick = null;
      var paused = false;
      planet.plugins.autorotate = {
        pause:  function() { paused = true;  },
        resume: function() { paused = false; }
      };
      // ...and configure hooks into certain pieces of its lifecycle.
      planet.onDraw(function() {
        if (paused || !lastTick) {
          lastTick = new Date();
        } else {
          var now = new Date();
          var delta = now - lastTick;
          // This plugin uses the built-in projection (provided by D3)
          // to rotate the globe each time we draw it.
          var rotation = planet.projection.rotate();
          rotation[0] += degPerSec * delta / 1000;
          if (rotation[0] >= 180) rotation[0] -= 360;
          planet.projection.rotate(rotation);
          lastTick = now;
        }
      });
    };
  };

  // This plugin takes lake data from the special
  // TopoJSON we're loading and draws them on the map.
  function lakes(options) {
    options = options || {};
    var lakes = null;

    return function(planet) {
      planet.onInit(function() {
        // We can access the data loaded from the TopoJSON plugin
        // on its namespace on `planet.plugins`. We're loading a custom
        // TopoJSON file with an object called "ne_110m_lakes".
        var world = planet.plugins.topojson.world;
        lakes = topojson.feature(world, world.objects.ne_110m_lakes);
      });

      planet.onDraw(function() {
        planet.withSavedContext(function(context) {
          context.beginPath();
          planet.path.context(context)(lakes);
          context.fillStyle = options.fill || 'black';
          context.fill();
        });
      });
    };
  };
})();


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
