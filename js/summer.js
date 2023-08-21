let total = 0;
const elementGrandtotal = document.getElementById('grandtotal');
const grandtotalString = elementGrandtotal.innerText;
const grandtotal = parseFloat(grandtotalString);
const selectItems = document.getElementById('select-items');
function handleClickBtn(productName, productPrice, totalField) {
    const productTotal = document.getElementById('total');
    const titleElement = document.getElementById(productName);
    const titleString = titleElement.innerText;
    const li = document.createElement('li');
    li.innerText = titleString;
    selectItems.appendChild(li);


    const ElementPrice = document.getElementById(productPrice);
    const ElementPriceString = ElementPrice.innerText;
    const price = parseFloat(ElementPriceString);

    const elementTotalPrice = document.getElementById(totalField);
    const totalPriceString = elementTotalPrice.innerText;
    const totalPrice = parseFloat(totalPriceString);

    total = price + total;
    elementTotalPrice.innerText = total;

    elementGrandtotal.innerText = total;

    const inputField = document.getElementById('inputField')
    const couponCode = inputField.value;
    const applyBtn = document.getElementById('applyBtn');
    if (total >= 200) {
        applyBtn.removeAttribute('disabled', 'disabled')
    }
    else {
        applyBtn.setAttribute('disabled', 'disabled')
    }

    const makePurchaseBtn = document.getElementById('makePurchaseBtn')
    if (elementTotalPrice.innerText > 0) {
        makePurchaseBtn.removeAttribute('disabled', 'disabled')
    }
    else {
        makePurchaseBtn.setAttribute('disabled', 'disabled')
    }


}

function applycoupon() {
    const inputField = document.getElementById('inputField')
    if (total >= 200 && inputField.value === 'SELL200') {
        const discountPrice = document.getElementById('discount');
        const discountProcess = (total * 20) / 100;
        discountPrice.innerText = discountProcess
        const discount = total - discountProcess;
        elementGrandtotal.innerText = discount;
    }
        else{
            alert("Please provide a valid coupon");
        }

}
function goHome(){
    const total = document.getElementById("total");
    const discount = document.getElementById("discount")
    const inputField = document.getElementById('inputField')
    selectItems.innerText = ""
    total.innerText = "00";
    elementGrandtotal.innerText = "00";
    discount.innerText = "00";
    inputField.value = "";
}