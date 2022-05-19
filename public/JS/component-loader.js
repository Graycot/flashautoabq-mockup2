const fileNames = ["nav", "footer"];

// for (let i = 0; i < fileNames.length; i++)
for (let fileName of fileNames) 
 { 
  fetch("/components/" + fileName +".html").then((res) => res.text()).then((code) => insertHTML(code))

  function insertHTML(code) {
    const target = document.querySelector("#" + fileName);
    if (target != null) {target.innerHTML = code;}
  }
}