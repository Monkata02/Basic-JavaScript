function express(input) {
    let pacKg = Number(input[0]);
    let type = input[1];
    let kilometers = Number(input[2]);
    let pricePerKm = 0.0;
    let pricePerKg = 0.0;

    switch (type) {
        case "standard":
            if (pacKg < 1) {
                pricePerKm = 0.03
            } else if (pacKg > 1 && pacKg < 10) {
                pricePerKm = 0.05
            } else if (pacKg >= 10 && pacKg < 40) {
                pricePerKm = 0.10
            } else if (pacKg >= 40 && pacKg < 90) {
                pricePerKm = 0.15
            } else if (pacKg >= 90 && pacKg < 150) {
                pricePerKm = 0.20
            }
        case "express":
            if (pacKg < 1) {
                pricePerKg = 0.20
                pricePerKm
            } else if (pacKg > 1 && pacKg < 10) {
                pricePerKg = 0.60
            } else if (pacKg >= 10 && pacKg < 40) {
                pricePerKg = 0.95
            } else if (pacKg >= 40 && pacKg < 90) {
                pricePerKg = 0.98 
            } else if (pacKg >= 90 && pacKg < 150) {
                pricePerKg = 0.99
            }
    }
    let priceForTransport = kilometers * pricePerKm;
    let priceUpKg = pricePerKg * pricePerKm;
    console.log(priceForTransport)
    console.log(pricePerKg)
    console.log(pricePerKm)
    console.log(priceUpKg)
    
}
