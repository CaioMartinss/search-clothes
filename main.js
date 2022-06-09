const pesquisar =()=>{
   
    const pesquisaInput = document.getElementById("pesquisarItem").value.toUpperCase()
    const armItem = document.getElementById("product-list");
    const  product = document.querySelectorAll(".product");
    const pname = armItem.getElementsByTagName("h2");


    for(var i = 0; i< pname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let  textValue = match.textContent|| match.innerHTML

            if(textValue.toUpperCase().indexOf(pesquisaInput) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}