var metal = {
  current_metal:0,
  current_mine_level:1
}



var gas = 0;
var gasmine = 1;




var level_metal_req=0;
var level_gas_req=0;
var level=1;

function ClickMetal(number){
    metal.current_metal = metal.current_metal + number;
    document.getElementById("metal").innerHTML = metal.current_metal;

    var temp = Math.floor((Math.random() * 100) + 1);
    if (temp >= 80){
      gas = gas + number;
      document.getElementById("gas").innerHTML = gas;
    };

};


function buymetalCursor(){



    var cursorCost = Math.floor(5 * Math.pow(1.1,metal.current_mine_level));     //works out the cost of this cursor


    if (metal.current_mine_level ==1){
      cursorCost = 5;
    }


    if(metal.current_metal >= cursorCost){                                   //checks that the player can afford the cursor
        metal.current_mine_level = metal.current_mine_level + 1;                                   //increases number of cursors
    	   metal.current_metal = metal.current_metal - cursorCost;                          //removes the cookies spent
        document.getElementById('metalcursors').innerHTML = metal.current_mine_level;  //updates the number of cursors for the user
        document.getElementById('metal').innerHTML = metal.current_metal;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(5 * Math.pow(1.1,metal.current_mine_level));       //works out the cost of the next cursor
    document.getElementById('metalcursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};



function ClickGas(number){
    gas = gas + number;
    document.getElementById("gas").innerHTML = gas;


    var temp = Math.floor((Math.random() * 100) + 1);
    if (temp >= 80){
      metal.current_metal = metal.current_metal + number;
      document.getElementById("metal").innerHTML = metal.current_metal;
    };
};


function buygasCursor(){
    var gascursorCost = Math.floor(10 * Math.pow(1.3,gasmine));     //works out the cost of this cursor

    if (gasmine ==1){
      gascursorCost = 30;
    }


    if(gas >= gascursorCost){                                   //checks that the player can afford the cursor
        gasmine = gasmine + 1;                                   //increases number of cursors
    	gas = gas - gascursorCost;                          //removes the cookies spent
        document.getElementById('gascursors').innerHTML = gasmine;  //updates the number of cursors for the user
        document.getElementById('gas').innerHTML = gas;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.3,gasmine));       //works out the cost of the next cursor
    document.getElementById('gascursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};






function NextLevel(){
    var level_metal_req_temp = Math.floor(40 * Math.pow(1.5,level));
    var level_gas_req_temp = Math.floor(30 * Math.pow(1.4,level));       //works out the cost of this cursor

    if (level ==1){
      level_metal_req_temp = 40;
      level_gas_req_temp = 30;
    }

    if((metal.current_metal >= level_metal_req_temp) && (gas >= level_gas_req_temp)){
      level = level + 1
      gas = gas - level_gas_req_temp;
      metal.current_metal = metal.current_metal - level_metal_req_temp;


      var next_metal_Cost = Math.floor(40 * Math.pow(1.5,level));
      var next_gas_Cost = Math.floor(30 * Math.pow(1.4,level));
      document.getElementById('metal_req').innerHTML = next_metal_Cost;
      document.getElementById('gas_req').innerHTML = next_gas_Cost;
      document.getElementById('level').innerHTML = level;   //updates the cursor cost for the user
    };


};










window.setInterval(function(){

	ClickMetal(metal.current_mine_level);
  ClickGas(gasmine);


}, 1000);
