(()=>{"use strict";var e=[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}];function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var t=document.querySelector(".card-container");function r(n){var r=document.createElement("div"),a=document.createElement("img"),i=document.createElement("div"),c=document.createElement("p"),l=document.createElement("button"),u=document.createElement("button");r.classList.add("card"),a.classList.add("card__img"),i.classList.add("card__description"),c.classList.add("card__name"),l.classList.add("card__like"),u.classList.add("card__delete"),c.innerHTML=n.name,a.src=n.link,r.append(a),r.append(u),r.append(i),i.append(c),i.append(l),t.append(r),a.onclick=function(){console.log("тык");var e=document.querySelector(".popup-group"),t=document.getElementById("current-image-container"),r=document.getElementById("current-image");console.log(n.link),r.src=n.link,e.classList.add("popup--active"),t.classList.add("popup__container--active")},l.onclick=function(){l.classList.toggle("added_like")},u.onclick=function(){var t=e.indexOf(n);console.log(t),e.splice(t,1),o()}}function o(){t.innerHTML="";var o,a=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(e);try{for(a.s();!(o=a.n()).done;)r(o.value)}catch(e){a.e(e)}finally{a.f()}}function a(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){l=!0,a=e},f:function(){try{c||null==t.return||t.return()}finally{if(l)throw a}}}}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function c(e){console.log(e);var n=e.querySelectorAll('input[type="text"]'),t=e.querySelector('input[type="submit"]');t.disabled=!0;var r,o=a(n);try{var i=function(){var e=r.value;e.classList.add("warning"),e.oninput=function(){var r,o,i;"name"===e.dataset.inputcontain&&((r=e).value.length>2&&r.value.length<40?r.classList.remove("warning"):r.classList.add("warning")),"description"===e.dataset.inputcontain&&((o=e).value.length>2&&o.value.length<200?o.classList.remove("warning"):o.classList.add("warning")),"link"===e.dataset.inputcontain&&(/^(ftp|http|https):\/\/[^ "]+$/.test((i=e).value)?i.classList.remove("warning"):i.classList.add("warning")),t.disabled=function(e,n){var t,r=a(e);try{for(r.s();!(t=r.n()).done;)if(t.value.classList.contains("warning"))return!0}catch(e){r.e(e)}finally{r.f()}return!1}(n)}};for(o.s();!(r=o.n()).done;)i()}catch(e){o.e(e)}finally{o.f()}}function l(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw a}}}}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}document.querySelector(".profile__add-new-image-button");var d,s=document.querySelector(".popup-group"),p=l(document.querySelectorAll(".popup__button-close"));try{for(p.s();!(d=p.n()).done;)d.value.onclick=f}catch(e){p.e(e)}finally{p.f()}function f(){console.log("закрыт");var e,n=l(document.querySelectorAll(".popup__container"));try{for(n.s();!(e=n.n()).done;)e.value.classList.remove("popup__container--active")}catch(e){n.e(e)}finally{n.f()}s.classList.remove("popup--active")}var m=document.getElementById("edit-profile");m.querySelector("#add-new-name").onclick=function(e){e.preventDefault();var n=document.getElementById("input-name"),t=document.getElementById("input-description"),r=document.querySelector("h1"),o=document.querySelector(".profile__job");r.innerHTML=n.value,o.innerHTML=t.value,f(),m.querySelector("form").reset()};var y=document.getElementById("add-new-image-profile");y.querySelector("#add-new-image").onclick=function(n){n.preventDefault();var t=document.getElementById("place-name"),r=document.getElementById("link-by-user");console.log(t.value,r.value);var a={name:t.value,link:r.value};console.log(a),e.push(a),o(),f(),y.querySelector("form").reset()},window.addEventListener("DOMContentLoaded",o),window.addEventListener("DOMContentLoaded",(function(){var e,n=a(document.querySelectorAll("form"));try{for(n.s();!(e=n.n()).done;)c(e.value)}catch(e){n.e(e)}finally{n.f()}})),window.openNeededPopup=function(e){var n=e.dataset.idofcontainer;document.getElementById(n).classList.add("popup__container--active"),s.classList.add("popup--active")}})();