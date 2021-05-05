//-----------------------------------------------------//
//　　遅延読み込み
//-----------------------------------------------------//
if ("loading" in HTMLImageElement.prototype) {
  /* ネイティブの遅延読み込みをサポートしている場合 */
  console.log("対応してるよ");
  var lazyImages = document.querySelectorAll('img[loading="lazy"]');
  var lazySources = document.querySelectorAll("source[data-srcset]");
  lazySources.forEach(function (source) {
    source.srcset = source.dataset.srcset;
    //srcの中身をdata-srcと同じ内容に書き換える
  });
  lazyImages.forEach(function (img) {
    img.src = img.dataset.src;
    //srcの中身をdata-srcと同じ内容に書き換える
  });
} else {
  /*  ネイティブの遅延読み込みをサポートしていない場合 */
  console.log("対応してないよ");
  // loading属性が使えないブラウザにはlazysizesを読み込ませる
  var script = document.createElement("script");
  script.src = "lazysizes.min.js";
  document.body.appendChild(script);
}
