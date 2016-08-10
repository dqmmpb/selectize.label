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
      },
      onChange: function($self, event) {
        $('.selected-label').html($self.selectedLabel().join(','));
        $('.selected-value').html($self.selectedValue().join(','));
      }
    });
  });

});
