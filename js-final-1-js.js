console.log("js-loaded");
$(document).ready(function(){
  $('#slick-cona').slick({
    dots:true,
    //infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
});


/*var heading2=document.getElementById('heading')
          var mainHeading2=document.createElement('h3')
          var value=document.createTextNode('Accessories for Men and Women');
          mainHeading2.appendChild(value);
          heading2.appendChild(mainHeading2);*/


/*<span class="item-wrapper">
<a href="/nikita3/niki4/slick-demo/js-final-2-html.html">
        <span class="item">
            <img class="item-img" src="https://i.pinimg.com/originals/d4/30/57/d43057dbc53e7309ae5bb6eac27e9bc6.jpg"/>
            <h3  class="description">hello</h3>
            <h5  class="description">we will meet</h5>
            <div  class="description">$ 50</div>
        </span>
        </a>
        </span>*/
document.body.addEventListener("click",function(event){
  if(event.target.className=="item")
  {
  window.localStorage.setItem("id",event.target.id);
  window.open("/nikita3/niki4/slick-demo/js-final-2-html.html",'_self');
  }
})
var cardCount=window.localStorage.getItem('cart-count')
console.log(cardCount)
$('#cart-counting').html(cardCount)

function shoppingItems(idval,imageval,name,brand,priceval){
  var itemsWrapper=document.createElement('span');
  itemsWrapper.className="item-wrapper";

  var itemLink=document.createElement('a')
  //itemLink.href="/nikita3/niki4/slick-demo/js-final-2-html.html";

  var item=document.createElement('span');
  item.className="item";
  item.id=idval;
  itemsWrapper.appendChild(itemLink);
  itemLink.appendChild(item);

  var image=document.createElement('img');
  image.className="item-img";
  image.setAttribute("src",imageval);
  image.setAttribute("width","150px");
  image.setAttribute("height","200px");
  item.appendChild(image);

  var heading1=document.createElement('h3');
  heading1.className="name";

  var heading1Value=document.createTextNode(name);
  heading1.appendChild(heading1Value);
  item.appendChild(heading1);

  var heading2=document.createElement('h5');
  heading2.className="brand";

  var heading2Value=document.createTextNode(brand);
  heading2.appendChild(heading2Value);
  item.appendChild(heading2);

  var price=document.createElement('div');
  price.className="price";

  var priceValue=document.createTextNode('price: '+priceval);
  price.appendChild(priceValue);
  item.appendChild(price);
  //console.log(itemsWrapper);

  return itemsWrapper;
}
/*var selecteditems=[];
$('.item').click(function(e){
  console.log('hi')
  console.log(e.target.id)
  selecteditems.push(e.target.id)
  console.log(selecteditems)
  window.open("/nikita3/niki4/slick-demo/js-final-2-html.html");
})
console.log(selecteditems)*/

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
        if(array[i].isAccessory==false)
        {
        console.log(array[i])
        var cards=shoppingItems(array[i].id,array[i].preview,array[i].name,array[i].brand,array[i].price);
        //cardName.appendChild(cards);
        $('#clothing').append(cards);
        }
        if(array[i].isAccessory==true)
          {

          console.log(array[i])
          var cards=shoppingItems(array[i].id,array[i].preview,array[i].name,array[i].brand,array[i].price);
          //cardName.appendChild(cards);
          $('#accessories').append(cards);
          }
      }
          
      $(document).ready(function(){
        $('#main').slick({
        centerMode: true,
        //centerPadding: '60px',
        slidesToShow: 3,
        dots:true,
          //infinite: true,
          //slidesToShow: 1,
          slidesToScroll: 1,
          //autoplay: true,
          //autoplaySpeed: 1000
        });
      });
    }
    else{
      console.log('call failed')
    }
  }
}
httpRequest.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/product',true)
//httpRequest.open('POST','https://5d76bf96515d1a0014085cf9.mockapi.io/product',true)
httpRequest.send();
}
getobjects();
