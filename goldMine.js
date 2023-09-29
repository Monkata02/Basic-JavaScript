function solve(input){
    let broi = input.splice(0, 1);

    for(let i =0; i < broi; i++){
        let srdob = Number(input.splice(0, 1));
        let dni = Number(input.splice(0, 1));
        let obsht = 0;

        for(let j = 0; j < dni; j++){
            obsht += Number(input.splice(0, 1));
        }
        let av = obsht/dni;
        if(av >= srdob){
            console.log(`Good job! Average gold per day: ${av.toFixed(2)}.`);
        }else{
            let da = srdob - av
            console.log(`You need ${da.toFixed(2)} gold.`);
        }
    }
}
