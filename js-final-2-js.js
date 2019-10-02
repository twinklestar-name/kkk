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
        <img class="poses" src=""/>
        <img  class="poses" src=""/>
        <img  class="poses" src=""/>
        <a href="/nikita3/niki4/slick-demo/js-final-3-html.html"><button id="cart-btn">Add to Cart</button></a>
    </aside>
    </div>
  </div>*/
var ido=[];
  console.log(ido)
  var count=0;
  document.body.addEventListener("click",function(event){
    
      if(event.target.className=="cart-btn")
      {
        ido.push(event.target.id)
        ido.push(window.localStorage.getItem("selected-items-id"))
        console.log(ido)
        console.log(event.target)
        window.localStorage.setItem("id",event.target.id)
        var idNo=window.localStorage.getItem("id")
        console.log(idNo);
      //console.log(window.localStorage.setItem("itemprice",event.target.price));
      count=window.localStorage.getItem('cart-count')
      count++;
      botn.innerHTML=count;
      window.localStorage.setItem("cart-count",botn.innerHTML)
      window.localStorage.setItem("selected-items-id",ido);
      }
      else
      {
      count=count+0;
      } 
  })
  var cardCount=window.localStorage.getItem('cart-count')
  console.log(cardCount)
  $('#cart-counting').html(cardCount)

  var botn=document.getElementById('cart-counting')
  console.log(botn.innerHTML)
  console.log(botn)

  function detailItems(array){

    var pageWrapper=document.createElement('div');
  
    var section=document.createElement('section')
    pageWrapper.appendChild(section)
  
    var pdtImage=document.createElement('img')
    pdtImage.id="detail-img";
    pdtImage.src=array.preview;
    pdtImage.setAttribute("width","300px");
    pdtImage.setAttribute("height","400px");
  
    section.appendChild(pdtImage);
  
    var pdtDesc=document.createElement('aside')
    pdtDesc.id="pdt-desc";
    pageWrapper.appendChild(pdtDesc)
  
    var pdtName=document.createElement('h1')
    pdtName.className="pdt-name";
    
    var pdtTextnode=document.createTextNode(array.name)
    pdtName.appendChild(pdtTextnode)
    
    var pdtBrand=document.createElement('h2')
    pdtBrand.className="pdt-brand";
    
    var pdtBrandTextnode=document.createTextNode('Brand: '+array.brand)
    pdtBrand.appendChild(pdtBrandTextnode)
    
    var pdtPrice=document.createElement('div')
    pdtPrice.className="head";
    
    var priceValue=document.createTextNode('price: '+array.price);
    pdtPrice.appendChild(priceValue);
    
    var description=document.createElement('h2')
    description.className="head";
    
    var descriptionTextnode=document.createTextNode('description')
    description.appendChild(descriptionTextnode)
    
    var desc=document.createElement('div')
    desc.id="desc";
    var descTextnode=document.createTextNode(array.description)
    desc.appendChild(descTextnode)
    
    var pdtPreview=document.createElement('h2')
    pdtPreview.className="head";
    var pdtPreviewTextnode=document.createTextNode('Product Preview')
    pdtPreview.appendChild(pdtPreviewTextnode)
    
    var btn=document.createElement('button')
    btn.className="cart-btn";
    btn.id=array.id;
    var btnTextnode=document.createTextNode('Add to Cart')
    btn.appendChild(btnTextnode)

    pdtDesc.appendChild(pdtName)
    pdtDesc.appendChild(pdtBrand)
    pdtDesc.appendChild(pdtPrice)
    pdtDesc.appendChild(description)
    pdtDesc.appendChild(desc)
    pdtDesc.appendChild(pdtPreview)
    for(var j=0;j<array.photos.length;j++)
    {
      createproductphotos(array.photos[j],j);
    }
    pdtDesc.appendChild(btn)
    return pageWrapper;

    function createproductphotos(pics,pos)
    {
      var pose1=document.createElement('img')
      if(pos===0)
      {
        console.log('hi')
        pose1.classList.add('active-image')
      }
      pose1.onclick=function(e)
      {
        console.log('hello')
        $('#pdt-desc img').removeClass('active-image')
        pose1.classList.add('active-image')
        pdtImage.src=e.target.src;
      }
      pose1.className="poses";
      pose1.src=pics;
      pose1.setAttribute("width","80px")
      pose1.setAttribute("height","100px")
      pdtDesc.appendChild(pose1)
    }
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
          var pic,pics;
              for(var i=0;i<array.length;i++)
              {
                if(array[i].id==window.localStorage.getItem("id"))
               {
                  detailCard.appendChild(detailItems(array[i]));
               }
              else
               {
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
