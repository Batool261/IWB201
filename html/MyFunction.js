

$(document).ready(function() {
  $("#myCheckbox").change(function() {
    if ($(this).is(":checked")) {
      $("#additionalInfo").show();
    } else {
      $("#additionalInfo").hide();
    }
  });
});

$(document).ready(function() {
    $("#myCheckbox1").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo1").show();
      } else {
        $("#additionalInfo1").hide();
      }
    });
  });

  $(document).ready(function() {
    $("#myCheckbox2").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo2").show();
      } else {
        $("#additionalInfo2").hide();
      }
    });
  });
  $(document).ready(function() {
    $("#myCheckbox3").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo3").show();
      } else {
        $("#additionalInfo3").hide();
      }
    });
  });
  $(document).ready(function() {
    $("#myCheckbox4").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo4").show();
      } else {
        $("#additionalInfo4").hide();
      }
    });
  });
  $(document).ready(function() {
    $("#myCheckbox5").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo5").show();
      } else {
        $("#additionalInfo5").hide();
      }
    });
  });
  $(document).ready(function() {
    $("#myCheckbox6").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo6").show();
      } else {
        $("#additionalInfo6").hide();
      }
    });
  });
  $(document).ready(function() {
    $("#myCheckbox7").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo7").show();
      } else {
        $("#additionalInfo7").hide();
      }
    });
  });
  $(document).ready(function() {
    $("#myCheckbox8").change(function() {
      if ($(this).is(":checked")) {
        $("#additionalInfo8").show();
      } else {
        $("#additionalInfo8").hide();
      }
    });
  });

  function refreshCaptcha() {
    var newCaptcha = generateCaptcha();
     document.getElementById("captcha").innerText = newCaptcha ;
}
function generateCaptcha() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var captcha = "";

    for (var i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

document.addEventListener("DOMContentLoaded", function() {
    refreshCaptcha();
});











