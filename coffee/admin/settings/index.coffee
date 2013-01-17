index =
  init: ->
    do @detectElements
    do @bindEvents
    
  detectElements: ->    
    @form    = $("#settings")
    @options =
      success: @showResponse
    
  bindEvents: ->
    do @initValidate
    do @initFormSubmit
    
  initFormSubmit: ->
    @form.submit (e) =>
      el = $(e.currentTarget)
      if @form.valid()
        el.ajaxSubmit @options
      false
      
  showResponse: (responseText, statusText, xhr, $form) ->
    if statusText == "success"
      $.growlUI "Notification", "Successfully updated"
    else
      $.growlUI "Notification", "Something happend"
  
  initValidate: ->
    @form.validate
      rules:
        "en_time[]":
          minlength: 1
          required: true

        "time[]":
          minlength: 1
          required: true 

$(document).ready ->
  do index.init