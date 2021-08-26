var appUi = new Vue({
  el: "#app",
  data: {
    url: "",
    container: null,
    userName: "사용자",
    userId: "user",
  },
  mounted: function () {
    player = videojs("preview-player", {
      sources: [
        {
          src: this.url,
          type: "application/x-mpegURL",
        },
      ],
      //   videoWidth: 1080,
      //   videoHeight: 1920,
      autoplay: true,
    });

    // 채팅 영역 추가
    // this.container = document.getElementById("preview-player");
    // const chat = document.createElement("div");
    // chat.id = "viewport";

    // chat.classList.add("chat");
    // this.container.append(chat);
  },
  created: function () {
    console.log("Ready to start");
    let urlParams = new URLSearchParams(window.location.search);
    this.url = urlParams.get("url");
    console.log(this.url);

    // let userId = localStorage.getItem('userId');
    // let userName = localStorage.getItem('userName');
    // if(!userId) {
    //     const randNum = rand_0_100000();

    //     userId = `${this.userId}${randNum}`;
    //     userName = `${this.userName}${randNum}`;

    //     localStorage.setItem('userId', userId);
    //     localStorage.setItem('userName', userName);
    // }

    // this.userId = userId;
    // this.userName = userName;
    // console.log(this.userId, this.userName);
  },
  methods: {},
  computed: {},
});
