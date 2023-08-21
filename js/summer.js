let total = 0;
function handleClickBtn(productName, productPrice, totalField){
    const productTotal = document.getElementById('total');
    const selectItems = document.getElementById('select-items');
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

    const elementGrandtotal = document.getElementById('grandtotal');
    const grandtotalString = elementGrandtotal.innerText;
    const grandtotal = parseFloat(grandtotalString);
    elementGrandtotal.innerText = total;

    const inputFild = document.getElementById('inputFild')
    const coponCode = inputFild.value;
    const applyBtn = document.getElementById('applyBtn');
    if(total > 200){
        applyBtn.removeAttribute('disabled','disabled')
    }
    else{
        applyBtn.setAttribute('disabled','disabled') 
    }
    
    const makePurchaseBtn = document.getElementById('makePurchaseBtn')
    if(elementTotalPrice.innerText > 0){
        makePurchaseBtn.removeAttribute('disabled','disabled')
    }
    else{
        makePurchaseBtn.setAttribute('disabled','disabled')
    }
    if(total > 200){
        const discountPrice = document.getElementById('discount');
        const discountProcess = (total * 20)/100;
        discountPrice.innerText = discountProcess
    }


}