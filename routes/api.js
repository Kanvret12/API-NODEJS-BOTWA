require('../settings.js')
let express = require('express'),
sh = express.Router(),
axios = require('axios')
const alip = require("../lib/list")

sh.all('/loli', async (req, res) => {
	json = (await axios.get(`https://raw.githubusercontent.com/xznsenpai/foto/main/lolis.json`)).data
	random = json[Math.floor(Math.random() * json.length)]
    bf = (await axios.get(random, { responseType: 'arraybuffer' })).data
    res.type('png')
	.send(bf)
	})
sh.all('/nsfw', async (req, res) => {
	json = (await axios.get(`https://raw.githubusercontent.com/xznsenpai/foto/main/nsfwlolis.json`)).data
	random = json[Math.floor(Math.random() * json.length)]
    bf = (await axios.get(random, { responseType: 'arraybuffer' })).data
    res.type('png')
	.send(bf)
	})
sh.all('/shota', async (req, res) => {
	json = (await axios.get(`https://raw.githubusercontent.com/xznsenpai/foto/main/shotas.json`)).data
	random = json[Math.floor(Math.random() * json.length)]
    bf = (await axios.get(random, { responseType: 'arraybuffer' })).data
    res.type('png')
	.send(bf)
	})
sh.get('/textpro/pencil', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


sh.get('/textpro/glitch', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


sh.get('/textpro/blackpink', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


sh.get('/textpro/berry', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


sh.get('/textpro/neon', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})



sh.get('/textpro/logobear', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


sh.get('/textpro/3dchristmas', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


sh.get('/textpro/thunder', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


sh.get('/textpro/3dboxtext', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


sh.get('/textpro/glitch2', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	alip.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

sh.get('/textpro/glitchtiktok', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	alip.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})
sh.get('/textpro/graffiti', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	alip.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})
sh.get('/textpro/video-game-classic', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	alip.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

sh.get('/textpro/marvel-studios', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	alip.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

sh.get('/textpro/ninja-logo', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	alip.textpro("https://textpro.me/create-ninja-logo-online-935.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

sh.get('/textpro/green-horror', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

sh.get('/textpro/magma', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

sh.get('/textpro/3d-neon-light', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

sh.get('/textpro/3d-orange-juice', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

sh.get('/textpro/chocolate-cake', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/chocolate-cake-text-effect-890.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

sh.get('/textpro/strawberry', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.textpro("https://textpro.me/strawberry-text-effect-online-889.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Phootoxy  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\


sh.get('/photooxy/flaming', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


sh.get('/photooxy/shadow-sky', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


sh.get('/photooxy/metallic', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.photooxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


sh.get('/photooxy/naruto', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.photooxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


sh.get('/photooxy/pubg', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	var text2 = req.query.text2
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"})  
	alip.photooxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

sh.get('/photooxy/under-grass', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.photooxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

sh.get('/photooxy/harry-potter', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	alip.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})
module.exports = sh