document.getElementById("bg-added").addEventListener("click" , function(){

    const friends = document.getElementsByClassName("friend");
    for (const friend of friends) {
        friend.style.backgroundColor="violet";

    }

});

document.getElementById("center-3rd").addEventListener("click", function(){
    const friend = document.getElementById("3rd-friend");
    friend.style.textAlign="center";
});