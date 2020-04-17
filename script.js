let box = document.getElementById ('box'), // выбор элемента по ID
 btn = document.getElementsByTagName ('button'), //выбор элементов по тэгу
 circle = document.getElementsByClassName ('circle'), //выбор элементов по классу 
 heart = document.querySelectorAll(".wraper .heart"), //выбор всех элементов селектора, если в селеторе есть селоектор пишем сначала главный 
 oneHeart = document.querySelector(".heart")// первый элемент в селекторе 
wrapper = document.querySelector(".wraper");

box.style.backgroundColor = 'blue'; // смена цвета у переменой box 
btn[1].style.borderRadius = "100%"; // смена формы второй кнопки 

circle[0].style.backgroundColor = "red";
circle[1].style.backgroundColor = "yellow";
circle[2].style.backgroundColor = "green";

for (let i=0; i < heart.length; i++){ // перебор элементов для изменпия 
    heart[i].style.backgroundColor = "blue";
}

heart.forEach(function(item, i , hearts) { // ('элементы , итерация , массив ну назавнеи дургое )
    item.style.backgroundColor = "blue";
});

let div = document.createElement('div'), //доабвление элемента в js 
    text = document.createTextNode("Тут был я"); //добавление текста

div.classList.add("black"); // добавление класса 

document.body.appendChild(div); // добавление в body новго элемента в конец 

wrapper.appendChild(div); // добавление в класс новго элемента в конец 
document.body.insertBefore(div, circle[0]); // что бы вставить перед сначала пишем то что надо вставить и потом перед чем 
document.body.removeChild(circle[1]); //удаление элемента
wraper.removeChild(heart[1]); // удаление из класса 

document.body.replaceChild(btn[1], circle[2]); // замена элементов , сначала пишется нвоый элемент потом старый 

div.innerHTML = "<h1>hello world!</h1>"; // доабалвение в див  . так же можно добавлять теги 

div.textContent = "Hello world"; // добаваленеи только текста

