jQuery, $.noConflict(), jQuery(document).ready(function(e) {
    var t, i, n;
    e("body").removeClass("pageload"), $header = e(".main-header"), 1 === $header.length && window.matchMedia("(max-width: 767px)").matches && (headerHeight = $header.outerHeight(), e("body").css("padding-top", headerHeight + "px")),
        function() {
            if (0 === e(".comments").length) return;
            const t = e(".comments__slider");
            t.on("init", function() {
                var t = e(".testimonial");
                setTimeout(function() {
                    t.each(function(t, i) {
                        var n = e(i).find(".testimonial__content");
                        1 === n.length && new SimpleBar(n[0])
                    })
                }, 0)
            }), t.slick({
                slidesToShow: 1,
                rows: 0,
                arrows: !0,
                adaptiveHeight: !0
            })
        }(), t = e(".faq__answer"), (i = e(".faq__question")).on("click", function() {
            e(this).addClass("active");
            var n = e(this).next(".faq__answer");
            if (i.not(e(this)).each(function() {
                    e(this).removeClass("active")
                }), t.not(n).each(function() {
                    e(this).removeClass("active"), e(this).slideUp(250)
                }), n.hasClass("active")) return e(this).removeClass("active"), n.removeClass("active"), void n.slideUp(250);
            n.addClass("active"), n.slideDown(250)
        }),
        function() {
            if (window.matchMedia("(max-width: 767px)").matches) {
                var t = e(".hamburger"),
                    i = e(".main-header__navigation"),
                    n = e(".main-nav a");
                t.click(function() {
                    e(this).toggleClass("active"), i.toggleClass("active"), e("body").toggleClass("menu-opened")
                }), n.on("click", function() {
                    t.removeClass("active"), i.removeClass("active"), e("body").removeClass("menu-opened");
                    var n = this.hash;
                    e("html, body").animate({
                        scrollTop: e(n).offset().top
                    }, 1e3)
                })
            }
        }(), n = window.matchMedia("(max-width: 767px)").matches, e(window).resize(function() {
            n = window.matchMedia("(max-width: 767px)").matches
        }), e(".footer-phone a").on("click", function(t) {
            if (!n) {
                t.preventDefault();
                var i = e(this),
                    a = i.attr("data-target");
                e(a).modal("show", i)
            }
        }),
        function() {
            var t = e(".main-header"),
                i = (e(".main-header__navigation"), t.outerHeight(!0), e(".main-header__contact")),
                n = window.matchMedia("(max-width: 767px)").matches;
            e(window).resize(function() {
                n = window.matchMedia("(max-width: 767px)").matches
            }), i.on("click", function(t) {
                if (!n) {
                    t.preventDefault();
                    var i = e(this),
                        a = i.attr("data-target");
                    e(a).modal("show", i)
                }
            });
            var a = 0;
            e(document).on("scroll", function(i) {
                var n = e(this).scrollTop();
                n >= 500 ? t.addClass("slideUp") : t.removeClass("slideUp"), n < a && t.removeClass("slideUp"), a = n
            });
            var o = e(".main-header__trigger-contacts"),
                s = e(".main-header__contacts"),
                r = e(".main-header__contacts-backdrop");
            o.length > 0 && (o.on("click", function(e) {
                e.preventDefault(), s.fadeIn(300)
            }), r.on("click", function() {
                s.fadeOut(300)
            }))
        }(), $linksToSubnav = e(".main-nav__link.hasSubnav"), window.matchMedia("(max-width: 767px)").matches && $linksToSubnav.each(function(t, i) {
            e(i).on("click", function() {
                e(i).next().slideToggle()
            })
        }), e(window).on("load", function() {
            if (0 !== e("#map").length) {
                var t, i, n = function() {
                    var i = document.querySelector(".map__contacts-switchers");
                    if (!i) return;
                    var n = Array.from(document.querySelectorAll(".map__contacts-data")),
                        a = i.querySelector(".switcher"),
                        o = i.getBoundingClientRect().width,
                        s = i.querySelector("button.active");
                    return i.addEventListener("click", o => {
                        if (void 0 !== t) {
                            var s = i.getBoundingClientRect().width,
                                l = o.target,
                                d = l.dataset.action,
                                u = Array.from(i.children);
                            if (!l.classList.contains("active")) {
                                u.forEach(e => e.classList.remove("active")), i.classList.add("disabled");
                                var f = l.offsetWidth;
                                l.classList.add("active"), a.style.width = f + "px";
                                var m = n.find(e => e.classList.contains("active")),
                                    h = n.find(e => e.dataset.city === d);
                                "moscow" === d ? (a.style.left = "2px", t.panTo(c, {
                                    duration: 1e3
                                })) : (t.panTo(r, {
                                    duration: 1e3
                                }), a.style.left = s - f - 2 + "px"), e(m).fadeOut(160, function() {
                                    m.classList.remove("active"), h.classList.add("active"), e(h).fadeIn(160, function() {
                                        i.classList.remove("disabled")
                                    })
                                })
                            }
                        }
                    })
                }();
                (i = "https://api-maps.yandex.ru/2.1/?apikey=1f6c7ac4-c513-4165-81cb-89c52eafcc1a&lang=ru_RU", new Promise(function(e) {
                if ("undefined" != typeof ymaps) e();
                    else {
                        const t = i,
                            n = document.createElement("script");
                        n.type = "text/javascript", n.src = t, document.body.appendChild(n), n.onload = function() {
                            e()
                        }
                    }
                })).then(function() {
                    ymaps.ready(function() {
                        var e = "moscow" === n ? c : r;
                        t = new ymaps.Map("map", {
                            center: e,
                            zoom: s,
                            controls: ["zoomControl"]
                        });
                        var i = new ymaps.Placemark(r, {
                                hintContent: "г. Санкт-Петербург, ст. м. Маяковская, Невский проспект 61 (вход со двора)",
                                balloonContent: "г. Санкт-Петербург, ст. м. Маяковская, Невский проспект 61 (вход со двора)"
                            }),
                            l = new ymaps.Placemark(c, {
                                hintContent: "г. Санкт-Петербург, ст. м. Маяковская, Невский проспект 61 (вход со двора)",
                                balloonContent: "г. Санкт-Петербург, ст. м. Маяковская, Невский проспект 61 (вход со двора)"                            });
                            // d = new ymaps.multiRouter.MultiRoute({
                            //     referencePoints: ["Санкт-Петербург, метро Маяковская", r],
                            //     params: {
                            //         routingMode: "pedestrian"
                            //     }
                            // }, o),
                            // u = new ymaps.multiRouter.MultiRoute({
                            //     referencePoints: ["Москва, метро Менделеевская", c],
                            //     params: {
                            //         routingMode: "pedestrian"
                            //     }
                            // }, o);
                        t.geoObjects.add(i), t.geoObjects.add(l), t.behaviors.disable("scrollZoom")
                    })
                });
                // var a = {
                //         iconLayout: "default#image",
                //         iconImageHref: "images/icons/map-icon.png",
                //         iconImageSize: [30, 30],
                //         iconImageOffset: [-15, -30]
                //     },
                    o = {
                        wayPointIconLayout: "none",
                        routeActivePedestrianSegmentStrokeStyle: "solid",
                        routeActivePedestrianSegmentStrokeColor: "#ff0000"
                    },
                    s = 14,
                    r = [59.931524,30.351719],
                    c = [55.78081961083188,37.60234272023768];
                e(window).width() < 480 && (s = 16, r = [59.931524,30.351719], c = [56.326797, 44.006516])
            }
        }),
        function() {
            function t(t) {
                var i = new XMLHttpRequest,
                    n = e(t.currentTarget),
                    a = e(t.relatedTarget),
                    o = n.find("form"),
                    s = o.attr("name"),
                    r = a.attr("data-city"),
                    c = n.find('input:radio[name="city"]');
                c.attr("checked", !1), r ? c.filter('[value="' + r + '"]').attr("checked", !0) : c.filter(":first").attr("checked", !0);
                var l = n.find("input")[0];
                l && l.focus();
                var d = n.find('input[name="tel"]');
                var u = "+7 (999) 999-99-99";
                d.inputmask({
                    mask: u,
                    showMaskOnHover: !1
                });
                var f = n.find('input[name="name"]'),
                    m = n.find(".modal-submit");
                if (a.length > 0) {
                    const e = a.data("button");
                    e && m.text(e)
                }
                /*
                o.on("submit", function(e) {
                    e.preventDefault(), n.modal("hide"), i.onreadystatechange = function() {
                        if (4 === i.readyState)
                            if (d.val(""), f.val(""), m.removeClass("loading"), 200 === i.status) {
                                JSON.parse(i.response);
                                window.location.href = "/sendform.php", o.off()
                            } else o.off(), n.modal("hide"), alert("Возникла ошибка при отправке формы. Код ошибки: " + i.status + " " + i.statusText)
                    };
                    var t = new FormData(document.forms[s]);
                    //i.open("POST", "/formSubmit.php", !0), i.send(t)
                })
                */
            }
            $modal1 = e("#modal1"), $modal2 = e("#modal2"), $modal1.on("show.bs.modal", function(e) {
                t(e)
            }), $modal2.on("show.bs.modal", function(e) {
                t(e)
            })
        }(),
        function() {
            var t = e(".problems-slider__slider-inner");
            if (t.length > 0) {
                var i = e(".problems-slider__item");
                t.slick({
                    infinite: !1,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    mobileFirst: !0,
                    responsive: [{
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    }]
                });
                var n;
                t.slick("getSlick").slideCount;
                t.on("afterChange", function(e, i, a) {
                    n === a && 0 !== n && t.slick("slickGoTo", 0), n = a
                }), i.each(function() {
                    var t = e(this),
                        i = t.find(".problems-slider__text").html(),
                        n = t.find(".problems-slider__description").html();
                    t.on("click", function() {
                        var t = e("#problems-description");
                        t.find(".problems-slider__description-modal-title").html(i), t.find(".problems-slider__description-modal-text").html(n), t.modal()
                    })
                })
            }
        }(),
        function() {
            var t = e(".quiz__final-phone input");
            var i = "+7 (999) 999-99-99";
            t.inputmask({
                mask: i,
                showMaskOnHover: !1
            });
            var n, a, o, s = e(".quiz__slider"),
                r = e(".quiz__controls .current"),
                c = e(".quiz__controls .total"),
                l = e(".quiz__previous"),
                d = e(".quiz__next"),
                u = e(".quiz__progress-bar");

            function f(t) {
                e(".quiz__final-text").hide(), e(".quiz__final-phone").hide(), e(".quiz__submit").hide(), e(".quiz__final-title").text(t), s.slick("setPosition")
            }

            function m(e, t) {
                var i = e + 1;
                r.text(i);
                var n = i / t;
                u.css("transform", "scaleX(" + n + ")")
            }
            s.on("init", function(t, i) {
                n = i.$slides.length, c.text(n), m(i.currentSlide, n), e(i.$slides[i.currentSlide]).find(".quiz__question-answer input").on("change", function() {
                    a = e(this).data("question"), d.attr("disabled", !1)
                })
            }), s.on("beforeChange", function(i, r, c, u) {
                var f;
                m(u, n), u === r.$slides.length - 1 && setTimeout(function() {
                    t.focus()
                }, 500), f = 1 === Math.abs(u - c) ? u - c > 0 ? "right" : "left" : u - c > 0 ? "left" : "right";
                var h = r.$slides[u];
                0 === u ? l.attr("disabled", !0) : (o = function(t, i) {
                    var n, o = t.find(".quiz__question");
                    o.length > 1 ? (o.each(function(i, n) {
                        e(n).hide();
                        var a = t.find(".quiz__question-answer input");
                        a.attr("disabled", !0)
                    }), n = o.filter("[data-type='" + a + "']")) : n = e(o[0]);
                    var r = n.find(".quiz__question-answer input");
                    if (0 === r.length && "right" === i) return function() {
                        s.slick("slickNext")
                    };
                    if (0 === r.length && "left" === i) return function() {
                        s.slick("slickPrev")
                    };
                    console.log(r), r.attr("disabled", !1), n.show()
                }(e(h), f), l.attr("disabled", !1));
                var p = e(r.$slides[u]).find(".quiz__question-answer input");
                p.filter(":checked").length > 0 ? d.attr("disabled", !1) : d.attr("disabled", !0), p.on("change", function() {
                    d.attr("disabled", !1)
                }), u === n - 1 && (e(".quiz__controls").hide(), e(".quiz__progress").hide())
            }).on("afterChange", function() {
                e([document.documentElement, document.body]).animate({
                    scrollTop: s.offset().top - 120
                }, 200), "function" == typeof o && setTimeout(function() {
                    o(), console.log("cb"), o = null
                }, 0)
            }), s.slick({
                slidesToShow: 1,
                rows: 0,
                arrows: !1,
                adaptiveHeight: !0,
                swipe: !1,
                infinite: !1
            }), d.on("click", function() {
                s.slick("slickNext")
            }), l.on("click", function() {
                s.slick("slickPrev")
            }), s.on("submit", function(i) {
                i.preventDefault();
                var n = e('.quiz__slider input[name="city"]'),
                    a = n.length > 0 ? n.val() : "san",
                    o = {
                        comment: "",
                        tel: t.val(),
                        city: a
                    };
                s.find(".quiz__question").each(function(t, i) {
                    var n = e(i).find(".quiz__question-title").text().trim(),
                        a = e(i).find("input:checked");
                    if (0 !== a.length) {
                        var s = "";
                        a.each(function(t, i) {
                            s += e(i).val() + "; "
                        }), o.comment += "\n" + n + ": " + s
                    }
                }), console.log(o.comment), f("Спасибо, мы уже изучаем ваши ответы и свяжемся в течение 5 минут"), e.ajax({
                    type: "POST",
                    url: "/",
                    data: o,
                    success: function(e) {
                        f("Спасибо, мы уже изучаем ваши ответы и свяжемся в течение 5 минут")
                    },
                    error: function(e) {
                        f("Произошла ошибка при отправке формы")
                    }
                })
            })
        }(),
        function() {
            e(".sertificates__list").slick({
                mobileFirst: !0,
                slidesToShow: 1,
                arrows: !0,
                dots: !1,
                infinite: !1,
                centerMode: !0,
                centerPadding: "0",
                autoplaySpeed: 3e3,
                adaptiveHeight: !0,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: !1
                    }
                }, {
                    breakpoint: 1240,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        centerMode: !1
                    }
                }]
            })
        }(),
        function() {
            e(".specialists__list").slick({
                mobileFirst: !0,
                slidesToShow: 1,
                arrows: !0,
                dots: !1,
                infinite: !0,
                centerMode: !0,
                centerPadding: "0",
                autoplaySpeed: 3e3,
                adaptiveHeight: !0
            })
        }(),
        function() {
            Object.defineProperty(HTMLMediaElement.prototype, "playing", {
                get: function() {
                    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2)
                }
            });
            var t = e(".top-screen");
            if (0 !== t.length) {
                var i = t.find("video")[0];
                if (e("body").on("click touchstart", function() {
                        i.playing || i.play()
                    }), window.matchMedia("(max-width: 480px)").matches) t.find("video source").attr("src", "video/stelki_m.mp4");
                var n = e(".top-screen__form");
                if (0 !== n.length) {
                    var a = new XMLHttpRequest,
                        o = n.attr("name"),
                        s = n.find('input[name="tel"]');
                    s.inputmask({
                        mask: "+7 (999) 999-99-99",
                        showMaskOnHover: !1
                    });
                    var r = n.find('input[name="name"]'),
                        c = n.find(".top-screen__submit");
                    /*
                    n.on("submit", function(e) {
                        e.preventDefault(), a.onreadystatechange = function() {
                            if (4 === a.readyState)
                                if (s.val(""), r.val(""), c.removeClass("loading"), 200 === a.status) {
                                    JSON.parse(a.response);
                                    window.location.href = "/sendform.php", n.off()
                                } else n.off(), alert("Возникла ошибка при отправке формы. Код ошибки: " + a.status + " " + a.statusText)
                        };
                        var t = new FormData(document.forms[o]);
                        a.open("POST", "/formSubmit.php", !0), a.send(t)
                    });
                    */
                    var l = e(".top-screen__time-appeal .time");
                    if (l.length > 0) {
                        var d = new Date;
                        dealine = d.setDate(d.getDate() + 5), dealine = new Date(d).toLocaleDateString("ru", {
                            month: "long",
                            day: "numeric"
                        }), l.text(dealine)
                    }
                }
            }
        }()
});
