const toCMYKButton = document.getElementById("toCMYK");
const toRBGButton = document.getElementById("toRGB");

toCMYKButton.onclick = function() {
    const rValue = document.getElementById("R").value;
    const gValue = document.getElementById("G").value;
    const bValue = document.getElementById("B").value;

    let r = 0
    if(rValue != "")
        r = InverseLerp(0, 255, parseInt(rValue));
    else {
        r = 0;
        document.getElementById("R").value = 0;
    }
    let g = 0
    if(gValue != "")
        g = InverseLerp(0, 255, parseInt(gValue));
    else {
        g = 0;
        document.getElementById("G").value = 0;
    }
    let b = 0
    if(bValue != "")
        b = InverseLerp(0, 255, parseInt(bValue));
    else {
        b = 0;
        document.getElementById("B").value = 0;
    }
    
    const k = Math.min(1-r, 1-g, 1-b);
    const c = ConvertToCMYK(r, k);
    const m = ConvertToCMYK(g, k);
    const y = ConvertToCMYK(b, k);

    document.getElementById("C").value = Round(c);
    document.getElementById("M").value = Round(m);
    document.getElementById("Y").value = Round(y);
    document.getElementById("K").value = Round(k);
}

toRBGButton.onclick = function() {
    const cValue = document.getElementById("C").value;
    const mValue = document.getElementById("M").value;
    const yValue = document.getElementById("Y").value;
    const kValue = document.getElementById("K").value;

    let c = 0;
    if(cValue != "")
        c = InverseLerp(0, 100, parseInt(cValue));
    else {
        c = 0;
        document.getElementById("C").value = 0;
    }
    let m = 0;
    if(mValue != "")
        c = InverseLerp(0, 100, parseInt(mValue));
    else {
        m = 0;
        document.getElementById("M").value = 0;
    }
    let y = 0;
    if(yValue != "")
        y = InverseLerp(0, 100, parseInt(yValue));
    else {
        y = 0;
        document.getElementById("Y").value = 0;
    }
    let k = 0;
    if(kValue != "")
        k = InverseLerp(0, 100, parseInt(kValue));
    else {
        k = 0;
        document.getElementById("K").value = 0;
    }

    const r = 1-Math.min(1, c*(1-k)+k);
    const g = 1-Math.min(1, m*(1-k)+k);
    const b = 1-Math.min(1, y*(1-k)+k);

    document.getElementById("R").value = Round(r, 255);
    document.getElementById("G").value = Round(g, 255);
    document.getElementById("B").value = Round(b, 255);
}

function InverseLerp(start, end, value) {
    let answer = 0;
    if(start !== end) 
        answer = (value - start) / (end - start);
    answer = answer > 1 ? 1 : answer;
    answer = answer < 0 ? 0 : answer;
    return answer;
}

function ConvertToCMYK(rgb, keyPlate) {
    if(1 - keyPlate === 0)
        return 0;
    return (1-rgb-keyPlate) / (1-keyPlate);
}

function Round(value, ratio = 100) {
    return Math.round(value * ratio);
}