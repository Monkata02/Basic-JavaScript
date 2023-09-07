function gladiatorEx(loses, helmetPr, swordPr, shieldPr, armorPr) {
    let totalExpenses = 0;
    
    for (let currFight = 1; currFight <= loses; currFight++) {
         if (currFight % 2 === 0) {
             totalExpenses += helmetPr;
         }
         if (currFight % 3 === 0) {
             totalExpenses += swordPr;
         }
         if (currFight % 6 === 0) {
             totalExpenses += shieldPr;
         }
         if (currFight % 12 === 0) {
             totalExpenses += armorPr;
         }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
