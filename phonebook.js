function person(name,phone,age,Email){
    return{
        firstname:name,
        age:age,
        phone:phone,
        Email:Email,
    }
}
let person1=person("preeti",1234567890,19,"preeti@gmail.com");
let person2=person("Alka",2351678459,20,"Alka@gmail.com");
let person3=person("priyanka",9876549823,20,"priyanka@gmail.com");
let person4=person("Arti",9876578965,23,"Arti@gmail.com");

const personarr=[];
personarr.push({...person1});
personarr.push({...person2});
personarr.push({...person3});
personarr.push({...person4});

function searchperson(person){
    let a=personarr.filter(e=>{
       if(e.firstname==person){
            return e;
        }
    });
    return a;
}
console.log(searchperson('preeti'));

function update(phone,newphone){
    let b=personarr.filter(e=>{
        if(e.phone===newphone){
            return e;
        }
    })
    b.phone=newphone;
    return b;
}
console.log(update(1234567890,123433455));
console.log(personarr);


function deleteperson(person) {
    for (let i = 0; i < personarr.length; i++) {
        if (personarr[i].firstname === person) {
            personarr.splice(i, 1);
            break;
        }
    }
}

console.log(deleteperson('preeti')); 
console.log(personarr);
