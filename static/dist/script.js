var baseViewerURL = "https://www.youtube-nocookie.com/embed/";
(function () {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var videoId = urlParams.get("v");
    if (videoId !== null && videoId !== "") {
        window.location.href = baseViewerURL + "/" + videoId;
    }
})();
var openMethodDropdown = function () { return document.getElementById("open-method"); };
var openSearch = function () {
    var _a, _b;
    var openMethod = (_a = openMethodDropdown()) === null || _a === void 0 ? void 0 : _a.value;
    var youtubeVideoID = (_b = document.getElementById("youtube-link-input")) === null || _b === void 0 ? void 0 : _b.value.replace("https://www.youtube.com/watch?v=", "");
    var videoUrl = baseViewerURL + youtubeVideoID;
    document.getElementsByClassName("embed-video")[0].style.display = "none";
    if (openMethod === "popup") {
        openPopup(videoUrl);
    }
    else {
        if (openMethod === "embed") {
            document.getElementsByClassName("embed-video")[0].style.display = "block";
            document.getElementById("embed-video-iframe").src = videoUrl;
        }
        else if (openMethod === "navigate") {
            window.location.href = videoUrl;
        }
    }
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
