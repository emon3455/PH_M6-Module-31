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

document.getElementById("add-friend").addEventListener("click", function(){

    const friendContainer = document.getElementById("friend");

    const friend = document.createElement("div");
    friend.classList.add("friend");
    friend.innerHTML=`
    <div class="friend">
        <h3 class="friend-name">New Fried</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, soluta!</p>
    </div>
    `;
    friendContainer.appendChild(friend);

});