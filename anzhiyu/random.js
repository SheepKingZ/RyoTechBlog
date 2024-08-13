var posts=["2024/08/12/【硬件科普】中央处理器（CPU）/","2024/08/12/RyoTech的自白书——我为什么想建立这个博客网站？/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };