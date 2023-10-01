function tradeCom(input) {

    let town = input[0];
    let sales = Number(input[1]);
    let comis = 0.0;

    switch (town) {
        case "Sofia":
            if (sales <= 500 || sales <= 0) {
                comis = sales - (sales * 0.95);break;
            } else if (sales > 500 && sales <= 1000) {
                comis = sales - (sales * 0.93);break;
            } else if (sales > 1000 && sales <= 10000) {
                comis = sales - (sales * 0.92);break; 
            } else if (sales > 10000) {
                comis = sales - (sales * 0.88);break; 
            }
        case "Varna":
            if (sales <= 500 || sales <= 0) {
                comis = (sales * 4.5) / 100;break;
            } else if (sales > 500 && sales <= 1000) {
                comis = (sales * 7.5) / 100;break;
            } else if (sales > 1000 && sales <= 10000) {
                comis = sales - (sales * 0.90);break;
            } else if (sales > 10000) {
                comis = sales - (sales * 0.87);break;
            } 
        case "Plovdiv":
            if (sales <= 500 || sales <= 0) {
                comis = (sales * 5.5) / 100;break;
            } else if (sales > 500 && sales <= 1000) {
                comis = sales - (sales * 0.92);break;
            } else if (sales > 1000 && sales <= 10000) {
                comis = sales - (sales * 0.88);break;
            } else if (sales > 10000) {
                comis = (sales * 14.5) / 100;break; 
            } 
    }
    if ((town === "Sofia" || town === "Varna" || town === "Plovdiv") && sales > 0) {
        console.log(comis.toFixed(2));
    } else if ((town !== "Sofia" || town !== "Varna" || town !== "Plovdiv") || sales < 0) {
        console.log("error");
    }
}
tradeCom(["Bourgas", "1500"]);
