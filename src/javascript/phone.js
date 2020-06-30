// make sure to have following fields in the form
// <input class="area_code" name="area_code" type="hidden">
// <input class="phone" name="phone" type="text">

// include country_info.php on form page and add following meta data in <head>
// <meta name="isoCode" content="<?php echo strtolower($country->isoCode) ?>">

// include following lines in the scss file
// $flagsImagePath: '~intl-tel-input/build/img/';
// import '~intl-tel-input/src/css/intlTelInput.scss';

// add following exceptions/whitelist for css in the postcss.config.js so it won't be purged
// whitelistPatterns: [/^iti/],
// whitelistPatternsChildren: [/^iti/]

require("intl-tel-input/build/js/utils"); // import tel input utils
import intlTelInput from "intl-tel-input";

let isoCode = document.head.querySelector("[name~=isoCode][content]").content;
let inputs = document.getElementsByClassName("phone");
let inputsArea = document.getElementsByClassName("area_code");
let inputWrappers = document.getElementsByClassName("iti"); // .iti class is created automatically

// loop all forms on page, then create and set inputs
for (var i = 0; i < inputs.length; i++) {
  let iti = intlTelInput(inputs[i], {
    initialCountry: isoCode,
  });

  inputWrappers[i].style.width = "100%"; // make component fit form
  inputsArea[i].value = "+" + iti.getSelectedCountryData().dialCode; // set area code input field
}
