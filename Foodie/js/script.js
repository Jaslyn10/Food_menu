function update1(){
    const cardName=document.querySelector('#food .foodName');
    cardName.textContent="Noodles";
    console.log(cardName);
}
update()
function update2(){
    const cardName=document.querySelector('#food .foodPrice');
    cardName.textContent="Rs.200/-";
    console.log(cardName);
}
update1()

function update(){
    update1();
    update2();
}

function addList(imgName,nameFood,priceFood){
    const foodList=document.getElementById("foodList");

    const foodCard=document.createElement("div");
    foodCard.classList.add("food")

    //image
    const img=document.createElement("img");
    img.src="images/"+imgName+".jpg";

    //label
    const name=document.createElement("p");
    name.classList.add("foodName")
    name.innerHTML="Name: "+nameFood;

    const price=document.createElement("p");
    price.classList.add("priceName");
    price.innerHTML="Price: "+priceFood;

    foodCard.appendChild(img);
    foodCard.appendChild(name);
    foodCard.appendChild(price);
    foodList.appendChild(foodCard);


console.log(foodList);
}
addList("pizza","Pizza",200)
addList("maggie","Maggie",80)
