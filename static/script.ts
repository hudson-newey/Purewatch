let openSearch = () => {
  const baseViewerURL = "https://www.youtube-nocookie.com/embed";
  const youtubeVideoID = document.getElementById("youtube-link-input")?.innerText.replace("https://www.youtube.com/watch?v=", "");
  openPopup(`${baseViewerURL}/${youtubeVideoID}`);
}

let openPopup = (
  url: string,
  width: string = "400",
  height: string = "400"
) => {
  window.open(url, "", `width=${width}, height=${height}`);
}
