console.log("heloo world")


//FUNCTIONS

//get song name
function getSongName(url) {
    let name = decodeURIComponent(url)
        .split(/[/\\]/)   // split by / OR \
        .pop()            // take last part
        .replace(".mp3", "");
    return name.split(" - ")[0]; // only song name
}
//get artist name
function getArtistName(url) {
    let name = decodeURIComponent(url.split("/").pop().replace(".mp3", ""));
    name = name.split("_ ").pop();

    if (name.includes("\\")) {
        return "Unknowm";
    }

    return name;
}
//function to update song name
function updatesongname(currentSong) {
    document.querySelector(".songnameabovetimeline").innerHTML = `${getSongName(currentSong.src)} by ${getArtistName(currentSong.src)}`;
}
//function to format time
function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
//function to update time
function updatesongtime(currentSong) {
    const current = formatTime(currentSong.currentTime);
    const total = formatTime(currentSong.duration);
    document.querySelector(".timingabovetimeline").innerHTML = `${current} / ${total}`;
}
//function to update timeline
function updatetimeline(currentSong) {
    const current = currentSong.currentTime;
    const total = currentSong.duration;
    const percent = (current / total) * 100;
    document.querySelector(".timelinecircle").style.left = `${percent}%`;
}
//function to update timeline from clicking on it
function updatetimefromtimeline(e, currentSong) {
    const timeline = document.querySelector(".timeline");
    const rect = timeline.getBoundingClientRect();

    const clickX = e.clientX - rect.left;   // position inside timeline
    const width = rect.width;

    const percent = clickX / width;

    currentSong.currentTime = percent * currentSong.duration;

    document.querySelector(".timelinecircle").style.left = `${percent * 100}%`;
}
async function getfoldername() {
    let res = await fetch("http://127.0.0.1:3000/songs/");
    let text = await res.text();

    let div = document.createElement("div");
    div.innerHTML = text;
    let links = div.getElementsByTagName("a");

    let folders = [];

    for (let i = 0; i < links.length; i++) {
        let href = decodeURIComponent(links[i].getAttribute("href"));
        if (href === "../") continue;       // skip parent folder
        href = href.replace(/\\/g, "/");    // replace backslashes with forward slashes
        if (href.endsWith("/")) {           // only folders
            folders.push(href.replace(/\/$/, "")); // remove trailing slash
        }
    }

    // console.log(folders); 
    return folders;
}

//function to get all the songs
async function getsongs(foldername) {
    //fetch the file
    // let a = await fetch("http://127.0.0.1:3000/songs/cs")
    let a = await fetch(`http://127.0.0.1:3000${foldername}`)

    let response = await a.text() //convert in the text
    // console.log(response)

    //put all the text in a div 

    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")//give an  array
    // console.log(as)
    let songs = []

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }
    }
    return songs

}

//function to fetch song data

async function getFolderInfo(folder) {
    let res = await fetch(`http://127.0.0.1:3000${folder}/info.json`);
    let data = await res.json();
    return data;
}

// function to render the song in the left box after clicked
function renderSongs(autoLoadFirst = true) {
    const songBoxContainer = document.querySelector(".songmainbox");
    songBoxContainer.innerHTML = "";


    //insert song in the left bar under library section
    songs.forEach((song, index) => {
        const html = `
        <div class="songbox" data-index="${index}">
            <img class="songicon" src="assets/songicon.png">
            <div class="songdetailbox">
                <div class="songname">${getSongName(song)}</div>
                <div class="artistname">${getArtistName(song)}</div>
            </div>
            <div class="playnowbox">
                <img class="playicon" src="assets/playicon.png">
                <div class="playtext">Play</div>
            </div>
        </div>`;
        songBoxContainer.insertAdjacentHTML("beforeend", html);
    });

    addSongEvents();

    if (autoLoadFirst && songs.length > 0) {
        currentIndex = 0;
        currentSong.src = songs[0];
        currentSong.volume = volumeSlider.value / 100;

        //update playbar things
        updatesongname(currentSong);
        updatesongtime(currentSong);
        updatetimeline(currentSong);

        //updatetimeline and song time when click on time line
        currentSong.addEventListener("timeupdate", () => {
            updatesongtime(currentSong);
            updatetimeline(currentSong);
        });

        //for changing play and pause 
        currentSong.addEventListener("play", () => playBtn.classList.add("playing"));
        currentSong.addEventListener("pause", () => playBtn.classList.remove("playing"));
    }
}

// //function to add song events use by rendersong() function


function addSongEvents() {
    document.querySelectorAll(".songbox").forEach(box => {
        box.addEventListener("click", () => {
            const index = parseInt(box.dataset.index);
            currentIndex = index;

            // Stop current song
            currentSong.pause();
            currentSong.currentTime = 0;

            // Load and play new song
            currentSong.src = songs[index];
            currentSong.volume = volumeSlider.value / 100;
            currentSong.play();

            updatesongname(currentSong);
        });
    });
}












