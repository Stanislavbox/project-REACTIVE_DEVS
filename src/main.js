// import "basiclightbox/dist/basicLightBox.min.css"

import { root } from "./js/root";
import { supportMarkup } from "./js/supportUaMarkup";

supportMarkup();


console.log(root.screenWidth)

console.log(root.baseUrl)

if(root.screenWidth >= 1280){
  root.namber = 5;
}else if (root.screenWidth ){
  root.namber = 3;
}
function markap (){
  console.log(root.namber)
}
markap();




