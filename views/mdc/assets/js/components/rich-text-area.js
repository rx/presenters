import Quill from "quill";

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    //[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    //[{ 'font': [] }],
    [{ 'align': [] }],
    ['link', 'image'],
    ['clean']                                         // remove formatting button
];

export function initRichTextArea() {
    console.log('\tRich Text Area');
    let components = document.querySelectorAll('.v-rich-text-area');
    for (let i = 0; i < components.length; i++) {
        let component = components[i];
        let form = component.closest('form');
        if (!component.vComponent) {
            component.vComponent = new Quill(component, {
                modules: {
                    toolbar: toolbarOptions
                },
                theme: 'snow',
                placeholder: component.dataset.placeholder
            });
            let input = document.querySelector('input[name=' + component.dataset.name + ']');
            component.vComponent.on('text-change', function(){
                input.value = component.vComponent.root.innerHTML;
            });
        }
    }
}
