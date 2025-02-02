$(document).ready(function () {
  
  // get dan set nilai
  // ketika tombol form di submit jalanin fungsi
  $('form').submit(function(e){
    // fungsi e.preventDefault adalah mencegah
    // form untuk pindah ke halaman lain
    // bisa juga seperti ini :
    // evet.preventDefault()
    e.preventDefault();
    // untuk mengambil isi dari value form
    let sentence = $('#input').val();
    // memasukan kedalam text h2
    // $('h2').text(sentence);

    $('.boxes').html(sentence);
  });
});
