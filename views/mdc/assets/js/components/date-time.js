import flatpickr from "flatpickr";

export function initDateTime() {
    console.log('\tDateTime');
    var components = document.querySelectorAll('.v-datetime');
        for (var i = 0; i < components.length; i++) {
            var component = components[i];
            flatpickr(component, {});
        }
}



