/********************************
PLAN DETAILS & GETTING USER INPUT
********************************/

//Name, Features, and Price
var planDetails = [
    'Name',
    'Price',
    'Unlimited Products',
    'Unlimited Storage',
    'Ability to install SSL purchased through BC',
    'Ability to Install SSL purchased through third-party',
    'Google Shopping',
    'eBay Listings',
    'No Transaction Fee!',
    'Abandoned Cart Saver',
    'Customer Groups',
    'Shopping Comparison Sites (Nextag, Shopzilla, etc.)',
    'Site-wide HTTPS',
    'Sift Science (fraud protection app)',
    'Google Trusted Stores automation',
    'API Support',
    'Faceted Search',
    'SLA up-time agreement (optional, depends on tier)',
    'Priority Support (depends on tier)',
    'Strategic Account Management (depends on tier)',
    'Dedicated Onboarding Assistant (depends on tier)',
    'Migration and Data Transfer',
    'ShipperHQ'
];

//Individual plans matched with planDetails
var plansArr = [
    ['Bronze (Original)', 24.95, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Silver (Original)', 39.95, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Gold (Original)', 79.95, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Platinum (Original)', 149.95, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Diamond (Original)', 299.95, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Platinum Plus (Next)', 349.95, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    ['Silver (Next)', 29.95, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Gold (Next)', 79.95, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Platinum (Next)', 199.95, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Standard (Old)', 29.95, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Plus (Old)', 79.95, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Enterprise (Old)', 'Custom', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    ['Standard (New)', 29.95, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Plus (New)', 79.95, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Pro (New)', 199.95, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Enterprise (New)', 'Custom', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
function getToPlan() {
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
    for (var y = 0; y < 2; y ++) {
        var gainIt = document.getElementsByClassName('gainedList'),
            loseIt = document.getElementsByClassName('lostList'),
            priceIt = document.getElementsByClassName('priceChange');
            gainIt[y].innerHTML = '';
            loseIt[y].innerHTML = '';
            priceIt[y].innerHTML = '';
        if (toPlan === fromPlan) {
            alert("You chose the same plan twice, ya goof!")
        } else {
            for (var x = 2; x < planDetails.length; x++) {
                if (fromPlan[x] !== toPlan[x]) {
                    fromPlan[x] < toPlan[x] ?
                    gainIt[y].innerHTML += '<p>' + planDetails[x] + '</p>' :
                    loseIt[y].innerHTML += '<p>' + planDetails[x] + '</p>';
                }
            }
            var priceDifference = Math.abs(fromPlan[1] - toPlan[1]).toFixed(2),
                fromPrice = fromPlan[1];
                toPrice = toPlan[1];
            if (isNaN(toPrice) || isNaN(fromPrice)) {
                priceIt[y].innerHTML += '<p>$' + fromPrice + ' to $' + toPrice + '</p>' +
                                        '<p><strong>Client will need to discuss exact pricing with a sales representative.</strong></p>';
            } else {
                  priceIt[y].innerHTML += '<p>$' + fromPrice + ' to $' + toPrice + '</p>' +
                                         '<p><strong>$' + priceDifference + ' difference</strong></p>';
              }
            var showComparisons = document.getElementsByClassName('plan-compare');
            for (var i = 0; i < 2; i ++) {
                showComparisons[i].style.display = 'block';
            }
        }
    }
}
​
