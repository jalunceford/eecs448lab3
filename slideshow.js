document.addEventListener("DOMContentLoaded", function(){
  img = document.getElementById("img");
  let images = ["https://s3.amazonaws.com/ogden_images/www.ljworld.com/images/2014/03/12010340/ku_bkc_ksu_202-1100x733.jpg",
  "https://www.nydailynews.com/resizer/us0mzEdpeeEU-NYCSt79XX0A8hk=/415x623/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/KFYF4O2GPNADEUFIAEKKS623M4.jpg",
  "https://img.bleacherreport.net/img/images/photos/003/639/863/hi-res-5b507016c52f6a80063c9110129f6fb3_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
  "https://worldonline.media.clients.ellingtoncms.com/img/photos/2018/03/25/ku_bkc_duke_ncaa_43_t1200.JPG?57a0c2296240c280e9492005c3cad63e7cbe80f4",
  "https://www.ncaa.com/sites/default/files/public/video/thumbnails/legacy/2014/01/30/chalmersjpg-3129038_frame_01_640x360.jpg"];
  let index = 0;
  img.src = images[0];
  document.getElementById("prev").addEventListener("click", () => {
    if (index == 0){
      img.src = images[images.length - 1];
      index = images.length - 1;
    }
    else{
      img.src = images[index - 1];
      index = index - 1;
    }
  });
  document.getElementById("next").addEventListener("click", () => {
    if (index == images.length - 1){
      img.src = images[0];
      index = 0;
    }
    else{
      img.src = images[index + 1];
      index = index + 1;
    }
  });
});
