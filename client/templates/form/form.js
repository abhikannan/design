Template.userForm.rendered = function () {

    $(document).ready(function () {
        $('.input-group input[required], .input-group textarea[required], .input-group select[required]').on('keyup change', function () {
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

    });

}

Template.userForm.events({
    'click #submitForm': function (event) {

        var file = $('#uploadphoto').get(0).files[0];

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        var fileObj = Images.insert(file, function (err, fileObj) {

        });

        /* var height = document.getElementById("height").value;
         var occassion = document.getElementById("occassion").value;
         var photolink = document.getElementById("photolink").value;
         var phone = document.getElementById("phone").value;
         var comments = document.getElementById("comments").value;*/


        Meteor.call("addUser", name, email, fileObj._id, function (error, userId) {

            if (error) {
                Session.set('serverDataResponse', "Error:" + error.reason);
                return;
            }
            Session.set('serverDataResponse', userId);
        })

    }
});
