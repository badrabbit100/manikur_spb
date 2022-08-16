{% load static %}
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Спасибо за Заявку</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="icon" type="image/png" sizes="32x32" href="{% static 'main/images/favicon-32x32.png' %}">
    <link rel="icon" type="image/png" sizes="16x16" href="{% static 'main/images/favicon-16x16.png' %}">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet">
    <link href="{% static 'main/css/likely.css' %}" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Roboto, sans-serif;
        }

        /*body * {
        box-sizing: border-box;
     }*/

        .jssocials-share {

            margin-right: 45px;
        }

        .jssocials-share-link {
            border-radius: 10px;
            min-width: 120px;
        }

        .jssocials-share-count-box {
            background-color: #fff;
        }

        .jssocials-share-logo {
            vertical-align: sub;
            margin: 0 5px;
        }

        .widgets {
            padding: 20px 0;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
        }

        .widget {
            position: relative;
            width: 260px;
            height: 260px;
            margin: 0 5px 15px;
            background-color: #fff;
        }

        .widget__preview {
            z-index: -1;
            position: absolute;
            top: 40%;
            text-align: center;
        }

        .row {
            position: relative;
            box-sizing: border-box;
            height: auto;
            min-height: 450px;
            padding: 0 20px;
            width: 100%;
            background: #f9f9f9;
        }

        .wrapper {
            width: 100%;
            height: 100%;
            max-width: 1120px;
            margin: 0 auto;
        }

        .row+.wrapper {
            box-sizing: border-box;
            /*padding: 0 20px;*/
        }

        .spasibo {
            display: flex;
            height: 100%;
            overflow: hidden;
        }

        .spasibo__column {
            width: 60%;
            padding: 60px 0 30px;
        }

        .spasibo__title {
            font-size: 25px;
            font-weight: 500;
            margin: 0;
            margin-bottom: 20px;
        }

        .spasibo__subtitle {
            font-size: 23px;
            font-weight: 400;
            margin: 0;
            margin-bottom: 20px;
        }

        .spasibo__subtitle {
            font-size: 23px;
            font-weight: 400;
            margin: 0;
            margin-bottom: 60px;
        }

        .spasibo__appeal {
            font-size: 22px;
            font-weight: 300;
            margin: 0;
            margin-bottom: 20px;
        }

        .spasibo__text {
            width: 100%;
            max-width: 380px;
            font-size: 16px;
            font-weight: 300;
            line-height: 1.5
        }

        .spasibo__link {
            color: black;
        }

        .spasibo__img {
            position: absolute;
            right: 0;
            bottom: 0;
            overflow: hidden;
            width: 40%;
            height: 90%;

            margin-left: auto;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center bottom;
            background-image: url("{% static 'main/images/sp-woman.png' %}");
        }

        .likely__icon {
            margin-right: 10px;
            margin-left: 5px;
        }

        .likely .likely__counter {
            background-image: linear-gradient(to right, rgba(0, 0, 0, .8) 0, rgba(0, 0, 0, 0.1) .5px, rgba(0, 0, 0, 0) 100%);
        }

        .back {
            position: absolute;
            padding: 5px 10px;
            font-size: 16px;
            font-weight: 500;
            color: black;
            text-decoration: none;
            top: 5px;
            left: 5px;
            background-color: rgb(235, 235, 235);
        }

        .socials a {
            text-decoration: none;
        }

        @media (max-width: 680px) {
            .spasibo__img {
                display: none;
            }

            .spasibo__column {
                width: 100%;
            }
        }
    </style>
    <script type="text/javascript" src="https://vk.com/js/api/openapi.js?167"></script>

</head>

