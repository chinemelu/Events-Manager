'use strict'
$(() => {
  $('.pop').on('click', () => {
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');   
  });		
});