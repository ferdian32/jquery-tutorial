$(document).ready(function () {
  // bagaimana caranya memasukan banyak properti css menggunakan jquery?
  $('.box').click(function (e) {
    e.preventDefault();
    // $(this).css({
    //   'backgroundColor': 'red',
    //   'color': 'white',
    //   'font-size': '20px',
    //   'cursor': 'Pointer',
    //   'padding': '10px 20px',
    //   'margin': '10px 0',
    //   'width': '120px',
    //   'height': '100px'
    // });


    // bagaimana caranya menambahkan classname baru yang diambil dari css?
    // contohnya di bagian css kita sudha mendesign classname dengan nama .change
    // $(this).addClass('change');
    // kalo mau hapus sebuah class

    // $(this).removeClass('change');

    // toggle() ketika sebuah class change nya sudah ada maka akan dihapus tetapi jika belom maka akan ditambahkan
    $(this).toggleClass('change');
  });
  $('.box').mouseenter(function () {
    $(this).css({
      'cursor': 'pointer',
      'background-color': 'blue'
    });
  });
  $('.box').mouseleave(function () {
    $(this).css('background-color', 'red');
  });

});