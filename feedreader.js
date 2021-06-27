console.log("reader loaded");

try {
  document.addEventListener(
    "click",
    function () {
      readfeed();
    },
    false
  );

  const readfeed = () =>
    setTimeout(function () {
      console.log("Hello");
      document.getElementById("sections").style.display = "none";
      
      document
        .querySelectorAll("ytd-continuation-item-renderer")
        .forEach((element) => {
          element.hidden = true;
        });

      var links = [];
      var contentitems = document.querySelectorAll("[id='contents']");
      var items = contentitems[1].getElementsByTagName('a');
      for (var i = 0; i < items.length; i += 2) {
        links.push(items[i].href);
      }
      console.log(links);

      var linkset = new Set(links);
      
      var allitems = contentitems[1].querySelectorAll('ytd-compact-video-renderer');
      
      allitems.forEach((element) => {
        var hrefval=element.getElementsByTagName('a')[0].href;
        if (linkset.has(hrefval)){
          element.hidden = true;
        }
      })
      
    }, 5000);

  readfeed();
} catch (e) {
  console.log("error in reading feed", e);
}
