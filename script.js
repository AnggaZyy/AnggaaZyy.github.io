const upload_box = document.querySelector(".box"),
upload_text = document.querySelector(".bar"),
upload_btn = document.querySelector(".download a");

upload_btn.addEventListener("click", progress);
var i = 0;
function progress() {
  // progress function
  if (i == 0) {
    // if else
      i = 1
      var elem = document.getElementById("text");
      var load = document.getElementById("upload");
      var uploaded = document.getElementById("active");
      var width = 10;
      var id = setInterval(frame, 50); // this is the speed taken to upload file / or to reach the 100 goal
      function frame() {
        // frame function
        if (width >= 100){ // if width reaches 100 goal
          clearInterval(id); // clears the interval after reaching 100 goal
          i = 0;
          uploaded.innerHTML = "<i class='bx bxs-check-circle'></i> Completed";
          elem.classList.remove("active");
          elem.classList.add("premium");
          load.classList.add("done");
          uploaded.style.background = "#2ed573";
          // Now create this code to download file when download is done
          function download(fileUrl, fileName) {
          var a = document.createElement("a");
          a.href = fileUrl;
          a.setAttribute("download", fileName);
          a.click();
        }
    download("https://ponselharian.com/1f3qr");

        } else {
          // else
          width++;
          load.style.width = width + "%";
          elem.innerHTML = width + "%";
          uploaded.innerHTML = "<i class='bx bxs-cloud-download bx-flashing' ></i> Downloading";
          elem.classList.add("active");
          elem.classList.remove("premium");
          load.classList.add("show");
          load.classList.remove("done");
          uploaded.style.background = "#3742fa";
        }
      }
    }
  }
