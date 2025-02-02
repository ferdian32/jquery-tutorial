// Mengubah dan menghapus element
// append dan prepend || after and before
$(document).ready(function () {
  // kalo menggunakan append akan menambahkan sebuah element baru tetapi berada di akhir di antara semua element
  // klik inspect
  $('.container').append('<div>Element ini berada di akhir di antara semua element</div>');
  // sedangkan prepend kebalikan dari append dia menambahkan element di awal
  $('.container').append('<p>Hallo ini paragraf yang baru saja ditambahkan berada di paling</p>');
  $('.container').prepend('<div>Element ini berada di awal di antara semua elemen');

  // menggunakan .after
  // keyword ini berfungsi untuk menambahkan elemen baru tetapi setelah element yang diselector
  $('.container').after('<div>Element ini berada di setelah pembungkus container');
  // .before() metode ini kebalikan dari keyword after
  $('.container').before('<div>Element ini sebelum pembungkus container</div>');

  // kesimpulan append dan prepend menambahkan elemen kedalam sebuah pembungkus,sedangkan after dan before menambahkan elemen sebelum atau sesudah pembungkus

  // menghapus
  // .remove() dan .empty()
  // .remove() menghapus semua element termasuk pembungkusnya juga

  // $('.container').remove();

  // sedangkan .empty() hanya menghapus isi konten yang ada di dalam pembungkusnya saja
  // $('.container').empty();

  $('.boxes').css('background-color', 'blue');
  $('.boxes').css('margin-top', '10px');
});