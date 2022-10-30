var baseViewerURL = "https://www.youtube-nocookie.com/embed";
(function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var videoId = urlParams.get("v");
    if (videoId !== null && videoId !== "") {
        window.location.href = baseViewerURL + "/" + videoId;
    }
})();
var openSearch = function () {
    var _a;
    var youtubeVideoID = (_a = document.getElementById("youtube-link-input")) === null || _a === void 0 ? void 0 : _a.innerText.replace("https://www.youtube.com/watch?v=", "");
    openPopup(baseViewerURL + "/" + youtubeVideoID);
};
var isEnter = function (event) {
    if (event.key === "Enter") {
        openSearch();
    }
};
var openPopup = function (url, width, height) {
    if (width === void 0) { width = "400"; }
    if (height === void 0) { height = "400"; }
    window.open(url, "", "width=" + width + ", height=" + height);
};
