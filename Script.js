var input = [
  { type: "video", value: "./video1.mp4" },
  { type: "form", value: "Form Template" },
  { type: "video", value: "./video1.mp4" },
  {
    type: "options",
    title:
      "貴社が属する業界を選択してください。" +
      "<br />" +
      "選択した業界ごとに活用事例等を紹介させていただきます。",
    value: [
      {
        name: "製造",
        button: 1,
        title:
          "業界の導入事例等を紹介させていただきます。" +
          "<br />" +
          "BizRobo!について更に知りたい方は問い合わせよりご相談ください。",
        type: "options",
        value: [
          {
            name:
              "<span>" +
              "＜お客様インタビュー＞" +
              "</span>" +
              "<br />" +
              "豊田油気様",
            button: 1,
            value: [
              {
                type: "video",
                value: "./video1.mp4",
              },
            ],
          },
          {
            name: "BizRobo!ご利用企業様事例",
            button: 2,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "BizRobo!活用シーン",
            button: 3,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "お問い合わせ",
            button: 4,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "戻る",
            button: 5,
            type: "back",
            page: 5,
          },
        ],
      },
      {
        name: "金融",
        button: 2,
        title:
          "業界の導入事例等を紹介させていただきます。" +
          "<br />" +
          "BizRobo!について更に知りたい方は問い合わせよりご相談ください。",
        type: "options",
        value: [
          {
            name: "BizRobo!ご利用企業様事例",
            button: 2,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "BizRobo!活用シーン",
            button: 3,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "お問い合わせ",
            button: 4,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "戻る",
            button: 5,
            type: "back",
            page: 5,
          },
        ],
      },
      {
        name: "情報・通信",
        button: 3,
        title:
          "業界の導入事例等を紹介させていただきます。" +
          "<br />" +
          "BizRobo!について更に知りたい方は問い合わせよりご相談ください。",
        type: "options",
        value: [
          {
            name: "BizRobo!ご利用企業様事例",
            button: 2,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "お問い合わせ",
            button: 4,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "戻る",
            button: 5,
            type: "back",
            page: 5,
          },
        ],
      },
      {
        name: "商社",
        button: 4,
        title:
          "業界の導入事例等を紹介させていただきます。" +
          "<br />" +
          "BizRobo!について更に知りたい方は問い合わせよりご相談ください。",
        type: "options",
        value: [
          {
            name: "BizRobo!ご利用企業様事例",
            button: 2,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "お問い合わせ",
            button: 4,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "戻る",
            button: 5,
            type: "back",
            page: 5,
          },
        ],
      },
      {
        name: "卸売・小売",
        button: 5,
        title:
          "業界の導入事例等を紹介させていただきます。" +
          "<br />" +
          "BizRobo!について更に知りたい方は問い合わせよりご相談ください。",
        type: "options",
        value: [
          {
            name:
              "<span>" +
              "＜お客様インタビュー＞" +
              "</span>" +
              "<br/>" +
              "国分グループ本社様",
            button: 1,
            value: [
              {
                type: "video",
                value: "./video1.mp4",
              },
            ],
          },
          {
            name: "BizRobo!ご利用企業様事例",
            button: 2,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "BizRobo!活用シーン",
            button: 3,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "お問い合わせ",
            button: 4,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "戻る",
            button: 5,
            type: "back",
            page: 5,
          },
        ],
      },
      {
        name: "インフラ・建設",
        button: 6,
        title:
          "業界の導入事例等を紹介させていただきます。" +
          "<br />" +
          "BizRobo!について更に知りたい方は問い合わせよりご相談ください。",
        type: "options",
        value: [
          {
            name: "BizRobo!ご利用企業様事例",
            button: 2,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "BizRobo!活用シーン",
            button: 3,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "お問い合わせ",
            button: 4,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "戻る",
            button: 5,
            type: "back",
            page: 5,
          },
        ],
      },
      {
        name: "不動産",
        button: 7,
        title:
          "業界の導入事例等を紹介させていただきます。" +
          "<br />" +
          "BizRobo!について更に知りたい方は問い合わせよりご相談ください。",
        type: "options",
        value: [
          {
            name:
              "<span>" +
              "＜お客様インタビュー＞" +
              "</span>" +
              "<br />" +
              "東神開発様",
            button: 1,
            value: [
              {
                type: "video",
                value: "./video1.mp4",
              },
            ],
          },
          {
            name: "BizRobo!ご利用企業様事例",
            button: 2,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "BizRobo!活用シーン",
            button: 3,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "お問い合わせ",
            button: 4,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "戻る",
            button: 5,
            type: "back",
            page: 5,
          },
        ],
      },
      {
        name: "物流・運送",
        button: 8,
        title:
          "業界の導入事例等を紹介させていただきます。" +
          "<br />" +
          "BizRobo!について更に知りたい方は問い合わせよりご相談ください。",
        type: "options",
        value: [
          {
            name:
              "<span>" +
              "＜お客様インタビュー＞" +
              "</span>" +
              "<br />" +
              "関通様",
            button: 1,
            value: [
              {
                type: "video",
                value: "./video1.mp4",
              },
            ],
          },
          {
            name: "BizRobo!ご利用企業様事例",
            button: 2,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "BizRobo!活用シーン",
            button: 3,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "お問い合わせ",
            button: 4,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "戻る",
            button: 5,
            type: "back",
            page: 5,
          },
        ],
      },
      {
        name: "官公庁・団体",
        button: 9,
        title:
          "業界の導入事例等を紹介させていただきます。" +
          "<br />" +
          "BizRobo!について更に知りたい方は問い合わせよりご相談ください。",
        type: "options",
        value: [
          {
            name:
              "<span>" +
              "＜お客様インタビュー＞" +
              "</span>" +
              "<br />" +
              "広島市様",
            button: 1,
            value: [
              {
                type: "video",
                value: "./video1.mp4",
              },
            ],
          },
          {
            name: "BizRobo!ご利用企業様事例",
            button: 2,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "BizRobo!活用シーン",
            button: 3,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "お問い合わせ",
            button: 4,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "戻る",
            button: 5,
            type: "back",
            page: 5,
          },
        ],
      },
      {
        name: "メディア",
        button: 10,
        title:
          "業界の導入事例等を紹介させていただきます。" +
          "<br />" +
          "BizRobo!について更に知りたい方は問い合わせよりご相談ください。",
        type: "options",
        value: [
          {
            name: "BizRobo!ご利用企業様事例",
            button: 2,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "BizRobo!活用シーン",
            button: 3,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "お問い合わせ",
            button: 4,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "戻る",
            button: 5,
            type: "back",
            page: 5,
          },
        ],
      },
      {
        name: "医療",
        button: 11,
        title:
          "業界の導入事例等を紹介させていただきます。" +
          "<br />" +
          "BizRobo!について更に知りたい方は問い合わせよりご相談ください。",
        type: "options",
        value: [
          {
            name:
              "<span>" +
              "＜お客様インタビュー＞" +
              "</span>" +
              "<br />" +
              "滋賀医科大学医学部附属病院様様",
            button: 1,
            value: [
              {
                type: "video",
                value: "./video1.mp4",
              },
            ],
          },
          {
            name: "BizRobo!ご利用企業様事例",
            button: 2,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "BizRobo!活用シーン",
            button: 3,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "お問い合わせ",
            button: 4,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "戻る",
            button: 5,
            type: "back",
            page: 5,
          },
        ],
      },
      {
        name: "サービス",
        button: 12,
        title:
          "業界の導入事例等を紹介させていただきます。" +
          "<br />" +
          "BizRobo!について更に知りたい方は問い合わせよりご相談ください。",
        type: "options",
        value: [
          {
            name:
              "<span>" +
              "＜お客様インタビュー＞" +
              "</span>" +
              "<br />" +
              "パーソルテクノロジースタッフ様",
            button: 1,
            value: [
              {
                type: "video",
                value: "./video1.mp4",
              },
            ],
          },
          {
            name: "BizRobo!ご利用企業様事例",
            button: 2,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "BizRobo!活用シーン",
            button: 3,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "お問い合わせ",
            button: 4,
            type: "link",
            value: "https://www.google.com/",
          },
          {
            name: "戻る",
            button: 5,
            type: "back",
            page: 5,
          },
        ],
      },
    ],
  },
];

