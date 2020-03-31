/*             DICE ROLLER              */
document.querySelector('input[type=button]#dice-button').addEventListener('click', function(){rollTheDice();});

/*
  becomes a background function, call to calculate hits by status values 
*/
var rollTheDice = function() {

    var i,
        faceValue,
        output = '',
        diceCount = 1;

    for (i = 0; i < diceCount; i++) {
        faceValue = Math.floor(Math.random() * 6);
        output += "&#x268" + faceValue + "; ";
        
        result = faceValue+1;
    }
    // DEV REMOVE !!
    document.getElementById('dice').innerHTML = output;
    document.getElementById('cout').innerHTML = output;
    console.log(output, '\n', result);
    return result;
}

// global
var getTargets = document.getElementById("target-button");
var attackBtn = document.getElementById("attack");

var adversaries = [];

var orig_En_HP = originalHP(player[0].hp),
    orig_Pl_HP = originalHP(enemy[0].hp); 

function originalHP(objHP,newCall) {

  let org_HP = objHP;
  return org_HP;
}

// methods
// write html
function writeHTML(location, text) {

	 document.getElementById(location).innerHTML = text;
}

// get target info
function getTarget(attacker, target) {

    attackerValues = [];
    targetValues = [];
    
    attackerValues.push(attacker[0].hp, attacker[0].lvl, attacker[0].str, attacker[0].evd, attacker[0].int, attacker[0].luc);
    targetValues.push(target[0].hp, target[0].lvl, target[0].str, target[0].evd, target[0].int, target[0].luc);
    
    var attackerStats = ["att-hp","att-lvl","att-str","att-evd","att-int","att-luc"];
    var targetStats = ["tar-hp","tar-lvl","tar-str","tar-evd","tar-int","tar-luc"];
      
    for (i in attackerStats) {
      document.getElementById(attackerStats[i]).innerHTML = attackerValues[i];
      var attHtml = attackerStats[i] + "::" + attackerValues[i];
      document.getElementById("cout").innerHTML = '<p>' + attHtml + '</p><br>';
      console.log(attHtml);
    }
    for (i in targetStats) {
      document.getElementById(targetStats[i]).innerHTML = targetValues[i];
      var tarHtml = targetStats[i] + "::" + targetValues[i];
      document.getElementById("cout").innerHTML = '<p>' + tarHtml + '</p><br>';
      console.log(tarHtml);
    }
    return [attackerValues, targetValues];
}

// total amount damage
function damage(obj, target) {
  
  // luck calc
  function chance(luc) {

      // calculate handicap, extra damage or critical damage
      var chance_A = rollTheDice();
      var chance_B = rollTheDice();
      
      if (chance_A > chance_B) {
          luc = luc + chance_A;
          console.log('damage: luck raised with', chance_A, 'points, luc:', luc);
      } else if (chance_A == chance_B) {
          luc = Math.round(luc * 3);
          console.log('damage: strength x 2', objStr, 'critical hit');
      } else if (chance_A < chance_B) {
          luc = Math.round(luc / 3);
          console.log('damage: strength / 2', objStr, 'weak hit');
      }
      return luc; 
  }

  // incremental damage points by entity level
  // -- total / 100 * lvl(10->100) + total = damage    
  function totalDamage(lvl,s,e,i,l) {
      var total = s+e+i+l;
      var damage = total / 100 * lvl + total / 4;
      
      return damage;
  }
  console.log('damage: object is:', obj[0].name, 'of type:',  obj[0].type, 'target object is:', target[0].name);
  
  var attackDamage;
  var throwVal = rollTheDice();
  var objLvl = obj[0].lvl;
  objLvl = objLvl * 10;
  
  console.log('damage: object level var set to:', objLvl);
  console.log('damage: dice rolls:', throwVal);
  
  var objStr = throwVal*throwVal / throwVal + obj[0].str;
  objStr = Math.round(objStr);
  var objEvd = throwVal*throwVal / throwVal + obj[0].evd;
  objEvd = Math.round(objEvd);
  var objInt = throwVal*throwVal / throwVal + obj[0].int;
  objInt = Math.round(objInt);
  var objLuc = throwVal*throwVal / throwVal + obj[0].luc;
  objLuc = chance(objLuc);

  var result = totalDamage(objLvl,objStr,objEvd,objInt,objLuc);
  console.log('damage:\nstr :', objStr, '\nevd :', objEvd, '\nint :', objInt, '\nluc :', objLuc);
  return Math.round(result);
}

