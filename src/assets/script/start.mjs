import { playSound } from "../assets/script/sound.mjs";

$(function () {
    playSound();

    $("#press-start").hide();
    $("#start-button").fadeOut(3000);
    $("#start-button").fadeIn(3000);
    setTimeout(function () {
        $("#press-start").show(2000);
    }, 3000);
})
