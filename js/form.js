const inputs = Array.from(document.getElementsByClassName('field__input'));

const validations = [
  {field: 'login', 
   re: /^.{3,}$/, 
   message: 'Must be at least 3 characters long',
   reversed: false},
   {field: 'login', 
   re: /[^a-zA-Zа-яА-Я\-_\d]/, 
   message: 'Can only contain letters, numbers, "-" or "_"',
   reversed: true},
   {field: 'password', 
   re: /^.{4,}$/, 
   message: 'Must be at least 4 characters long',
   reversed: false},
   {field: 'password', 
   re: /[A-ZА-Я]+.?\d+|\d+.?[A-ZА-Я]+/, 
   message: 'Must contain an upper case letter and a number',
   reversed: false}
  ]

for (let input of inputs) {
  input.addEventListener('keyup', validate)
};

function validate(event) {
  const field = event.target.parentNode;
  const entry = field.parentNode;
  const messageNode = entry.getElementsByClassName('entry__message')[0]; 
  let val = event.target.value;
  let valid = true;
  let messages = [];
  
  for (let validation of validations) {
    if (event.target.name == validation.field &&                validation.re.test(val) == validation.reversed) {
          messages.push(validation.message);
          valid = false;
    };
  }
  messageNode.innerHTML =  messages.join('<br>');
  valid ? field.classList.add('valid') : field.classList.remove('valid');
};

