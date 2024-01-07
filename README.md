# Indice :

- [<p style="font-weight:700; color:rgb(254, 209, 65)">VARIABLES</p>](./README.md#variables)
    - [<p style="font-weight:700; color:rgb(254, 209, 65)">Colores</p>](./README.md#colores)
        - [<p style="font-weight:700; color:rgb(0, 143, 57)">Colores Verde</p>](./README.md#verde)
        - [<p style="font-weight:700; color:rgb(45, 41, 38)">Colores Negro</p>](./README.md#negro)
        - [<p style="font-weight:700; color:rgb(87, 35, 100)">Colores Morado</p>](./README.md#morado)
        - [<p style="font-weight:700; color:rgb(0, 0, 255)">Colores Azul</p>](./README.md#azul)
        - [<p style="font-weight:700; color:rgb(255, 255, 0)">Colores Amarillo</p>](./README.md#amarillo)
        - [<p style="font-weight:700; color:rgb(255, 255, 255)">Colores Blanco</p>](./README.md#blanco)
        - [<p style="font-weight:700; color:rgb(203, 50, 52)">Colores Rojo</p>](./README.md#rojo)
        - [<p style="font-weight:700; color:rgb(155, 155, 155)">Colores Gris</p>](./README.md#gris)
    - [<p style="font-weight:700; color:rgb(254, 209, 65)">Breakpoint</p>](./README.md#breakpoint)
    - [<p style="font-weight:700; color:rgb(254, 209, 65)">Tipografía</p>](./README.md#tipografía)
    - [<p style="font-weight:700; color:rgb(254, 209, 65)">Z index</p>](./README.md#z-index)
- [<p style="font-weight:700; color:rgb(78, 0, 142)">CONTENEDORES</p>](./README.md#contenedores)
- [<p style="font-weight:700; color:rgb(48, 127, 226)">CLASES</p>](./README.md#clases)
    - [<p style="font-weight:700; color:rgb(48, 127, 226)">Helpers</p>](./README.md#helpers)
    - [<p style="font-weight:700; color:rgb(48, 127, 226)">Display</p>](./README.md#display)

<hr>

# Variables :

## Colores
Listado de variables de los colores más en hexadecimal.

### Verde
    green-pure: rgb(0, 143, 57)
    green-hunter: rgb(75, 149, 96)
    green-mint: rgb(142, 221, 101)
    green-fern: rgb(0, 184, 79)
    green-grinch: rgb(68, 214, 44)
    green-pine: rgb(40, 97, 64)
    green-pistacho: rgba(161, 216, 132)
    green-slime: rgb(151, 215, 0)
    green-olive: rgb(116, 170, 80)
    green-teal: rgb(32, 201, 151)
### Negro 
    black-pure: rgb(0, 0, 0)
    black-cinder: rgb(33, 35, 34)
    black-tabaco: rgb(45, 41, 38)
    black-anchor: rgb(38, 31, 42)
    black-smokie: rgb(37, 40, 42)
    black-charcoal: rgb(29, 37, 45)
    black-neutral: rgb(34, 34, 35)
    black-deep: rgb(16, 24, 32)
    black-renaissance: rgb(19, 30, 41)
### Morado
    purple-pure: rgb(87, 35, 100)
    purple-pale: rgb(104, 91, 199)
    purple-ursula: rgb(78, 0, 142)
    purple-ice-cream: rgb(139, 132, 215)
    purple-grapejuice: rgb(846, 0, 139)
    purple-lavender: rgb(150, 120, 211)
    purple-eggplant: rgb(68, 0, 153)
    purple-glossy: rgb(117, 59, 189)
    purple-royal: rgb(112, 47, 138)
    purple-indigo: rgb(102, 16, 242)
### Azul
    blue-pure: rgb(0, 0, 255)
    blue-sky: rgb(48, 127, 226)
    blue-navy: rgb(0, 51, 160)
    blue-maya: rgb(0, 156, 222)
    blue-yale: rgb(0, 94, 184)
    blue-king: rgb(16, 6, 159)
    blue-baby: rgb(105, 179, 231)
    blue-azure: rgb(0, 114, 206)
    blue-serenity: rgb(58, 93, 174)
### Amarillo
    yellow-pure: rgb(255, 255, 0)
    yellow-trafic: rgb(254, 209, 65)
    yellow-lemon: rgb(233, 236, 107)
    yellow-butter: rgb(250, 224, 83)
    yellor-true-yellow: rgb(247, 234, 72)
    yellow-sunnyside: rgb(251, 225, 34)
    yellow-blonde: rgb(243, 234, 93)
    yellow-bright: rgb(255, 233, 0)
    yellow-pastel: rgb(240, 233, 145)
### Blanco
    white-pure: rgb(255, 255, 255)
    white-letter: rgb(242, 239, 230)
    white-rice: rgb(253, 248, 235)
    white-perl: rgb(252, 252, 247)
    white-village: rgb(240, 236, 227)
    white-ceramic: rgb(254, 255, 250)
    white-hazelnut: rgb(243, 235, 223)
    white-passific: rgb(233, 234, 228)
### Rojo
    red-pure: rgb(203, 50, 52)
### Gris 
    grey-pure: rgb(155, 155, 155)

## Breakpoint
    xs: 0
    sm: 576px
    md: 768px
    lg: 992px
    xl: 1200px
    xxl: 1400px

## Tipografía
La tipografía principal es [Roboto](https://fonts.google.com/specimen/Roboto)
 y las segunda es Verdana.

    tipo-principal: 'Roboto', sans-serif
    tipo-secundaria: Verdana

## Z-index
    z10 : 10
    z20 : 20
    z30 : 30
    z40 : 40
    z50 : 50
    z60 : 60
    z70 : 70
    z80 : 80
    z90 : 90

# CONTENEDORES : 

    .contenedor {
        max-width: 90%;
        width: var(--xl);
        margin: 20px auto;
        overflow: hidden;
    }


# CLASES :

## Helpers
Clases que son de utilidad:
<p style="font-weight:700; color:rgb(155, 155, 155)">Quita todos los margenes</p>

    .no-margen { margin: 0 }

<p style="font-weight:700; color:rgb(155, 155, 155)">Quita los margenes de forma individual (superior - inferior - izquierdo - derecho)</p>

    .no-margen-superior { margin-top: 0 }
    .no-margen-inferior { margin-bottom: 0 }
    .no-margen-izquierdo { margin-left: 0 }
    .no-margen-derecho { margin-right: 0 }

<p style="font-weight:700; color:rgb(155, 155, 155)">Margenes recomendados para el lado superior e inferior.</p>

    .margen-inferior {margin-bottom: 20px;}
    .margen-superior {margin-top: 20px;}

<p style="font-weight:700; color:rgb(155, 155, 155)">Posiciones de los texto.</p>

    .texto-centrado {text-align: center;}
    .texto-izquierda {text-align: left;}
    .texto-derecha {text-align: right;}

## Display

    .display-1 {
        font-weight: 700;
        font-size: 4rem;
    }

    .display-2 {
        font-weight: 700;
        font-size: 3.375rem;
    }

    .display-3 {
        font-weight: 700;
        font-size: 2.75rem;
    }

    
  

