var vacation;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
vacation = {
  vacation_templ: JST["emploees/vacation"],
  day_option: JST["emploees/day_option"],
  modal_template: JST["emploees/modal_vacation"],
  init: function() {
    this.detectElements();
    return this.bindEvents();
  },
  detectElements: function() {
    this.year_select = $(".year-select");
    this.div_model = $("#modal_delete");
    this.div_vacation = $(".vacation");
    return this.recallVacationElements();
  },
  bindEvents: function() {
    this.initVacationAdder();
    this.initVacationDeleter();
    this.initMonthSelect();
    return this.initYearSelector();
  },
  initYearSelector: function() {
    return this.year_select.change(__bind(function(ev) {
      var element, me;
      element = $(ev.currentTarget);
      me = this;
      $.ajax({
        url: SYS.baseUrl + 'admin/employees/get_year_vacations',
        data: $.param({
          year: element.find(":selected").val(),
          user_id: element.data("id")
        }),
        type: 'POST',
        dataType: 'json',
        success: __bind(function(res) {
          if (res.text = "success") {
            return me.div_vacation.html(res.data);
          }
        }, this)
      });
      return false;
    }, this));
  },
  initMonthSelect: function() {
    this.month_select = $(".month-select");
    this.month_select.unbind('change');
    return this.month_select.change(__bind(function(ev) {
      var element, me;
      element = $(ev.currentTarget);
      me = this;
      $.ajax({
        url: SYS.baseUrl + 'admin/employees/get_months_list',
        data: $.param({
          month: element.find(":selected").val()
        }),
        type: 'POST',
        dataType: 'json',
        success: __bind(function(res) {
          if (res.text = "success") {
            return element.prev().html(me.day_option({
              days: res.data.days
            }));
          }
        }, this)
      });
      return false;
    }, this));
  },
  recallVacationElements: function() {
    this.v_add = $("#vacation-button");
    this.v_field = $(".vacation-field");
    return this.v_remove = $(".vacation-remove");
  },
  initVacationAdder: function() {
    return this.v_add.click(__bind(function(e) {
      this.v_field.append(this.vacation_templ({}));
      this.recallVacationElements();
      this.initVacationDeleter();
      return this.initMonthSelect();
    }, this));
  },
  _initDeleterSubmit: function(element) {
    return $(".btn.btn-primary.delete").click(__bind(function(e) {
      var el;
      el = $(e.currentTarget);
      $.ajax({
        url: SYS.baseUrl + 'admin/employees/delete_vacation',
        data: $.param({
          id: el.data("id")
        }),
        type: 'POST',
        dataType: 'json',
        success: __bind(function(res) {
          if (res.text = "success") {
            $("#myModal").modal('hide');
            return element.parent().remove();
          }
        }, this)
      });
      return false;
    }, this));
  },
  initVacationDeleter: function() {
    this.v_remove.unbind('click');
    return this.v_remove.click(__bind(function(e) {
      var el;
      el = $(e.currentTarget);
      this.div_model.html(this.modal_template({
        id: el.data("id")
      }));
      this._initDeleterSubmit(el);
      return $("#myModal").modal('show');
    }, this));
  }
};
$(document).ready(function() {
  return vacation.init();
});