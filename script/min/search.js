function remplaceChar(r, e, s) {
    for (var a, n, r = r, t = 0; t < r.length; t++) r.charAt(t) == e && (a = r.substr(0, t) + s, n = r.substr(t + 1), r = a + n);
    return r
}

function searchInternet(r) {
    if ("!" == r.substr(0, 1)) {
        for (var e = 0; e < searchs.length; e++)
            if (searchs[e][0] == r.substr(0, 2)) {
                r = r.substr(3), r = remplaceChar(r, " ", "+");
                var s = window.open(searchs[e][1] + r, "_blank");
                s.focus()
            }
    } else {
        var s = window.open(searchs[0][1] + r, "_blank");
        s.focus()
    }
}

function initSearch() {
    $("#search-board input").keypress(function(r) {
        13 == r.which && (r.preventDefault(), searchInternet($("#search-board input").val()), $("#search-board input").val(""))
    });
    for (var r = "Options : ", e = 0; e < searchs.length; e++) r += e == searchs.length - 1 ? searchs[e][0] : searchs[e][0] + " | ";
    $("#search-board input").attr("placeholder", r)
}