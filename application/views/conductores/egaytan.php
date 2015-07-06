<?php $this->load->view('common/header'); ?>
<div class="container-fluid">
    <!-- CONTENIDO 1 -->
    <div class="row">
        <div class="col-xs-12 col-md-4 well">
            <a href="<?php echo base_url();?>">
                <p class="text-right"><button class="btn btn-danger">
                        <i class="fa fa-reply-all"> Página Principal</i>
                    </button></p></a>
            <p class="text-center"><h2 class="text-center"><p class="letra-color"><strong>CONDUCTORES</strong></p></h2></p><!-- Conductores -->
            <div id="filtering-demo" class="demo text-center">
                <div id="filters" class="button-group js-radio-button-group btn-group" role="group" aria-label="...">
                    <button class="btn-especial btn-link active" data-filter="*">Todos</button>
                    <button class="btn-especial btn-link" data-filter=".metal">AM</button>
                    <button class="btn-especial btn-link" data-filter=".transition">MD</button>
                    <button class="btn-especial btn-link" data-filter=".alkali">PM</button>
                    <button class="btn-especial btn-link" data-filter=".metalloid">DEPORTES</button>
                    <button class="btn-especial btn-link" data-filter=".lanthanoid">MESA CUADRADA</button>
                    <button class="btn-especial btn-link" data-filter=".diatomic">EN CORTO</button>
                </div>

                <div class="row">
                    <div class="isotope">
                        <div class="col-xs-4 col-md-4 element-item  metal " data-category="transition">
                            <a href="pbetaza.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/pbetaza_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item metal diatomic" data-category="metalloid">
                            <a href="ocepeda.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/ocepeda_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item alkali diatomic " data-category="post-transition">
                            <a href="grenteria.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/grenteria_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item metal  " data-category="post-transition">
                            <a href="aolvera.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/aolvera_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item  metal  " data-category="transition">
                            <a href="dbalp.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/dbalp_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item  metal metalloid " data-category="alkali">
                            <a href="dcasarin.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/dcasarin_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item diatomic transition" data-category="alkali">
                            <a href="elazcano.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/elazcano_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item transition  metalloid" data-category="transition">                            
                            <img class="img-responsive" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/egaytan_color.jpg"><br>                            
                        </div>

                        <div class="col-xs-4 col-md-4 element-item transition  " data-category="alkaline-earth">
                            <a href="ggiron.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/ggiron_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item  diatomic " data-category="transition">
                            <a href="gramirez.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/gramirez_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item diatomic alkali metalloid" data-category="post-transition">
                            <a href="jrubio.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/jrubio_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item lanthanoid " data-category="metalloid">
                            <a href="joliva.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/joliva_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item alkali  " data-category="transition">
                            <a href="apineda.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/apineda_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item alkali diatomic " data-category="lanthanoid">
                            <a href="lcarbajal.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/lcarbajal_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item   diatomic " data-category="noble-gas">
                            <a href="mnoriega.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/mnoriega_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item lanthanoid  " data-category="diatomic">
                            <a href="cugalde.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/cugalde_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item lanthanoid  " data-category="actinoid">
                            <a href="vortiz.php">
                                <img class="img-responsive rollover" alt="Conductor" src="<?php echo base_url();?>noti_img/conductores/vortiz_bn.jpg"><br>
                            </a>
                        </div>

                        <div class="col-xs-4 col-md-4 element-item lanthanoid  diatomic" data-category="actinoid">
                            <a href="jurena.php">
                                <img class="img-responsive rollover" alt="Reportajes" src="<?php echo base_url();?>noti_img/conductores/jurena_bn.jpg"><br>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-md-8">
            <img class="img-responsive rollover" alt="Semblanza" src="<?php echo base_url();?>noti_img/portadas_conductores/egaytan.jpg"><br>
            <div class="container-fluid">
                <div class="col-xs-1 col-md-1"></div>
                <div class="col-xs-10 col-md-10">
                    <p class="text-right"><h2 class="text-right"><p class="letra-color"><strong>EDUARDO GAYTÁN</strong></p></h2></p>
                    <p class="text-justify">Estudió Ciencias de la Comunicación en la Universidad del Valle de México.</p>
                    <p class="text-justify">Conductor / Comentarista de deportes en el noticiario “México al Día” DGTVE, desde enero 2014.</p>
                    <p class="text-justify">Inició su trayectoria profesional en 2006 en el diario estatal Tollocan a 8 Columnas como reportero y coordinador de la sección deportiva.</p>
                    <p class="text-justify">Fue director del área de comunicación social y secretario particular de la Secretaría del Deporte del CDE del PRI durante la gestión de Mario Hill Hernández (finado) de 2008 a 2011.</p>
                    <p class="text-justify">De 2011 a 2013 fue comentarista, reportero y periodista en el programa de radio “Cancha Caliente” de los “40 Principales” en Toluca y Pachuca, así como comentarista en las transmisiones de futbol de la Liga MX, Liga Española, Selección Mexicana, Eurocopa y Juegos Olímpicos de Londres 2012.</p>
                    <p class="text-justify">Reportero del programa MXQ Deportes del Sistema de Radio y Televisión Mexiquense durante dos años (2012 y 2013).</p>
                    <p class="text-justify">Ha realizado cobertura de la Liga MX, ONEFA, CONADEIP, Abierto Mexicano de Tenis, Copa Davis y diversos partidos de la NBA y NFL en los Estados Unidos.</p>
                </div>
                <div class="col-xs-1 col-md-1"></div>
            </div>
        </div>
    </div>
    <!-- FIN CONTENIDO 1 -->
