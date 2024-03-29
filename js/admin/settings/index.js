var index;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
index = {
  init: function() {
    this.detectElements();
    return this.bindEvents();
  },
  detectElements: function() {
    this.form = $("#settings");
    return this.options = {
      success: this.showResponse
    };
  },
  bindEvents: function() {
    this.initValidate();
    return this.initFormSubmit();
  },
  initFormSubmit: function() {
    return this.form.submit(__bind(function(e) {
      var el;
      el = $(e.currentTarget);
      if (this.form.valid()) {
        el.ajaxSubmit(this.options);
      }
      return false;
    }, this));
  },
  showResponse: function(responseText, statusText, xhr, $form) {
    if (statusText === "success") {
      return $.growlUI("Notification", "Successfully updated");
    } else {
      return $.growlUI("Notification", "Something happend");
    }
  },
  initValidate: function() {
    return this.form.validate({
      rules: {
        "en_time[]": {
          minlength: 1,
          required: true
        },
        "time[]": {
          minlength: 1,
          required: true
        }
      }
    });
  }
};
$(document).ready(function() {
  return index.init();
});