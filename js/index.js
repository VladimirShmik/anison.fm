const buttonToggleLike = document.querySelector('.song-like');
const buttonNotActive = document.querySelector('.song-like__icon');
const buttonActive = document.querySelector('.song-like__icon--fill');

function buttonToggle() {
    buttonNotActive.classList.toggle('song-like__icon--hide');
};
buttonToggleLike.addEventListener("click", buttonToggle);

$(document).ready(function () {
    $('select').niceSelect();
});

$(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function (event) {
    var $option = $(this);
    var $dropdown = $option.closest('.nice-select');
    $dropdown.find('.selected').removeClass('selected');
    $option.addClass('selected');
    var text = $option.data('display') || $option.html();
    $dropdown.find('.current').html(text);
    $dropdown.prev('select').val($option.data('value')).trigger('change');
});

function create_nice_select($select) {
    $select.after($('<div></div>')
        .addClass('nice-select')
        .addClass($select.attr('class') || '')
        .addClass($select.attr('disabled') ? 'disabled' : '')
        .attr('tabindex', $select.attr('disabled') ? null : '0')
        .html('<span class="current"></span><ul class="list"></ul>')
    );

    var $dropdown = $select.next();
    var $options = $select.find('option');
    var $selected = $select.find('option:selected');
    var selected_class_attr = $selected.attr('data-class');
    var selected_html = $selected.html();
    if (typeof selected_class_attr !== typeof undefined && selected_class_attr !== false) {
        selected_html = '<span class="' + selected_class_attr + '">' + $selected.text() + '</span>';
    }

    $dropdown.find('.current').html($selected.data('display') || selected_html);

    $options.each(function (i) {
        var $option = $(this);
        var display = $option.data('display');
        var option_html = $option.text();
        var class_attr = $(this).attr('data-class');
        if (typeof class_attr !== typeof undefined && class_attr !== false) {
            option_html = '<span class="' + class_attr + '">' + $option.text() + '</span>';
        }

        $dropdown.find('ul').append($('<li></li>')
            .attr('data-value', $option.val())
            .attr('data-display', (display || null))
            .addClass('option' +
                ($option.is(':selected') ? ' selected' : '') +
                ($option.is(':disabled') ? ' disabled' : ''))
            .html(option_html)
        );
    });
}