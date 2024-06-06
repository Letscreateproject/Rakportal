"use strict";

function generateMaterialSelect(select_previous, options) {
    let container = document.createElement("div");
    container.classList.add("select-wrapper");

    let input = document.createElement('input');
    input.classList.add('select-dropdown');
    input.type     = "text";
    input.value    = "Select:";
    input.readOnly = true;

    let select = document.createElement("select");
    select.id = select_previous.id;
    select.classList = select_previous.classList;
    select.name = select_previous.name;

    let ul = document.createElement("ul");
    for (let i = 0; i < options.length; i++) {
        let value = options.item(i);
        let li = document.createElement("li");
        let option = document.createElement("option");

        option.value = options.item(i).value;
        option.text = options.item(i).text;
        option.selected = options.item(i).selected;
        if (option.selected) {
            input.value = option.text;
        }
        li.dataset.value = value.value;

        let span = document.createElement("span");
        span.innerText = value.text;

        li.appendChild(span);
        ul.appendChild(li);
        select.appendChild(option);
    }
    select.value = select_previous.value;

    container.appendChild( input );
    container.appendChild( select );
    container.appendChild( ul );
    return container;
}

let selects = document.getElementsByTagName( "select" );
for (let i=0; i < selects.length; i++)  {
    let options = selects.item(i).options;
    let newSelect = generateMaterialSelect(selects.item(i), options);

    selects.item(i).replaceWith(newSelect);
}

let dropdowns = document.getElementsByClassName("select-dropdown");
for (let i = 0; i < dropdowns.length; i++) {
    dropdowns.item( i ).onclick = function(event) {
        if (event.target.parentElement.classList.contains("active")) {
            event.target.parentElement.classList.remove('active');
        } else {
            event.target.parentElement.classList.add("active");
        }
    }
}

let list_elements = document.querySelectorAll(".select-wrapper > ul > li");
for (let i = 0; i < list_elements.length; i++) {
    list_elements.item( i ).onclick = function (event) {
        let element = event.target.parentElement;
        let parent = element.parentElement.parentElement;
        let value = element.dataset.value;
        let text = event.target.innerHTML;

        parent.firstElementChild.value = text;
        parent.getElementsByTagName("select")[0].value = value;
        parent.classList.remove("active");
    }
}