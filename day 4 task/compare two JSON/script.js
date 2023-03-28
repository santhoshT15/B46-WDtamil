let obj1={name:"person 1",age:5};
let obj2={age:5,name:"person 1"};

function isEqual(user,user1){
    var userkeys =Object.keys(user);
    var user1keys = Object.keys(user1);

    if(userkeys.length != user1keys.length){
        return false;
    }

    for(var userkey of userkeys){
        if(user[userkeys] != user1[userkeys]){
            return false;
        }
    }

    return true;
}

console.log(isEqual(obj1,obj2));