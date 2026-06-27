const Handlebars = require('handlebars');

module.exports = function (tagName, className, options) {
    const content = options.fn(this);
    const classAttr = className ? (' class="' + className + '"') : '';
    const html = '<' + tagName + ' ' + classAttr + '>' + content + '</' + tagName + '>';

    return new Handlebars.SafeString(html);
};
