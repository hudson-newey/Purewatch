const baseViewerURL = "https://www.youtube-nocookie.com/embed/";

(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const videoId = urlParams.get("v");

  if (videoId !== null && videoId !== "") {
    window.location.href = `${baseViewerURL}/${videoId}`;
  }
})();

let openMethodDropdown = (): HTMLSelectElement => document.getElementById("open-method") as HTMLSelectElement;

let openSearch = () => {
  const openMethod = openMethodDropdown()?.value;
  const youtubeVideoID = (document.getElementById("youtube-link-input") as HTMLInputElement)?.value.replace("https://www.youtube.com/watch?v=", "");
  const videoUrl = baseViewerURL + youtubeVideoID;

  (document.getElementsByClassName("embed-video")[0] as HTMLDivElement).style.display = "none";
  if (openMethod === "popup") {
    openPopup(videoUrl);
  } else {
    if(openMethod === "embed") {
      (document.getElementsByClassName("embed-video")[0] as HTMLDivElement).style.display = "block";
      (document.getElementById("embed-video-iframe") as HTMLIFrameElement).src = videoUrl;
    }  else if (openMethod === "navigate") {
      window.location.href = videoUrl;
    }
  }
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
