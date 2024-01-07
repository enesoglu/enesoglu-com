//validating as to whether the form is been selected or not.

function validateForm()
{
    var selectedModel = document.querySelector('input[name="model"]:checked');
        if (!selectedModel){
            alert("Lütfen bir model seçin.");}

        else{alert("Satın alma başarılı: " + selectedModel.value);}
}

