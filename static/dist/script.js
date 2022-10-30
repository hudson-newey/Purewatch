var openSearch = function () {
    var _a;
    var baseViewerURL = "https://www.youtube-nocookie.com/embed";
    var youtubeVideoID = (_a = document.getElementById("youtube-link-input")) === null || _a === void 0 ? void 0 : _a.innerText.replace("https://www.youtube.com/watch?v=", "");
    openPopup(baseViewerURL + "/" + youtubeVideoID);
};
var openPopup = function (url, width, height) {
    if (width === void 0) { width = "400"; }
    if (height === void 0) { height = "400"; }
    window.open(url, "", "width=" + width + ", height=" + height);
};
