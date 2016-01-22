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
		assembled:0,
		casualties:0,
		metal_cost:500,
		crystal_cost:270,
		metal_cost_base:300,
		crystal_cost_base:170,
		stats:{
			HP:1000,
			shield:20,
			attack:30,
			HP_base:1000,
			shield_base:20,
			attack_base:30
		},
		skills:[
			
		]
	},
	heavy_fighter:{
		unlocked:0,
		current_owned:0,
		assembled:0,
		casualties:0,
		metal_cost:1200,
		crystal_cost:710,
		stats:{
			HP:450,
			shield:100,
			attack:100,
			HP_base:450,
			shield_base:100,
			attack_base:100
		},
		skills:[
			
		]
	},
	worg:{
		unlocked:0,
		current_owned:0,
		assembled:0,
		casualties:0,
		metal_cost:4200,
		crystal_cost:900,
		stats:{
			HP:250,
			shield:50,
			attack:80,
			HP_base:250,
			shield_base:50,
			attack_base:80
		},
		skills:[
			
		]
	},
	destroyer:{
		unlocked:0,
		current_owned:0,
		assembled:0,
		casualties:0,
		metal_cost:31000,
		crystal_cost:19000,
		stats:{
			HP:10000,
			shield:500,
			attack:450,
			HP_base:10000,
			shield_base:500,
			attack_base:450
		},
		skills:[
			
		]
	},
	succubus:{
		unlocked:0,
		current_owned:0,
		assembled:0,
		casualties:0,
		metal_cost:20000,
		crystal_cost:45000,
		stats:{
			HP:4300,
			shield:1200,
			attack:150,
			HP_base:4300,
			shield_base:1200,
			attack_base:150
		},
		skills:[
			
		]
	},
	colossus:{
		unlocked:0,
		current_owned:0,
		assembled:0,
		casualties:0,
		metal_cost:8500000,
		crystal_cost:290000,
		stats:{
			HP:150000,
			shield:10000,
			attack:200,
			HP_base:150000,
			shield_base:10000,
			attack_base:200
		},
		skills:[
			
		]
	},
	medusa:{
		unlocked:0,
		current_owned:0,
		assembled:0,
		casualties:0,
		metal_cost:4500000,
		crystal_cost:3900000,
		stats:{
			HP:10000,
			shield:20000,
			attack:100,
			HP_base:10000,
			shield_base:20000,
			attack_base:100
		},
		skills:[
			
		]
	},
	science_vessel:{
		unlocked:0,
		current_owned:0,
		assembled:0,
		casualties:0,
		metal_cost:7500000,
		crystal_cost:8900000,
		stats:{
			HP:20000,
			shield:13000,
			attack:140,
			HP_base:20000,
			shield_base:13000,
			attack_base:140
		},
		skills:[
			
		]
	},
	pantheon:{
		unlocked:0,
		current_owned:0,
		assembled:0,
		casualties:0,
		metal_cost:3500000000,
		crystal_cost:190000000,
		stats:{
			HP:70000,
			shield:20000,
			attack:400,
			HP_base:70000,
			shield_base:20000,
			attack_base:400
		},
		skills:[
			
		]
	}
}



//ARTIFACTS
var artifacts = {
	artifact_list:[
		{
				name:"Shard of Coldness",
				img_src:"assets/images/artifacts/blue_stone.png",
				description:"",
				rarity:"uncommon",
				current_owned: 0,
				based_increase_percent: 5
		},
		{
				name:"Dust of Greed",
				img_src:"assets/images/artifacts/Browndust.png",
				description:"",
				rarity:"uncommon",
				current_owned: 0,
				based_increase_percent: 15
		}
	]
};


//RAIDS
var raids = {
	Oatis:{
		timer:"00:00:00",
		section:3,
		difficulty:0,
		unlocked:1,
		required_level:8
	},
	Clade:{
		timer:"00:00:00",
		section:5,
		difficulty:0,
		unlocked:0,
		required_level:14
	},
	Neibos:{
		timer:"00:00:00",
		section:5,
		difficulty:0,
		unlocked:0,
		required_level:25

	},
	Veotis:{
		timer:"00:00:00",
		section:5,
		difficulty:0,
		unlocked:0,
		required_level:29
	},
	Shora:{
		timer:"00:00:00",
		section:5,
		difficulty:0,
		unlocked:0,
		required_level:36
	},
	Dasloth:{
		timer:"00:00:00",
		section:7,
		difficulty:0,
		unlocked:0,
		required_level:50
	},
	Aria:{
		timer:"00:00:00",
		section:7,
		difficulty:0,
		unlocked:0,
		required_level:60
	},
	Juiria:{
		timer:"00:00:00",
		section:7,
		difficulty:0,
		unlocked:0,
		required_level:64
	},
	Stara:{
		timer:"00:00:00",
		section:7,
		difficulty:0,
		unlocked:0,
		required_level:71
	},
	Quamia:{
		timer:"00:00:00",
		section:7,
		difficulty:0,
		unlocked:0,
		required_level:80
	},
	Nosmov:{
		timer:"00:00:00",
		section:10,
		difficulty:0,
		unlocked:0,
		required_level:94
	},
}






//RESOURCES
var metal = {
	current_owned:11111110,
	current_mine_level:0,
	current_cost:50,
	ori_cost: 50,
	income: 5,
	income_base : 5
};

var crystal = {
	current_owned:1111110,
	current_mine_level:0,
	current_cost:60,
	ori_cost: 60,
	income: 4,
	income_base: 4
};

var dark_matter = {
	current_owned:0,
	based_increase: 2,
	current_increase: 2
};




//BUILDING
var shipyard = {
	current_lab_level: 3,
	current_cost_metal:150,
	base_cost_metal: 150,
	current_cost_crystal:70,
	base_cost_crystal: 70
};

var research_lab = {
	current_lab_level: 3,
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
	income:1,
	timer:"24:00:00"
};