</div>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>noti_js/scripts.js"></script>
<script type="text/javascript">
    $("img.rollover").hover(
            function () {
                this.src = this.src.replace("_bn", "_color");
            },
            function () {
                this.src = this.src.replace("_color", "_bn");
            });
</script>

<script src="http://isotope.metafizzy.co/beta/isotope.pkgd.js"></script>
<script src="http://isotope.metafizzy.co/beta/bower_components/classie/classie.js"></script>
<script>
    // external js
// http://isotope.metafizzy.co/beta/isotope.pkgd.js
// http://isotope.metafizzy.co/beta/bower_components/classie/classie.js

// ----- getText helper ----- //

    var textProp = document.documentElement.textContent !== undefined ? 'textContent' : 'innerText';

    function getText(elem) {
        return elem[ textProp ];
    }

// -----  ----- //

    docReady(function () {
        // init Isotope
        var iso = new Isotope('.isotope', {
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });

        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function (itemElem) {
                var number = getText(itemElem.querySelector('.number'));
                return parseInt(number, 10) > 50;
            },
            // show if name ends with -ium
            ium: function (itemElem) {
                var name = getText(itemElem.querySelector('.name'));
                return name.match(/ium$/);
            }
        };

        // bind filter button click
        var filtersElem = document.querySelector('#filters');
        eventie.bind(filtersElem, 'click', function (event) {
            // only work with buttons
            if (!matchesSelector(event.target, 'button')) {
                var filterValue = '.metal';
                // use matching filter function
                filterValue = filterFns[ filterValue ] || filterValue;
                iso.arrange({filter: filterValue});
            }
            var filterValue = event.target.getAttribute('data-filter');
            // use matching filter function
            filterValue = filterFns[ filterValue ] || filterValue;
            iso.arrange({filter: filterValue});
        });

        // change is-checked class on buttons
        var buttonGroups = document.querySelectorAll('.button-group');
        for (var i = 0, len = buttonGroups.length; i < len; i++) {
            var buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
        }

    });

    function radioButtonGroup(buttonGroup) {
        eventie.bind(buttonGroup, 'click', function (event) {
            // only work with buttons
            if (!matchesSelector(event.target, 'button')) {
                return;
            }
            classie.remove(buttonGroup.querySelector('.is-checked'), 'is-checked');
            classie.add(event.target, 'is-checked');
        });
    }

</script>

<?php $this->load->view('common/footer');?>

</body>
</html>