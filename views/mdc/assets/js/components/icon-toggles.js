import {MDCIconToggle} from '@material/icon-toggle';

export function initIconToggles() {
    console.log('\tIcon Toggles');

    var components = document.querySelectorAll('.mdc-icon-toggle');
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (!component.mdcComponent) {
            component.mdcComponent = new MDCIconToggle(component);
        }
    }
}

// TODO: Add event handler
// var addToFavorites = document.getElementById('add-to-favorites');
//         var favoritedStatus = document.getElementById('favorited-status');
//         addToFavorites.addEventListener('MDCIconToggle:change', function(evt) {
//           var newStatus = evt.detail.isOn ? 'yes' : 'no';
//           favoritedStatus.textContent = newStatus;
//         });
