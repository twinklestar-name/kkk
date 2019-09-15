console.log("js-2-loaded")
/*<div id="page-2">
    <div>
    <section><img id="pdt-image" src="https://lh3.googleusercontent.com/a-/AAuE7mCmZgrUwR_qCVu7qHZl47IR-CC4ASpVL_C9dy5B0w=s96-cc"/></section>
    <aside id="pdt-desc">
        <h1 class="pdt-name">hello</h1>
        <h2 class="pdt-brand">bello</h2>
        <div class="head">$-50</div>
        <h2 class="head">description</h2>
        <div id="desc">bla bla</div>
        <h2 class="head">product-preview</h2>
        <a href="/nikita3/niki4/slick-demo/js-final-3-html.html"><button id="cart-btn">Add to Cart</button></a>
    </aside>
    </div>
  </div>*/

  function detailItems(id,imageval,name,brand,price,descrip,photos){

  var pageWrapper=document.createElement('div');

  var section=document.createElement('section')
  pageWrapper.appendChild(section)

  var pdtImage=document.createElement('img')
  pdtImage.src=imageval;
  pdtImage.setAttribute("width","300px");
  pdtImage.setAttribute("height","400px");

  section.appendChild(pdtImage);

  var pdtDesc=document.createElement('aside')
  pdtDesc.id="pdt-desc";
  pageWrapper.appendChild(pdtDesc)

  var pdtName=document.createElement('h1')
  pdtName.className="pdt-name";
  
  var pdtTextnode=document.createTextNode(name)
  pdtName.appendChild(pdtTextnode)
  
  var pdtBrand=document.createElement('h2')
  pdtBrand.className="pdt-brand";
  
  var pdtBrandTextnode=document.createTextNode(brand)
  pdtBrand.appendChild(pdtBrandTextnode)
  
  var pdtPrice=document.createElement('div')
  pdtPrice.className="head";
  
  var priceValue=document.createTextNode('price: '+price);
  pdtPrice.appendChild(priceValue);
  
  var description=document.createElement('h2')
  description.className="head";
  
  var descriptionTextnode=document.createTextNode('description')
  description.appendChild(descriptionTextnode)
  
  var desc=document.createElement('div')
  desc.id="desc";
  var descTextnode=document.createTextNode(descrip)
  desc.appendChild(descTextnode)
  
  var pdtPreview=document.createElement('h2')
  pdtPreview.className="head";
  var pdtPreviewTextnode=document.createTextNode('product preview')
  pdtPreview.appendChild(pdtPreviewTextnode)
  
  var anchor=document.createElement('a')
  anchor.href="/nikita3/niki4/slick-demo/js-final-3-html.html";
  
  var button=document.createElement('button')
  button.id="cart-btn";
  var btnTextnode=document.createTextNode('Add to Cart')
  button.appendChild(btnTextnode)
  
  anchor.appendChild(button)
  pdtDesc.appendChild(pdtName)
  pdtDesc.appendChild(pdtBrand)
  pdtDesc.appendChild(pdtPrice)
  pdtDesc.appendChild(description)
  pdtDesc.appendChild(desc)
  pdtDesc.appendChild(pdtPreview)
  pdtDesc.appendChild(anchor)

  return pageWrapper;
  
  }

  var detailCard=document.getElementById('page-2')
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
          
             // for(var i=0;i<array.length;i++)
              //{
              //console.log(array[0].preview)
              //var cards=;
             // console.log(cards)
              detailCard.appendChild(detailItems(array[0].id,array[0].preview,array[0].name,array[0].brand,array[0].price,array[0].description,array[0].photos[5]));
              //}
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