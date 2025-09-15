function changeCake(img) {
  let cake = document.getElementById("cakeImage");

  // thêm class xoay
  cake.classList.add("rotate");

  // chờ 200ms rồi đổi ảnh
  setTimeout(() => {
    cake.src = img;
  }, 200);

  // gỡ class sau khi animation xong
  setTimeout(() => {
    cake.classList.remove("rotate");
  }, 800);
}
