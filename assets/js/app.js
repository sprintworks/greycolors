(function() {

    'use strict';

    var GreyColors = {

        init: function() {

            this.updateInput();

        },

        updateInput: function() {
            
            var rangeSlider = document.getElementById('rangeInput');
            var rangeColor = document.getElementById('rangeColor');
            var outputColor = document.getElementById('textInput');

            rangeColor.style.backgroundColor = tinycolor("rgb("+rangeSlider.value+"%, "+rangeSlider.value+"%, "+rangeSlider.value+"%)");
            outputColor.innerHTML = tinycolor("rgb("+rangeSlider.value+"%, "+rangeSlider.value+"%, "+rangeSlider.value+"%)").toHexString();  
            
            rangeSlider.addEventListener('input', function() {
                
                var _this = this.value;
                var hexcolor = tinycolor("rgb("+_this+"%, "+_this+"%, "+_this+"%)");
                rangeColor.style.backgroundColor = hexcolor;   
                outputColor.innerHTML = hexcolor.toHexString();   
            
            }, false);

            
        },

        

    };

    document.addEventListener('DOMContentLoaded', function() { 

        GreyColors.init();

    });

}());