(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('form-status');
  form.setAttribute('novalidate', '');
  var msgs = {
    name: 'Enter your name.',
    email: 'Enter a valid email address, for example name@example.com.',
    message: 'Enter a message.'
  };
  function check(field) {
    var err = document.getElementById(field.id + '-error');
    var ok = field.checkValidity() && field.value.trim() !== '';
    err.textContent = ok ? '' : msgs[field.id];
    field.setAttribute('aria-invalid', ok ? 'false' : 'true');
    return ok;
  }
  var fields = ['name', 'email', 'message'].map(function (id) { return document.getElementById(id); });
  fields.forEach(function (f) { f.addEventListener('blur', function () { check(f); }); });
  form.addEventListener('submit', function (e) {
    var bad = fields.filter(function (f) { return !check(f); });
    if (bad.length) {
      e.preventDefault();
      status.textContent = bad.length === 1 ? 'There is 1 error. Fix it and send again.' : 'There are ' + bad.length + ' errors. Fix them and send again.';
      bad[0].focus();
    } else if (form.action.indexOf('your-form-id') !== -1) {
      e.preventDefault();
      status.textContent = 'Demo mode: your form is valid. Add your Formspree ID in contact.html to send real messages.';
      status.focus();
    }
  });
})();
