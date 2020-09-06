function set_title(title)
{
    document.title=title;

    var color = stringToColour(title);
    document.body.style.backgroundColor = color;
}

// Code to change the background color based on the string.
// Borrowed from http://jsfiddle.net/sUK45
var stringToColour = function(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}