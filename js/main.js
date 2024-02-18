let nav = document.getElementById("head")
nav.insertAdjacentHTML("afterbegin", `

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="bootstrap-5.0.2-dist/css/bootstrap.css">
<link rel="stylesheet" href="style.css">
`

)



let navHeader = document.getElementById("nav");
navHeader.innerHTML = ` <nav class="navbar fixed-top  navbar-expand-lg navbar-white bg-primary ">
<div class="container-fluid">
  <a class="navbar-brand text-light" href="index.html">Jio</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active text-light" aria-current="page" href="home.html">Home</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link text-light" href="mobile.html">Mobile</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Service
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="offer.html">Offer</a></li>
          <li><a class="dropdown-item" href="offer.html">Apps</a></li>
          <li><a class="dropdown-item" href="offer.html">Jio fiber </a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link  text-light" href="device.html">Devices</a>
      </li>
    </ul>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-light" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
`

document.getElementById('slider').innerHTML = `

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e8afba7feffa58f9.jpg?q=20" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0d1366a919fff51b.jpg?q=20" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20" class="d-block w-100" alt="...">
  </div>
  
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>

`
let omm = document.getElementById("bigyan");
omm.insertAdjacentHTML("afterbegin",`"afterbegin"
`)
omm.insertAdjacentHTML("afterend",`
after end`)
omm.insertAdjacentHTML("beforebegin",`"before begin"` )

omm.insertAdjacentHTML("beforeend",`before end`)