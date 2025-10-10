
$(document).ready(function () {

    $("#me").click(function (e) {
        e.preventDefault()
        function myel(myclass = "") {
            if (!$.trim($("#inputme").val()) == "") {
                let vall = $("#inputme").val()
                    , newH3 = $('<h3> </h3>')
                    , newDiv = $('<div class="line"></div>')
                    , bigDiv = $(`<div ${myclass}'> </div>`)
                $(newH3).append(vall)
                $(newDiv).append(newH3)
                $(bigDiv).append(newDiv)
                return bigDiv
            }
            else {
                return 
            }

        }
        $("#messageme").append(myel('class="end"'))
        $("#inputme").val("")  
        document.getElementById('messageme').scrollTop = document.getElementById('messageme').scrollHeight; 
    });

    $("#you").click(function (e) {
        e.preventDefault()
        function myel(myclass = "") {
            if (!$.trim($("#inputyou").val()) == "") {
                let vall = $("#inputyou").val()
                    , newH3 = $('<h3> </h3>')
                    , newDiv = $('<div class="line"></div>')
                    , bigDiv = $(`<div ${myclass}'> </div>`)
                $(newH3).append(vall)
                $(newDiv).append(newH3)
                $(bigDiv).append(newDiv)
                return bigDiv
            }
            else {
                return 
            }

        }
        $("#messageyou").append(myel('class="end"'))
        $("#inputyou").val("")  
        document.getElementById('messageyou').scrollTop = document.getElementById('messageyou').scrollHeight;   
    });


















});