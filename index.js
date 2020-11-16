'use strict';

$('#js-shopping-list-form').on('submit', e =>{
  e.preventDefault();
  $('<li><span class="shopping-item">' + $('#shopping-list-entry').val() + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle">' +
  '<span class="button-label">check</span></button><button class="shopping-item-delete">' +
  '<span class="button-label">delete</span></button></div></li>').appendTo('.shopping-list');
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
  e.preventDefault();
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

$('.shopping-list').on('click', '.shopping-item-delete', function(e) {
  e.preventDefault();
  $(this).closest('li').remove();
});