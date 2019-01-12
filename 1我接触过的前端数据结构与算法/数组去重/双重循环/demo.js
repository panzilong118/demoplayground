var lastHouses = [1,2,3];
var filterHouse = function(houses){
    if(lastHouses === null){
        lastHouses = houses;
        return {
            remainsHouses: [],
            newHouses: houses
        };
    }
    var remainsHouses = [],
        newHouses = [];

    for(var i = 0; i < houses.length; i++){
        var isNewHouse = true;
        for(var j = 0; j < lastHouses.length; j++){
            if(houses[i] === lastHouses[j]){
                isNewHouse = false;
                remainsHouses.push(lastHouses[j]);
                
            }
        }
        if(isNewHouse){
            newHouses.push(houses[i]);
        }
    }
    lastHouses = remainsHouses.concat(newHouses);
    return {
        remainsHouses: remainsHouses,
        newHouses: newHouses
    };
}

var houses = [2,3,4];
filterHouse(houses)
