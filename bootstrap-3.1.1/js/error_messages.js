$(function () {
   
    $('#validateForm').bootstrapValidator({
        //live: 'disabled',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            countryselector: {
                validators: {
                    notEmpty: {
                        message: 'Please select your country'
                    }
                }
            },
            compregistration: {
                validators: {
                    notEmpty: {
                        message: 'Company Registration No is required and cannot be empty'
                    }
                }
            },
            compname: {
                validators: {
                    notEmpty: {
                        message: 'Company name is required and cannot be empty'
                    }
                }
            },
            zipcode: {
                message: 'The zipcode is not valid',
                validators: {
                    notEmpty: {
                        message: 'The zipcode is required and cannot be empty'
                    },
                    stringLength: {
                        min: 3,
                        max: 7,
                        message: 'The zipcode must be more than 3 and less than 7 characters long'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'The zipcode can only consist of only numbers'
                    }
                    
                }
            }
            
           
        }
    });
});
$('#validateTheForm').click(function () {
    $('#validateForm').bootstrapValidator('validate');
});