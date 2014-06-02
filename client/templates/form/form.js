Template.userForm.rendered = function() {

    if (Meteor.settings.public.isDebug) {
        this.$("#name").val("Name")
        this.$("#email").val("test@test.com")
        this.$("#email").val("test@test.com")
    }

    $('.input-group input[required], .input-group textarea[required], .input-group select[required]').on('keyup change', function() {
        var $form = $(this).closest('form'),
          $group = $(this).closest('.input-group'),
          $addon = $group.find('.input-group-addon'),
          $icon = $addon.find('span'),
          state = false;

        if (!$group.data('validate')) {
            state = $(this).val() ? true : false;
        } else if ($group.data('validate') == "email") {
            state = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val())
        } else if ($group.data('validate') == 'phone') {
            state = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test($(this).val())
        } else if ($group.data('validate') == "length") {
            state = $(this).val().length >= $group.data('length') ? true : false;
        } else if ($group.data('validate') == "number") {
            state = !isNaN(parseFloat($(this).val())) && isFinite($(this).val());
        }

        if (state) {
            $addon.removeClass('danger');
            $addon.addClass('success');
            $icon.attr('class', 'glyphicon glyphicon-ok');
        } else {
            $addon.removeClass('success');
            $addon.addClass('danger');
            $icon.attr('class', 'glyphicon glyphicon-remove');
        }

        if ($form.find('.input-group-addon.danger').length == 0) {
            $form.find('[type="submit"]').prop('disabled', false);
        } else {
            $form.find('[type="submit"]').prop('disabled', true);
        }
    });

    $('.input-group input[required], .input-group textarea[required], .input-group select[required]').trigger('change');


}

Template.userForm.events({
    'submit form': function(event) {
        event.preventDefault();

        var $form = $(event.currentTarget);
        var values = $form.serializeArray();
        var application = {
            submittedOn: new Date()
        };
        for (var i = 0; i < values.length; i++) {
            application[values[i].name] = values[i].value
        }
        console.log(application)

        var file = $('#uploadphoto').get(0).files[0];
        if (file) {
            var image = Images.insert(file);
            application.imageId = image._id
        }

        Applications.insert(application, function(error, result) {
            if (error) {
                Session.set('serverDataResponse', "Error:" + error.reason);
            } else {
                Session.set('serverDataResponse', result);
            }
        });
    }
});
