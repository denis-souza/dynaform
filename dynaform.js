(function ( $ ) {

  $.fn.dynaform = function( options ) {

  var state = (options.fields !== undefined && options.fields.state !== undefined) ? options.fields.state : '';
  var level = (options.fields !== undefined && options.fields.level !== undefined) ? options.fields.level : '';
  var form = $('<form />', { id: 'dynaform', class: 'dynaform', action: '', method: 'POST' });

  form.append(
    $('<input />', { name: 'token', type: 'hidden', value: options.token}),
    $('<input />', { name: 'secret', type: 'hidden', value: options.secret}),
    $('<input />', { id: 'name', class: 'form-control', name: 'name', placeholder: 'Name', type: 'text' }),
    $('<input />', { id: 'email', class: 'form-control', name: 'email', placeholder: 'Email', type: 'text' })
  );

  if (state) {
    var select = $('<select />', { id: 'state', class:'form-control', name: 'state'});
      $(state).each(function(index, data) {
        select.append( $("<option />", {value: data, text: data}));
      });
    form.append(select);
  };

  if (level) {
    var select = $('<select />', { id: 'level', class:'form-control', name: 'level'});
      $(level).each(function(index, data) {
        select.append( $("<option />", {value: data, text: data}));
      });
    form.append(select);
  };

  form.append($('<input />', { id: 'save-button', class: 'button-form btn btn-xl', type: 'submit', value: 'Enviar' }));
  return this.append(form);
};

}( jQuery ));
