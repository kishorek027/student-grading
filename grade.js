function show_result() {
    let c = document.querySelector("#c").value;
    let ds = document.querySelector("#ds").value;
    let dbms = document.querySelector("#dbms").value;
    let se = document.querySelector("#se").value;
    let ja = document.querySelector("#ja").value;
    let iot = document.querySelector("#iot").value;

    let marks = [c, ds, dbms, se, ja, iot];
    let passingMark = 40; 
    let maxMark = 100; 

    let isFail = false; 
    let isInvalidMark = false;
    let isEmptyMark = false; 

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] === "") {
            isEmptyMark = true;
            break; 
        }
        marks[i] = parseFloat(marks[i]); 
        if (isNaN(marks[i]) || marks[i] < 0 || marks[i] > maxMark) {
            isInvalidMark = true;
            break; 
        }
        if (marks[i] < passingMark) {
            isFail = true;
        }
    }

    if (isEmptyMark) {
        document.querySelector(".gra").innerHTML = "Please enter all marks.";
        document.querySelector(".result h2").innerHTML = "Incomplete Mark";
        document.querySelector(".to").innerHTML = "-";
        document.querySelector(".per").innerHTML = "-";
        return;
    }

    if (isInvalidMark) {
        document.querySelector(".gra").innerHTML = "Invalid marks entered.";
        document.querySelector(".result h2").innerHTML = "Invalid Mark";
        document.querySelector(".to").innerHTML = "-";
        document.querySelector(".per").innerHTML = "-";
        return;
    }

    let to = marks.reduce((a, b) => a + b, 0); 
    let per = (to * 100) / 600; 

    if (isFail) {
        document.querySelector(".gra").innerHTML = "You are Fail";
    } else {
        if (per >= 90) {
            document.querySelector(".gra").innerHTML = "A+";
        } else if (per >= 80) {
            document.querySelector(".gra").innerHTML = "A";
        } else if (per >= 70) {
            document.querySelector(".gra").innerHTML = "B+";
        } else if (per >= 60) {
            document.querySelector(".gra").innerHTML = "B";
        } else if (per >= 50) {
            document.querySelector(".gra").innerHTML = "C+";
        } else if (per >= 40) {
            document.querySelector(".gra").innerHTML = "C";
        } else if (per >= 35) {
            document.querySelector(".gra").innerHTML = "D+";
        } else if (per > 30) {
            document.querySelector(".gra").innerHTML = "D";
        } else {
            document.querySelector(".gra").innerHTML = "You are Fail";
        }
    }

    document.querySelector(".to").innerHTML = to;
    document.querySelector(".per").innerHTML = per.toFixed(2); 

    if (isFail || per <= 30) {
        document.querySelector(".result h2").innerHTML = "You are Fail";
    } else {
        document.querySelector(".result h2").innerHTML = "You are Pass";
    }
}
