function getUser() {
    return {
        name: "Shishido Yuki",
        age: 24
    };
}
var user = getUser();
console.log(user.name.length);
//console.log(user.age.length)  ageはstring型ではないからエラー
