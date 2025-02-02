// memastikan file sudah diload dengan sempurna
// mengubah warna menggunakan jquery
$(document).ready(function (){
  // mengubah warna css tag html h3
  $('h3').css('color','blue');
  // mengubah warna css dengan id
  $('#box_one').css('background-color','red');
  // mengubah warna css dengan className
  $('.boxes').css('background-color','aqua');
  $('.boxes:first').css('background-color','green');
  $('.boxes:last').css('background-color','yellow');
  // untuk mengubah warna diantara box gunakan eq(index)
  // sama seperti mengakses array
  $('.boxes:eq(2)').css('background-color','deeppink');

  // event
  $('h3').click(function (e) { 
    e.preventDefault();
    $('h3').css('font-size', '45px');
  });
  
  // mouseenter ini hampir sama kaya dicss hover
  $('#box_one').mouseenter(function () { 
    $('#box_one').css('background-color', 'purple');
    $('#box_one').css('font-size', '25px');
  });
  // ketika mouse keluar dari boxes satu ganti warna pink
  $('#box_one').mouseleave(function () { 
    $('#box_one').css('background-color','deeppink');
  })
  // bisa juga seperti ini ketika mouse diarahkan ke box satu
  // ganti background color yang terakhir jadi warna abu-abu
  $('#box_one').mouseenter(function () { 
    $('.boxes:last').css('background-color','gray');
  })
  $('.boxes').mouseenter(function () { 
    $(this).css('background-color', 'black');
    $(this).css('color', 'white');
  });
  $('.boxes').on('click', function () {
    $(this).css('background-color','blue');
  });
});