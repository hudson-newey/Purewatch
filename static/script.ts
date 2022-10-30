const baseViewerURL = "https://www.youtube-nocookie.com/embed";

(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const videoId = urlParams.get("v");

  if (videoId !== null && videoId !== "") {
    window.location.href = `${baseViewerURL}/${videoId}`;
  }
})();

let openSearch = () => {
  const youtubeVideoID = document.getElementById("youtube-link-input")?.innerText.replace("https://www.youtube.com/watch?v=", "");
  openPopup(`${baseViewerURL}/${youtubeVideoID}`);
}

let isEnter = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    openSearch();
  }
}

let openPopup = (
  url: string,
  width: string = "400",
  height: string = "400"
) => {
  window.open(url, "", `width=${width}, height=${height}`);
}
