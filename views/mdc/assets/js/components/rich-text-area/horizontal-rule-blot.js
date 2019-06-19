// For more information on writing custom Blots:
// https://github.com/quilljs/quill/issues/2371#issuecomment-454819412
import Quill from 'quill';

const Embed = Quill.import('blots/embed');

export class HorizontalRuleBlot extends Embed {
    static get name() {
        return 'horizontal-rule';
    }
    
    static get tag() {
        return 'hr';
    }

    static action(quill, event) {
        const range = quill.getSelection(true);

        quill.insertText(range.index, '\n', Quill.sources.USER);
        quill.insertEmbed(range.index + 1, name, true, Quill.sources.USER);
        quill.setSelection(range.index + 2, Quill.sources.SILENT);
    }
};