// handle death
function targetDeath(obj_1, obj_2) {

    // check for death
    let chkHp_1 = obj_1[0].hp,
        chkHp_2 = obj_2[0].hp,
        constant = 0.04,
        result;

    console.log(chkHp_1,chkHp_2,obj_1, obj_2);
        var percentage = (obj_1[0].exp);

        console.log('percentage', percentage);   

    if (chkHp_2 <= 0) {

        switch (obj_2[0].type) {
            case "enemy":

                // enemy death
                console.log('defeated ', obj_2[0].name, 'enemy');
                console.log('calculating experience points and levelgrowth');
               
                var xpStyle = document.getElementById("XP"),
                    enStype = document.getElementById("npcHP");
                xpStyle.style.width = percentage + '%';
                document.getElementById("level").innerHTML= "Level : " + obj_1[0].lvl;
                obj_1[0].exp = obj_1[0].exp + obj_2[0].exp;
                console.log('player experience added:', obj_2[0].exp, '\nplayer experience now:', obj_1[0].exp);

                if (obj_1[0].exp > 100) {
                    obj_1[0].exp = 0;
                    obj_1[0].lvl++;
                    console.log('experience is over 100, level up:', obj_1[0].lvl);
                  }

                console.log('player level:', obj_1[0].lvl);
                
                result = "victory";
                console.log('defeated,', obj_2[0].name);
                break;
            case "player":

                // player death
                console.log('player,', obj_2[0].name, 'defeated by,',obj_1[0].name);
                result = "death";

                console.log('game over');
                break;
        }        
    }
    return result;     
}

// calculate percentage
function percentage(hit, objHP) {

    console.log('original HP:', objHP, '\nhit:', hit);
    return Math.floor((hit/objHP) * 100).toFixed(2) + '%';
}

/*                              Buttons                             */
// target button
getTargets.onclick = function(e) {
    e.preventDefault();
    
    // load targets
    adversaries = getTarget(player, enemy);
}

var turnVal = 0;
attackBtn.onclick = function(e) {
    e.preventDefault();

    var cout = document.getElementById("cout");
    var hit,
        enemyHp = enemy[0].hp,
        playerHp = player[0].hp;

    if (turnVal == 0) {

        turnVal = 1;

        console.log('turn:', turnVal);

        cout.innerHTML += "player attacks !!<br>";
        hit = damage(player, enemy);
        cout.innerHTML += "strike !! , player, " +player[0].name+ " does " +hit+ " hp damage !<br>";
        enemy[0].hp = enemyHp - hit;
        cout.innerHTML += "enemy, " +enemy[0].name+ " HP down to:" +enemy[0].hp+ "points<br>";

        if (targetDeath(player, enemy) == "death") {
            cout.innerHTML += "player, " +player[0].name+ " DIED !";
            player[0].status = "dead";

            cout.innerHTML += "Game Over !";
        }
      
    } else if (turnVal == 1) {
      
        turnVal = 0;
        cout.innerHTML += "enemy attack !!<br>";
        hit = damage(enemy, player);
        cout.innerHTML += "strike !! , enemy, " +enemy[0].name+ " does " +hit+ " hp damage !<br>";
        player[0].hp = playerHp - hit;
        cout.innerHTML += "player, " +player[0].name+ " HP down to:" +player[0].hp+ "points<br>";

        if (targetDeath(enemy, player) == "death") {
            cout.innerHTML += "enemy, " +enemy[0].name+ " defeated";
            enemy[0].status = "dead";

            cout.innerHTML += "victory";
        }
    }
    getTarget(player, enemy);
}