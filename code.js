function get_page(){
    localStorage.setItem("bddy", "blank")
    main()
}
get_page()
function main(){
    document.title = "Domain Seizure"
    if(document.body == null){
        localStorage.setItem("bddy", "wnull")
        setTimeout(main, 1)
    }else{
        document.body.innerHTML = ''
        createHTMLStructure()
    }
}
function createHTMLStructure() {
    localStorage.clear("bddy")
    var style = document.createElement("style");
    style.textContent = `
      * { margin: 0; padding: 0; }
      .fimage { display: grid; height: 100%; justify-content: center; }
      .fitted { max-width: 100%; max-height: 100vh; margin: auto; border: none; }
      body    { background-color: #000000; }
    `;
  
    // Create the <div> element with the class "fimage"
    var div = document.createElement("div");
    div.className = "fimage";
  
    // Create the <a> element
    var a = document.createElement("a");
    a.href = "https://www.fbi.gov/contact-us/field-offices/anchorage/fbi-intensify-efforts-to-combat-illegal-ddos-attacks";
  
    // Create the <img> element with the class "fitted"
    var img = document.createElement("img");
    img.className = "fitted";
    img.src = "https://i0.wp.com/securityaffairs.com/wp-content/uploads/2023/05/image-17.png?ssl=1";
    img.alt = "DDoS is illegal";
  
    // Append the elements to build the structure
    a.appendChild(img);
    div.appendChild(a);
  
    // Append the <style> and <div> elements to the document body
    document.head.appendChild(style);
    document.body.appendChild(div);
}
  
