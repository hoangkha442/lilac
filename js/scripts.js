var Lilac;
! function(e) {
    "use strict";
    e(document).ready(function() {
        (Lilac = {
            initialized: !1,
            mobMenuFlag: !1,
            wookHandler: null,
            wookOptions: null,
            scrollPos: 0,
            sendingMail: !1,
            mobileMenuTitle: mobileMenuTitle,
            hero100PercentHeight: hero100PercentHeight,
            twitter_username: twitter_username,
            map_canvas_id: map_canvas_id,
            map_color: map_color,
            map_initial_zoom: map_initial_zoom,
            map_initial_latitude: map_initial_latitude,
            map_initial_longitude: map_initial_longitude,
            use_default_map_style: use_default_map_style,
            contact_form_success_msg: contact_form_success_msg,
            contact_form_error_msg: contact_form_error_msg,
            c_days: c_days,
            c_hours: c_hours,
            c_minutes: c_minutes,
            c_seconds: c_seconds,
            countdownEndMsg: countdownEndMsg,
            init: function() {
                this.initialized || (this.initialized = !0, this.build(), this.events())
            },
            build: function() {
                this.isMobile(), this.preloader(), this.navigation(), this.createMobileMenu(), this.heroHeight(), this.curvedText(), e("input, textarea").placeholder(), this.bgImageGrid(), this.googleMap(), this.getLatestTweets(), this.getInstagram(), this.createPrettyPhoto(), this.wtcheck(), this.createOwlSliders(), this.createGallery(), this.countdown(), this.parallaxItems(), this.startNiceScroll()
            },
            events: function() {
                this.windowResize(), this.resizeVideos(), this.contactForm(), this.buttons(), this.animateElems()
            },
            isMobile: function() {
                var e;
                e = navigator.userAgent || navigator.vendor || window.opera, (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
            },
            preloader: function() {
                var t = setInterval(function() {
                    /loaded|complete/.test(document.readyState) && (clearInterval(t), e("#preloader").fadeOut(500))
                }, 10)
            },
            navigation: function() {
                e(".nav li a").on("click", function(t) {
                    var a = e(this),
                        i = 0;
                    "#" === a.attr("href").charAt(0) ? (t.preventDefault(), "#home" !== a.attr("href") && (i = e(a.attr("href")).offset().top - 65), e("html, body").stop().animate({
                        scrollTop: i
                    }, 1500, "easeInOutExpo", function() {
                        a.blur()
                    })) : window.open(a.attr("href"), "_self")
                });
                var t = new Waypoint.Sticky({
                    element: e(".nav-section")
                });
                t = t, e("#wrapper > section").waypoint({
                    handler: function(t) {
                        var a = e(this),
                            i = a[0].element.id;
                        "up" === t && (i = a[0].element.previousElementSibling.id), e(".nav a").removeClass("active"), e('nav a[href="#' + i + '"]').addClass("active")
                    },
                    offset: "50%"
                }), e(window).load(function() {
                    var a = location.hash.replace("#", "");
                    "" !== a && (location.hash = "", e("html, body").stop().animate({
                        scrollTop: e("#" + a).offset().top - 65
                    }, 1500, "easeInOutExpo")), t = new Waypoint.Sticky({
                        element: e(".nav-section")
                    })
                })
            },
            createMobileMenu: function(t) {
                var a, i, s = e("#wrapper");
                i = e.browser.mobile ? "touchstart" : "click", null !== t && (t = e(window).innerWidth()), t <= 975 && !this.mobMenuFlag && (e("body").prepend('<nav class="nav-mobile"><i class="fa fa-times"></i><h2><i class="fa fa-bars"></i>' + this.mobileMenuTitle + "</h2><ul></ul></nav>"), e(".nav-mobile > ul").html(e(".nav").html()), e(".nav-mobile b").remove(), e(".nav-mobile ul.dropdown-menu").removeClass().addClass("dropdown-mobile"), a = e(".nav-mobile"), e("#nav-mobile-btn").on(i, function(t) {
                    t.stopPropagation(), t.preventDefault(), setTimeout(function() {
                        s.addClass("open"), a.addClass("open"), a.getNiceScroll().show()
                    }, 25), e(document).on(i, function(t) {
                        e(t.target).hasClass("nav-mobile") || e(t.target).parents(".nav-mobile").length || (s.removeClass("open"), a.removeClass("open"), e(document).off(i))
                    }), e(">i", a).on(i, function() {
                        a.getNiceScroll().hide(), s.removeClass("open"), a.removeClass("open"), e(document).off(i)
                    })
                }), a.niceScroll({
                    autohidemode: !0,
                    cursorcolor: "#888888",
                    cursoropacitymax: "0.7",
                    cursorwidth: 10,
                    cursorborder: "0px solid #000",
                    horizrailenabled: !1,
                    zindex: "1"
                }), a.getNiceScroll().hide(), this.mobMenuFlag = !0, e(".nav-mobile li a").on("click", function(t) {
                    var o = e(this),
                        n = 0;
                    "#home" !== o.attr("href") && (n = e(o.attr("href")).offset().top - 65), e("html, body").stop().animate({
                        scrollTop: n
                    }, 1500, "easeInOutExpo", function() {
                        o.blur()
                    }), a.getNiceScroll().hide(), s.removeClass("open"), a.removeClass("open"), e(document).off(i), t.preventDefault()
                }))
            },
            heroHeight: function() {
                this.hero100PercentHeight && (e("#home").css({
                    minHeight: e(window).innerHeight() + "px"
                }), e(window).resize(function() {
                    e("#home").css({
                        minHeight: e(window).innerHeight() + "px"
                    })
                }))
            },
            bgImageGrid: function() {
                if (e("#freewall").length) {
                    e("#freewall .item").each(function() {
                        var t = e(this);
                        t.width(Math.floor(260 + 200 * Math.random())), t.css({
                            "background-image": "url(" + e(">img", t).attr("src") + ")"
                        }), e(">img", t).remove()
                    }), e("#freewall").appendTo("#wrapper");
                    var t = new Freewall("#freewall");
                    t.reset({
                        selector: ".item",
                        animate: !1,
                        cellW: 20,
                        gutterX: 0,
                        gutterY: 0,
                        onResize: function() {
                            t.fitWidth()
                        }
                    }), t.fitWidth()
                }
            },
            googleMap: function() {
                if (0 === e("#map_canvas").length || "undefined" === map_markers || 0 === map_markers.length) return !1;
                var t, a, i, s, o, n = [],
                    r = 0;
                for (/^\d|\.|-$/.test(this.map_initial_latitude) && /^\d|\.|-$/.test(map_initial_longitude) || (this.map_initial_latitude = map_markers[0].latitude, this.map_initial_longitude = map_markers[0].longitude), a = new google.maps.LatLng(this.map_initial_latitude, this.map_initial_longitude), this.use_default_map_style || (n = [{
                        stylers: [{
                            hue: map_color
                        }, {
                            saturation: -75
                        }, {
                            lightness: 5
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 20
                        }, {
                            lightness: -70
                        }]
                    }, {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            saturation: -50
                        }, {
                            lightness: 40
                        }]
                    }, {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{
                            hue: map_color
                        }, {
                            saturation: -100
                        }, {
                            lightness: 0
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{
                            hue: map_color
                        }, {
                            saturation: 5
                        }, {
                            lightness: 5
                        }]
                    }, {
                        featureType: "road",
                        elementType: "geometry.stroke",
                        stylers: [{
                            saturation: 10
                        }, {
                            lightness: 0
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            saturation: 0
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            hue: map_color
                        }, {
                            saturation: 30
                        }, {
                            lightness: -30
                        }]
                    }]), t = new google.maps.StyledMapType(n, {
                        name: "Lilac"
                    }), i = {
                        center: a,
                        zoom: this.map_initial_zoom,
                        scrollwheel: !1,
                        panControl: !1,
                        mapTypeControl: !1,
                        zoomControl: !0,
                        zoomControlOptions: {
                            position: google.maps.ControlPosition.RIGHT_CENTER
                        }
                    }, (s = new google.maps.Map(document.getElementById(this.map_canvas_id), i)).mapTypes.set("map_style", t), s.setMapTypeId("map_style"), o = function(e) {
                        var t = e.latitude,
                            a = e.longitude,
                            i = e.icon,
                            o = e.infoWindow,
                            n = new google.maps.InfoWindow({
                                content: '<div class="infoWindow">' + o + "</div>"
                            }),
                            r = new RichMarker({
                                position: new google.maps.LatLng(t, a),
                                map: s,
                                anchor: 8,
                                anchorPoint: new google.maps.Point(0, -40),
                                shadow: "none",
                                content: '<div class="marker"><i class="fa ' + i + '"></i></div>'
                            });
                        google.maps.event.addListener(r, "click", function() {
                            n.open(s, r)
                        })
                    }; r < map_markers.length;) o(map_markers[r]), r += 1
            },
            getLatestTweets: function() {
                e(".tweet").html('<div class="heartbeat"></div>');
                var t = document.createElement("div");
                t.setAttribute("id", "twitter-box"), e("body").append(t), e("#twitter-box").css({
                    display: "none"
                });
                try {
                    e("#twitter-box").tweet({
                        username: this.twitter_username,
                        modpath: "twitter/",
                        count: 8,
                        loading_text: "Loading tweets...",
                        template: '<h3>{screen_name}</h3><div class="info"><a href="http://twitter.com/{screen_name}" target="_blank">@{screen_name}</a> | <a href="http://twitter.com/{screen_name}/statuses/{tweet_id}/" target="_blank" class="time">{tweet_relative_time}</a></div><div>{text}</div>'
                    })
                } catch (e) {
                    console.log("Your twitter account is misconfigured. " + e)
                }
                var a = 0,
                    i = e(".tweet").length;
                e("#twitter-box li").each(function() {
                    if (!(a < i)) return !1;
                    e(".tweet").eq(a).html(e(this).html()), a += 1
                }), e("#twitter-box").remove()
            },
            getInstagram: function() {
                var t = this;
                e(".instagram").html('<div class="heartbeat"></div>'), e.ajax({
                    type: "post",
                    url: "instagram/instagram.php",
                    contentType: "application/json",
                    dataType: "json",
                    success: function(a) {
                        var i, s = a,
                            o = e(".instagram").length,
                            n = 0,
                            r = 0,
                            l = 0;
                        for ("" !== s && s.hasOwnProperty("data") && (r = s.data.length); l < r;) {
                            if (n < o) {
                                var c = JSON.parse(s.data[l]);
                                i = "caption" in c ? c.caption : "", e(".instagram").eq(n).html('<img src="' + c.media_url + '" alt="" /><span><a href="' + c.permalink + '" data-gal="prettyPhoto[gallery]" title="' + i + '"><i class="fa fa-link"></i></a><a href="' + c.permalink + '" target="_blank" title="View on Instagram"><i class="fa fa-external-link"></i></a></span>'), n += 1
                            }
                            l += 1
                        }
                        t.createPrettyPhoto()
                    },
                    error: function() {
                        console.log("Error getting Instagram feed.")
                    }
                })
            },
            wtcheck: function() {
                window.location.href.indexOf("wiselythemes.com") < 0 && e("body").html(unescape("%59%6F%75%20%61%72%65%20%75%73%69%6E%67%20%61%20%70%69%72%61%74%65%20%63%6F%70%79%20%6F%66%20%4C%69%6C%61%63%2E%20%50%6C%65%61%73%65%2C%20%67%65%74%20%61%20%76%61%6C%69%64%20%63%6F%70%79%20%6F%66%20%4C%69%6C%61%63%20%3C%61%20%68%72%65%66%3D%22%68%74%74%70%3A%2F%2F%74%68%65%6D%65%66%6F%72%65%73%74%2E%6E%65%74%2F%75%73%65%72%2F%57%69%73%65%6C%79%54%68%65%6D%65%73%3F%72%65%66%3D%57%69%73%65%6C%79%54%68%65%6D%65%73%22%3E%68%65%72%65%3C%2F%61%3E%2E%20"))
            },
            createPrettyPhoto: function() {
                e("a[data-gal^='prettyPhoto']").prettyPhoto({
                    theme: "lilac",
                    hook: "data-gal"
                })
            },
            createOwlSliders: function() {
                e(".timeline-gallery").length && e(".timeline-gallery").owlCarousel({
                    nav: !0,
                    dots: !1,
                    responsive: {
                        0: {
                            items: 1
                        },
                        392: {
                            items: 2
                        },
                        596: {
                            items: 3
                        },
                        751: {
                            items: 2
                        },
                        975: {
                            items: 3
                        }
                    }
                }), e(".bridesmaids-groomsmen-slider").length && (e(".bridesmaids-groomsmen-slider").owlCarousel({
                    nav: !1,
                    dots: !0,
                    responsive: {
                        0: {
                            items: 1
                        },
                        590: {
                            items: 2
                        },
                        975: {
                            items: 3
                        },
                        1199: {
                            items: 4
                        }
                    }
                }), e(".bridesmaids-groomsmen-slider").on("changed.owl.carousel", function(t) {
                    t.item.count - t.page.size == t.item.index && e(t.target).find(".owl-dots div:last").addClass("active").siblings().removeClass("active")
                }), e(".bridesmaids-groomsmen-slider").each(function() {
                    0 == e(".owl-prev:visible", this).length && e(".owl-nav", this).addClass("hide"), e(".item .image .info h3", this).css({
                        "margin-top": "70px"
                    })
                }))
            },
            createGallery: function() {
                var t = e(".gallery-scroller"),
                    a = !1;
                e(".gallery-right").on("click", function() {
                    if (a) return !1;
                    a = !0, t.animate({
                        scrollLeft: t.scrollLeft() + 380
                    }, function() {
                        a = !1
                    })
                }), e(".gallery-left").on("click", function() {
                    if (a) return !1;
                    a = !0, t.animate({
                        scrollLeft: t.scrollLeft() - 380
                    }, function() {
                        a = !1
                    })
                })
            },
            curvedText: function() {
                e(".curve").length && (e(".curve").arctext({
                    radius: 1e3
                }), e(window).resize(function() {
                    e(".curve").arctext("set", {
                        radius: 1e3
                    })
                })), e(".curve2").length && (e(".curve2").arctext({
                    radius: 800,
                    dir: -1
                }), e(window).resize(function() {
                    e(".curve2").arctext("set", {
                        radius: 800,
                        dir: -1
                    })
                }));
                setInterval(function() {
                    /loaded|complete/.test(document.readyState) && (e(".curve").arctext("set", {
                        radius: 1e3
                    }), e(".curve2").arctext("set", {
                        radius: 800,
                        dir: -1
                    }))
                }, 10)
            },
            countdown: function(t, a) {
                var i, s = this,
                    o = new Date(a),
                    n = e("" + t);
                n.html('<div class="days"><span>' + s.c_days + '</span><div></div></div><div class="hours"><span>' + s.c_hours + '</span><div></div></div><div class="minutes"><span>' + s.c_minutes + '</span><div></div></div><div class="seconds"><span>' + s.c_seconds + "</span><div></div></div>"), i = setInterval(function() {
                    var t = new Date,
                        a = o - t;
                    if (a < 0) return n.html('<div class="end">' + s.countdownEndMsg + "</div>"), clearInterval(i), !1;
                    var r = Math.floor(a / 864e5 * 1),
                        l = Math.floor(a % 864e5 / 36e5 * 1),
                        c = Math.floor(a % 864e5 % 36e5 / 6e4 * 1),
                        d = Math.floor(a % 864e5 % 36e5 % 6e4 / 1e3 * 1);
                    e(".days > div", n).html(r), e(".hours > div", n).html(l), e(".minutes > div", n).html(c), e(".seconds > div", n).html(d)
                }, 1e3)
            },
            parallaxItems: function() {
                e.browser.mobile ? e(".parallax").css({
                    "background-position": "50% 50%",
                    "background-size": "cover",
                    "background-attachment": "scroll"
                }) : e.stellar()
            },
            startNiceScroll: function() {
                e(document).ready(function() {
                    e(".gallery-scroller").niceScroll({
                        cursorcolor: "#fff",
                        cursorwidth: "0px",
                        background: "#fff",
                        cursorborder: "0px solid #1F2326",
                        zindex: "999",
                        autohidemode: !1,
                        enablemousewheel: !1,
                        touchbehavior: !0
                    })
                })
            },
            windowResize: function() {
                var t = this;
                e(window).resize(function() {
                    var a = e(window).innerWidth();
                    t.createMobileMenu(a)
                })
            },
            resizeVideos: function() {
                var t = e("iframe[src^='http://player.vimeo.com'], iframe[src^='https://player.vimeo.com'], iframe[src^='http://www.youtube.com'], iframe[src^='https://www.youtube.com'], object, embed"),
                    a = e(".videoEmbed");
                t.each(function() {
                    var t = e(this);
                    t.attr("data-aspectRatio", t.height() / t.width()).removeAttr("height").removeAttr("width")
                }), e(window).resize(function() {
                    var i = a.width();
                    t.each(function() {
                        var t = e(this);
                        t.width(i).height(i * t.attr("data-aspectRatio"))
                    })
                }).resize()
            },
            contactForm: function() {
                var t = this;
                e(".submit_form").on("click", function(a) {
                    a.preventDefault();
                    var i, s, o, n, r = e(this),
                        l = r.closest("form"),
                        c = e("input, textarea, .radio-lilac", l),
                        d = 0,
                        m = /\S+@\S+\.\S+/,
                        u = "contact",
                        h = !1,
                        p = [];
                    return n = function(e) {
                        return encodeURIComponent(e)
                    }, c.each(function() {
                        var t = e(this);
                        "hidden" === t.attr("type") ? t.hasClass("subject") ? u += "&subject=" + n(t.val()) : t.hasClass("fromName") || t.hasClass("fromname") ? u += "&fromname=" + n(t.val()) : t.hasClass("fromEmail") || t.hasClass("fromemail") ? u += "&fromemail=" + n(t.val()) : (t.hasClass("emailTo") || t.hasClass("emailto")) && (u += "&emailto=" + n(t.val())) : t.hasClass("required") && "" === t.val() ? (t.addClass("invalid"), h = !0) : "email" === t.attr("type") && "" !== t.val() && !1 === m.test(t.val()) ? (t.addClass("invalid"), h = !0) : "recaptcha_response_field" !== t.attr("id") && (t.removeClass("invalid"), t.hasClass("subject") ? (u += "&subject=" + n(t.val()), u += "&subject_label=" + t.attr("name")) : t.hasClass("fromName") || t.hasClass("fromname") ? (u += "&fromname=" + n(t.val()), u += "&fromname_label=" + t.attr("name")) : t.hasClass("fromEmail") || t.hasClass("fromemail") ? (u += "&fromemail=" + n(t.val()), u += "&fromemail_label=" + t.attr("name")) : t.hasClass("radio-lilac") ? (u += "&field" + d + "_label=" + t.data("value"), u += "&field" + d + "_value=" + e(".active", t).data("value"), d += 1) : (u += "&field" + d + "_label=" + t.attr("name"), u += "&field" + d + "_value=" + n(t.val()), d += 1))
                    }), u += "&len=" + d, i = function() {
                        r.width(r.width()), e("i", r).each(function() {
                            var t = e(this),
                                a = t.attr("class");
                            t.removeClass(a).addClass("fa fa-times").delay(1500).queue(function(t) {
                                e(this).removeClass("fa fa-times").addClass(a), t()
                            })
                        }), r.addClass("btn-danger").delay(1500).queue(function(t) {
                            e(this).removeClass("btn-danger"), t()
                        }), e(".form_status_message").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + contact_form_error_msg + "</div>")
                    }, s = function() {
                        r.width(r.width()), e("i", r).each(function() {
                            var t = e(this),
                                a = t.attr("class");
                            t.removeClass(a).addClass("fa fa-check").delay(1500).queue(function(t) {
                                e(this).removeClass("fa fa-check").addClass(a), t()
                            })
                        }), r.addClass("btn-success").delay(1500).queue(function(t) {
                            e(this).removeClass("btn-success"), t()
                        }), e(".form_status_message").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + contact_form_success_msg + "</div>")
                    }, o = function() {
                        e("i", r).each(function(t) {
                            e(this).removeClass("fa fa-cog fa-spin").addClass(p[t])
                        }), r.removeClass("disabled")
                    }, h || t.sendingMail ? i() : (t.sendingMail = !0, e("i", r).each(function(t) {
                        var a = e(this);
                        p[t] = a.attr("class"), a.removeClass(p[t]).addClass("fa fa-cog fa-spin")
                    }), r.addClass("disabled"), e.ajax({
                        type: "POST",
                        url: "contact.php",
                        data: u,
                        success: function(e) {
                            o(), "ok" === e ? (s(), l[0].reset()) : i(), t.sendingMail = !1
                        },
                        error: function() {
                            o(), i(), t.sendingMail = !1
                        }
                    })), !1
                })
            },
            buttons: function() {
                e(".nav-logo, .scrollto").on("click", function(t) {
                    var a = e(this),
                        i = 0;
                    t.preventDefault(), "#home" !== a.attr("href") && (i = e(a.attr("href")).offset().top - 65), e("html, body").stop().animate({
                        scrollTop: i
                    }, 1500, "easeInOutExpo", function() {
                        a.blur()
                    })
                }), e(".bridesmaids-groomsmen-buttons .btn").on("click", function(t) {
                    t.preventDefault();
                    var a = e(this),
                        i = a.data("slider");
                    a.hasClass("active") || (e(".bridesmaids-groomsmen-slider").addClass("hide").css({
                        opacity: 0
                    }), e("#" + i).removeClass("hide").delay(500).animate({
                        opacity: 1
                    }, 500)), e(".bridesmaids-groomsmen-buttons .btn").removeClass("active"), a.addClass("active")
                }), e(".radio-lilac button").on("click", function(t) {
                    t.preventDefault();
                    var a = e(this);
                    if (a.hasClass("active")) return !1;
                    a.parent().find("button").removeClass("active"), a.addClass("active")
                }), e(".add_button").on("click", function(t) {
                    t.preventDefault();
                    var a, i = e(this),
                        s = i.data("wrapper"),
                        o = parseInt(e("#" + s).data("count"), 10) + 1 || 1,
                        n = e("#" + i.data("input")),
                        r = n.val();
                    if ("" === r) return n.addClass("invalid"), !1;
                    a = '<div class="input-group"><input type="text" class="form-control" name="' + i.data("input") + "_" + o + '" value="' + r + '" /><span class="input-group-addon"><i class="fa fa-trash"></i></span></div>', e("#" + s).data("count", o).append(a), n.val(""), n.removeClass("invalid")
                }), e(".add_list").on("click", ".input-group-addon", function() {
                    e(this).closest(".input-group").remove()
                })
            },
            animateElems: function() {
                if (e.browser.mobile) return !1;
                var t = function() {
                    e("[data-animation-delay]").each(function() {
                        var t = e(this),
                            a = e(window).scrollTop(),
                            i = e(window).height(),
                            s = parseInt(t.attr("data-animation-delay"), 10),
                            o = t.data("animation-direction");
                        if (void 0 === o) return !1;
                        t.addClass("animate-" + o), a + i >= t.offset().top && (isNaN(s) || 0 === s ? t.removeClass("animate-" + o).addClass("animation-" + o) : setTimeout(function() {
                            t.removeClass("animate-me").addClass("animation-" + o)
                        }, s))
                    })
                };
                e(window).innerWidth() >= 751 && (e(window).scroll(function() {
                    t()
                }), t())
            }
        }).init()
    })
}(jQuery);