const popupModule = (function (input) {
  var uid = "";
  var site = "";
  function uuidBeacon() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  var popUpwidth;
  var popUpHeight;
  var beacon_user_id;
  var isUserExist = false;

  function createAPIparams(page = 1, event_type = 1, details) {
    const body = {
      beacon_user_id: beacon_user_id,
      site: 1,
      scenario: 1,
      page: page,
      event_type: event_type,
      details: details,
    };
    const data = new URLSearchParams(body);
    return data;
  }

  function callInsertBeaconAPI(event_type = 1, details) {
    let url = "https://www.google.com/";

    let page = 0;
    if (track.length > 0) {
      page = parseInt(track[0]) + track.length;
    } else {
      page = gIndex + 1;
    }
    let data = createAPIparams(page, event_type, details);
    navigator.sendBeacon(url, data);
  }
  function modelPopupOpen() {
    modelTemplate =
      '<div id="openModal-about" class="awasell-modalPopupDialog">';
    modelTemplate += "<div>";
    modelTemplate += '<button class="awasell-closePopupBtn">X</button>';
    modelTemplate +=
      '<div id="myPopupContent" class="awasell-mainPopupContainer" style="height:' +
      popUpHeight +
      'px"></div>';
    modelTemplate += "</div></div>";
    const rootChild = document.getElementById("loop-video");
    rootChild.innerHTML += modelTemplate;
    reactInputJson(input);
    document.getElementById("openModal-about").classList.add("modalShow");
    document.getElementById("awasell-pop-outer").style.display = "none";
    document
      .querySelector(".awasell-closePopupBtn")
      .addEventListener("click", closePopupModel);
  }
  function pageLoad() {
    popUpwidth = screen.width * 0.6 - 32;
    popUpHeight = (popUpwidth * 9) / 16;
    if (screen.width <= 959) {
      return false;
    }

    mydiv = document.createElement("div");
    mydiv.setAttribute("id", "loop-video");
    mydiv.setAttribute("class", "awasell-loop-container");
    document.body.appendChild(mydiv);
    template = '<div class="awasell-pop-outer" id="awasell-pop-outer">';
    template += ' <button class="awasell-closeBannerBtn">X</button>';
    template += '<div class="awasell-pop-inner" >';
    template +=
      '<img src="./Banner.png" height="225px" width="300px" alt="image not found" class="awasell-bannerImg"></div>';
    template += "</div>";

    const rootElement = document.getElementById("loop-video");
    rootElement.innerHTML += template;
    document
      .querySelector(".awasell-pop-inner")
      .addEventListener("click", modelPopupOpen);
    document
      .querySelector(".awasell-closeBannerBtn")
      .addEventListener("click", closeBannerBtn);
    var styles = "./style.css";
    var newSS = document.createElement("link");
    newSS.rel = "stylesheet";
    newSS.href = styles;
    document.getElementsByTagName("head")[0].appendChild(newSS);
    beacon_user_id = JSON.parse(localStorage.getItem("beacon_user_id")) || "";
    if (beacon_user_id === "") {
      beacon_user_id = uuidBeacon();
      localStorage.setItem("beacon_user_id", JSON.stringify(beacon_user_id));
      localStorage.setItem("isUserExist", JSON.stringify(false));
    }
  }

  function resetIndex() {
    gIndex = -1;
    input = mainJson;
    track = [];
    depth = -1;
    back = false;
  }
  function closePopupModel() {
    document.getElementById("openModal-about").remove();
    document.getElementById("awasell-pop-outer").style.display = "block";
    resetIndex();
    document
      .querySelector(".awasell-pop-inner")
      .addEventListener("click", modelPopupOpen);
    document
      .querySelector(".awasell-closeBannerBtn")
      .addEventListener("click", closeBannerBtn);

    pause = false;
  }

  function closeBannerBtn() {
    document.getElementById("awasell-pop-outer").style.display = "none";
  }

  function videoTemplate(link) {
    var x = document.createElement("VIDEO");
    x.setAttribute("id", "video");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src", link);
    } else {
      x.setAttribute("src", "movie.ogg");
    }

    x.setAttribute("width", "100%");
    x.setAttribute("height", "100%");
    x.setAttribute("autoplay", true);
    x.setAttribute("controlslist", "nodownload nofullscreen");
    x.setAttribute("class", "awasell-videoPopupContainer");
    x.setAttribute("controls", "controls");
    x.addEventListener("ended", () => {
      pause = false;
      reactInputJson(input);
    });

    return x;
  }

  function divTemplate(data, classes) {
    var x = document.createElement("div");
    x.setAttribute("class", classes);

    x.innerHTML = data;
    return x;
  }

  function buttonTemplate(data, item, index) {
    var x = document.createElement("button");
    x.setAttribute("class", classes);
    if (item.type == "back") {
      x.setAttribute("class", "awasell-backButtonStyle");
    } else {
      if (item.title === undefined) {
        x.setAttribute("class", "awasell-optionButtonStyleIn");
      } else {
        x.setAttribute("class", "awasell-optionButtonStyle");
      }
    }
    x.addEventListener("click", (e) => {
      callInsertBeaconAPI(1, item.name);

      if (item.type === "options") {
        gIndex = -1;
        input = [item];
        track.push(index);
        reactInputJson(input);
      } else if (item.type === "link") {
        window.open(item.value, "_blank");
      } else if (item.type === "back") {
        back = true;
        goBack();
      } else {
        gIndex = -1;
        input = item.value;
        track.push(index);
        reactInputJson(input);
      }
    });

    x.innerHTML = data;
    return x;
  }

  function goBack() {
    input = mainJson;

    for (let z = 0; z < track.length - 1; z++) {
      if (z !== 0) {
        input = input.value;
      }
      var input = input[track[z]];
    }
    gIndex = -1;
    input = [input];
    track.pop();
    reactInputJson(input);
  }

  function optionTemplate(data, values) {
    let backButton = values.filter((obj) => obj.type === "back");
    let allButtons = values.filter((obj) => obj.type !== "back");
    var x = document.createElement("div");
    x.style.width = "100%";
    x.style.height = "100%";

    if (input?.[0]?.type !== "options" && !back) {
      track.push(depth);
      depth = -1;
      back = true;
    }

    var string = "";
    var a = divTemplate(data, (classes = "hello"));
    a.style.display = "flex";
    a.style.alignItems = "center";
    a.style.justifyContent = "center";
    a.style.marginBottom = "10px";
    a.style.fontSize = "25px";
    a.style.fontWeight = "bold";
    a.style.height = "15%";
    a.style.lineHeight = "35px";
    a.style.textAlign = "center";

    var b = divTemplate("", (classes = "world"));
    b.style.display = "flex";
    b.style.width = "100%";
    b.style.height = backButton.length !== 0 ? "70%" : "80%";
    x.appendChild(a);

    if (backButton.length !== 0) {
      var c = divTemplate("", (classes = "world"));
      var backBtn = buttonTemplate(backButton[0].name, backButton[0], "");
      c.style.display = "flex";
      c.style.float = "left";
      c.style.width = "20%";
      c.style.height = "10%";
      c.style.marginBottom = "10px";
      var container4 = divTemplate("", (classes = "awasell-optionButtonItems"));
      container4.appendChild(backBtn);
      c.appendChild(container4);
    }

    var container1 = divTemplate("", (classes = "awasell-optionButtonItems"));
    var container2 = divTemplate("", (classes = "awasell-optionButtonItems"));
    var container3 = divTemplate("", (classes = "awasell-optionButtonItems"));

    allButtons.map((item, i) => {
      var content = buttonTemplate(item.name, item, i);
      if (i >= 0 && i < 4) {
        container1.appendChild(content);
      } else if (i > 3 && i < 8) {
        container2.appendChild(content);
      } else {
        container3.appendChild(content);
      }
    });

    var size = allButtons.length;

    if (size <= 4) {
      b.appendChild(container1);
    } else if (size > 4 && size <= 8) {
      b.appendChild(container1);
      b.appendChild(container2);
    } else {
      b.appendChild(container1);
      b.appendChild(container2);
      b.appendChild(container3);
    }

    x.appendChild(a);
    x.appendChild(b);
    if (backButton.length > 0) {
      x.appendChild(c);
    }

    return x;
  }

  function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }

  function validateForm(event) {
    event.preventDefault();

    var companyName = document.contactForm.companyName.value;
    var lastName = document.contactForm.lastName.value;
    var firstName = document.contactForm.firstName.value;
    var email = document.contactForm.email.value;
    var terms = document.getElementById("terms");

    var companyNameErr =
      (lastNameErr =
      firstNameErr =
      emailErr =
      termsErr =
        true);

    const emailDomain = email.split("@")[1];
    const notSupportedDomains = ["hotmail.co.jp", "hotmail.com", "yahoo.co.jp"];
    const isDomainValid = notSupportedDomains.filter(
      (obj) => obj === emailDomain
    );
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    // japanese characters are supposed to be double-byte
    const byteSize = (str) => new Blob([str]).size;

    if (companyName == "") {
      printError("companyNameErr", "* 会社名を入力してください");
    } else {
      if (byteSize(companyName) * 2 > 100) {
        printError("companyNameErr", "* 50文字以内で入力してください");
      } else {
        printError("companyNameErr", "");
        companyNameErr = false;
      }
    }

    if (lastName == "") {
      printError("lastNameErr", "* 姓を入力してください");
    } else {
      if (byteSize(lastName) * 2 > 40) {
        printError("lastNameErr", "* 20文字以内で入力してください");
      } else {
        printError("lastNameErr", "");
        lastNameErr = false;
      }
    }

    if (firstName == "") {
      printError("firstNameErr", "* 名を入力してください");
    } else {
      if (byteSize(firstName) * 2 > 40) {
        printError("firstNameErr", "* 20文字以内で入力してください");
      } else {
        printError("firstNameErr", "");
        firstNameErr = false;
      }
    }

    if (email == "") {
      printError("emailErr", "* 会社のメールアドレスを入れてください");
    } else {
      if (email.length > 100) {
        printError("emailErr", "* 100文字以内で入力してください");
      } else if (
        atposition < 1 ||
        dotposition < atposition + 2 ||
        dotposition + 2 >= email.length
      ) {
        printError("emailErr", "* 正しいメールアドレスを入力してください");
      } else if (isDomainValid.length > 0) {
        printError("emailErr", "* 会社のメールアドレスをご入力ください");
      } else {
        printError("emailErr", "");
        emailErr = false;
      }
    }

    if (terms.checked == false) {
      printError("termsErr", "プライバシーとポリシーに同意してください");
    } else {
      printError("termsErr", "");
      termsErr = false;
    }

    if (
      (companyNameErr || lastNameErr || firstNameErr || emailErr || termsErr) ==
      true
    ) {
      pause = true;
    } else {
      pause = false;
      let body = {
        first_name: firstName,
        last_name: lastName,
        company_name: companyName,
        email: email,
        beacon_user_id: beacon_user_id,
      };
      const data = new URLSearchParams(body);
      let isSuccess = navigator.sendBeacon("https://www.google.com/", data);
      if (isSuccess) {
        localStorage.setItem("isUserExist", JSON.stringify(true));
        localStorage.setItem("beacon_user_id", JSON.stringify(beacon_user_id));
        isUserExist = true;
      }
      callInsertBeaconAPI(1, "CREATE_USER");
      reactInputJson(input);
    }
  }

  function onCheck() {
    let termCheck = document.getElementById("terms");
    if (termCheck.checked === true) {
      document.getElementById("awasell-submit-btn").disabled = false;
      document.getElementById("awasell-submit-btn").style.backgroundColor =
        "rgb(0 136 255)";
    } else {
      document.getElementById("awasell-submit-btn").disabled = true;
      document.getElementById("awasell-submit-btn").style.backgroundColor =
        "gray";
    }
  }

  function formTemplate() {
    var x = document.createElement("div");
    var fields = `<div class="awasell-popupformContainer">
                            <h2 class="awasell-heading-text">フォームを入力して動画の
                                          続きをご視聴ください。</h2>
                                          <div class="contact-form-main">
                            <form id="getStartedForm" class="getStartedForm" name="contactForm">
                                <div class="awasell-formFieldWrapper">
                                <div class="awasell-error" id="companyNameErr"></div>

                                    <div class="awasell-company-field">

                                        <input type="text" name="companyName" id="companyName" class="awasell-form-field" placeholder="会社名">
                                        <label id="awasell-form-field-label">会社名</label>
                                    </div>
                                    <div class="awasell-last-first">
                                    <div class="awasell-firstCol ">
                                    <div class="awasell-error" id="lastNameErr"></div>
                                    </div>
                                    <div class=" awasell-lastCol  ">
                                    <div class="awasell-error" id="firstNameErr"></div>
                                    </div>

                                    </div>
                                    <div class=" awasell-last-first">

                                        <div class="awasell-company-field">
                                        <div class="awasell-firstCol ">
                                           
                                            <input type="text" name="lastName" id="lastName" class="awasell-form-field first" placeholder="姓">
                                        <label id="awasell-form-field-label">姓</label>
                                        </div>

                                        </div>

                                        <div class="awasell-company-field">
                                        <div class=" awasell-lastCol  ">

                                            <input type="text" name="firstName" id="firstName" class="awasell-form-field first" placeholder="名">
                                        <label id="awasell-form-field-label">名</label>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="awasell-error" id="emailErr"></div>

                                    <div class="awasell-company-field ">
                                        <input type="text" name="email" id="email" class="awasell-form-field" placeholder="メールアドレス ">
                                        <label id="awasell-form-field-label">メールアドレス </label>
                                        <p class="awasell-email-sub-text">*会社のメールアドレスをご入力ください</p>


                                        
                                    </div>

                                    <div class="awasell-error" id="termsErr"></div>
                                    <div class="awasell-termsCondition">
                                        <div class="">

                                            <input id="terms" type="checkbox" class="check-form" name="terms" value="yes">
                                            <span> 当社の<a class="awasell-termlink" href='https://www.google.com/' target="_blank" rel="noreferrer">個人情報保護方針</a>に同意する</span>
                                         </div>                                
                                    </div>                            

                                    <div class="awasell-submit-btn">
                                        <button class="awasell-btn" disabled id="awasell-submit-btn" type="submit" value="Submit">送信</button>
                                    </div>
                                </div>         
                            </form>
                        </div>`;
    x.innerHTML = fields;
    return x;
  }

  var track = [];
  var depth = -1;
  var gIndex = -1;
  var mainJson = input;
  var back = false;
  var pause = false;
  function reactInputJson(param) {
    if (pause === false) {
      gIndex++;
      depth++;
    }

    if (gIndex >= param?.length) {
      gIndex = -1;
      depth = -1;
      goBack();
      return;
    }

    var type = param[gIndex].type;
    var value = param[gIndex].value;

    switch (type) {
      case "video":
        template = videoTemplate(value);

        break;
      case "form":
        if (!JSON.parse(localStorage.getItem("isUserExist"))) {
          template = formTemplate();
        } else {
          reactInputJson(input);
        }
        break;
      case "options":
        var title = param[gIndex].title;
        template = optionTemplate(title, value);
        break;
      default:
        template = divTemplate(value);
    }
    document.getElementById("myPopupContent").innerHTML = "";
    document.getElementById("myPopupContent").appendChild(template);
    document.querySelector(".check-form")?.addEventListener("click", onCheck);
    document
      .querySelector(".getStartedForm")
      ?.addEventListener("submit", function (event) {
        return validateForm(event);
      });

    if (document.getElementById("video")) {
      let videoEl = document.getElementById("video");
      videoEl.onloadeddata = function () {
        // fired when video loaded/started

        callInsertBeaconAPI(1, "0%");
        var flagMid = true;
        var flagEnd = true;
        videoEl.ontimeupdate = function () {
          // fired when video loaded/started
          if (
            Math.floor(videoEl.currentTime) === Math.floor(videoEl.duration / 2)
          ) {
            if (flagMid === true) {
              flagMid = false;
              callInsertBeaconAPI(1, "50%");
            }
          }
          if (videoEl.currentTime === videoEl.duration) {
            // ended
            if (flagEnd === true) {
              flagEnd = false;
              callInsertBeaconAPI(1, "100%");
            }
          }
        };
      };
    }
  }

  return {
    pageLoad: pageLoad,
  };
})(input);

module.exports = popupModule.pageLoad();
