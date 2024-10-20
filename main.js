function calculatePrice() {
    let basePrice = 100;

    const education = parseFloat(document.getElementById("education").value);
    const netWorth = parseFloat(document.getElementById("netWorth").value);
    const caste = parseFloat(document.getElementById("caste").value);

    let skillsBonus = 0;

    const isMusicChecked = document.getElementById("music").checked;
    if (isMusicChecked) {
        skillsBonus += 10;l
    }
    const isCookingChecked = document.getElementById("cook").checked;
    if (isCookingChecked) {
        skillsBonus += 20;
    }
    const isEasygoingChecked = document.getElementById("easygoing").checked;
    if (isEasygoingChecked) {
        skillsBonus += 15; 
    }
    const isSingingChecked = document.getElementById("singing").checked;
    if (isSingingChecked) {
        skillsBonus += 10;
    }


    const ageRadios = document.getElementsByName("age");
    let age = 1;
    for (const radio of ageRadios) {
        if (radio.checked) {
            age = parseFloat(radio.value);
            break;
        }
    }

    let reputationPenalty = 1;
    if (document.getElementById("gossipParents").checked) reputationPenalty *= 0.85;
    if (document.getElementById("gossipCharacter").checked) reputationPenalty *= 0.9;
    if (document.getElementById("generalGossip").checked) basePrice -= 20;

    let finalPrice = basePrice * education * netWorth;
    finalPrice += caste + skillsBonus;
    finalPrice *= age * reputationPenalty;
    
    document.getElementById("result").textContent = `Total Price: $${finalPrice.toFixed(2)}`;
    document.getElementById("result").style.color = finalPrice > 200 ? 'green' : 'red';
}
