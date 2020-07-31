console.log('extension ok');

const interval = setInterval(() => {
    const rigthControls = document.getElementsByClassName("ytp-right-controls")[0];
    
     if(rigthControls){
        console.log(rigthControls);
        clearInterval(interval);

        const vid = document.getElementsByClassName("video-stream html5-main-video")[0];

        const button = document.createElement("button");
        button.innerHTML = "3x";
        button.classList.add("speed-button", "ytp-button");

        const buttond = document.createElement("button");
        buttond.classList.add("speed-button", "ytp-button");

        const buttoni = document.createElement("button");
        buttoni.classList.add("speed-button", "ytp-button");
        
        buttond.addEventListener("click", () => {
            vid.playbackRate -= 0.1
            console.log(vid.playbackRate)
        })

        buttoni.addEventListener("click", () => {
            vid.playbackRate += 0.1
            console.log(vid.playbackRate)
        })

        button.addEventListener("click", () => {
            vid.playbackRate = 3
            
        })

        var mysvgi = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        var pathi = document.createElementNS("http://www.w3.org/2000/svg", "path");

        mysvgi.setAttribute("heigth", "100%");
        mysvgi.setAttribute("version", "1.1");
        mysvgi.setAttribute("width", "100%");
        mysvgi.setAttribute("viewBox", "0 0 16 16");
        mysvgi.setAttribute("fill", "currentColor");

        var mysvgd = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        var pathd = document.createElementNS("http://www.w3.org/2000/svg", "path");


        mysvgd.setAttribute("heigth", "100%");
        mysvgd.setAttribute("version", "1.1");
        mysvgd.setAttribute("width", "100%");
        mysvgd.setAttribute("viewBox", "0 0 16 16");
        mysvgd.setAttribute("fill", "currentColor");


        pathi.setAttribute("fill-rule", "evenodd");
        pathi.setAttribute("d", "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z");

        pathd.setAttribute("fill-rule", "evenodd");
        pathd.setAttribute("d", "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z");

        mysvgi.appendChild(pathi);
        mysvgd.appendChild(pathd);

        buttoni.appendChild(mysvgi);
        buttond.appendChild(mysvgd);

        rigthControls.appendChild(buttond);
        rigthControls.appendChild(button);
        rigthControls.appendChild(buttoni);


     }
})
