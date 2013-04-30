/* auaccess.js
 * AU Access
 * Focus the username input on the AU Access login page.
 * Copyright © 2013 Clay Miller (clay@smockle.com) and Tyler Atwell (sta0003@auburn.edu)
 */

Element.prototype.setAttributes = function (attrs) {
    for (var idx in attrs) {
        if ((idx == 'styles' || idx == 'style') && typeof attrs[idx] == 'object') {
            for (var prop in attrs[idx]){this.style[prop] = attrs[idx][prop]}
        } else if (idx == 'html') {
            this.innerHTML = attrs[idx]
        } else {
            this.setAttribute(idx, attrs[idx]);
        }
    }
};

var a = document.querySelector("#user_login");
var b = document.createElement("input");
b.setAttributes({"class": "clayisawesome", "type": "text", "id": "user_login", "name": "user", "size": "20", "tabindex": "10", "autofocus": "autofocus"});
a.parentNode.insertBefore(b, a.nextSibling);
a.parentNode.removeChild(a);
