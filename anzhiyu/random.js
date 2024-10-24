var posts=["2024/08/12/【硬件科普】中央处理器（CPU）/","2024/08/12/RyoTech的自白书——我为什么想建立这个博客网站？/","2024/10/24/【自然地理学】晚霞观察者手册v1.0/","2024/10/21/【计维】PE系统简介/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };