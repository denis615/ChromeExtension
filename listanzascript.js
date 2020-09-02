

let object={}
    
let controls=document.getElementsByClassName("controls");
let unitApt=controls[13].firstElementChild;
let streetAddress=controls[14].firstElementChild;
let neighbourhood=controls[15].firstElementChild;
let city=controls[17].firstElementChild;
let zipCode=controls[18].firstElementChild;

let price1=controls[28].firstElementChild;
let availability=controls[33].firstElementChild;


let radioButtons=document.getElementsByClassName("radio");
let cableListanza=radioButtons[12].firstElementChild;
let electricityListanza=radioButtons[13].firstElementChild;
let gasListanza=radioButtons[14].firstElementChild
let heatListanza=radioButtons[15].firstElementChild
let internetListanza=radioButtons[16].firstElementChild
let waterListanza=radioButtons[19].firstElementChild
let petsOk=document.getElementById("pets1")

let noPets=document.getElementById("pets0")

let bedsListanza=controls[42].firstElementChild
let bathsListanza=controls[43].firstElementChild



let balcon1=radioButtons[29]
let balconyCheck=balcon1.firstElementChild
let patioDec=radioButtons[30]
let patioDeckCheck=patioDec.firstElementChild
let hardWood1=radioButtons[34]
let hardWoodCheck=hardWood1.firstElementChild
let fireplace1=radioButtons[38]
let fireplaceCheck=fireplace1.firstElementChild
let wheelChairAccess1=radioButtons[39]
let wheelChairCheck=wheelChairAccess1.firstElementChild
let dishWasher1=radioButtons[41]
let dishWasherCheck=dishWasher1.firstElementChild
let eatInKitche1=radioButtons[43]
let eatInKitchenCheck=eatInKitche1.firstElementChild
let washer1=radioButtons[56]
let washerCheck=washer1.firstElementChild
let fitnessCenter1=radioButtons[62]
let fitnessCheck=fitnessCenter1.firstElementChild

let pool1=radioButtons[64]
let poolCheck=pool1.firstElementChild

if(object.pets!="No pets"){
    petsOk.checked=true

}


    city=object.city
    unitApt.value=object.unit
    streetAddress.value=object.street
    neighbourhood.value=object.area
    zipCode.value=object.zip
    price1.value=object.apartmentPrice
    availability.value=object.availability
    cableListanza.checked=object.cableUtility
    electricityListanza.checked=object.electricityUtility
    gasListanza.checked=object.gasUtility
    heatListanza.checked=object.heatUtility
    internetListanza.checked=object.internetUtility
    waterListanza.checked=object.waterUtility
    bathsListanza.value=object.bathroom
    bedsListanza.value=object.bedroom
    balconyCheck.checked=object.balconyamenities
    patioDeckCheck.checked=object.patioAmenities
    hardWoodCheck.checkedh=object.hardWoodAmenities
    fireplaceCheck.checked=object.fireplaceAmenities
    wheelChairCheck.checked=object.wheelchairamenities
    dishWasherCheck.checked=object.dishwasheramenities
    eatInKitchenCheck.checked=object.eatInKitchenAmenities
    washerCheck.checked=object.washerAmenities
    fitnessCheck.checked=object.healthclubAmenities
    poolCheck.checked=object.poolAmenities


if(object.pets!="No pets"){
    petsOk.checked=true

}





