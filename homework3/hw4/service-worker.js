<!DOCTYPE html>
<html manifest="MyPWA.appcache">
<head>

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>PWA Test</title>
<link rel="stylesheet" href="css/style.css">

</head>

<body id="main">

<h1 class="title">Characteristics of a PWA</h1>

<p class="para">The idea behind a Progressive Web Application, or PWA as it is known, is
that it simulates/imitates an application in HTML, CSS and/or JavaScript format. In usage
it would rival native apps in both feel and functionality, and many sites found online today 
are progressive web apps. An example today would be Twitter.
</p>

<p class="para">Advantages of using PWAs include the fact that one does not need to sift through the labrynthine
selection of apps in their respective stores, are often cheaper to build, can be built using common web technologies, 
have fewer code-bases to maintain, are responsive to many screen sizes, are smooth, fast and lightweight, 
relatively free, can enable push notifications for re-engagement, can lead to engagement simply by installation, 
work offline unlike most others, and are searchable via search engine, just to name a few.
</p>

<select name="bg" id="bg" onchange="document.body.style.backgroundImage = this.value">
  <option value="url('white.png')">White</option>
  <option value="url('lightblue.jpg')">Light Blue</option>
  <option value="url('lightgold.jpg')">Light Gold</option>
</select>

</body>

</html>
