document.addEventListener('DOMContentLoaded', function () {
    var blackColor = "#000000";
    var whiteColor = "#ffffff";
    var n = 64;
    var x = 1;
    var zeile = 8;
    for (var i = 0; i < n; i++) {
        Div();
    }
    ;
    function Div() {
        var div = document.createElement("div");
        document.body.appendChild(div);
        var s = div.style;
        s.borderStyle = "solid";
        s.borderColor = "#000000";
        s.borderWidth = "1px";
        s.width = "50px";
        s.height = "50px";
        s.display = "inline-block";
    }
});
//# sourceMappingURL=aufg2.js.map