<body>
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v6.0&appId=906556719757756&autoLogAppEvents=1"></script>
    <div class="row">
        <a href="/" class="back">Вернуться</a>
        <div class="wrapper">
            <div class="spasibo">
                <div class="spasibo__column">
                    <h1 class="spasibo__title">Спасибо за заявку!</h1>
                    <h2 class="spasibo__subtitle">Администратор свяжется с Вами в течение 3 минут.</h2>
                    <h2 class="spasibo__appeal">Поделитесь здоровьем с друзьями:</h2>
                    <div class="socials likely likely-big likely_visible likely_ready">
                        <a onclick="Share.vkontakte('http://sanatera.plahotinandrei.ru/','Sanatera','IMG_PATH','DESC')" target="_blank" rel="nofollow noopener" class=" likely__widget likely__widget_vkontakte">
                            <span class="likely__icon likely__icon_vkontakte">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M7.828 12.526h.957s.288-.032.436-.19c.14-.147.14-.42.14-.42s-.02-1.284.58-1.473c.59-.187 1.34 1.24 2.14 1.788.61.42 1.07.33 1.07.33l2.14-.03s1.12-.07.59-.95c-.04-.07-.3-.65-1.58-1.84-1.34-1.24-1.16-1.04.45-3.19.98-1.31 1.38-2.11 1.25-2.45-.11-.32-.84-.24-.84-.24l-2.4.02s-.18-.02-.31.06-.21.26-.21.26-.38 1.02-.89 1.88C10.27 7.9 9.84 8 9.67 7.88c-.403-.26-.3-1.053-.3-1.62 0-1.76.27-2.5-.52-2.69-.26-.06-.454-.1-1.123-.11-.86-.01-1.585.006-1.996.207-.27.135-.48.434-.36.45.16.02.52.098.71.358.25.337.24 1.09.24 1.09s.14 2.077-.33 2.335c-.33.174-.77-.187-1.73-1.837-.49-.84-.86-1.78-.86-1.78s-.07-.17-.2-.27c-.15-.11-.37-.15-.37-.15l-2.29.02s-.34.01-.46.16c-.11.13-.01.41-.01.41s1.79 4.19 3.82 6.3c1.86 1.935 3.97 1.81 3.97 1.81z"></path>
                                </svg>
                            </span>
                            <span class="likely__button likely__button_vkontakte">Поделиться</span>
                        </a>
                        <a onclick="Share.facebook('http://sanatera.plahotinandrei.ru/','Sanatera','IMG_PATH','DESC')" class=" likely__widget likely__widget_facebook">
                            <span class="likely__icon likely__icon_facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0z"></path>
                                </svg>
                            </span>
                            <span class="likely__button likely__button_facebook">Поделиться</span>
                        </a>
                        <a onclick="Share.twitter('http://sanatera.plahotinandrei.ru/','Sanatera')" class="likely__widget likely__widget_twitter">
                            <span class="likely__icon likely__icon_twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353z"></path>
                                </svg>
                            </span>
                            <span class="likely__button likely__button_twitter">Tweet</span>
                        </a>
                    </div>
                    <p class="spasibo__text">или подписывайтесь на нас в социальных сетях, чтобы получать <em style="font-weight: 400;">полезные советы</em>, а также участвовать в акциях, доступных только подписчикам. </p>
                </div>
                <div class="spasibo__img"></div>
            </div>
        </div>
    </div>
    <div class="wrapper">
        <div class="widgets">
            <div class="widget">
                <!-- VK Widget -->
                <div id="vk_groups"></div>
                <script type="text/javascript">
                    VK.Widgets.Group("vk_groups", {
                        mode: 3,
                        width: "260",
                        height: "260"
                    }, -216522903);
                </script>
            </div>
            <div class="widget">
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsanateraclinic%2F&tabs=timeline&width=260&height=260&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=906556719757756" width="260" height="260" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            </div>
            <div class="widget">
                <iframe width="260" height="260" src="https://www.youtube.com/embed/UJQ6Zkcg9Nc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    <script>
        Share = {
            vkontakte: function(purl, ptitle, pimg, text) {
                url = 'http://vkontakte.ru/share.php?';
                url += 'url=' + encodeURIComponent(purl);
                url += '&title=' + encodeURIComponent(ptitle);
                url += '&description=' + encodeURIComponent(text);
                url += '&image=' + encodeURIComponent(pimg);
                url += '&noparse=true';
                Share.popup(url);
            },
            facebook: function(purl, ptitle, pimg, text) {
                url = 'http://www.facebook.com/sharer.php?s=100';
                url += '&p[title]=' + encodeURIComponent(ptitle);
                url += '&p[summary]=' + encodeURIComponent(text);
                url += '&p[url]=' + encodeURIComponent(purl);
                url += '&p[images][0]=' + encodeURIComponent(pimg);
                Share.popup(url);
            },
            twitter: function(purl, ptitle) {
                url = 'http://twitter.com/share?';
                url += 'text=' + encodeURIComponent(ptitle);
                url += '&url=' + encodeURIComponent(purl);
                url += '&counturl=' + encodeURIComponent(purl);
                Share.popup(url);
            },
            popup: function(url) {
                window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
            }
        };
    </script>
</body>

</html>