//VARIABLES


// let currentSong = null;

let pausebuttonhtml = `
<svg id="pausebutton" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="1" cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
    <path
        d="M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z"
        stroke="#1C274C" stroke-width="1.5" />
    <path
        d="M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z"
        stroke="#1C274C" stroke-width="1.5" />
</svg>
`;
let playbuttonhtml = `
    <svg id="playbutton" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z"
                        stroke="#000000" stroke-width="2" stroke-linejoin="round" />
                </svg>
                `;

// const playBtn = document.getElementById("playbutton");








// MAIN FUNCTION


let songs = [];
let currentSong = new Audio();
let currentIndex = 0;

const playBtn = document.getElementById("playbutton");
const volumeSlider = document.getElementById("volumeslider");

async function main() {
    // Load folders
    let folders = await getfoldername();

    // Make song cards dynamically
    let songCardBox = document.querySelector(".songcardbox");
    for (let index = 0; index < folders.length; index++) {

        let folder = folders[index];
        let info = await getFolderInfo(folder);

        let folderName = folder.split("/").pop();
        let cardHTML = `
<div class="songcard" data-index="${index}">
    <div class="songimagebox">
        <img src="http://127.0.0.1:3000${folder}/cover.png">
    </div>
    <div class="songname">${info.title}</div>
    <div class="songdesc">${info.description}</div>
</div>`;
        songCardBox.insertAdjacentHTML("beforeend", cardHTML);
    };

    // Load first folder songs
    songs = await getsongs(folders[0]);
    renderSongs();

    // Card click → load songs from that folder
    document.querySelectorAll(".songcard").forEach(card => {
        card.addEventListener("click", async () => {
            currentIndex = 0;

            // Stop current song
            currentSong.pause();
            currentSong.currentTime = 0;

            // Load new songs
            const index = card.dataset.index;
            songs = await getsongs(folders[index]);

            renderSongs(true);
        });
    });

    // Play/Pause button
    playBtn.addEventListener("click", () => {
        if (!currentSong.src) return;
        currentSong.paused ? currentSong.play() : currentSong.pause();
    });

    // Volume control
    volumeSlider.addEventListener("input", () => {
        currentSong.volume = volumeSlider.value / 100;
    });

    // Timeline click
    document.querySelector(".timeline").addEventListener("click", (e) => {
        updatetimefromtimeline(e, currentSong);
    });

    // Next / Previous button logic
    const previousbutton = document.querySelector("#previousbutton");
    const nextbutton = document.querySelector("#nextbutton");

    nextbutton.addEventListener("click", () => {
        if (currentIndex < songs.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // loop to first
        }
        currentSong.src = songs[currentIndex];
        currentSong.volume = volumeSlider.value / 100;
        currentSong.play();
        updatesongname(currentSong);
        playBtn.classList.add("playing");
    });

    previousbutton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = songs.length - 1; // loop to last
        }
        currentSong.src = songs[currentIndex];
        currentSong.volume = volumeSlider.value / 100;
        currentSong.play();
        updatesongname(currentSong);
        playBtn.classList.add("playing");
    });

    // Update timeline and song time while playing
    currentSong.addEventListener("timeupdate", () => {
        updatesongtime(currentSong);
        updatetimeline(currentSong);
    });

    // Sync play/pause icon
    currentSong.addEventListener("play", () => playBtn.classList.add("playing"));
    currentSong.addEventListener("pause", () => playBtn.classList.remove("playing"));



    // HAMBURGER SIDEBAR TOGGLE
    // const hamburger = document.querySelector(".hamburger");
    // const closeBtn = document.querySelector(".close");
    // const leftSection = document.querySelector(".leftsection");

    // // Open sidebar on hamburger click
    // hamburger.addEventListener("click", () => {
    //     leftSection.classList.add("active");
    // });

    // // Close sidebar on close button click
    // closeBtn.addEventListener("click", () => {
    //     leftSection.classList.remove("active");
    // });

    // // Optional: close sidebar when clicking outside (on right section)
    // const rightSection = document.querySelector(".rightsection");
    // rightSection.addEventListener("click", () => {
    //     if (window.innerWidth <= 830) { // only for mobile
    //         leftSection.classList.remove("active");
    //     }
    // });



    const hamburger = document.querySelector(".hamburger");
    const leftSection = document.querySelector(".leftsection");
    const closeIcon = document.querySelector(".close");

    // Open Sidebar
    hamburger.addEventListener("click", () => {
        leftSection.classList.add("active");
    });

    // Close Sidebar via Close Icon
    closeIcon.addEventListener("click", () => {
        leftSection.classList.remove("active");
    });

    document.addEventListener("click", (e) => {
        if (!leftSection.contains(e.target) && !hamburger.contains(e.target)) {
            leftSection.classList.remove("active");
        }
    });





}



main();