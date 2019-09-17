console.log("js-3-loaded")

  var cardd=window.localStorage.getItem("cart-count")
  console.log(cardd)
  var total=document.getElementsByClassName('total-items');
  console.log(total)
  total.innerHTML='total-items:    '+cardd;
  

  function detailItems(array){

    var main=document.createElement('div');
    main.id="img-desc-wrapper";
    var pageWrapper=document.createElement('div');
    pageWrapper.className=("selected-item");
    main.appendChild(pageWrapper);
  
    var pdtImage=document.createElement('img')
    pdtImage.className=("item-image");
    pdtImage.src=array.preview;
    pdtImage.setAttribute("width","70px");
    pdtImage.setAttribute("height","100px");
  
    pageWrapper.appendChild(pdtImage);
  
    var pdtDesc=document.createElement('div')
    pdtDesc.id="description";
    pageWrapper.appendChild(pdtDesc);
  
    var pdtName=document.createElement('h5')
    pdtName.className="selected-item-name";
    
    var pdtTextnode=document.createTextNode(array.name)
    pdtName.appendChild(pdtTextnode)
    pdtDesc.appendChild(pdtName);
    
    var pdtSize=document.createElement('h6')
    pdtSize.className="size";
    
    var pdtSizeTextnode=document.createTextNode('size: '+array.size)
    pdtSize.appendChild(pdtSizeTextnode)
    pdtDesc.appendChild(pdtSize);
    
    var pdtPrice=document.createElement('div')
    pdtPrice.className="selected-item-price";
    
    var priceValue=document.createTextNode('price: '+array.price);
    pdtPrice.appendChild(priceValue);
    pdtDesc.appendChild(pdtPrice);
    
    var totalAmount=document.createElement('aside')
    totalAmount.id="total-amount";
    main.appendChild(totalAmount);
    
    var total=document.createElement('h3')
    total.id="total";
    var totalTextnode=document.createTextNode('Total Amount')
    total.appendChild(totalTextnode)
    totalAmount.appendChild(total);
    
    var amount=document.createElement('h5')
    amount.className="amount";
    var amountTextnode=document.createTextNode('Amount:Rs')
    amount.appendChild(amountTextnode)
    totalAmount.appendChild(amount);
    
    var anchor=document.createElement('a')
    anchor.href="/nikita3/niki4/slick-demo/js-final-4-html.html";
    totalAmount.appendChild(anchor)
    
    var button=document.createElement('button')
    button.id="btn";
    var btnTextnode=document.createTextNode('Place Order')
    button.appendChild(btnTextnode)
    anchor.appendChild(button)
  
    return main;
    }
  
  var detailCard=document.getElementById('selected-page')
  function getobjects(){
    var httpRequest= new XMLHttpRequest();
    httpRequest.onreadystatechange=function(){
      if(this.readyState===4)
      {
        console.log("response is ready");
        if(this.status==200)
        {
          console.log('call is successful')
          var array=JSON.parse(this.responseText);
          
              for(var i=0;i<array.length;i++)
              {  
                if(array[i].id==window.localStorage.getItem("id"))
               {
                 detailCard.appendChild(detailItems(array[i]));
               }
              else{
                console.log('wrong clicked')
              }
            }
          }
        else
          {
                 console.log('call failed')
          }
      }
    }
    httpRequest.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/product',true)
    //httpRequest.open('POST','https://5d76bf96515d1a0014085cf9.mockapi.io/product',true)
    httpRequest.send();
    }
    getobjects();
