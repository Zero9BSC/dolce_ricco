let myNav=`
            <div class="navbar-logo">
                <img src="img/logo.png" alt="Logo">
                <h1>Dolce&Ricco</h1>
            </div>
            <div class="navbar-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="navbar-links">
                <a href="/">Inicio</a>
                <a href="./products.html">Productos</a>
                <a href="./promotions.html">Promociones</a>
                <a href="./contact.html">Contacto</a>
            </div>
`

document.querySelector("nav").innerHTML=myNav;


myFooter=`
            <div class="footer-section">
                <h4 class="footer-title">Navegación</h4>
                <ul class="footer-list">
                    <li class="footer-list-item">
                        <a class="footer-link" href="/">Inicio</a>
                    </li>
                    <li class="footer-list-item">
                        <a class="footer-link" href="./products.html">Productos</a>
                    </li>
                    <li class="footer-list-item">
                        <a class="footer-link" href="./promotions.html">Promociones</a>
                    </li>
                    <li class="footer-list-item">
                        <a class="footer-link" href="./contact.html">Contacto</a>
                    </li>
                </ul>
            </div>
            <div class="footer-section">
                <h4 class="footer-title">Redes Sociales</h4>
                <ul class="footer-list">
                    <li class="footer-list-item">
                        <a class="footer-link"
                            href="https://www.facebook.com/profile.php?id=100072489496727">Facebook</a>
                    </li>
                </ul>
            </div>
            <div class="footer-section">
                <h4 class="footer-title">Contacto</h4>
                <h3>2804-976964</h3>
            </div>
            <div class="footer-section dev">
                <h2>Dolce&Ricco <h3>made by Jones Franco</h3></h2>
                <a href="https://github.com/Zero9BSC">Github Zero9BSC</a>
            </div>
`

document.querySelector("footer").innerHTML=myFooter;