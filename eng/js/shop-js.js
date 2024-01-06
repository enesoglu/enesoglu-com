//validating as to whether the form is been selected or not.

function validateForm()
{
    var selectedModel = document.querySelector('input[name="model"]:checked');
        if (!selectedModel){
            alert("Please choose a model.");}

        else{alert("Purchased Successfully: " + selectedModel.value);}
}

