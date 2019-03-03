   function calculateShipping(){
        //Shipping & handling fee
        var price = document.shippingform.inputPrice.value
        var shipping = 0.00
        //alert("Test 1")
        //Add $1.50 with any purchase that is less than or equal to $25.00
        if (price <= 25)
        {
            shipping = 1.50
            //alert("Test 2")
        }
        //Add 10% with any purchase that is greater than $25.00 but do not inlcude the $1.50 fee
        else
        {
            shipping = price * 10 / 100
            //alert("Test 3")
        }
        document.shippingform.shipping.value = "$ "+shipping
        document.shippingform.Total.value = "$ "+(shipping + parseFloat(price)).toFixed(2)
        //alert("Test 4")
    }
