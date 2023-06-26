var ver_hour = document.querySelector('#ver_hour');
var dk = document.querySelector('#dk');
var select = document.querySelector('#select');
var convert = document.querySelector('#convert');

window.onload = function() {
  hour_24_push();
  dk_push();
}

convert.addEventListener('click', function() {
  if (convert.value === '24 hours ver') {
    convertTo12Hour();
    convert.value = '12 hours ver';
    select.style.display = 'none';
  } else {
    convertTo24Hour();
    convert.value = '24 hours ver';
    select.style.display = 'inline-block';
  }
});

function hour_24_push() {
  var count = 24;
  for (let i = 0; i < count; i++) {
    var option = document.createElement("option");
    var value = i + 1;
    var textContent = value.toString().padStart(2, '0');

    option.value = value;
    option.textContent = textContent;

    ver_hour.appendChild(option);
  }

  select.style.display = 'none';
  convert.value = '24 hours ver';
}

function hour_12_push() {
  var count = 12;
  for (let i = 0; i < count; i++) {
    var option = document.createElement("option");
    var value = i + 1;
    var textContent = value.toString().padStart(2, '0');

    option.value = value;
    option.textContent = textContent;

    ver_hour.appendChild(option);
  }

  convert.value = '12 hours ver';
}

function convertTo24Hour() {
  for (var i = 0; i < ver_hour.options.length; i++) {
    var hour = parseInt(ver_hour.options[i].textContent);
    var suffix = select.value;
    if (suffix === 'pm' && hour !== 12) {
      hour += 12;
    } else if (suffix === 'am' && hour === 12) {
      hour = 0;
    }
    ver_hour.options[i].textContent = hour.toString().padStart(2, '0');
  }
}

function convertTo12Hour() {
  for (var i = 0; i < ver_hour.options.length; i++) {
    var hour = parseInt(ver_hour.options[i].textContent);
    var suffix = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12 || 12;
    ver_hour.options[i].textContent = hour.toString().padStart(2, '0');
  }
}

function dk_push() {
    var count = 60;
    for (let i = 0; i < count; i++) {
        var option = document.createElement("option");
        var value = i + 1;
        var textContent = value.toString();

        option.value = value;
        option.textContent = textContent;

        dk.appendChild(option);
    }
}