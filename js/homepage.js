const HomePage = (() => {
  const introduce = {
    slogan: '   A GEM IN METAVERSE',
    description: `Cộng đồng yêu thích NFTs P2E và Metaverse`,
    mission: `Nhiệm vụ của chúng tôi:
      Tạo ra một kênh chia sẻ kiến thức chuyên sâu về dòng game AAA và hệ sinh thái Immutable-X
      Phân tích đánh giá những dự án ICO, IDO và IMO thực tế, chất lượng nhằm mang lại chiến lược đầu tư hợp lý cho cộng đồng.
      Kết nối các thành viên và phát triển thành một nền tảng nơi các nhà đầu tư có thể kết nối với game thủ tiềm năng trong mạng lưới Game Play-to-earn.
      Chiến lược của đội ngũ: Xây dựng một cộng đồng DAO có kiến thức vững chắc về Game NFT và Metaverse, với mục tiêu chính là cùng nhau chơi game – cùng nhau học hỏi.`,
  };
  const initUI = () => {
    const menu = {
      view: 'layout',
      id: 'header',
      cols: [
        {
          height: 250,
          id: 'logoGemeta',
          view: 'button',
          type: 'image',
          image: '../img/gemeta_logo.png',
          align: 'left',
          width: 320,
        },
        {
          id: 'slogan',
          view: 'template',
          width: 700,
          height: 300,
          // value: introduce.description,
          template: `<h4 class="wordCarousel">
          <span>Cộng đồng yêu thích </span>
          <div class = 'listContent'>
              <ul class="flip3">
                  <li class = 'content'>NFTs</li>
                  <li class = 'content'>Metaverse</li>
                  <li class = 'content'>Gamefi</li>
                  </ul>
          </div>
      </h4>`,
          readonly: true,
        },
      ],
    };

    const imageBanner = {
      rows: [
        { height: 50 },
        {
          id: 'banner',
          height: 600,
          width: 600,
          view: 'label',
          // label: `<div class="s-about-img p-relative">
          //            <img src="https://gemeta.io/wp-content/uploads/2022/02/1.AboutUs_Web756x642.png">
          //           </div>`,
        },
      ],
    };
    const footer = {
      view: 'label',
      id: 'footer',
      label: 'Copyright 2022© Gemeta. All Rights Reserved',
    };
    const buttons = {
      view: 'layout',
      height: 100,
      cols: [
        { width: 10 },
        {
          id: 'teleButton',
          view: 'button',
          type: 'image',
          image:
            'https://www.shareicon.net/data/256x256/2016/11/03/849462_messenger_512x512.png',
          on: {
            onItemClick: function () {
              window.open('https://t.me/gemeta_official', '_blank');
            },
          },
        },
        {
          id: 'discordButton',
          view: 'button',
          type: 'image',
          image:
            'https://cdn.iconscout.com/icon/free/png-256/discord-3691244-3073764.png',
          on: {
            onItemClick: function () {
              window.open('https://discord.gg/SfBTggNf', '_blank');
            },
          },
        },
        {
          id: 'facebookButton',
          view: 'button',
          type: 'image',
          image:
            'https://hyundaigensets.com/wp-content/uploads/2019/05/facebook-icon.png',
          on: {
            onItemClick: function () {
              window.open('https://www.facebook.com/Gemetaofficial', '_blank');
            },
          },
        },
      ],
    };

    const sumary = {
      view: 'layout',
      width: 750,
      height: 300,
      cols: [
        { width: 50 },
        {
          rows: [
            {
              id: 'description',
              view: 'textarea',
              height: 1,
              width: 530,
              // value: introduce.description,
              readonly: true,
            },
            buttons,
            { height: 100 },
            footer,
          ],
        },
      ],
    };

    webix.ui({
      view: 'layout',
      container: 'gemetaHomePage',
      cols: [
        {
          rows: [menu, sumary],
        },
        imageBanner,
      ],
    });
  };

  return {
    initUI,
  };
})();
