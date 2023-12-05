new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [{
        id: 1,
        name: "Hear Me Now",
        artist: "Alok",
        source: "music/electronica/Alok, Bruno Martini feat. Zeeba Hear Me Now.mp3",
        cover: "img/music/electronica/Alok.jpg"
    },
    {
        id: 2,
        name: "Blah Blah Blah",
        artist: "Armin van Buuren",
        source: "music/electronica/Armin van Buuren - Blah Blah Blah.mp3",
        cover: "img/music/electronica/armin.jpg"
    }, 
    {
        id: 3,
        name: "All On Me",
        artist: "Armin van Buuren & Brennan Heart",
        source: "music/electronica/Armin van Buuren _ Brennan Heart feat. Andreas Moe - All On Me.mp3",
        cover: "img/music/electronica/armin.jpg"
    }, 
    {
        id: 4,
        name: "Heaven",
        artist: "Avicii",
        source: "music/electronica/Avicii - Heaven.mp3",
        cover: "img/music/electronica/avicii.jpg"
    }, 
    {
        id: 5,
        name: "The Days",
        artist: "Avicii",
        source: "music/electronica/Avicii - The Days.mp3",
        cover: "img/music/electronica/avicii.jpg"
    }, {
        id: 6,
        name: "Bad",
        artist: "David Guetta Feat. Vassy",
        source: "music/electronica/Bad - David Guetta feat. Vassy.mp3",
        cover: "img/music/electronica/DAVID-GUETTA1.jpg"
    },
    {
        id: 7,
        name: "Feels",
        artist: "Calvin Harris (feat. Pharrell Williams)",
        source: "music/electronica/Calvin Harris - Feels (feat. Pharrell Williams).mp3",
        cover: "img/music/electronica/calvin_harris.jpg"
    },
    {
        id: 8,
        name: "I Sold My Bed_ But Not My Stereo",
        artist: "Capital Cities",
        source: "music/electronica/Capital Cities - I Sold My Bed_ But Not My Stereo.mp3",
        cover: "img/music/electronica/capital_cities.jpg"
    },
    {
        id: 9,
        name: "Under The Moon",
        artist: "Claptone ft. Nathan Nicholson",
        source: "music/electronica/Claptone ft. Nathan Nicholson - Under The Moon.mp3",
        cover: "img/music/electronica/Claptone.jpg"
    },
    {
        id: 10,
        name: "Another Way",
        artist: "Gigi D_Agostino",
        source: "music/electronica/Gigi D_Agostino - Another Way.mp3",
        cover: "img/music/electronica/gigi.jpg"
    },
    {
        id: 11,
        name: "Shake It",
        artist: "INNDRIVE",
        source: "music/electronica/INNDRIVE - Shake It.mp3",
        cover: "img/music/electronica/inndrive.jpg"
    },
    {
        id: 12,
        name: "Blue",
        artist: "Tiësto feat. Stevie Appleton",
        source: "music/electronica/Tiësto - BLUE (feat. Stevie Appleton).mp3",
        cover: "img/music/electronica/Tiesto.jpg"
    },
    {
        id: 13,
        name: "Sunshine reggae",
        artist: "Bob marley",
        source: "music/reggae/Bob marley   sunshine reggae.mp3",
        cover: "img/music/reggae/bob.jpg"
    },
    {
        id: 14,
        name: "A lalala long",
        artist: "Bob Marley",
        source: "music/reggae/Bob Marley - A lalala long.mp3",
        cover: "img/music/reggae/bob.jpg"
    },
    {
        id: 15,
        name: "Buffalo Soldier",
        artist: "Bob Marley",
        source: "music/reggae/Bob Marley - Buffalo soldier.mp3",
        cover: "img/music/reggae/bob.jpg"
    },
    {
        id: 16,
        name: "Is This Love",
        artist: "Bob Marley",
        source: "music/reggae/Bob Marley - Is This Love.mp3",
        cover: "img/music/reggae/bob.jpg"
    },
    {
        id: 17,
        name: "Natural Mystic",
        artist: "Bob Marley",
        source: "music/reggae/Bob Marley - Natural Mystic.mp3",
        cover: "img/music/reggae/bob.jpg"
    },
    {
        id: 18,
        name: "Jammin",
        artist: "Bob marley",
        source: "music/reggae/Bob Marley Jammin.mp3",
        cover: "img/music/reggae/bob.jpg"
    },
    {
        id: 19,
        name: "Three Little Birds",
        artist: "Bob marley",
        source: "music/reggae/Bob Marley- Three Little Birds.mp3",
        cover: "img/music/reggae/bob.jpg"
    },
    {
        id: 20,
        name: "Go Pato",
        artist: "Pato Banton",
        source: "music/reggae/Go Pato- Pato Banton.mp3",
        cover: "img/music/reggae/pato_banton.jpg"
    },
    {
        id: 21,
        name: "Rock With You",
        artist: "Inner Circle",
        source: "music/reggae/Inner Circle - Rock with You.mp3",
        cover: "img/music/reggae/inner-circle.jpg"
    },
    {
        id: 22,
        name: "Groovin (Out On Life)",
        artist: "UB40",
        source: "music/reggae/UB40 - Groovin_ (Out On Life).mp3",
        cover: "img/music/reggae/ub40.jpg"
    },
    {
        id: 23,
        name: "Red Red Wine",
        artist: "UB40",
        source: "music/reggae/UB40 - Red Red Wine.mp3",
        cover: "img/music/reggae/ub40.jpg"
    },
    {
        id: 24,
        name: "Are You Ready",
        artist: "AC DC",
        source: "music/rock/AC DC - Are You Ready.mp3",
        cover: "img/music/rock/AC-DC.jpg"
    },
    {
        id: 25,
        name: "TNT",
        artist: "ACDC",
        source: "music/rock/ACDC - TNT.mp3",
        cover: "img/music/rock/AC-DC.jpg"
    },
    {
        id: 26,
        name: "Crazy",
        artist: "Aerosmith",
        source: "music/rock/Aerosmith - Crazy.mp3",
        cover: "img/music/rock/aerosmith.jpg"
    },
    {
        id: 27,
        name: "Dar Es Dar",
        artist: "Fito Paez",
        source: "music/rock/Fito Paez - Dar Es Dar.mp3",
        cover: "img/music/rock/fito-paez.jpg"
    },
    {
        id: 28,
        name: "On Melancholy Hill",
        artist: "Gorillaz",
        source: "music/rock/Gorillaz - On Melancholy Hill.mp3",
        cover: "img/music/rock/Gorillaz.jpg"
    },
    {
        id: 29,
        name: "Holiday",
        artist: "Green Day",
        source: "music/rock/Green Day - Holiday.mp3",
        cover: "img/music/rock/green-day.jpg"
    },
    {
        id: 30,
        name: "Paradice City",
        artist: "Guns N' Roses",
        source: "music/rock/Guns N_ Roses - Paradise City.mp3",
        cover: "img/music/rock/gunsnroses-baladas.jpg"
    },
    {
        id: 31,
        name: "Lolita",
        artist: "La Orquesta Mondragón",
        source: "music/rock/Lolita - La Orquesta Mondragón (320).mp3",
        cover: "img/music/rock/mondragon.jpg"
    },
    {
        id: 32,
        name: "Enter Sandman",
        artist: "Metallica",
        source: "music/rock/Metallica - Enter Sandman.mp3", 
        cover: "img/music/rock/metallica.jpg"
    },
    {
        id: 33,
        name: "Persiana Americana",
        artist: "Soda Stereo",
        source: "music/rock/Persiana Americana.mp3",
        cover: "img/music/rock/soda-stereo.jpg"
    },
    {
        id: 34,
        name: "Still Loving You",
        artist: "Scorpions",
        source: "music/rock/Scorpions - Still Loving You.mp3",
        cover: "img/music/rock/Scorpions.jpg"
    }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowsource = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowsource = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload sources)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.source;
      link.as = "cover"
      document.head.appendChild(link)
    }
  }
});
