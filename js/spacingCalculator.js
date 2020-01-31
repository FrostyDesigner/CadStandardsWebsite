
function calculate() {
    let totalWidth = 0;
    let gapWidth  = 0;
    let panelQty = 0;
    let totalgapWidth = 0;
    let objectlength = 0;

    totalWidth = 100;
    gapWidth = .5;
    panelQty = 20;

    totalgapWidth = gapWidth * (panelQty - 1);
    objectlength = (totalWidth - totalgapWidth) / panelQty;

    alert(`Total gap width is ${totalgapWidth}, panel length is ${objectlength}.`)    
}

function toFeetInches(inches) {
    let archMeasure = inches / 12
    return (
        archMeasure;
    )
}