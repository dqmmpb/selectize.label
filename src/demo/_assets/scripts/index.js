'use strict';

$(function() {

  var labels;
/*  $.ajax('/ajax/label.min.json', {
    async: false,
    success: function (data) {
      labels = data;
    }
  });*/

  $('.label-group').each(function(){
    $(this).selectizeLabel({
      data: allservices,
      cssClass: {
        label: 'label'

      },
      input: {
        placeholder: $(this).data('placeholder')
      }
    });
  });

});
