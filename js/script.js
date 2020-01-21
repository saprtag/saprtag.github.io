console.clear;
var vk_button = document.getElementsByClassName("buttons__item_active")[0];
var link = document.getElementsByClassName("content__link")[0];


vk_button.onclick = function () {
  link.classList.toggle("vk__link")
  console.log("vk__link");
  vk_button.classList.toggle("inst__link")
}

  vk_button.addEventListener('click', function () {
    var $a = 'https://www.instagram.com/_sapr_/'
    link.href = $a
    console.log($a);
  })
