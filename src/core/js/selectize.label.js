(function ($) {
  'use strict';

  var defaultData = {i: '00000000', n: '全部服务', c: [{i: '11000000', n: '学习服务'}, {i: '99000000', n: '其他'}]};
  var defaults = {
    data: {},
    cssClass: {
      labels: 'labels',
      label: 'label',
      selected: 'label-fill',
      disabled: 'disabled'
    },
    input: {
      name: 'other',
      cssClass: 'form-control',
      placeholder: ''
    },
    test: function(value) {
      return /^(\d)*99(\d)*$/.test(value);
    },
    type: 'json',
    fieldMap: {
      'code': 'i',
      'title': 'n'
    },
    valueField: 'code',
    labelField: 'title',
    items: [],
    selectOnTab: true,
    onClick: function(event) {
    },
    onChange: function($self, event) {
      //var target = event.currentTarget;
      //console.log(target, $self.$selectize, event);
    }
  };

  $.fn.selectizeLabel = function (options) {

    function arryToMap(objArray) {
      var oMap = {};
      for(var i = 0; i < objArray.length; i++) {
        oMap[objArray[i][options.fieldMap[options.valueField]]] = {
          v: objArray[i],
          m: objArray[i].c ? arryToMap(objArray[i].c) : {}
        };
      }
      return oMap;
    }

    return this.each(function() {

      if(!options.data)
        options.data = defaultData;

      // 默认值
      options = $.extend(true, {}, defaults, options);

      var data_json = options.data;

      var data_map = arryToMap([data_json]);
      //console.log(city_map);

      var $self = $($(this)[0]);
      // 在$self对象上创建省市区的$selectize数组对象
      $self.$selectize = [];

      // 将当前的class转换为jquery选择器识别的样式，自动加“.”，并去除空格
      function dotClass(classNames) {
        return classNames && classNames.split(' ').map(function(key) {
          return '.' + key;
        }).join('');
      }

      // 创建level一级的labels
      function createLabel(rowObj, level) {

        var objVal = rowObj.v;

        var $labels = $('<div class="' + options.cssClass.labels + '"></div>');

        // 自定义change事件
        $labels.bind('change', function(event) {
          if(event.target) {
            var $target = $(event.target);
            // 这里可以不用判断，因为change事件一定是子label触发的，因此可以通过click事件调用时判断，此处只是确保样式正确，避免重复触发
            if($target.hasClass(options.cssClass.label) && !$target.hasClass(options.cssClass.selected)) {
              var $currentTarget = $(event.currentTarget);
              var value = $target.data('value');
              var lvl = $target.data('level');
              // 当前labels，删除已选中的样式，给当前选中项添加样式
              $currentTarget.find(dotClass(options.cssClass.label)).removeClass(options.cssClass.selected);
              $target.addClass(options.cssClass.selected);
              // 修正选中数组$selectize
              for(var i = lvl + 1; i < $self.$selectize.length; i++)
                delete $self.$selectize[i];
              // 设置当前选中项
              $self.$selectize[lvl] = value;
              // 删除子菜单
              $currentTarget.nextAll(dotClass(options.cssClass.labels)).remove();
              // 创建子菜单
              var $subLevel = createLabel(value, lvl + 1);
              if($subLevel)
                $subLevel.appendTo($self);

              // 自定义的label的click事件，注意：对于已经选中的，不会重复触发
              if(options.onChange && typeof options.onChange === 'function') {
                options.onChange.call(this, $self, event);
              }
            }
          }
        });

        function labelOnClick(event) {
          if(event.target) {
            var $target = $(event.target);
            // 调用labels的change事件，避免重复触发labels的change事件
            if ($target.hasClass(options.cssClass.label) && !$target.hasClass(options.cssClass.selected)) {
              // 触发change事件，并让change事件冒泡传递给父级（labels），用以触发labels的change事件，以实现选中的修改
              $(this).trigger('change');
              // 自定义的label的click事件，注意：对于已经选中的，不会重复触发
              if(options.onClick && typeof options.onClick === 'function') {
                options.onClick.call(this, event);
              }
            }
          }
        }

        if(options.test && typeof options.test === 'function' && options.test(objVal.i)) {
          var $input = $('<input class="' + options.input.cssClass + '" name="' + options.input.name + '" placeholder="' + options.input.placeholder + '" data-label="' + options.input.name + '_' + objVal.i + '"/>');
          $input.data('level', level);
          $input.appendTo($labels);
          return $labels;
        } else if(objVal.c && objVal.c.length > 0) {
          var objMap = rowObj.m;
          for(var key in objMap) {
            var $label = $('<span class="' + options.cssClass.label + '">' + objMap[key].v.n + '</span>');
            $label.data('value', objMap[key]);
            $label.data('level', level);
            $label.appendTo($labels);
            $labels.append(' ');
            // 绑定click事件
            $label.click(labelOnClick);
          }
          return $labels;
        } else
          return null;

      }

      for(var rootkey in data_map) {
        var labels = createLabel(data_map[rootkey], 0);
        if(labels)
          labels.appendTo($self);
      }

      // 获取当前选中的option，返回的是$selectizez中选中的option对象
      $self.selectedObject = function() {
        if(!this.$selectize) return null;
        return this.$selectize.map(function(x) {
          return x && x.v;
        }).filter(function(x) {
          if(x)
            return x;
        });
      };
      // 获取当前选中的值，以数组形式
      $self.selectedValue = function() {
        if(!this.$selectize) return null;
        return this.$selectize.map(function(x) {
          return x && x.v[options.fieldMap[options.valueField]];
        }).filter(function(x) {
          if(x)
            return x;
        });
      };
      $self.selectedLabel = function() {
        if(!this.$selectize) return null;
        return this.$selectize.map(function(x) {
          return x && x.v[options.fieldMap[options.labelField]];
        }).filter(function(x) {
          if(x)
            return x;
        });
      };

    });
  };

})(jQuery);
