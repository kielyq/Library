function handleTopicChange() {
    var topic = document.getElementById("topic").value;
    var cards = document.getElementsByClassName("card");

    for (var i = 0; i < cards.length; i++) {
        if (topic === "all" || cards[i].id === topic) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
} 
