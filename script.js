let progress=document.getElementById("progress");
let song=document.getElementById("song");
let icon=document.getElementById("icon");
let currentIndex = 0
    
    
let songs=[
    { src: "Music/Adigaa.mp3", title: "Adiga", artist: "Karthik, Ayshath Safa", image: "Images/Adiga.jpg" },
    { src: "Music/Ammaadi.mp3", title: "Ammaadi", artist: "Shakthisree Gopalan, Kaala Bhairava", image: "Images/Ammadi.jpg" },
    { src: "Music/Bujji Thalli.mp3", title: "Bujji Thalli", artist: "Devi Sri Prasad, Javed Ali", image: "Images/Bujji_Thalli.jpeg" },
    { src: "Music/Godari Gattu.mp3", title: "Godari Gattu", artist: "Ramana Gogula, Madhu Priya", image: "Images/godari_gattu.jpg" },
    { src: "Music/Kalyani Vaccha Vacchaa.mp3", title: "Kalyani Vaccha Vacchaa", artist: "Mangli, Karthik", image: "Images/Kalyani_vacha.jpeg" },
    { src: "Music/Samayama.mp3", title: "Samayama", artist: "Anurag Kulkarni, Sithara Krishnakumar", image: "Images/Samayama.jpeg" }
    ];
    
    function loadSong(index) {
        song.src = songs[index].src;
        document.querySelector("h1").textContent = songs[index].title;
        document.querySelector("p").textContent = songs[index].artist;
        document.querySelector(".song-adiga").src = songs[index].image;
        song.play();
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play");
        updateLikeIcon();
    }
    

    song.onloadedmetadata=function(){
        progress.max=song.duration;
        progress.value=song.currentTime;
    }
    
    function playPause(){
        if(icon.classList.contains("fa-pause")){
            song.pause();
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
        }
        else{
            song.play();
            icon.classList.add("fa-pause");
            icon.classList.remove("fa-play");
        }     
    }
    

    if(song.play()){
        setInterval(()=>{
            progress.value=song.currentTime;
        },500);
    }

    progress.onchange=function(){
        song.play();
        song.currentTime=progress.value;
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play");
    }

    document.querySelector(".fa-forward").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % songs.length; 
        loadSong(currentIndex);
    });

    document.querySelector(".fa-backward").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + songs.length) % songs.length; 
        loadSong(currentIndex);
    });