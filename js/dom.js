document.getElementById("bg-added").addEventListener("click" , function(){

    const friends = document.getElementsByClassName("friend");
    for (const friend of friends) {
        friend.style.backgroundColor="violet";

    }

});

