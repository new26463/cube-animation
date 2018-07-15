$(document).ready(function(){
   var box = $(".box");
   var btn = $(".controller");
   var coverLeft = $(".coverLeft");
   var coverRight = $(".coverRight");
   var title = $(".title");
   var array = [];

   let currentClass = '',currentCoverL = '',currentCoverR = '';
   $("button").on("click",function(){
      let value = $(this).attr("value");
      let id = $(this).attr("id");
      // console.log(id);
      var showClass = 'show-' + value;
      var showCoverL = 'cover-l-'+value;
      var showCoverR = 'cover-r-'+value;
      var length = array.length;
      array.push(value)
      // console.log(array);
      // console.log(currentClass);
      if(currentClass){
         box.removeClass(currentClass);
         coverLeft.removeClass(currentCoverL);
         coverRight.removeClass(currentCoverR);
      }
      if(array[length-1] == 'right' && array[length] == 'back'){
         currentCoverL = showCoverL = 'cover-l-'+value+'-b';
         currentCoverR = showCoverR = 'cover-r-'+value+'-b';
      }
      if((array[length-1] == 'back' && array[length] == 'left')||(array[length-1] == 'right' && array[length] == 'left')){
         currentCoverL = showCoverL = 'cover-l-'+value+'-b';
         currentCoverR = showCoverR = 'cover-r-'+value+'-b';
      }

      box.addClass(showClass);
      coverLeft.addClass(showCoverL);
      coverRight.addClass(showCoverR);
      currentClass = showClass;
      currentCoverL = showCoverL;
      currentCoverR = showCoverR;
   })

})
