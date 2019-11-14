// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName('ul')[0];
var first = document.createElement('li');
var first_text = document.createTextNode('kale');
first.appendChild(first_text);
list.insertBefore(first, list.firstChild);

// ADD NEW ITEM START OF LIST
var last = document.createElement('li');
var last_text = document.createTextNode('cream');
last.appendChild(last_text);
list.appendChild(last);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var el = document.querySelectorAll('li');

for(var i = 0; i < el.length; i++)
{
    el[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
var Htext = heading.firstChild.nodeValue;
var total = el.length;
var newheading = Htext+'<span>'+ total +'</span>';
heading.innerHTML = newheading;
