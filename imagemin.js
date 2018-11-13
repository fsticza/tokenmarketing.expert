const imagemin = require("imagemin")
const imageminJpegtran = require("imagemin-jpegtran")
const imageminPngquant = require("imagemin-pngquant")

(async () => {
  const files = await imagemin(
    ["src/assets/img/*.{jpg,png}"],
    "src/assets/img",
    {
      plugins: [imageminJpegtran(), imageminPngquant({ quality: "65-80" })]
    }
  )
  console.log(files)
})()
