
/********************************
PLAN DETAILS & GETTING USER INPUT
********************************/
//Name, Features, and Price
var planDetails = [
                    'Name',
					'Price',
                    'Unlimited Products',
                    'Unlimited Storage',
                    'No Transaction Fee',
                    'Ability to install SSL purchased through BC',
                    'Abandoned Cart Saver',
                    'Omni-Channel Sales Tools',
                    'Customer Groups',
                    'API Support',
                    'Site-wide HTTPS',
                    'Ability to Install SSL purchased through third-party',
                    'Faceted Search',
                    'Google Trusted Stores automation',
                    'SLA up-time agreement (optional)',
                    'Priority Support',
                    'Migration and Data Transfer',
];
//Individual plans matched with planDetails
var plansArr = [
	['Bronze', 24.95, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
	['Silver (1)', 39.95, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
	['Gold (1)', 79.95, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
	['Platinum (1)', 149.95, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0],
  ['Diamond', 299.95, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0],
	['Silver (2)', 34.95, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  ['Gold (2)', 79.95, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
	['Platinum (2)', 199.95, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0],
	['Platinum Plus', 349.95, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0],
	['Silver (3)', 29.95, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
	['Gold (3)', 79.95, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
	['Platinum (3)', 199.95, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  ['Standard', 29.95, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],	
  ['Plus', 79.95, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	['Enterprise', 'Custom', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//Get "Switching from" plan
  //Compare dropdown selection with name string in plansArr
  //If dropdown selection matches plansArr string,
  //variable fromPlan is given the value of the plan's features/name/price
var fromPlan;
function getFromPlan() {
  var selected = document.getElementById('fromPlanList');
  var planName = selected[selected.selectedIndex].text;
  for (var i = 0; i < plansArr.length; i++) {
    if (planName === plansArr[i][0]) {
      fromPlan = plansArr[i];
    }
  }
}
//Same logic as above
var toPlan;
var getToPlan = function() {
  var selected = document.getElementById('toPlanList');
  var planName = selected[selected.selectedIndex].text;
  for (var i = 0; i < plansArr.length; i++) {
    if (planName === plansArr[i][0]) {
      toPlan = plansArr[i];
    }
  }
}

/***************************************
COMPARING PLANS & OUTPUTTING DIFFERENCES
***************************************/
//Compare Plans
  //if both plans are equal, throw error
  //loop through toPlan and fromPlan
  //if values are not equal, compare them
    //if fromPlan's value is less than toPlan's value,
      //x iteration of planDetails is added to "Features Gained"
    //if opposite,
      //x iteration of planDetails is added to "Features Lost"
var comparePlans = function() {
  var gainIt = document.getElementById('gainedList'),
      loseIt = document.getElementById('lostList'),
      priceIt = document.getElementById('priceChange');
      gainIt.innerHTML = '';
      loseIt.innerHTML = '';
      priceIt.innerHTML = '';
  if (toPlan === fromPlan) {
    alert("You chose the same plan twice, ya goof!")
  } else {

      for (var x = 2; x < planDetails.length; x++) {
        if (fromPlan[x] !== toPlan[x]) {
          fromPlan[x] < toPlan[x] ?
          gainIt.innerHTML += '<p>' + planDetails[x] + '</p>' :
          loseIt.innerHTML += '<p>' + planDetails[x] + '</p>';
        }
      }
      var priceDifference = Math.abs(fromPlan[1] - toPlan[1]).toFixed(2),
		  fromPrice = fromPlan[1];
		  toPrice = toPlan[1];
	  if (isNaN(toPrice)) { 
	  priceChange.innerHTML += '<p>$' + fromPrice + ' to ' + toPrice + '</p>' +
							   '<p><strong>Client will need to discuss exact pricing with a sales representative.</strong></p>';
	  }
	  else{
      priceChange.innerHTML += '<p>$' + fromPrice + ' to $' + toPrice + '</p>' +
							   '<p><strong>$' + priceDifference + ' difference</strong></p>';
	  }
      var showComparisons = document.getElementById('planComparisons');
      showComparisons.style.display = 'block';
    }
}
