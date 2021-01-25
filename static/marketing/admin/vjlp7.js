/* eslint-disable no-undef */
import htm from './external-scripts/htm.module.js'

const html = htm.bind(h)
export const VJLP7_PREVIEW = createClass({
  render () {
    const { widgetFor, widgetsFor } = this.props
    const locale = widgetsFor('promo_locale')
    const banner = widgetsFor('promo_banner')
    const body = widgetFor('body')
    const cssBg = {
      '--bg-image': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_desktop'])}')`,
      '--bg-image-m': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_mobile'])}')`,
      '--bg-banner': `url('${banner.getIn(['data', 'promo_images', 'promo_bg_banner']) || ''}')`
    }

    const buttonLocation = banner.getIn(['data', 'promo_join_button_location'])
    let joinBtnStyle = {}
    let bottomJoinBtnStyle = {}
    if (buttonLocation === 'hidden') {
      joinBtnStyle = { display: 'none' }
      bottomJoinBtnStyle = joinBtnStyle
    } else if (buttonLocation === 'lower-right') {
      joinBtnStyle = {
        position: 'absolute',
        right: '0px',
        bottom: '0px'
      }
    } else if (buttonLocation === 'upper-right') {
      joinBtnStyle = {}
    }

    const bannerTitle = banner.getIn(['data', 'promo_title_display'])
      ? banner.getIn(['data', 'promo_title'])
      : ''

    return (html`
    <head>
      <style>
      .vjlp7_wrapper {
        /* STYLE FOR VJLP1 Version 2 */
        /* Custom, iPhone Retina */
        /* Extra Small Devices, Phones */
        /* Small Devices, Tablets */
        /* Medium Devices, Desktops */
        /* Large Devices, Wide Screens */
        /* Custom, iPhone Retina */
        /* Extra Small Devices, Phones */
        /* Small Devices, Tablets */
        /* Medium Devices, Desktops */
        /* Large Devices, Wide Screens */
        /*=== MAIN MENU ===*/
        /*=== HAMBURGER MENU ===*/
        /*--hamburger--*/
        /*--hamburger expand content--*/
        /*--Overlay--*/
        /*=======EXPANDED=======*/
        /*--show hamburger expand--*/
        /*--hamburger lines - expanded--*/
      }

      .vjlp7_wrapper .version1 .highlight {
        color: #ffd966;
      }

      .vjlp7_wrapper .version1 #hero-text-wrapper {
        background: linear-gradient(to bottom, rgba(0, 159, 227, 0.8) 0%, rgba(236, 0, 139, 0.8) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#cc009fe3", endColorstr="#ccec008b", GradientType=0);
      }

      .vjlp7_wrapper .version1 .logo {
        max-width: 150px;
        width: 100%;
      }

      .vjlp7_wrapper .version1 button {
        background: #FEE63D;
        width: 280px;
        border-radius: 100px;
        font-size: 16px;
        border: none;
        padding: 10px 20px;
      }

      .vjlp7_wrapper .version1 button a,
      .vjlp7_wrapper .version1 button a:hover {
        color: #704B1F;
      }

      .vjlp7_wrapper .version1 button:hover {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.6);
      }

      .vjlp7_wrapper .version2 h1 {
        -webkit-animation: vjlp7text-flicker-promo 5s linear forwards;
        animation: vjlp7text-flicker-promo 5s linear forwards;
        text-shadow: 0 0 20px #ec008b;
        color: #ec008a;
        font-weight: 700;
        font-family: "MainFont-DemiBold", sans-serif;
      }

      .vjlp7_wrapper .version2 .highlight {
        color: #fff;
      }

      .vjlp7_wrapper .version2 .logo {
        max-width: 100px;
        width: 100%;
      }

      .vjlp7_wrapper .version2 button {
        background: none;
        width: 280px;
        border-radius: 100px;
        font-size: 16px;
        border: none;
        padding: 10px 20px;
        border: 3px solid #780032;
        -webkit-animation: vjlp7border-flicker 3s linear forwards infinite;
        animation: vjlp7border-flicker 3s linear forwards infinite;
      }

      .vjlp7_wrapper .version2 button a {
        border: none;
        color: #fff;
        -webkit-animation: vjlp7text-flicker 3s linear forwards infinite;
        animation: vjlp7text-flicker 3s linear forwards infinite;
      }

      @-webkit-keyframes vjlp7border-flicker {
        2% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
        3% {
          border: 3px solid #780032;
          box-shadow: none;
        }
        5% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
        6% {
          border: 3px solid #780032;
          box-shadow: none;
        }
        7% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
        9% {
          border: 3px solid #780032;
          box-shadow: none;
        }
        13% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
        16% {
          border: 3px solid #780032;
          box-shadow: none;
        }
        18% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
        22% {
          border: 3px solid #780032;
          box-shadow: none;
        }
        34% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
        36% {
          border: 3px solid #780032;
          box-shadow: none;
        }
        54% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
        100% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
      }

      @keyframes vjlp7border-flicker {
        2% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
        3% {
          border: 3px solid #780032;
          box-shadow: none;
        }
        5% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
        6% {
          border: 3px solid #780032;
          box-shadow: none;
        }
        7% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
        9% {
          border: 3px solid #780032;
          box-shadow: none;
        }
        13% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
        16% {
          border: 3px solid #780032;
          box-shadow: none;
        }
        18% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
        22% {
          border: 3px solid #780032;
          box-shadow: none;
        }
        34% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
        36% {
          border: 3px solid #780032;
          box-shadow: none;
        }
        54% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
        100% {
          border: 3px solid #ff15de;
          box-shadow: 0 0 15px -1px #ff15de, 0 0 12px -1px #ff15de inset;
        }
      }

      @-webkit-keyframes vjlp7text-flicker-promo {
        2% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        3% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        6% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        9% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        11% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        14% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        18% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        32% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        33% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        37% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        39% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        43% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        46% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        47% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        100% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
      }

      @keyframes vjlp7text-flicker-promo {
        2% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        3% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        6% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        9% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        11% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        14% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        18% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        32% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        33% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        37% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        39% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        43% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        46% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        47% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
        100% {
          color: #ec008b;
          text-shadow: 0 0 20px #ec008b;
        }
      }

      @-webkit-keyframes vjlp7text-flicker {
        2% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        3% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        6% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        9% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        11% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        14% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        18% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        32% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        33% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        37% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        39% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        43% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        46% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        47% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        100% {
          color: white;
          text-shadow: 0 0 15px white;
        }
      }

      @keyframes vjlp7text-flicker {
        2% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        3% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        6% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        9% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        11% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        14% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        18% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        32% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        33% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        37% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        39% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        43% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        46% {
          color: rgba(120, 0, 50, 0.5);
          text-shadow: none;
        }
        47% {
          color: white;
          text-shadow: 0 0 15px white;
        }
        100% {
          color: white;
          text-shadow: 0 0 15px white;
        }
      }

      .vjlp7_wrapper .vjlp7-main {
        background: #009FE3;
      }

      .vjlp7_wrapper .material-icons {
        font-family: "Material Icons";
      }

      .vjlp7_wrapper h1 {
        font-weight: 300;
        font-size: 32px;
        color: #fff;
        font-family: "MainFont-DemiBold", sans-serif;
        letter-spacing: 0.3px;
        line-height: 38.4px;
      }

      .vjlp7_wrapper h2 {
        font-size: 19.2px;
        color: #fff;
        font-weight: 500px;
        font-family: "MainFont-DemiBold", sans-serif;
      }

      .vjlp7_wrapper h3 {
        color: #FEE63D;
        font-size: 16px;
        font-family: "MainFont-Bold", sans-serif;
      }

      .vjlp7_wrapper ul li,
      .vjlp7_wrapper p {
        color: #fff;
        font-size: 16px;
        font-family: "MainFont-Medium", sans-serif;
      }

      .vjlp7_wrapper a {
        text-decoration: none;
        border-bottom: 2px dashed #FEE63D;
        color: inherit;
      }

      .vjlp7_wrapper a:hover {
        color: #FEE63D;
      }

      .vjlp7_wrapper ul {
        padding-left: 20px;
      }

      .vjlp7_wrapper .separator {
        border-bottom: 3px solid #0093D4;
      }

      .vjlp7_wrapper #login {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #fff;
      }

      .vjlp7_wrapper #login:hover {
        -webkit-animation-name: pulse;
        animation-name: pulse;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
      }

      .vjlp7_wrapper #login a {
        border: none;
        color: #fff;
      }

      .vjlp7_wrapper #login i {
        font-size: 32px;
        display: block;
        font-style: normal;
      }

      .vjlp7_wrapper #login span {
        color: #fff;
        font-size: 16px;
      }

      .vjlp7_wrapper #hero small {
        color: #fff;
        font-size: 11px;
        margin-top: 20px;
        display: block;
      }

      .vjlp7_wrapper #steps .num {
        background: #fff;
        color: #EC008B;
      }

      .vjlp7_wrapper #steps p {
        color: #fff;
        font-size: calc(16px - 2px);
      }

      .vjlp7_wrapper footer {
        color: #fff;
        font-size: 16px;
      }

      .vjlp7_wrapper #payment img {
        width: 100%;
      }

      @media (min-height: 750px) and (min-width: 320px) {
        .vjlp7_wrapper .version2 .logo {
          max-width: 180px;
          width: 100%;
        }
      }

      @media only screen and (min-width: 320px) {
        .vjlp7_wrapper .version2 #hero:before {
          background-color: rgba(0, 0, 0, 0.7);
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          content: "";
        }
        .vjlp7_wrapper .version2 #hero {
          overflow: hidden;
          position: relative;
        }
        .vjlp7_wrapper .desktop {
          display: none;
        }
        .vjlp7_wrapper .mobile {
          display: block;
        }
        .vjlp7_wrapper section,
        .vjlp7_wrapper footer {
          padding: 20px 10px;
        }
        .vjlp7_wrapper #hero {
          background: var(--bg-image-m) no-repeat center;
          background-size: cover;
          padding: 0;
        }
        .vjlp7_wrapper #hero .container {
          min-height: 400px;
        }
        .vjlp7_wrapper #hero #hero-text-wrapper {
          text-align: center;
          display: flex;
          align-items: center;
          padding: 20px 0;
        }
        .vjlp7_wrapper #hero #hero-text-wrapper>div {
          width: 100%;
        }
        .vjlp7_wrapper #steps {
          background: #EC008B;
        }
        .vjlp7_wrapper #steps .container {
          display: block;
          text-align: center;
        }
        .vjlp7_wrapper #steps .container>div {
          display: inline-block;
          vertical-align: top;
          width: 31%;
          overflow: hidden;
        }
        .vjlp7_wrapper #steps .container>div .num {
          width: 50px;
          height: 50px;
          align-items: center;
          display: flex;
          justify-content: center;
          border-radius: 50%;
          -moz-border-radius: 50%;
          font-size: 40px;
          font-weight: 700;
          margin: auto;
          font-family: "MainFont-DemiBold";
        }
        .vjlp7_wrapper #steps .container>div h3 {
          color: #FEE63D;
        }
        .vjlp7_wrapper #steps .container>div p {
          text-align: center;
        }
      }

      @media only screen and (min-width: 576px) {
        .vjlp7_wrapper .version2 #hero:before {
          display: none;
        }
        .vjlp7_wrapper #hero {
          background: var(--bg-image) no-repeat center;
          background-size: cover;
        }
        .vjlp7_wrapper #hero .container {
          min-height: 500px;
        }
        .vjlp7_wrapper #steps .container>div .num {
          width: 80px;
          height: 80px;
        }
      }

      @media only screen and (min-width: 768px) {
        .vjlp7_wrapper .desktop {
          display: block;
        }
        .vjlp7_wrapper .mobile {
          display: none;
        }
        .vjlp7_wrapper #hero #hero-text-wrapper {
          flex: 0 0 41.666667%;
          max-width: 41.666667%;
        }
      }

      @media only screen and (min-width: 992px) {
        .vjlp7_wrapper section,
        .vjlp7_wrapper footer {
          padding: 30px 0;
        }
      }

      @media only screen and (min-width: 1200px) {
        .vjlp7_wrapper #steps .container>div {
          margin-top: 0;
        }
        .vjlp7_wrapper #steps .container>div>* {
          float: left;
          text-align: left;
        }
        .vjlp7_wrapper #steps .container>div h3 {
          font-size: 32px;
          margin: 0;
          font-weight: 400;
        }
        .vjlp7_wrapper #steps .container>div .num+div {
          margin-left: 20px;
          max-width: 200px;
        }
        .vjlp7_wrapper #steps .container>div .num+div p {
          text-align: left;
        }
        .vjlp7_wrapper #steps .container>div .num {
          width: 100px;
          height: 100px;
          font-size: 80px;
        }
      }

      html {
        scroll-behavior: smooth;
      }

      .vjlp7_wrapper body {
        margin: 0;
        padding: 0;
      }

      .vjlp7_wrapper .container {
        display: flex;
        margin: auto;
        position: relative;
      }

      .vjlp7_wrapper .container>div {
        flex-grow: 1;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        padding-left: 15px;
        padding-right: 15px;
      }

      .vjlp7_wrapper button,
      .vjlp7_wrapper a {
        cursor: pointer;
        outline: 0;
      }

      @media only screen and (min-width: 320px) {
        .vjlp7_wrapper .column-2,
        .vjlp7_wrapper .column-3,
        .vjlp7_wrapper .column-4 {
          flex-wrap: wrap;
          flex-direction: row;
        }
      }

      @media only screen and (min-width: 576px) {
        .vjlp7_wrapper .container {
          max-width: 540px;
        }
      }

      @media only screen and (min-width: 768px) {
        .vjlp7_wrapper .container {
          max-width: 720px;
        }
      }

      @media only screen and (min-width: 992px) {
        .vjlp7_wrapper .container {
          max-width: 960px;
        }
        .vjlp7_wrapper .column-2>div {
          flex: 0 0 50%;
          max-width: 50%;
        }
      }

      @media only screen and (min-width: 1200px) {
        .vjlp7_wrapper .column-3>div {
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
        }
        .vjlp7_wrapper .column-4>div {
          flex: 0 0 25%;
          max-width: 25%;
        }
        .vjlp7_wrapper .container {
          max-width: 1140px;
        }
      }

      body.noScroll {
        overflow: hidden;
      }

      .vjlp7_wrapper #nav-desktop {
        background: #fff;
      }

      .vjlp7_wrapper #nav-desktop #switch {
        float: right;
      }

      .vjlp7_wrapper #nav-desktop #vj,
      .vjlp7_wrapper #nav-desktop #ic {
        background: #e4e4e4;
        color: #a9a9a9;
        border-radius: 3px;
        padding: 5px 10px;
        border: none;
        font-weight: 700;
      }

      .vjlp7_wrapper #nav-desktop #vj.active,
      .vjlp7_wrapper #nav-desktop #vj:hover {
        background: linear-gradient(to bottom, #fb57cc, #de1681);
        color: #fff;
      }

      .vjlp7_wrapper #nav-desktop #ic.active,
      .vjlp7_wrapper #nav-desktop #ic:hover {
        background: #FF6200;
        color: #fff;
      }

      .vjlp7_wrapper #nav-desktop .container {
        align-items: center;
      }

      .vjlp7_wrapper #nav-desktop .container img {
        max-width: 150px;
      }

      .vjlp7_wrapper #nav-desktop .container>div:first-child {
        flex: 0 0 15%;
        max-width: 15%;
      }

      .vjlp7_wrapper #nav-desktop .container>div:first-child+div {
        flex: 0 0 85%;
        max-width: 85%;
      }

      .vjlp7_wrapper #nav-desktop .container .nuxt-link-exact-active {
        color: #EC0090;
        border-bottom: solid 5px #EC0090;
      }

      .nav_wrapper {
        z-index: 1;
        position: relative;
      }

      .nav_wrapper #logo a {
        padding: 0;
      }

      .nav_wrapper nav a {
        font-family: "Open Sans", sans-serif;
        text-decoration: none;
        margin: 0 5px;
        color: #243238;
        font-size: 11px;
        padding: 30px 10px;
        display: inline-block;
        text-transform: capitalize;
        font-weight: 700;
        text-transform: uppercase;
        border-bottom: solid 5px transparent;
      }

      .vjlp7_wrapper #nav-mobile {
        background: #fff;
        padding: 15px 15px 15px 0;
      }

      .vjlp7_wrapper #ham-menu {
        display: none;
      }

      .vjlp7_wrapper label[for=ham-menu] {
        display: block;
        position: relative;
        margin-left: 15px;
        z-index: 999;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        border: 2px solid #e33227;
        background: #d5261c;
      }

      .vjlp7_wrapper .hide-des {
        display: flex;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        width: 100%;
        height: 100%;
        justify-content: center;
      }

      .vjlp7_wrapper .hide-des span {
        background: #fff;
        width: 17px;
        height: 2px;
        margin: 2px 0;
        display: block;
        transition: all 0.4s ease;
        transform-origin: 0 0;
      }

      .vjlp7_wrapper .ham-menu {
        width: 60vw;
        height: 100%;
        position: fixed;
        top: 0;
        visibility: hidden;
        transform: translate(-110%);
        z-index: 998;
        background: #fff;
        transition: 0.5s;
        padding-top: 80px;
      }

      .vjlp7_wrapper .ham-menu.vertical {
        width: 100%;
        height: auto;
        transform: translateY(-110%);
      }

      .vjlp7_wrapper .ham-menu ul {
        list-style: none;
        padding: 0;
        background: #e6e6e6;
        padding: 20px;
        margin: 0;
      }

      .vjlp7_wrapper .ham-menu ul li {
        line-height: 45px;
      }

      .vjlp7_wrapper .ham-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 997;
        opacity: 0;
        top: 0;
        left: 0;
        transition: all 0.3s ease;
      }

      .vjlp7_wrapper #ham-menu:checked~div.ham-overlay {
        opacity: 0.8;
      }

      .vjlp7_wrapper #ham-menu:checked~div.ham-menu {
        transform: translate(0);
        visibility: visible;
        overflow: scroll;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
      }

      .vjlp7_wrapper #ham-menu:checked~div.ham-menu a {
        padding: 5px;
      }

      .vjlp7_wrapper #ham-menu:checked+label span {
        background: #fff;
      }

      .vjlp7_wrapper #ham-menu:checked+label span:nth-child(2) {
        Transform: scaleX(0);
      }

      .vjlp7_wrapper #ham-menu:checked+label span:nth-child(1) {
        transform: rotate(45deg) translate(3px, -2px);
      }

      .vjlp7_wrapper #ham-menu:checked+label span:nth-child(3) {
        transform: rotate(-45deg) translate(2px, 2px);
      }

      .vjlp7_wrapper .intercasino img {
        filter: grayscale(100%);
      }

      .vjlp7_wrapper footer #footer-icon {
        text-align: center;
      }

      .vjlp7_wrapper footer #footer-icon>a {
        display: inline-block;
        min-width: 70px;
        vertical-align: middle;
        border: none;
        margin: 0 8px;
      }

      .vjlp7_wrapper footer .second-footer {
        padding: 25px 30px;
      }

      .vjlp7_wrapper footer p {
        text-align: center;
      }

      </style>
    </head>
    <body
      id="${locale.getIn(['data', 'promo_language_code'])}-${locale.getIn(['data', 'promo_country_code'])}"
      style='${cssBg}'
    >
      <div class="vjlp7_wrapper">
        <nuxt />
        <div
          v-if="Object.keys(mdData).length > 0"
          class="vjlp7-main"
          :class="${locale.getIn(['data', 'styles'])}"
        >
          <section id="hero" :style="cssBackground">
            <div class="container">
              <div id="hero-text-wrapper">
                <div>
                  <div id="login" class="animated">
                    <div class="fadeIn animated">
                      <a href="${banner.getIn(['data', 'promo_login_button_redirect_url'])}">
                        <i class="material-icons">exit_to_app</i>
                        <span>${banner.getIn(['data', 'promo_login_button'])}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </body>`
    )
  }
})