var level = {
	level_metal_req:250,
	level_crystal_req:150,
	level_metal_req_ori:250,
	level_crystal_req_ori:150,
	current_level:10,
	color1: '#000080',
	color2: '#339966'
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
	controller('GameCtrl', function($scope, $rootScope, $cookies, $modal, $sce, $layout, $location, $timeout, $interval)
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
		$.ajaxSetup({
	    async: false
		});


		$.getJSON( '../../assets/skills_info.json', function( data ) {
		  $.each( data, function( key, val ) {
				$rootScope.skills_info = data;
		  });

		});


		$scope.find_index= function(item, list) {

			return find_index_g(item, list);
		}
		$scope.diminish_artifacts= function(base_amount, number_owned) {

			return diminish_artifacts(base_amount, number_owned);
		}






		$rootScope.layoutOptions.horizontalMenu.isVisible = true;

		$scope.metal = metal;
		$scope.crystal = crystal;
		$scope.research_lab = research_lab;
		$scope.shipyard = shipyard;
		$scope.dm_lab = dm_lab;
		$scope.artifacts = artifacts;
		$scope.specialization = specialization;
		$scope.raids = raids;
		$scope.ships = ships;
		$scope.level = level;
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

		$scope.format_number= function(num) {
			if (num >= 10000){
				return (num/1000).toFixed(1) + 'k';
			}
			if (num >= 1000000){
				return (num/1000000).toFixed(1) + 'm';
			}
			if (num >= 1000000000){
				return (num/1000000000).toFixed(1) + 'b';
			}
		    return num.toFixed(0);
		}
		$scope.format_number_1= function(num) {
			return Number(num).toFixed(1);
		}


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

				crystal['current_mine_level'] +=1;
			}
			if(building_name == 'research_lab'){

				research_lab['current_lab_level'] +=1;
			}
			if(building_name == 'dm_lab'){

				dm_lab['current_lab_level'] +=1;
			}
			if(building_name == 'shipyard'){

				shipyard['current_lab_level'] +=1;
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
						 metal.current_cost = Math.floor(metal.ori_cost * Math.pow(1.55,metal.current_mine_level));

		    };
		};


		$scope.BuyCrystalMine = function(){
		    if(crystal.current_owned >= crystal.current_cost){

		         crystal.current_mine_level = crystal.current_mine_level + 1;
		    	   crystal.current_owned = crystal.current_owned - crystal.current_cost;
						 crystal.current_cost = Math.floor(crystal.ori_cost * Math.pow(1.4,crystal.current_mine_level));

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
		    Update_All_Ships_Bonuses();
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
		$scope.UpgradeShipyard = function(){
		    if((metal.current_owned >= shipyard.current_cost_metal) && (crystal.current_owned >= shipyard.current_cost_crystal)){

		         shipyard.current_lab_level = shipyard.current_lab_level +1;
						 metal.current_owned = metal.current_owned - shipyard.current_cost_metal;
						 crystal.current_owned = crystal.current_owned - shipyard.current_cost_crystal;

						 shipyard.current_cost_metal = Math.floor(shipyard.base_cost_metal * Math.pow(1.5,shipyard.current_lab_level));
						 shipyard.current_cost_crystal = Math.floor(shipyard.base_cost_crystal * Math.pow(1.5,shipyard.current_lab_level));

		    };
		    Update_All_Ships_Bonuses();
		};

		$scope.EnterInstance = function(instance_name){

			if(raids[instance_name]['unlocked']!=1){


				return false;

		    }else{

		    	if(raids[instance_name]['timer']!="00:00:00"){


				return false;

			    }


			    //raids[instance_name]['timer']= "02:00:00";
			    if(ships.light_fighter.current_owned==0 && ships.heavy_fighter.current_owned==0 && ships.worg.current_owned==0 &&
			    	ships.destroyer.current_owned==0 && ships.colossus.current_owned==0 && ships.succubus.current_owned==0 &&
			    	ships.medusa.current_owned==0 && ships.science_vessel.current_owned==0 && ships.pantheon.current_owned==0 ){


				toastr.error("You don't have any fleets"
						, opts);
				return false;

			    }


			    $rootScope.currentModal.close();
			    $rootScope.current_instance=instance_name;
			    $scope.openModal('battle_prep', 'lg');
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


			   	var metal_cost;
		    	var crystal_cost;
		    	var unit;
		    	if(amount=='1'){
		    		metal_cost = ships[ship_name]['metal_cost'];
		    		crystal_cost = ships[ship_name]['crystal_cost'];
		    		unit = 1;
		    	}else if (amount=='10'){
		    		metal_cost = ships[ship_name]['metal_cost'] * 10;
		    		crystal_cost = ships[ship_name]['crystal_cost'] * 10;
		    		unit = 10;
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

		$scope.progress_metal = {
		      value: 0,
		      max: 100,
		      color: 'warning'
		    };
		$scope.progress_crystal = {
				      value: 0,
				      max: 100,
				      color: 'info'
				    };
		$scope.progress_dm = {
				      value: 0,
				      max: 60*60*24,
				      color: 'purple'
				    };
		$scope.dm_hidden = true;
		$scope.changeValue_metal_pb = function(value) {
		      $scope.progress_metal.value = value;
		    };
		$scope.changeValue_crystal_pb = function(value) {
		      $scope.progress_crystal.value = value;
		    };
		$scope.changeValue_plus_dm_pb = function(value) {
		      $scope.progress_dm.value += value;
		    };
		$scope.changeValue_dm_pb = function(value) {
		      $scope.progress_dm.value = value;
		    };

















































		if (typeof update_state != 'number') {

			update_state = window.setInterval(function(){





			//metal.income = Math.floor(metal.income_base  * metal.current_mine_level * Math.pow(1.1,metal.current_mine_level));
			//crystal.income = Math.floor(crystal.income_base  * crystal.current_mine_level * Math.pow(1.1,crystal.current_mine_level));

			Update_metal_income();
			Update_crystal_income();




			if (metal.income!=0){

					$scope.changeValue_metal_pb(100);


					$timeout( function clear() {
						$scope.changeValue_metal_pb(0)
						$scope.startFade = true;



				        $timeout(function(){
				            $scope.hidden = false;
				            //$( ".plus_metal" ).animate({ "top": "+=50px" }, "fast" );
				        }, 100);


						$timeout(function(){
							$scope.hidden = true;

						}, 600);

						$scope.ClickMetal(metal.income);

					}, 650);
			}


			if (crystal.income!=0){
					$scope.changeValue_crystal_pb(100);


				$timeout( function clear() {
					$scope.changeValue_crystal_pb(0)



					$scope.startFade = true;
					$timeout(function(){
							$scope.hidden = false;
					}, 100);


					$timeout(function(){
							$scope.hidden = true;
					}, 600);

					$scope.ClickCrystal(crystal.income);

					}, 650);
			}

			if (dm_lab.current_lab_level != 0){
				$scope.changeValue_plus_dm_pb(1)



				var current_time = dm_lab["timer"].split(":");
				var hour = Number(current_time[0]);
				var minute = Number(current_time[1]);
				var second = Number(current_time[2]);



				if(second == 0 && minute ==0 && hour ==0){

					dark_matter.current_owned+=(dm_lab['current_lab_level']*1);
					dm_lab["timer"]="24:00:00";


					$timeout( function clear() {
					$scope.changeValue_dm_pb(0)



					$scope.startFade = true;
					$timeout(function(){
							$scope.dm_hidden = false;
					}, 100);


					$timeout(function(){
							$scope.dm_hidden = true;
					}, 600);

					}, 650);
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


				dm_lab["timer"] = hour+":"+minute+":"+second

			}






























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
		$scope.artifacts = artifacts;
		$scope.format_number= function(num) {
			if (num >= 10000){
				return (num/1000).toFixed(1) + 'k';
			}
			if (num >= 1000000){
				return (num/1000000).toFixed(1) + 'm';
			}
			if (num >= 1000000000){
				return (num/1000000000).toFixed(1) + 'b';
			}
		    return num;
		}

		function getRandomColor() {
		    var letters = '0123456789ABCDEF'.split('');
		    var color = '#';
		    for (var i = 0; i < 6; i++ ) {
		        color += letters[Math.floor(Math.random() * 16)];
		    }
		    return color;
		}




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
		    oceans:   { fill:   level.color1 },
		    land:     { fill:   level.color2 },
		    borders:  { stroke: level.color2 }
		  }));
		  // Load our custom `lakes` plugin to draw lakes; see below.
		  globe.loadPlugin(lakes({
		    fill: level.color1
		  }));
		  // The `pings` plugin draws animated pings on the globe.
		  	//globe.loadPlugin(planetaryjs.plugins.pings());
		  // The `zoom` and `drag` plugins enable
		  // manipulating the globe with the mouse.
		  globe.loadPlugin(planetaryjs.plugins.zoom({
		    scaleExtent: [70, 300]
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
		  globe.projection.scale(100).translate([125, 125]).rotate([0, -10, 0]);

		  var canvas = document.getElementById('rotatingGlobe');
		  // Special code to handle high-density displays (e.g. retina, some phones)
		  // In the future, Planetary.js will handle this by itself (or via a plugin).
		  if (window.devicePixelRatio == 2) {
		    canvas.width = 250;
		    canvas.height = 250;
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













		$scope.NextLevel = function(){



		    //check if user has enough
		    if((metal.current_owned >= level.level_metal_req) && (crystal.current_owned >=level.level_crystal_req)){


		    	//LEVEL UP
			      level.current_level = level.current_level + 1
			      crystal.current_owned = crystal.current_owned - level.level_crystal_req;
			      metal.current_owned = metal.current_owned - level.level_metal_req ;
					}

					level.level_metal_req = Math.floor(level.level_metal_req_ori* Math.pow(1.5,level.current_level));
					level.level_crystal_req = Math.floor(level.level_crystal_req_ori * Math.pow(1.4,level.current_level));

				//CHECK RAIDS

				for (var key in raids) {
					if(level.current_level>=raids[key]['required_level'])
					{
						raids[key]['unlocked']=1;
					}
				}



				Update_Next_Level_Requirement();


				$( "#globe" ).animate({ "opacity":"0" }, 500);


				setTimeout(function()
				{

			    //update globe color
			    level.color1 = getRandomColor();
			    level.color2 = getRandomColor();
					globe.stop();
					globe = planetaryjs.planet();
					globe.loadPlugin(autorotate(10));
				  // The `earth` plugin draws the oceans and the land; it's actually
				  // a combination of several separate built-in plugins.
				  //
				  // Note that we're loading a special TopoJSON file
				  // (world-110m-withlakes.json) so we can render lakes.
				  globe.loadPlugin(planetaryjs.plugins.earth({
				    topojson: { file:   'assets/world-110m-withlakes.json' },
				    oceans:   { fill:   level.color1 },
				    land:     { fill:   level.color2 },
				    borders:  { stroke: level.color2 }
				  }));
				  // Load our custom `lakes` plugin to draw lakes; see below.
				  globe.loadPlugin(lakes({
				    fill: level.color1
				  }));
				  // The `pings` plugin draws animated pings on the globe.
				  	//globe.loadPlugin(planetaryjs.plugins.pings());
				  // The `zoom` and `drag` plugins enable
				  // manipulating the globe with the mouse.
				  globe.loadPlugin(planetaryjs.plugins.zoom({
				    scaleExtent: [70, 300]
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
				  globe.projection.scale(100).translate([125, 125]).rotate([0, -10, 0]);

				  var canvas = document.getElementById('rotatingGlobe');
				  // Special code to handle high-density displays (e.g. retina, some phones)
				  // In the future, Planetary.js will handle this by itself (or via a plugin).
				  if (window.devicePixelRatio == 2) {
				    canvas.width = 250;
				    canvas.height = 250;
				    context = canvas.getContext('2d');
				    context.scale(2, 2);
				  }
				  // Draw that globe!
				  globe.draw(canvas);

					$( "#globe" ).animate({ "opacity":"1" }, 500);
				}, 800);



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
	}).
	controller('BattleCtrl', function($rootScope,$scope, $element, $modal)
	{
		$scope.metal = metal;
		$scope.crystal = crystal;
		$scope.research_lab = research_lab;
		$scope.shipyard = shipyard;
		$scope.dm_lab = dm_lab;
		$scope.artifacts = artifacts;
		$scope.specialization = specialization;
		$scope.raids = raids;
		$scope.ships = ships;
		$scope.level = level;
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
		$scope.format_number= function(num) {
			if (num >= 10000){
				return (num/1000).toFixed(1) + 'k';
			}
			if (num >= 1000000){
				return (num/1000000).toFixed(1) + 'm';
			}
			if (num >= 1000000000){
				return (num/1000000000).toFixed(1) + 'b';
			}
		    return num;
		};
		$scope.find_index= function(item, list) {

			return find_index_g(item, list);
		}
		$scope.openModal = function(modal_id, modal_size, modal_backdrop)
		{
			$rootScope.currentModal = $modal.open({
				templateUrl: modal_id,
				size: modal_size,
				backdrop: typeof modal_backdrop == 'undefined' ? true : modal_backdrop
			});
		};


		$rootScope.current_floor = 1;
		$rootScope.metal_reward=0;
		$rootScope.crystal_reward=0;
		$rootScope.artifact_reward=0;
		//CALCULATE BONUS



















		if (ships.light_fighter.current_owned==0){
			$('#LF_form').hide();
		}else{
			$( "#filler_prep" ).animate({ "height": "+=85px" }, 100);
		}
		$scope.LF_Text = 0;
		$scope.LF_Slider = 0;
		$scope.LF_fleet_HP = 0;
		$scope.LF_fleet_Shield = 0;
		$scope.LF_fleet_Attk = 0;
		$scope.$watch('LF_Text', function (newValue, oldValue) {
        	if (newValue>ships.light_fighter.current_owned){
        		$scope.LF_Text = ships.light_fighter.current_owned;
        	}
        	if (!Number(newValue)){
        		$scope.LF_Text = 0;
        		$scope.LF_Slider = 0;
        	}
        	
        	$scope.LF_fleet_HP = ships.light_fighter.stats.HP * $scope.LF_Text;
        	$scope.LF_fleet_Shield = ships.light_fighter.stats.shield * $scope.LF_Text;
        	$scope.LF_fleet_Attk = ships.light_fighter.stats.attack * $scope.LF_Text;
			ships.light_fighter.assembled = $scope.LF_Text;
    	});
    	$scope.$watch('LF_Slider', function (newValue, oldValue) {
        	$scope.LF_fleet_HP = ships.light_fighter.stats.HP * $scope.LF_Slider;
        	$scope.LF_fleet_Shield = ships.light_fighter.stats.shield * $scope.LF_Slider;
        	$scope.LF_fleet_Attk = ships.light_fighter.stats.attack * $scope.LF_Slider;
			ships.light_fighter.assembled = $scope.LF_Slider;
        });



    	if (ships.heavy_fighter.current_owned==0){
			$('#HF_form').hide();
		}else{
			$( "#filler_prep" ).animate({ "height": "+=85px" }, 100);
		}
		$scope.HF_Text = 0;
		$scope.HF_Slider = 0;
		$scope.HF_fleet_HP = 0;
		$scope.HF_fleet_Shield = 0;
		$scope.HF_fleet_Attk = 0;
		$scope.$watch('HF_Text', function (newValue, oldValue) {
        	if (newValue>ships.heavy_fighter.current_owned){
        		$scope.HF_Text = ships.heavy_fighter.current_owned;
        	}
        	if (!Number(newValue)){
        		$scope.HF_Text = 0;
        		$scope.HF_Slider = 0;
        	}
        	$scope.HF_fleet_HP = ships.heavy_fighter.stats.HP * $scope.HF_Text;
        	$scope.HF_fleet_Shield = ships.heavy_fighter.stats.shield * $scope.HF_Text;
        	$scope.HF_fleet_Attk = ships.heavy_fighter.stats.attack * $scope.HF_Text;
        	ships.heavy_fighter.assembled = $scope.LF_Text;
    	});
    	$scope.$watch('HF_Slider', function (newValue, oldValue) {
        	$scope.HF_fleet_HP = ships.heavy_fighter.stats.HP * $scope.HF_Slider;
        	$scope.HF_fleet_Shield = ships.heavy_fighter.stats.shield * $scope.HF_Slider;
        	$scope.HF_fleet_Attk = ships.heavy_fighter.stats.attack * $scope.HF_Slider;
        	ships.heavy_fighter.assembled = $scope.HF_Slider;
        });



        if (ships.worg.current_owned==0){
			$('#WG_form').hide();
		}else{
			$( "#filler_prep" ).animate({ "height": "+=85px" }, 100);
		}
		$scope.WG_Text = 0;
		$scope.WG_Slider = 0;
		$scope.WG_fleet_HP = 0;
		$scope.WG_fleet_Shield = 0;
		$scope.WG_fleet_Attk = 0;
		$scope.$watch('WG_Text', function (newValue, oldValue) {
        	if (newValue>ships.worg.current_owned){
        		$scope.WG_Text = ships.worg.current_owned;
        	}
        	if (!Number(newValue)){
        		$scope.WG_Text = 0;
        		$scope.WG_Slider = 0;
        	}
        	$scope.WG_fleet_HP = ships.worg.stats.HP * $scope.WG_Text;
        	$scope.WG_fleet_Shield = ships.worg.stats.shield * $scope.WG_Text;
        	$scope.WG_fleet_Attk = ships.worg.stats.attack * $scope.WG_Text;
        	ships.worg.assembled = $scope.WG_Text;
    	});
    	$scope.$watch('WG_Slider', function (newValue, oldValue) {
        	$scope.WG_fleet_HP = ships.worg.stats.HP * $scope.WG_Slider;
        	$scope.WG_fleet_Shield = ships.worg.stats.shield * $scope.WG_Slider;
        	$scope.WG_fleet_Attk = ships.worg.stats.attack * $scope.WG_Slider;
        	ships.worg.assembled = $scope.WG_Slider;
        });


        if (ships.destroyer.current_owned==0){
			$('#DS_form').hide();
		}else{
			$( "#filler_prep" ).animate({ "height": "+=85px" }, 100);
		}
		$scope.DS_Text = 0;
		$scope.DS_Slider = 0;
		$scope.DS_fleet_HP = 0;
		$scope.DS_fleet_Shield = 0;
		$scope.DS_fleet_Attk = 0;
		$scope.$watch('DS_Text', function (newValue, oldValue) {
        	if (newValue>ships.destroyer.current_owned){
        		$scope.DS_Text = ships.destroyer.current_owned;
        	}
        	if (!Number(newValue)){
        		$scope.DS_Text = 0;
        		$scope.DS_Slider = 0;
        	}
        	$scope.DS_fleet_HP = ships.destroyer.stats.HP * $scope.DS_Text;
        	$scope.DS_fleet_Shield = ships.destroyer.stats.shield * $scope.DS_Text;
        	$scope.DS_fleet_Attk = ships.destroyer.stats.attack * $scope.DS_Text;
        	ships.destroyer.assembled = $scope.DS_Text;
    	});
    	$scope.$watch('DS_Slider', function (newValue, oldValue) {
        	$scope.DS_fleet_HP = ships.destroyer.stats.HP * $scope.DS_Slider;
        	$scope.DS_fleet_Shield = ships.destroyer.stats.shield * $scope.DS_Slider;
        	$scope.DS_fleet_Attk = ships.destroyer.stats.attack * $scope.DS_Slider;
        	ships.destroyer.assembled = $scope.DS_Slider;
        });


        if (ships.succubus.current_owned==0){
			$('#SU_form').hide();
		}else{
			$( "#filler_prep" ).animate({ "height": "+=85px" }, 100);
		}
		$scope.SU_Text = 0;
		$scope.SU_Slider = 0;
		$scope.SU_fleet_HP = 0;
		$scope.SU_fleet_Shield = 0;
		$scope.SU_fleet_Attk = 0;
		$scope.$watch('SU_Text', function (newValue, oldValue) {
        	if (newValue>ships.succubus.current_owned){
        		$scope.SU_Text = ships.succubus.current_owned;
        	}
        	if (!Number(newValue)){
        		$scope.SU_Text = 0;
        		$scope.SU_Slider = 0;
        	}
        	$scope.SU_fleet_HP = ships.succubus.stats.HP * $scope.SU_Text;
        	$scope.SU_fleet_Shield = ships.succubus.stats.shield * $scope.SU_Text;
        	$scope.SU_fleet_Attk = ships.succubus.stats.attack * $scope.SU_Text;
        	ships.succubus.assembled = $scope.SU_Text;
    	});
    	$scope.$watch('SU_Slider', function (newValue, oldValue) {
        	$scope.SU_fleet_HP = ships.succubus.stats.HP * $scope.SU_Slider;
        	$scope.SU_fleet_Shield = ships.succubus.stats.shield * $scope.SU_Slider;
        	$scope.SU_fleet_Attk = ships.succubus.stats.attack * $scope.SU_Slider;
        	ships.succubus.assembled = $scope.SU_Slider;
        });




    	if (ships.colossus.current_owned==0){
			$('#COL_form').hide();
		}else{
			$( "#filler_prep" ).animate({ "height": "+=85px" }, 100);
		}
		$scope.COL_Text = 0;
		$scope.COL_Slider = 0;
		$scope.COL_fleet_HP = 0;
		$scope.COL_fleet_Shield = 0;
		$scope.COL_fleet_Attk = 0;
		$scope.$watch('COL_Text', function (newValue, oldValue) {
        	if (newValue>ships.colossus.current_owned){
        		$scope.COL_Text = ships.colossus.current_owned;
        	}
        	if (!Number(newValue)){
        		$scope.COL_Text = 0;
        		$scope.COL_Slider = 0;
        	}
        	$scope.COL_fleet_HP = ships.colossus.stats.HP * $scope.COL_Text;
        	$scope.COL_fleet_Shield = ships.colossus.stats.shield * $scope.COL_Text;
        	$scope.COL_fleet_Attk = ships.colossus.stats.attack * $scope.COL_Text;
        	ships.colossus.assembled = $scope.COL_Text;
    	});
    	$scope.$watch('COL_Slider', function (newValue, oldValue) {
        	$scope.COL_fleet_HP = ships.colossus.stats.HP * $scope.COL_Slider;
        	$scope.COL_fleet_Shield = ships.colossus.stats.shield * $scope.COL_Slider;
        	$scope.COL_fleet_Attk = ships.colossus.stats.attack * $scope.COL_Slider;
        	ships.colossus.assembled = $scope.COL_Slider;
        });



    	if (ships.medusa.current_owned==0){
			$('#MD_form').hide();
		}else{
			$( "#filler_prep" ).animate({ "height": "+=85px" }, 100);
		}
		$scope.MD_Text = 0;
		$scope.MD_Slider = 0;
		$scope.MD_fleet_HP = 0;
		$scope.MD_fleet_Shield = 0;
		$scope.MD_fleet_Attk = 0;
		$scope.$watch('MD_Text', function (newValue, oldValue) {
        	if (newValue>ships.medusa.current_owned){
        		$scope.MD_Text = ships.medusa.current_owned;
        	}
        	if (!Number(newValue)){
        		$scope.MD_Text = 0;
        		$scope.MD_Slider = 0;
        	}
        	$scope.MD_fleet_HP = ships.medusa.stats.HP * $scope.MD_Text;
        	$scope.MD_fleet_Shield = ships.medusa.stats.shield * $scope.MD_Text;
        	$scope.MD_fleet_Attk = ships.medusa.stats.attack * $scope.MD_Text;
        	ships.medusa.assembled = $scope.MD_Text;
    	});
    	$scope.$watch('MD_Slider', function (newValue, oldValue) {
        	$scope.MD_fleet_HP = ships.medusa.stats.HP * $scope.MD_Slider;
        	$scope.MD_fleet_Shield = ships.medusa.stats.shield * $scope.MD_Slider;
        	$scope.MD_fleet_Attk = ships.medusa.stats.attack * $scope.MD_Slider;
        	ships.medusa.assembled = $scope.MD_Slider;
        });



        if (ships.science_vessel.current_owned==0){
			$('#SV_form').hide();
		}else{
			$( "#filler_prep" ).animate({ "height": "+=85px" }, 100);
		}
		$scope.SV_Text = 0;
		$scope.SV_Slider = 0;
		$scope.SV_fleet_HP = 0;
		$scope.SV_fleet_Shield = 0;
		$scope.SV_fleet_Attk = 0;
		$scope.$watch('SV_Text', function (newValue, oldValue) {
        	if (newValue>ships.science_vessel.current_owned){
        		$scope.SV_Text = ships.science_vessel.current_owned;
        	}
        	if (!Number(newValue)){
        		$scope.SV_Text = 0;
        		$scope.SV_Slider = 0;
        	}
        	$scope.SV_fleet_HP = ships.science_vessel.stats.HP * $scope.SV_Text;
        	$scope.SV_fleet_Shield = ships.science_vessel.stats.shield * $scope.SV_Text;
        	$scope.SV_fleet_Attk = ships.science_vessel.stats.attack * $scope.SV_Text;
        	ships.science_vessel.assembled = $scope.SV_Text;
    	});
    	$scope.$watch('SV_Slider', function (newValue, oldValue) {
        	$scope.SV_fleet_HP = ships.science_vessel.stats.HP * $scope.SV_Slider;
        	$scope.SV_fleet_Shield = ships.science_vessel.stats.shield * $scope.SV_Slider;
        	$scope.SV_fleet_Attk = ships.science_vessel.stats.attack * $scope.SV_Slider;
        	ships.science_vessel.assembled = $scope.SV_Slider;
        });



        if (ships.pantheon.current_owned==0){
			$('#PTH_form').hide();
		}else{
			$( "#filler_prep" ).animate({ "height": "+=85px" }, 100);
		}
		$scope.PTH_Text = 0;
		$scope.PTH_Slider = 0;
		$scope.PTH_fleet_HP = 0;
		$scope.PTH_fleet_Shield = 0;
		$scope.PTH_fleet_Attk = 0;
		$scope.$watch('PTH_Text', function (newValue, oldValue) {
        	if (newValue>ships.pantheon.current_owned){
        		$scope.PTH_Text = ships.pantheon.current_owned;
        	}
        	if (!Number(newValue)){
        		$scope.PTH_Text = 0;
        		$scope.PTH_Slider = 0;
        	}
        	$scope.PTH_fleet_HP = ships.pantheon.stats.HP * $scope.PTH_Text;
        	$scope.PTH_fleet_Shield = ships.pantheon.stats.shield * $scope.PTH_Text;
        	$scope.PTH_fleet_Attk = ships.pantheon.stats.attack * $scope.PTH_Text;
        	ships.pantheon.assembled = $scope.PTH_Text;
    	});
    	$scope.$watch('PTH_Slider', function (newValue, oldValue) {
        	$scope.PTH_fleet_HP = ships.pantheon.stats.HP * $scope.PTH_Slider;
        	$scope.PTH_fleet_Shield = ships.pantheon.stats.shield * $scope.PTH_Slider;
        	$scope.PTH_fleet_Attk = ships.pantheon.stats.attack * $scope.PTH_Slider;
        	ships.pantheon.assembled = $scope.PTH_Slider;
        });









		$scope.Advance = function()
		{

			if(ships.light_fighter.assembled+ships.heavy_fighter.assembled+ships.worg.assembled+
				ships.destroyer.assembled+ships.medusa.assembled+ships.succubus.assembled+
				ships.science_vessel.assembled+ships.colossus.assembled+ships.pantheon.assembled ==0){

				toastr.error("Please select at least one fleet"
						, opts);
				return false;
			}

			$rootScope.currentModal.close();
			$scope.openModal('battle', 'lg', 'static');
		};




	}).controller('PostBattleDefeatCtrl', function($rootScope,$scope, $element, $modal, $timeout, $interval)
	{
		$scope.metal = metal;
		$scope.crystal = crystal;
		$scope.research_lab = research_lab;
		$scope.shipyard = shipyard;
		$scope.dm_lab = dm_lab;
		$scope.artifacts = artifacts;
		$scope.specialization = specialization;
		$scope.raids = raids;
		$scope.ships = ships;
		$scope.level = level;
		var count=0;
		$rootScope.instance_data;
		$scope.ships_data;
		$.ajaxSetup({
    async: false
	});
		$scope.find_index= function(item, list) {

			return find_index_g(item, list);
		}


		$scope.remaining_hp_percent = Number($rootScope.CUR_TOT_HP/$rootScope.MAX_TOT_HP_ROOT *100).toFixed(1);
		var remaining_hp_counter = angular.element( document.querySelector( '#remaining_hp_count' ) );
		remaining_hp_counter.attr('data-to', $scope.remaining_hp_percent );
		$( ".remaining_hp" ).animate({ "left": "+=200px", "opacity":"1" }, 1300);

		//calculate casualties
		//0-50, 10-45




		$scope.casualties_rate = (100-$scope.remaining_hp_percent)/1.6;
		for (var key in ships) {


				ships[key]["casualties"] = 0;



			for(var i=0; i < ships[key]["assembled"]; i++){
				if(Math.floor((Math.random() * 100) + 1) < $scope.casualties_rate)
				{
					ships[key]["current_owned"] -= 1;
					ships[key]["casualties"] += 1;
				}
			}
		}

		$timeout(function(){
			$( ".casualties" ).animate({ "left": "+=200px", "opacity":"1" }, 1300);
		}, 1300);



		//calculate loot


		$scope.drops = $rootScope.instance_data[$rootScope.current_instance]['normal']['drops'];
		metal.current_owned += $rootScope.metal_reward;
		crystal.current_owned += $rootScope.crystal_reward;
		$scope.artifact_loot=[];

		for(var i=0; i < $rootScope.artifact_reward; i++){
			var dice = Math.floor((Math.random() * 100) + 1);
			if(dice > 95)//Legend
			{
				$scope.artifact_loot.push($scope.drops['legendary'][Math.floor(Math.random()*$scope.drops['legendary'].length)]);


			}else if(dice > 75)//epic
			{
				$scope.artifact_loot.push($scope.drops['epic'][Math.floor(Math.random()*$scope.drops['epic'].length)]);

			}else if(dice > 65)//rare
			{
				$scope.artifact_loot.push($scope.drops['rare'][Math.floor(Math.random()*$scope.drops['rare'].length)]);

			}else//uncommon
			{
				var artifact_name_temp=$scope.drops['uncommon'][Math.floor(Math.random()*$scope.drops['uncommon'].length)];
				$scope.artifact_loot.push(artifact_name_temp);
				for(var j=0; j < artifacts.artifact_list.length; j++){
					if(artifacts.artifact_list[j].name==artifact_name_temp)
						artifacts.artifact_list[j].current_owned+=1;
				}

			}
		}




		$timeout(function(){
			$( ".loot" ).animate({ "left": "+=200px", "opacity":"1" }, 1300);
		}, 2600);

		raids[$rootScope.current_instance]['timer']="00:15:00";

	}).controller('PostBattleVictoryCtrl', function($rootScope,$scope, $element, $modal, $timeout, $interval)
	{
		$scope.metal = metal;
		$scope.crystal = crystal;
		$scope.research_lab = research_lab;
		$scope.shipyard = shipyard;
		$scope.dm_lab = dm_lab;
		$scope.artifacts = artifacts;
		$scope.specialization = specialization;
		$scope.raids = raids;
		$scope.ships = ships;
		$scope.level = level;
		var count=0;
		$rootScope.instance_data;
		$scope.ships_data;
		$.ajaxSetup({
    async: false
	});
		$scope.find_index= function(item, list) {

			return find_index_g(item, list);
		}


		$scope.metal = metal;
		$scope.crystal = crystal;
		$scope.research_lab = research_lab;
		$scope.shipyard = shipyard;
		$scope.dm_lab = dm_lab;
		$scope.artifacts = artifacts;
		$scope.specialization = specialization;
		$scope.raids = raids;
		$scope.ships = ships;
		$scope.level = level;
		var count=0;
		$rootScope.instance_data;
		$scope.ships_data;
		$.ajaxSetup({
    async: false
	});



		$scope.remaining_hp_percent = Number($rootScope.CUR_TOT_HP/$rootScope.MAX_TOT_HP_ROOT *100).toFixed(1);
		var remaining_hp_counter = angular.element( document.querySelector( '#remaining_hp_count' ) );
		remaining_hp_counter.attr('data-to', $scope.remaining_hp_percent );
		$( ".remaining_hp" ).animate({ "left": "+=200px", "opacity":"1" }, 1300);

		//calculate casualties
		//0-50, 10-45




		$scope.casualties_rate = (100-$scope.remaining_hp_percent)/2;
		for (var key in ships) {


				ships[key]["casualties"] = 0;



			for(var i=0; i < ships[key]["assembled"]; i++){
				if(Math.floor((Math.random() * 100) + 1) < $scope.casualties_rate)
				{
					ships[key]["current_owned"] -= 1;
					ships[key]["casualties"] += 1;
				}
			}
		}

		$timeout(function(){
			$( ".casualties" ).animate({ "left": "+=200px", "opacity":"1" }, 1300);
		}, 1300);



		//calculate loot


		$scope.drops = $rootScope.instance_data[$rootScope.current_instance]['normal']['drops'];
		metal.current_owned += $rootScope.metal_reward;
		crystal.current_owned += $rootScope.crystal_reward;
		$scope.artifact_loot=[];


		for(var i=0; i < $rootScope.artifact_reward; i++){
			var dice = Math.floor((Math.random() * 100) + 1);
			if(dice > 95)//Legend
			{
				$scope.artifact_loot.push($scope.drops['legendary'][Math.floor(Math.random()*$scope.drops['legendary'].length)]);


			}else if(dice > 75)//epic
			{
				$scope.artifact_loot.push($scope.drops['epic'][Math.floor(Math.random()*$scope.drops['epic'].length)]);

			}else if(dice > 65)//rare
			{
				$scope.artifact_loot.push($scope.drops['rare'][Math.floor(Math.random()*$scope.drops['rare'].length)]);

			}else//uncommon
			{
				var artifact_name_temp=$scope.drops['uncommon'][Math.floor(Math.random()*$scope.drops['uncommon'].length)];
				$scope.artifact_loot.push(artifact_name_temp);
				for(var j=0; j < artifacts.artifact_list.length; j++){

					if(artifacts.artifact_list[j].name==artifact_name_temp){

							artifacts.artifact_list[j].current_owned+=1;
					}

				}

			}
		}



		$timeout(function(){
			$( ".loot" ).animate({ "left": "+=200px", "opacity":"1" }, 1300);
		}, 2600);




		raids[$rootScope.current_instance]['timer']="00:30:00";
		Update_Next_Level_Requirement();





	}).controller('MainBattleCtrl', function($rootScope,$scope, $element, $modal, $timeout, $interval)
	{
		$scope.metal = metal;
		$scope.crystal = crystal;
		$scope.research_lab = research_lab;
		$scope.shipyard = shipyard;
		$scope.dm_lab = dm_lab;
		$scope.artifacts = artifacts;
		$scope.specialization = specialization;
		$scope.raids = raids;
		$scope.ships = ships;
		$scope.level = level;
		var count=0;
		$scope.ships_data;
		$.ajaxSetup({
    async: false
	});



		$scope.format_number= function(num) {
			if (num >= 10000){
				return (num/1000).toFixed(1) + 'k';
			}
			if (num >= 1000000){
				return (num/1000000).toFixed(1) + 'm';
			}
			if (num >= 1000000000){
				return (num/1000000000).toFixed(1) + 'b';
			}
		    return num;
		}
		$scope.openModal = function(modal_id, modal_size, modal_backdrop)
		{
			$rootScope.currentModal = $modal.open({
				templateUrl: modal_id,
				size: modal_size,
				backdrop: typeof modal_backdrop == 'undefined' ? true : modal_backdrop
			});
		};






		//load current instance info
		$.getJSON( '../../assets/raids_info.json', function( data ) {
		  $.each( data, function( key, val ) {
		    //console.log(data[$rootScope.current_instance]['normal']['floor_num']);
				$rootScope.instance_data = data;

		  });

		});
		/*
		//load current instance ships info
		$.getJSON( '../../assets/raids_ships.json', function( data ) {
		  $.each( data, function( key, val ) {
		    //console.log(val);
				$scope.ships_data = data;
		  });

		});
		*/







		$scope.total_floor_num = $rootScope.instance_data[$rootScope.current_instance]['normal']['floor_num'];




		//preparation
		$scope.current_LF_HP = ships.light_fighter.stats.HP * ships.light_fighter.assembled;
		$scope.current_LF_Shield = ships.light_fighter.stats.shield * ships.light_fighter.assembled;
		$scope.current_LF_Attack = ships.light_fighter.stats.attack * ships.light_fighter.assembled;
		$scope.current_HF_HP = ships.heavy_fighter.stats.HP * ships.heavy_fighter.assembled;
		$scope.current_HF_Shield = ships.heavy_fighter.stats.shield * ships.heavy_fighter.assembled;
		$scope.current_HF_Attack = ships.heavy_fighter.stats.attack * ships.heavy_fighter.assembled;
		$scope.current_WG_HP = ships.worg.stats.HP * ships.worg.assembled;
		$scope.current_WG_Shield = ships.worg.stats.shield * ships.worg.assembled;
		$scope.current_WG_Attack = ships.worg.stats.attack * ships.worg.assembled;
		$scope.current_DS_HP = ships.destroyer.stats.HP * ships.destroyer.assembled;
		$scope.current_DS_Shield = ships.destroyer.stats.shield * ships.destroyer.assembled;
		$scope.current_DS_Attack = ships.destroyer.stats.attack * ships.destroyer.assembled;
		$scope.current_SU_HP = ships.succubus.stats.HP * ships.succubus.assembled;
		$scope.current_SU_Shield = ships.succubus.stats.shield * ships.succubus.assembled;
		$scope.current_SU_Attack = ships.succubus.stats.attack * ships.succubus.assembled;
		$scope.current_COL_HP = ships.colossus.stats.HP * ships.colossus.assembled;
		$scope.current_COL_Shield = ships.colossus.stats.shield * ships.colossus.assembled;
		$scope.current_COL_Attack = ships.colossus.stats.attack * ships.colossus.assembled;
		$scope.current_MD_HP = ships.medusa.stats.HP * ships.medusa.assembled;
		$scope.current_MD_Shield = ships.medusa.stats.shield * ships.medusa.assembled;
		$scope.current_MD_Attack = ships.medusa.stats.attack * ships.medusa.assembled;
		$scope.current_SV_HP = ships.science_vessel.stats.HP * ships.science_vessel.assembled;
		$scope.current_SV_Shield = ships.science_vessel.stats.shield * ships.science_vessel.assembled;
		$scope.current_SV_Attack = ships.science_vessel.stats.attack * ships.science_vessel.assembled;
		$scope.current_PTH_HP = ships.pantheon.stats.HP * ships.pantheon.assembled;
		$scope.current_PTH_Shield = ships.pantheon.stats.shield * ships.pantheon.assembled;
		$scope.current_PTH_Attack = ships.pantheon.stats.attack * ships.pantheon.assembled;
		$scope.filler_height =0;

		$scope.MAX_TOT_HP = $scope.current_LF_HP+$scope.current_HF_HP+$scope.current_WG_HP+$scope.current_DS_HP+$scope.current_SU_HP+$scope.current_COL_HP+$scope.current_MD_HP+$scope.current_SV_HP+$scope.current_PTH_HP;
		$scope.MAX_TOT_SHIELD = $scope.current_LF_Shield+$scope.current_HF_Shield+$scope.current_WG_Shield+$scope.current_DS_Shield+$scope.current_SU_Shield+$scope.current_COL_Shield+$scope.current_MD_Shield+$scope.current_SV_Shield+$scope.current_PTH_Shield;
		$rootScope.MAX_TOT_HP_ROOT = $scope.MAX_TOT_HP;
		$rootScope.MAX_TOT_SHIELD_ROOT = $scope.MAX_TOT_SHIELD;
		//$scope.CUR_TOT_HP = $scope.current_LF_HP+$scope.current_HF_HP+$scope.current_WG_HP+$scope.current_DS_HP+$scope.current_SU_HP+$scope.current_COL_HP+$scope.current_MD_HP+$scope.current_SV_HP+$scope.current_PTH_HP;
		//$scope.CUR_TOT_SHIELD = $scope.current_LF_Shield+$scope.current_HF_Shield+$scope.current_WG_Shield+$scope.current_DS_Shield+$scope.current_SU_Shield+$scope.current_COL_Shield+$scope.current_MD_Shield+$scope.current_SV_Shield+$scope.current_PTH_Shield;



		if($rootScope.current_floor==1){
			$rootScope.CUR_TOT_HP = $scope.MAX_TOT_HP;
			$rootScope.CUR_TOT_SHIELD =  $scope.MAX_TOT_SHIELD;
		}








		$scope.progress_TOT_HP = {
			value: 0,
			max: $scope.MAX_TOT_HP,
			color: 'danger'
		};
		$scope.progress_TOT_Shield = {
			value: 0,
			max: $scope.MAX_TOT_HP,
			color: 'info'
		};
		$timeout(function(){
				$( "#TOT_battle" ).animate({ "left": "+=150px", "opacity":"1" }, 500);

				$timeout(function(){
					$scope.progress_TOT_HP.value = $rootScope.CUR_TOT_HP;
					$scope.progress_TOT_Shield.value = $rootScope.CUR_TOT_SHIELD;
				}, 300);

		}, 500);






		if(ships.light_fighter.assembled>0){


					$scope.filler_height = $scope.filler_height+200;
					count=count+1;


					$timeout(function(){
							$( "#LF_battle" ).animate({ "left": "+=150px", "opacity":"1" }, 500);
					}, 500);





		}


		if(ships.heavy_fighter.assembled>0){

					$scope.filler_height = $scope.filler_height+200;
					count=count+1;
					$timeout(function(){
							$( "#HF_battle" ).animate({ "left": "+=150px", "opacity":"1" }, 500);
					}, 500);





		}

		if(ships.worg.assembled>0){
				$scope.filler_height = $scope.filler_height+200;
				count=count+1;
					$timeout(function(){
							$( "#WG_battle" ).animate({ "left": "+=150px", "opacity":"1" }, 500);

					}, 500);





		}

		if(ships.destroyer.assembled>0){
			$scope.filler_height = $scope.filler_height+200;
			count=count+1;


					$timeout(function(){
							$( "#DS_battle" ).animate({ "left": "+=150px", "opacity":"1" }, 500);
					}, 500);





		}

		if(ships.succubus.assembled>0){
			$scope.filler_height = $scope.filler_height+200;
			count=count+1;

					$timeout(function(){
							$( "#SU_battle" ).animate({ "left": "+=150px", "opacity":"1" }, 500);
					}, 500);





		}

		if(ships.colossus.assembled>0){
			$scope.filler_height = $scope.filler_height+200;
			count=count+1;

					$timeout(function(){
							$( "#COL_battle" ).animate({ "left": "+=150px", "opacity":"1" }, 500);

					}, 500);





		}

		if(ships.medusa.assembled>0){
			$scope.filler_height = $scope.filler_height+200;
			count=count+1;

					$timeout(function(){
							$( "#MD_battle" ).animate({ "left": "+=150px", "opacity":"1" }, 500);

					}, 500);





		}

		if(ships.science_vessel.assembled>0){

			$scope.filler_height = $scope.filler_height+200;
			count=count+1;
					$timeout(function(){
							$( "#SV_battle" ).animate({ "left": "+=150px", "opacity":"1" }, 500);

					}, 500);





		}

		if(ships.pantheon.assembled>0){
			$scope.filler_height = $scope.filler_height+200;
			count=count+1;

					$timeout(function(){
							$( "#PTH_battle" ).animate({ "left": "+=150px", "opacity":"1" }, 500);

					}, 500);

		}




		//ENEMIES ready
		$scope.enemies = $rootScope.instance_data[$rootScope.current_instance]['normal']['floors'][String($rootScope.current_floor)]
		$scope.enemies.forEach(function(data)
		{
		  if(count>0){
				count -=1;
			}else{
				$scope.filler_height = $scope.filler_height+200;
			}
		});

		$scope.filler_height = String($scope.filler_height)+"px";




		//calulate enemy stats for this floor
		$scope.MAX_TOT_HP_ENEMY = 0;
		$scope.CUR_TOT_HP_ENEMY = 0;
		$scope.MAX_TOT_SHIELD_ENEMY = 0;
		$scope.CUR_TOT_SHIELD_ENEMY = 0;
		for(var i=0; i < $scope.enemies.length; i++){
	    	$scope.MAX_TOT_HP_ENEMY += $scope.enemies[i].info.HP * $scope.enemies[i].info.amount;
	    	$scope.CUR_TOT_HP_ENEMY += $scope.enemies[i].info.HP * $scope.enemies[i].info.amount;
	    	$scope.MAX_TOT_SHIELD_ENEMY += $scope.enemies[i].info.Shields * $scope.enemies[i].info.amount;
	    	$scope.CUR_TOT_SHIELD_ENEMY += $scope.enemies[i].info.Shields * $scope.enemies[i].info.amount;
		}








		$timeout(function(){

			$( ".battle_div_enemies_animate" ).animate({ "left": "-=215px", "opacity":"1" }, 500);
			$( ".battle_div_enemies_bar" ).animate({ "left": "-=150px", "opacity":"1" }, 500);
			//$( "#TOT_battle_enemy" ).animate({ "left": "-=150px", "opacity":"1" }, 500);


			$scope.progress_TOT_HP_enemy = {
				value: 0,
				max: $scope.MAX_TOT_HP_ENEMY,
				color: 'danger'
			};
			$scope.progress_TOT_Shield_enemy = {
				value: 0,
				max: $scope.MAX_TOT_HP_ENEMY,
				color: 'info'
			};
			$timeout(function(){


					$timeout(function(){
						$scope.progress_TOT_HP_enemy.value = $scope.CUR_TOT_HP_ENEMY;
						$scope.progress_TOT_Shield_enemy.value = $scope.CUR_TOT_SHIELD_ENEMY;
					}, 100);

			}, 300);

		}, 1500);





		$timeout(function(){
			$('.Start').show("slow");
			$('.Abandon').show("slow");
			}, 2500);


		$('.NextFloor').hide();
		$('.Start').hide();
		$('.Abandon').hide();

		//ready the loot

		var start;

		//START FUNTION
		$scope.Start = function()
		{
			$('.Start').hide();
			start = $interval(function(){

								if ($scope.progress_TOT_Shield_enemy.value>0){

									if ($scope.progress_TOT_Shield_enemy.value - ($scope.current_LF_Attack+$scope.current_HF_Attack+$scope.current_WG_Attack+$scope.current_DS_Attack+$scope.current_COL_Attack+$scope.current_SU_Attack+$scope.current_MD_Attack+$scope.current_SV_Attack+$scope.current_PTH_Attack)/5<0){
										$scope.progress_TOT_Shield_enemy.value=0;
									}else{
										$scope.progress_TOT_Shield_enemy.value -= ($scope.current_LF_Attack+$scope.current_HF_Attack+$scope.current_WG_Attack+$scope.current_DS_Attack+$scope.current_COL_Attack+$scope.current_SU_Attack+$scope.current_MD_Attack+$scope.current_SV_Attack+$scope.current_PTH_Attack)/5
									};

									if($scope.CUR_TOT_SHIELD_ENEMY - ($scope.current_LF_Attack+$scope.current_HF_Attack+$scope.current_WG_Attack+$scope.current_DS_Attack+$scope.current_COL_Attack+$scope.current_SU_Attack+$scope.current_MD_Attack+$scope.current_SV_Attack+$scope.current_PTH_Attack)/5<0){
										$scope.CUR_TOT_SHIELD_ENEMY =0;
									}else{
										$scope.CUR_TOT_SHIELD_ENEMY -= ($scope.current_LF_Attack+$scope.current_HF_Attack+$scope.current_WG_Attack+$scope.current_DS_Attack+$scope.current_COL_Attack+$scope.current_SU_Attack+$scope.current_MD_Attack+$scope.current_SV_Attack+$scope.current_PTH_Attack)/5;
									};

								}else{
									if ($scope.progress_TOT_HP_enemy.value - ($scope.current_LF_Attack+$scope.current_HF_Attack+$scope.current_WG_Attack+$scope.current_DS_Attack+$scope.current_COL_Attack+$scope.current_SU_Attack+$scope.current_MD_Attack+$scope.current_SV_Attack+$scope.current_PTH_Attack)/5<0){
										$scope.progress_TOT_HP_enemy.value=0;
									}else{
										$scope.progress_TOT_HP_enemy.value -= ($scope.current_LF_Attack+$scope.current_HF_Attack+$scope.current_WG_Attack+$scope.current_DS_Attack+$scope.current_COL_Attack+$scope.current_SU_Attack+$scope.current_MD_Attack+$scope.current_SV_Attack+$scope.current_PTH_Attack)/5
									};


									if ($scope.CUR_TOT_HP_ENEMY - ($scope.current_LF_Attack+$scope.current_HF_Attack+$scope.current_WG_Attack+$scope.current_DS_Attack+$scope.current_COL_Attack+$scope.current_SU_Attack+$scope.current_MD_Attack+$scope.current_SV_Attack+$scope.current_PTH_Attack)/5<0){
										$scope.CUR_TOT_HP_ENEMY=0;
									}else{
										$scope.CUR_TOT_HP_ENEMY -= ($scope.current_LF_Attack+$scope.current_HF_Attack+$scope.current_WG_Attack+$scope.current_DS_Attack+$scope.current_COL_Attack+$scope.current_SU_Attack+$scope.current_MD_Attack+$scope.current_SV_Attack+$scope.current_PTH_Attack)/5
									};
								}






								for(var i=0; i < $scope.enemies.length; i++){


										if ($scope.progress_TOT_Shield.value>0){
												if ($scope.progress_TOT_Shield.value - $scope.enemies[i].info.Attack/5 * $scope.enemies[i].info.amount<0){
													$scope.progress_TOT_Shield.value=0;
												}else{
													$scope.progress_TOT_Shield.value -= $scope.enemies[i].info.Attack/5 * $scope.enemies[i].info.amount;
												};
												if ($rootScope.CUR_TOT_SHIELD - $scope.enemies[i].info.Attack/5 * $scope.enemies[i].info.amount<0){
													$rootScope.CUR_TOT_SHIELD=0;
												}else{
													$rootScope.CUR_TOT_SHIELD -= $scope.enemies[i].info.Attack/5 * $scope.enemies[i].info.amount;
												};

											}else{
												if ($scope.progress_TOT_HP.value - $scope.enemies[i].info.Attack/5 * $scope.enemies[i].info.amount<0){
													$scope.progress_TOT_HP.value=0;
												}else{
													$scope.progress_TOT_HP.value -= $scope.enemies[i].info.Attack/5 * $scope.enemies[i].info.amount;
												};
												if ($rootScope.CUR_TOT_HP - $scope.enemies[i].info.Attack/5 * $scope.enemies[i].info.amount<0){
													$rootScope.CUR_TOT_HP=0;
												}else{
													$rootScope.CUR_TOT_HP -= $scope.enemies[i].info.Attack/5 * $scope.enemies[i].info.amount;
												};
										}


								}



								//calculate result
								if($scope.CUR_TOT_HP_ENEMY <=0){
									$scope.CUR_TOT_HP_ENEMY =0;
									$interval.cancel(start);
									$timeout(function(){
										$( ".battle_div_enemies_animate" ).animate({ "opacity":"0" }, 1000);

									}, 400);
									$timeout(function(){
										$( ".battle_div_reward" ).animate({"top":"-=60px", "opacity":"1" }, 2000);
										$timeout(function(){
										$( ".battle_div_reward" ).animate({"opacity":"0" }, 400);

										}, 100);

									}, 700);


									//calculate reward
									for(var i=0; i < $scope.enemies.length; i++){
										$rootScope.metal_reward += $scope.enemies[i].reward_metal;
										$rootScope.crystal_reward += $scope.enemies[i].reward_crystal;

										if ($scope.enemies[i].boss==1){
											var dice = Math.floor((Math.random() * 100) + 1);
											if(dice >90){
												$rootScope.artifact_reward+=3;
											}else if (dice >65){
												$rootScope.artifact_reward+=2;
											}else{
												$rootScope.artifact_reward+=1;
											}

										}
									}




								$timeout(function(){
									if($rootScope.instance_data[$rootScope.current_instance]['normal']['floor_num']== $rootScope.current_floor){
											$rootScope.currentModal.close();
											$scope.openModal('post_battle_victory','static');
									}else{
										$('.NextFloor').show("slow");
									}
								}, 2500);

								}else if ($rootScope.CUR_TOT_HP <=0){
									$rootScope.CUR_TOT_HP=0;
									$interval.cancel(start);
									$timeout(function(){
										$( ".battle_div_friendly" ).animate({"opacity":"0" }, 1000);
									}, 500);

									$timeout(function(){
											$rootScope.currentModal.close();
											$scope.openModal('post_battle_defeat', 'static');
										}, 2500);
								}

			}, 200);




		};



		$scope.NextFloor = function()
		{
			$interval.cancel(start);


			if($rootScope.instance_data[$rootScope.current_instance]['normal']['floor_num']== $rootScope.current_floor){
				$rootScope.currentModal.close();
				$scope.openModal('post_battle_victory', 'lg', 'static');
			}else{
				$scope.progress_TOT_Shield.value = $scope.MAX_TOT_SHIELD;
				$rootScope.CUR_TOT_SHIELD= $scope.MAX_TOT_SHIELD;



				$rootScope.current_floor +=1;
				$rootScope.currentModal.close();

				$scope.openModal('battle', 'lg', 'static');
			}
		};





		//Retreat FUNTION
		$scope.Retreat = function()
		{
			$interval.cancel(start);

			$rootScope.currentModal.close();
			$scope.openModal('post_battle_defeat', 'static');
		};





















	});




 function diminish_artifacts(base_amount, number_owned){

		    	//console.log(Math.floor(base_amount * number_owned *(1/(Math.pow(number_owned,0.4)) )));
		    	var result = Math.floor(base_amount * number_owned * (1/(Math.pow(number_owned,0.4))));

		    	if (result>99.99){
		    		result = 99.99;
		    	}


		    return result
		};



function find_index_g(item, list) {

			for (var i = 0; i < list.length ; i++) {
        		if (list[i].name == item) {
            		return i;
		        }
		 	}

		 	return 'none';

}


function Update_Next_Level_Requirement() {





	var discount = 1;

	if(artifacts['artifact_list'][0]['current_owned']>=1){
			discount = (100 - diminish_artifacts(artifacts['artifact_list'][0]['based_increase_percent'], artifacts['artifact_list'][0]['current_owned']))/100;
		}

	level.level_metal_req =	Math.floor(level.level_metal_req * discount);
	level.level_crystal_req =	Math.floor(level.level_crystal_req * discount);

	return;
}



function Update_All_Ships_Bonuses() {
	for (var ship in ships) {

		ships[ship]['stats']['HP'] = ships[ship]['stats']['HP_base'] * (research_lab['current_lab_level'] * 0.15/100 + 1);
		ships[ship]['stats']['shield'] = ships[ship]['stats']['shield_base'] * (research_lab['current_lab_level'] * 0.1/100 + 1);
		ships[ship]['stats']['attack'] = ships[ship]['stats']['attack_base'] * (shipyard['current_lab_level'] * 0.2/100 + 1);

	}

	return;
}
function Update_metal_income() {
	//check for bonuses....etc
	var temp_metal_income;
	temp_metal_income = Math.floor(metal.income_base  * metal.current_mine_level * Math.pow(1.1,metal.current_mine_level));

	//Dust of Greed
	if(artifacts['artifact_list'][1]['current_owned']>=1){
		temp_metal_income = Math.floor(temp_metal_income * (artifacts['artifact_list'][1]['current_owned'] * artifacts['artifact_list'][1]['based_increase_percent']/100 +1));
	}


	metal.income = temp_metal_income;
    return;
}
function Update_crystal_income() {
	//check for bonuses....etc
	var temp_crystal_income;
	temp_crystal_income = Math.floor(crystal.income_base  * crystal.current_mine_level * Math.pow(1.1,crystal.current_mine_level));


	crystal.income = temp_crystal_income;
    return;
}
function Update_building_cost(building) {
	//check for bonuses....etc
    return "heelo";
}


