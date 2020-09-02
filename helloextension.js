chrome.runtime.onMessage.addListener(function(response){
   
   if(response==="getData"){

    
       



let header1=document.getElementsByClassName("listings printh1")

console.log(header1)
let completeAddress=header1[0].innerText;



let firstCutPosition=completeAddress.search(" : ")
let secondCutPosition=completeAddress.search(",")
let StreetAddress=completeAddress.slice(firstCutPosition,secondCutPosition)
let uniqueStreet=StreetAddress.slice(1)

let thirdCutPosition=completeAddress.search("#")



function nth_occurrence (string, char, nth) {
    var first_index = string.indexOf(char);
    var length_up_to_first_index = first_index + 1;

    if (nth == 1) {
        return first_index;
    } else {
        var string_after_first_occurrence = string.slice(length_up_to_first_index);
        var next_occurrence = nth_occurrence(string_after_first_occurrence, char, nth - 1);

        if (next_occurrence === -1) {
            return -1;
        } else {
            return length_up_to_first_index + next_occurrence;  
        }
    }
}
let occurence;
let gettinSecondOccurence=nth_occurrence(completeAddress,"#",2)
let gettingSecondComma=nth_occurrence(completeAddress,",",2)


let unitNumber=completeAddress.slice(gettinSecondOccurence,gettingSecondComma)

let gettingThirdComma=nth_occurrence(completeAddress,",",3)
let gettingCity=completeAddress.slice(gettingSecondComma,gettingThirdComma)

let gettingZipCode1=nth_occurrence(completeAddress,"(",1)
let gettingZipCode2=nth_occurrence(completeAddress,")",1)
let zipcode=completeAddress.slice(gettingZipCode1,gettingZipCode2)

let classFv=document.getElementsByClassName("fv")

let area1=""


let aptType1=""



let gettingBedrooms="";

let gettingBathrooms="";

let gettingPetsPolicy="";
let firstPrice=""
let classFn=document.getElementsByClassName("Fn")
let availabilityExp=""

let gettingLength=classFv.length--
for(let i=0;i<classFn.length;i++){

    if(classFn[i].textContent==="Availability:"){
        availabilityExp=classFv[i].innerText
    }
    if(classFn[i].textContent==="Pets Policy:"){
        gettingPetsPolicy=classFv[i].innerText
    }

    if(classFn[i].textContent==="Bathrooms:"){
        gettingBathrooms=classFv[i].innerText
    }
    if(classFn[i].textContent==="Bedrooms:"){
        
        gettingBedrooms=classFv[i].innerText
        let occurecenceBedrom=nth_occurrence(gettingBedrooms,"(",1)
        if(occurecenceBedrom!=-1){
       gettingBedrooms= gettingBedrooms.slice(0,occurecenceBedrom).trim()
    } else(gettingBedrooms=gettingBedrooms.trim())
     
    }
    if(classFn[i].textContent==="Price:"){
        firstPrice=classFv[i].innerText;
       
    }
    if(classFn[i].textContent==="Type:"){
        aptType1=classFv[i].innerText
       
    }
    if(classFn[i].textContent==="Area:"){
        area1=classFv[i].innerText
      
    }

}
let gas=false;
let heat=false;
let water=false;
let internet=false;
let cable=false;
let electricity=false;
//Loop to get Utilities
for(let i=0;i<classFn.length;i++){

    let lookingForUtilities=classFv[i].textContent
if(lookingForUtilities.search("Gas")!=-1)
    {
    gas=true;
       }

       if(lookingForUtilities.search("Heat")!=-1)
    {
           heat=true;
       }
       if(lookingForUtilities.search("Water")!=-1)
       {
            water=true;
       }
       if(lookingForUtilities.search("Internet")!=-1)
       {
           internet=true;
       }
       if(lookingForUtilities.search("Cable")!=-1)
       {
           cable=true;
       }
       if(lookingForUtilities.search("Electricity")!=-1)
       {
           electricity=true;
       }
    }


    //Loop to Get amenities Dis is going to be a long one
    let healthClub=false;
    let laundry=false;
    let pool=false;
    let patio=false;
    let wheelChairAccess=false;
    let balcony=false;
    let dishwasher=false;
    let eatInKitchen=false;
    let firePlace=false;
    let hardWood=false;
    
    let washer=false;
    
    for(let i=0;i<classFn.length;i++){
        let lookingForAmenities=classFv[i].textContent

        if(lookingForAmenities.search("Health Club")!=-1)
        {
            healthClub=true;
        }
        if(lookingForAmenities.search("Laundry")!=-1)
        {
            laundry=true;
        }
        if(lookingForAmenities.search("Pool")!=-1)
        {
            pool=true;
        }
        if(lookingForAmenities.search("Patio")!=-1)
        {
            patio=true;
        }
        if(lookingForAmenities.search("Deck")!=-1)
        {
            patio=true;
        }
        if(lookingForAmenities.search("Wheelchair Access")!=-1)
        {
            wheelChairAccess=true;
        }
        if(lookingForAmenities.search("Balcony")!=-1)
        {
            balcony=true;
        }
        if(lookingForAmenities.search("Dishwasher")!=-1)
        {
            dishwasher=true;
        }
        if(lookingForAmenities.search("Eat In Kitchen")!=-1)
        {
            eatInKitchen=true;
        }
        if(lookingForAmenities.search("Fireplace")!=-1)
        {
            firePlace=true;
        }
        if(lookingForAmenities.search("Hardwood")!=-1)
        {
            hardWood=true;
        }
        if(lookingForAmenities.search("Washer")!=-1)
        {
            washer=true;
        }

    }
let price=firstPrice.slice(1)

let occurenceForPrice=nth_occurrence(price," ",1)

let aptPrice1=price.slice(0,occurenceForPrice)

let aptPrice2=aptPrice1.replace(",","")

let aptPriceToNumber=parseInt(aptPrice2)
let writeDescription="";
let getDescription=document.getElementsByClassName("description")
if(getDescription!=undefined){
     writeDescription=getDescription[0].textContent
}



	


let trimmingArea=nth_occurrence(area1,"(",1)
area1=area1.slice(0,trimmingArea-1)

//Formating address to show correctly

let occurenceAdress=nth_occurrence(StreetAddress,":",1)
occurenceAdress++
StreetAddress=StreetAddress.slice(occurenceAdress)
unitNumber=unitNumber.slice(1)
zipcode=zipcode.slice(1)

//Formatting aptType1
let occureForAptType=nth_occurrence(aptType1,"(",1)
aptType1=aptType1.slice(0,occureForAptType)

//The Object that we need to send but we can't
  let sendingObject=window.sendingObject={
    street:StreetAddress,
    unit:unitNumber,
    zip:zipcode,
    area:area1,
    aparmentType:aptType1,
    bedroom:gettingBedrooms,
    bathroom:gettingBathrooms,
    pets:gettingPetsPolicy,
    availability:availabilityExp,
    apartmentPrice:aptPriceToNumber,
    description:writeDescription,
    gasUtility:gas,
    waterUtility:water,
    heatUtility:heat,
    internetUtility:internet,
    electricityUtility:electricity,
    cableUtility:cable,
    healthclubAmenities:healthClub,
    laundryAmenities:laundry,
    poolAmenities:pool,
    patioAmenities:patio,
    wheelchairamenities:wheelChairAccess,
    balconyamenities:balcony,
    dishwasheramenities:dishwasher,
    eatInKitchenAmenities:eatInKitchen,
    fireplaceAmenities:firePlace,
    hardWoodAmenities:hardWood,
    washerAmenities:washer,

    city:gettingCity

}


chrome.storage.sync.set({'sendingObject':sendingObject})

}




var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


if(response==="giveData"){
chrome.storage.sync.get('sendingObject',function(sendingObject){


   console.log(sendingObject.sendingObject.washer)

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

if(sendingObject.sendingObject.pets!="No pets"){
    petsOk.checked=true

}

   
    
    city=sendingObject.sendingObject.city
    unitApt.value=sendingObject.sendingObject.unit
    streetAddress.value=sendingObject.sendingObject.street
    neighbourhood.value=sendingObject.sendingObject.area
    zipCode.value=sendingObject.sendingObject.zip
    price1.value=sendingObject.sendingObject.apartmentPrice
 
    if (sendingObject.sendingObject.availability === "Immediately" || sendingObject.sendingObject.availability === "ASAP" || sendingObject.sendingObject.availability === "NOW") {
        availability.value = today;
    }
    else{
    availability.value=sendingObject.sendingObject.availability
}
    cableListanza.checked=sendingObject.sendingObject.cableUtility
    electricityListanza.checked=sendingObject.sendingObject.electricityUtility
    gasListanza.checked=sendingObject.sendingObject.gasUtility
    heatListanza.checked=sendingObject.sendingObject.heatUtility
    internetListanza.checked=sendingObject.sendingObject.internetUtility
    waterListanza.checked=sendingObject.sendingObject.waterUtility
    bathsListanza.value=sendingObject.sendingObject.bathroom
    
    
    if(sendingObject.sendingObject.bedroom==="Studio"){
        bedsListanza.value="0"
    }
    else{
        bedsListanza.value=sendingObject.sendingObject.bedroom
    }
    balconyCheck.checked=sendingObject.sendingObject.balconyamenities
    patioDeckCheck.checked=sendingObject.sendingObject.patioAmenities
    hardWoodCheck.checked=sendingObject.sendingObject.hardWoodAmenities
    fireplaceCheck.checked=sendingObject.sendingObject.fireplaceAmenities
    wheelChairCheck.checked=sendingObject.sendingObject.wheelchairamenities
    dishWasherCheck.checked=sendingObject.sendingObject.dishwasheramenities
    eatInKitchenCheck.checked=sendingObject.sendingObject.eatInKitchenAmenities
    washerCheck.checked=sendingObject.sendingObject.washerAmenities
    fitnessCheck.checked=sendingObject.sendingObject.healthclubAmenities
    poolCheck.checked=sendingObject.sendingObject.poolAmenities
    washerCheck=sendingObject.sendingObject.laundryAmenities
  
if(sendingObject.sendingObject.pets==="No Pets"){
    petsOk.checked=false
    noPets.checked=true
}
})





}


}


)

      
