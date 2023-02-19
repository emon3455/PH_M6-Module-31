// Write an arrow function where it will do the following:
/*
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
*/

const findFriends= (friends)=>{
    const trueFriend = [];
    for (const friend of friends) {
        if(friend.length % 2 ==0){
            trueFriend.push(friend);
        }
    }
    return trueFriend;
}

const friends = ["Emon", "Elina","M0hiny","Farjana"];
const trueFriends = findFriends(friends);
console.log(trueFriends);