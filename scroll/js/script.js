//=========================Global Functions============================
let slideUp = (target, duration = 500) => {

    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        //alert("!");
    }, duration);
}
let slideDown = (target, duration = 500) => {

    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}
let slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}

let options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 1.0,
};

//========================HEADER=========================================
function initNav() {
    document.querySelectorAll("nav ul a").forEach((item) => {
        item.addEventListener("click", function (e) {
            if (window.innerWidth > 1024) {
                if (document.querySelector(".dop-nav [data-index='" + item.getAttribute("data-index") + "']")) {
                    e.preventDefault();
                    let child = document.querySelector(".dop-nav [data-index='" + item.getAttribute("data-index") + "']");
                    if (child.classList.contains("active")) {
                        child.classList.remove("active");
                        document.querySelectorAll("nav ul a").forEach((el) => {
                            el.classList.remove("disable");
                        });
                        slideUp(child);
                        return false;
                    }
                    child.classList.add("active");
                    child.classList.remove("disable");
                    slideDown(child);
                    document.querySelectorAll("nav ul a").forEach((el) => {
                        if (el != item) {
                            el.classList.add("disable");
                        }
                        else el.classList.remove("disable");
                    });
                    document.querySelectorAll(".dop-nav .item").forEach((el) => {
                        if (el != child) {
                            slideUp(el);
                            el.classList.remove("active");
                        }
                    });
                }
            }
        });
    });

    document.querySelector("header .header-nav-button").addEventListener("click", function () {
        if (document.querySelector("header").classList.contains("active")) {
            document.querySelector("header").classList.remove("active");
            anime({
                targets: document.querySelector("header .nav-burger div:nth-child(1)"),
                height: "6px",
                width: "6px",
                left: "0px",
                duration: 300,
                easing: 'linear'
            });
            anime({
                targets: document.querySelector("header .nav-burger div:nth-child(2)"),
                height: "6px",
                width: "6px",
                right: "0px",
                duration: 300,
                easing: 'linear'
            });
            anime({
                targets: document.querySelector("header .nav-burger div:nth-child(3)"),
                height: "6px",
                width: "6px",
                left: "0px",
                duration: 300,
                easing: 'linear'
            });
            anime({
                targets: document.querySelector("header .nav-burger div:nth-child(4)"),
                height: "6px",
                width: "6px",
                right: "0px",
                duration: 300,
                easing: 'linear'
            });

            anime({
                targets: document.querySelector("header .nav-burger div:nth-child(4)"),
                height: "6px",
                width: "6px",
                right: "0px",
                duration: 300,
                easing: 'linear'
            });
            anime({
                targets: document.querySelector("header nav"),
                left: "100vw",
                duration: 300,
                easing: 'linear'
            });
            document.querySelector("body").classList.remove("blur");
        }
        else {
            document.querySelector("header").classList.add("active");
            anime({
                targets: document.querySelector("header .nav-burger div:nth-child(1)"),
                height: "12px",
                width: "3px",
                left: "1px",
                duration: 300,
                easing: 'linear'
            });
            anime({
                targets: document.querySelector("header .nav-burger div:nth-child(2)"),
                height: "12px",
                width: "3px",
                right: "1px",
                duration: 300,
                easing: 'linear'
            });
            anime({
                targets: document.querySelector("header .nav-burger div:nth-child(3)"),
                height: "12px",
                width: "3px",
                left: "1px",
                duration: 300,
                easing: 'linear'
            });
            anime({
                targets: document.querySelector("header .nav-burger div:nth-child(4)"),
                height: "12px",
                width: "3px",
                right: "1px",
                duration: 300,
                easing: 'linear'
            });

            anime({
                targets: document.querySelector("header .nav-burger div:nth-child(4)"),
                height: "12px",
                width: "3px",
                right: "1px",
                duration: 300,
                easing: 'linear'
            });
            anime({
                targets: document.querySelector("header nav"),
                left: "0vw",
                duration: 300,
                easing: 'linear'
            });
            document.querySelector("body").classList.add("blur");
        }
    });
}
initNav();

//==========================MainFirstBlock=====================
function initBanner() {
    if (!document.querySelector(".first-main-sect")) return false;

    let device_w = document.querySelector(".container").offsetWidth;
    let slides = device_w / 450;

    var swiper = new Swiper(".partners-slider", {
        autoplay: {
            delay: 0,
        },
        slidesPerView: slides,
        preventInteractionOnTransition: true,
        speed: 3000,
        loop: true,
    });

    /*initMobile();

    setTimeout(function (){
        let w = document.querySelector(".partners-container").offsetWidth;
        let style = getComputedStyle(document.querySelector(".partners-container"));
        let min_w = style.getPropertyValue("--normal_w");
        let current_opacity = 1;
        let duration = 1000;
        let step = 1/(duration/10);
        let step_w = (w-min_w)/(duration/10);
        let current_w = w;
        let interval = setInterval(function (){
            current_opacity-=step;
            current_w-= step_w;
        document.querySelector(".partners-container").style.setProperty("--current_opacity", current_opacity);
        document.querySelector(".partners-container").style.setProperty("--current_w", current_w+"px");
        if(current_opacity<=0) clearInterval(interval);
            },10);
    },500);*/

}
initBanner();

function initTalkBanner() {
    if (!document.querySelector(".lets-talk-slider")) return false;

    var swiper = new Swiper(".lets-talk-slider", {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1000,
        slidesPerView: 1,
        loop: true,
        direction: "vertical",
        preventInteractionOnTransition: true,
    });

}
initTalkBanner();

//=======================MainPhone===========================
function initMobile() {

    if (!document.querySelector(".phone")) return false;

    document.querySelectorAll(".phone .menu .item").forEach((el) => {
        let scale = 1;
        let hover = true;
        el.addEventListener("mouseover", function () {
            hover = true;
            let prev_val = scale;
            let interval_scale = setInterval(function () {
                if (scale >= 1.2 || !hover) {
                    scale = 1.2;
                    el.style.transform = "scale(" + scale + ")";
                    clearInterval(interval_scale);
                    return false;
                }
                scale += 0.01;
                prev_val = scale;
                el.style.transform = "scale(" + scale + ")";
            }, 10);
        });
        el.addEventListener("mouseleave", function () {
            let prev_val = scale;
            hover = false;
            let interval_scale = setInterval(function () {
                if (scale <= 1 || hover) {
                    scale = 1;
                    el.style.transform = "scale(" + scale + ")";
                    clearInterval(interval_scale);
                    return false;
                }
                scale -= 0.01;
                prev_val = scale;
                el.style.transform = "scale(" + scale + ")";
            }, 10);
        });
    });


    setTimeout(function () {
        let duration = 1500;
        let translate = 100;
        let step = translate / (duration / 10);
        anime({
            targets: document.querySelector(".banner .right .phone"),
            keyframes: [
                {
                    translateX: "100%",
                    opacity: 0,
                },
                {
                    translateX: 0,
                    opacity: 1,
                },
            ],
            duration: duration
        });

        setTimeout(function () {
            let current_percent = 0;
            let fade_interval = setInterval(function () {
                if (current_percent > 100) {
                    clearInterval(fade_interval);
                    loadedPhone();
                    return;
                }
                current_percent += getRandomArbitrary(1, 0.5);
                document.querySelector(".phone #fill_logo").style.width = current_percent + "%";
            }, 10);
        }, duration + 300);
    }, 100);

    function loadedPhone() {
        let speed = 2;
        setTimeout(function () {
            let opacity = 1;
            let interval = setInterval(function () {
                opacity -= 0.02 * speed;
                document.querySelector(".phone-load").style.opacity = opacity;
                if (opacity <= 0) clearInterval(interval);
            }, 10);
        }, 200);
        setTimeout(function () {
            document.querySelector(".phone-load").classList.add("hidden");
            document.querySelectorAll(".phone .menu .item").forEach((el, i) => {
                setTimeout(function () {
                    let opacity = 0;
                    let interval = setInterval(function () {
                        opacity += 0.02 * speed;
                        if (opacity >= 1) opacity = 1;
                        el.style.transform = "scale(" + opacity + ")";
                        if (opacity >= 1) clearInterval(interval);
                    }, 10);
                    setTimeout(function () {
                        let opacity = 0;
                        let interval = setInterval(function () {
                            opacity += 0.02 * speed;
                            if (opacity >= 1) opacity = 1;
                            el.querySelector("img").style.transform = "scale(" + opacity + ")";
                            el.querySelector(".name").style.opacity = opacity;
                            if (opacity >= 1) clearInterval(interval);
                        }, 10);
                    }, 600 / speed);
                }, 200 * i / speed);
            });
        }, 1000 / speed);

        setTimeout(function () {
            let opacity = 0;
            let interval = setInterval(function () {
                opacity += 0.01 * speed;
                if (opacity >= 1) opacity = 1;
                document.querySelector(".iphone-nav").style.transform = "translateY(" + ((1 - opacity) * 100) + "%)";
                document.querySelector(".iphone-nav").style.opacity = opacity;
                if (opacity >= 1) clearInterval(interval);
            }, 10);
            setTimeout(function () {
                document.querySelectorAll(".iphone-nav .item").forEach((el, i) => {
                    setTimeout(function () {
                        let opacity = 0;
                        let interval = setInterval(function () {
                            opacity += 0.02 * speed;
                            if (opacity >= 1) opacity = 1;
                            el.style.opacity = opacity;
                            if (opacity >= 1) clearInterval(interval);
                        }, 10);
                        setTimeout(function () {
                            let opacity = 0;
                            let interval = setInterval(function () {
                                opacity += 0.02 * speed;
                                if (opacity >= 1) opacity = 1;
                                el.querySelector("img").style.transform = "scale(" + opacity + ")";
                                if (opacity >= 1) clearInterval(interval);
                            }, 10);
                        }, 400 / speed);
                    }, 200 * i / speed);
                });
            }, 1000 / speed);
        }, 1000 / speed);
    }

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function titleAnimation() {

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains("init")) {
                entry.target.classList.add("init");
                entry.target.querySelectorAll("span").forEach((el, i) => {
                    let item = el;
                    let current_translate = 100;
                    let current_rotate = -90;
                    let duration = 150;
                    let current_opacity = 1;
                    el.style.opacity = 0;
                    el.style.transform = "rotateX(" + current_translate + "deg) translateY(" + current_translate + "%)";
                    setTimeout(function () {
                        let step_rotate = Math.abs(current_rotate / (duration / 10));
                        let step_translate = current_translate / (duration / 10);
                        let step_opacity = current_opacity / (duration / 10);
                        let interval = setInterval(function () {
                            current_rotate += step_rotate;
                            current_translate -= step_translate;
                            current_opacity += step_opacity;
                            item.style.opacity = (1 - step_opacity);
                            item.style.transform = "rotateX(" + current_rotate + "deg) translate3d(0," + current_translate + "%,0)";
                            if (current_rotate >= 0 || current_translate <= 0) clearInterval(interval);
                        }, 10);
                    }, duration * (i + 1));
                })
            }
        });
    }, options);
    document.querySelectorAll(".anim-title").forEach((el, i) => {
        if ((window.screen.width < 1024) && el.classList.contains("not-mobile")) return false;
        let words = el.innerHTML.replace(/\s+/g, ' ').trim().split(" ");
        let div = document.createElement("div");
        div.classList.add("dop");
        for (let i in words) {
            if (i > 0) {
                let text = document.createElement("text");
                text.innerText = " ";
                div.appendChild(text);
            }
            let span = null;
            if (words[i] != "<br>") {
                span = document.createElement("span");
                span.innerText = words[i];
            }
            else {
                span = document.createElement("br");
            }
            div.appendChild(span);
        }
        el.innerHTML = "";
        el.appendChild(div);
        observer.observe(el);
    });
}
function arrowAnimation() {
    document.querySelectorAll(".normal-arrow").forEach((el, i) => {
        let hover = true;
        let max_val = 150;
        let translate_top = 0;
        let translate_bottom = max_val;
        let step = 5;
        let max_scale = 1.1;
        let current_scale = 1;
        let step_scale = 0.004;
        el.addEventListener("mouseover", function () {
            hover = true;
            let prev_val = translate_bottom + translate_top;
            let interval_scale = setInterval(function () {
                if (translate_bottom < 0 || !hover) {
                    translate_bottom = 0;
                    el.querySelector(".second-image").style.transform = "translate(" + -Math.abs(translate_bottom) + "%," + translate_bottom + "%)";
                    clearInterval(interval_scale);
                    return false;
                }

                if (current_scale <= max_scale) {
                    current_scale += step_scale;
                    if (current_scale > max_scale) current_scale = max_scale;
                    el.style.transform = "scale(" + current_scale + ")";
                }

                el.classList.add("active");

                if (translate_top <= -max_val) {
                    translate_bottom -= step;
                    el.querySelector(".second-image").style.transform = "translate(" + -Math.abs(translate_bottom) + "%," + translate_bottom + "%)";
                }
                else {
                    translate_top -= step;
                    el.querySelector(".first-image").style.transform = "translate(" + Math.abs(translate_top) + "%," + translate_top + "%)";
                }
                prev_val = translate_bottom + translate_top;
            }, 1);
        });

        el.addEventListener("mouseleave", function () {
            let prev_val = translate_bottom + translate_top;
            hover = false;
            let interval_scale = setInterval(function () {
                if (translate_top >= 0 || hover) {
                    translate_top = 0;
                    el.querySelector(".first-image").style.transform = "translate(" + Math.abs(translate_top) + "%," + translate_top + "%)";
                    clearInterval(interval_scale);
                    return false;
                }

                el.classList.remove("active");

                if (current_scale >= 1) {
                    current_scale -= step_scale;
                    if (current_scale < 1) current_scale = 1;
                    el.style.transform = "scale(" + current_scale + ")";
                }

                if (translate_bottom < max_val) {
                    translate_bottom += step;
                    el.querySelector(".second-image").style.transform = "translate(" + -Math.abs(translate_bottom) + "%," + translate_bottom + "%)";
                }
                else {
                    translate_top += step;
                    console.log(translate_top);
                    el.querySelector(".first-image").style.transform = "translate(" + Math.abs(translate_top) + "%," + translate_top + "%)";
                }
                prev_val = translate_bottom + translate_top;
            }, 1);
        });

    });
}
function animationsInit() {
    titleAnimation();
    arrowAnimation();
}
//animationsInit();

function initHowWorkAnimation() {

    if (!document.querySelector(".work-list")) return false;

    let items = [];
    document.querySelectorAll(".work-list .item").forEach((el, i) => {
        items.push(el);
    });

    let h = window.innerHeight;

    window.addEventListener('scroll', function (e) {
        let current_scroll = window.scrollY + h;
        if (document.querySelector(".sect-how-we-work .container").offsetTop <= current_scroll) {
            let active = null;
            for (let i in items) {
                let item = items[i];
                if (item.offsetTop + item.offsetHeight <= current_scroll && (item.offsetTop + h + 25) > current_scroll) active = item;
            }
            for (let i in items) {
                let item = items[i];
                if (item == active) {
                    anime({
                        targets: item,
                        opacity: 1,
                        duration: 300,
                        easing: 'linear'
                    });
                    anime({
                        targets: item.querySelector(".item-bg"),
                        scaleX: 1.02,
                        duration: 300,
                        easing: 'linear'
                    });
                }
                else {
                    anime({
                        targets: item,
                        opacity: 0.35,
                        duration: 300,
                        easing: 'linear'
                    });
                    anime({
                        targets: item.querySelector(".item-bg"),
                        scaleX: 1,
                        duration: 300,
                        easing: 'linear'
                    });
                }

            }
        }
    });

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains("init")) {
                entry.target.classList.add("init");
                anime({
                    targets: entry.target.querySelector(".left"),
                    scale: 1,
                    duration: 1200
                });
                anime({
                    targets: entry.target.querySelector(".right"),
                    scale: 1,
                    duration: 1200
                });
            }
        });
    }, options);
    document.querySelectorAll(".work-list .item").forEach((el, i) => {
        observer.observe(el);
    });

}
//initHowWorkAnimation();

function initSeoSect() {
    if (!document.querySelector(".seo-block-text")) return false;

    document.querySelector(".seo-block-text .item-content").addEventListener("scroll", function (ev) {
        let percent = ((ev.target.scrollTop) / (ev.target.scrollHeight - ev.target.clientHeight)) * 100;
        document.querySelector(".seo-block-text").style.setProperty("--opacity", 1 - percent / 100);
    });
}
initSeoSect();

function initFooter() {
    document.querySelectorAll("footer .flex-title").forEach((el, i) => {
        el.addEventListener("click", function () {
            let parent = el.closest(".footer-nav-item");
            if (parent.classList.contains("active")) {
                parent.classList.remove("active");
                anime({
                    targets: parent.querySelector(".plus"),
                    rotate: "0deg",
                    duration: 200,
                    easing: 'linear'
                });
                slideUp(parent.querySelector("ul"), 500);
            }
            else {
                parent.classList.add("active");
                anime({
                    targets: parent.querySelector(".plus"),
                    rotate: "90deg",
                    duration: 200,
                    easing: 'linear'
                });
                slideDown(parent.querySelector("ul"), 500);
            }
        });
    });
}
initFooter();

//================================Industries=============
function initIndustries() {
    document.querySelectorAll(".custom-ind-slider").forEach((el, i) => {
        let speed = 4000 * (el.querySelectorAll(".scroll-bar>div").length / 2);
        if (el.getAttribute("data-direction") == "r") {
            anime({
                targets: el.querySelector(".scroll-bar"),
                translateY: ["-60%", "calc(-10% + 12.5px)"],
                duration: speed,
                easing: 'linear',
                loop: true
            });
        }
        else {
            anime({
                targets: el.querySelector(".scroll-bar"),
                translateY: ["-10%", "calc(-60% - 12.5px)"],
                duration: speed,
                easing: 'linear',
                loop: true
            });
        }
    });
}
initIndustries();

//=================================About=====================
function initAbout() {

    if (!document.querySelector(".about-banner")) return false;

    let margin = 32;

    document.querySelectorAll(".team-slider").forEach((el, i) => {
        let one_item = el.querySelector(".scroll-bar>div").clientWidth;
        let speed = 5000 * el.querySelectorAll(".scroll-bar>div").length;
        if (el.getAttribute("data-direction") == "r") {
            anime({
                targets: el.querySelector(".scroll-bar>.tab"),
                marginLeft: [0, "-" + (one_item + margin) + "px"],
                duration: speed,
                easing: 'linear',
                loop: true
            });
        }
        else {
            anime({
                targets: el.querySelector(".scroll-bar>.tab"),
                marginLeft: ["-" + (one_item + margin) + "px", 0],
                duration: speed,
                easing: 'linear',
                loop: true
            });
        }
    });

    let full_w = document.querySelector(".partners-container").clientWidth;
    let slides_w = full_w / 250;

    var swiper = new Swiper(".partners-slider", {
        autoplay: {
            delay: 0,
        },
        slidesPerView: slides_w,
        preventInteractionOnTransition: true,
        speed: 3000,
        loop: true,
    });

}
initAbout();

//====================InitCustomDropdown==============
function initCustomDropdown() {
    document.querySelectorAll(".custom-dropdown").forEach((el, i) => {
        el.querySelector(".name-line").addEventListener("click", function () {
            el.classList.toggle("active");
        });
        document.addEventListener('click', (e) => {
            if (!e.composedPath().includes(el)) {
                el.classList.remove("active");
            }
        })

        el.querySelectorAll("input").forEach((input) => {
            input.addEventListener("change", function () {
                let name = "";
                el.querySelectorAll("input").forEach((input_c) => {
                    if (input_c.checked) {
                        if (name != "") name += ", ";
                        name += input_c.value;
                    }
                });
                if (name != "") el.querySelector(".name-line .name").innerText = name;
                else el.querySelector(".name-line .name").innerText = el.querySelector(".name-line").getAttribute("data-default");
            });
        });

    });
}
initCustomDropdown();

//===========InitAccordeon==============================
function initAccordeon() {
    let fade = false;
    document.querySelectorAll(".accordeon-list .item").forEach((el, i) => {
        el.querySelector(".title-line").addEventListener("click", function () {
            if (fade) return false;
            fade = true;

            el.closest(".accordeon-list").querySelectorAll(".item").forEach((item) => {
                if (item !== el || (item.classList.contains("active") && item === el)) {
                    slideUp(item.querySelector(".content-line"), 300);
                    item.classList.remove("active");
                }
                else {
                    slideDown(item.querySelector(".content-line"), 300);
                    item.classList.add("active");
                }
            });

            setTimeout(function () { fade = false }, 300);
        });
    });
}
initAccordeon();

function initIndustryItems() {
    let fade = false;
    document.querySelectorAll(".big-industry-block").forEach((el, i) => {

        el.querySelectorAll(".industry-item").forEach((item) => {
            item.addEventListener("click", function (e) {
                e.preventDefault();
                if (fade) return false;
                fade = true;
                let new_val = false;
                let new_index = 0;

                el.querySelectorAll(".industry-item").forEach((item_click, index) => {
                    if (item_click === item) {
                        if (!item_click.classList.contains("active")) new_val = true;
                        new_index = index;
                        item_click.classList.add("active");
                    }
                    else item_click.classList.remove("active");
                });

                if (new_val) {
                    el.querySelectorAll(".select-item").forEach((item_click, index) => {
                        if (index === new_index) {
                            setTimeout(function () { slideDown(item_click, 300); }, 310)
                        }
                        else if (item_click.style.display != "none") slideUp(item_click, 300);
                    });
                }

                setTimeout(function () { fade = false }, 620);

            });
        });


        el.querySelector(".title-line").addEventListener("click", function () {
            if (fade) return false;
            fade = true;

            el.closest(".accordeon-list").querySelectorAll(".item").forEach((item) => {
                if (item !== el || (item.classList.contains("active") && item === el)) {
                    slideUp(item.querySelector(".content-line"), 300);
                    item.classList.remove("active");
                }
                else {
                    slideDown(item.querySelector(".content-line"), 300);
                    item.classList.add("active");
                }
            });

            setTimeout(function () { fade = false }, 300);
        });
    });
}
initIndustryItems();

function customContentParse() {
    document.querySelectorAll(".custom-content").forEach((item) => {
        item.querySelectorAll("figure").forEach((img) => {
            let image = img.querySelector("img");
            let alt = image.getAttribute("alt");
            let container = document.createElement("div");
            container.classList.add("image-container");
            let image_elem = document.createElement("img");
            image_elem.src = image.getAttribute("src");
            image_elem.setAttribute("alt", alt);
            container.append(image_elem);
            let text_block = document.createElement("div");
            text_block.innerText = alt;
            text_block.classList.add("abs-text");
            container.append(text_block);
            img.insertAdjacentElement("afterend", container);
            img.remove();
        });
    });
}
customContentParse();

function CopyButtonInit() {
    document.querySelectorAll(".copy-click-element").forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const el = document.createElement('textarea');
            el.value = item.getAttribute("href");
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            showMessage(true, "copied")
        })
    });
}
CopyButtonInit();

function showMessage(result, text) {
    let message = document.createElement("div");
    message.classList.add("one-message");
    if (!result) message.classList.add("error");

    let item = document.createElement("div");
    item.classList.add("normal-item");
    message.append(item);

    let item_content = document.createElement("div");
    item_content.classList.add("item-content");
    item_content.innerText = text;
    item.append(item_content);

    let item_bg = document.createElement("item-bg");
    item_bg.classList.add("item-bg");
    item.appendChild(item_bg);

    let image = document.createElement("img");
    image.classList.add("close-button")
    image.src = "images/close.svg";
    message.appendChild(image);
    document.querySelector(".small-message-pop-up").append(message);
    image.addEventListener("click", function () {
        message.classList.remove("active");
        setTimeout(function () { message.remove() }, 310);
    });

    setTimeout(function () { message.classList.add("active") }, 200);

    setTimeout(function () {
        if (message) {
            message.classList.remove("active");
            setTimeout(function () { message.remove() }, 310);
        }
    }, 6000);
}


// document.addEventListener("DOMContentLoaded", function () {
//     const contentContainerEl = document.querySelector(".wrapper");

//     // Проверка наличия элемента с классом .wrapper, отсутствия мобильного устройства и не iOS
//     if (contentContainerEl) {
//         function updateBodyHeight() {
//             document.body.style.height = `${contentContainerEl.offsetHeight}px`;
//         }

//         updateBodyHeight();
//         window.addEventListener("resize", updateBodyHeight);

//         let contentX = 0;
//         let contentY = 0;

//         function frameHandler() {
//             requestAnimationFrame(frameHandler);

//             contentY += (window.pageYOffset - contentY) * 0.06;
//             contentX += (window.pageXOffset - contentX) * 0;

//             const transformValue = `translate3d(${Math.round(-contentX)}px, ${Math.round(-contentY)}px, 0)`;

//             contentContainerEl.style.transform = transformValue;
//             contentContainerEl.style.webkitTransform = transformValue;
//         }

//         frameHandler();
//     }
// });


document.addEventListener("DOMContentLoaded", function () {

    let win = window,
        target = document.body,
        wrapper = document.querySelector('.wrapper'),
        easing = "cubic-bezier(0.19, 1, 0.22, 1)", // css easing
        duration = "1000ms", // duration ms(millisecond) or s(second)
        top = 0;

    let kineticScroll = {
        init: function () {
            if (wrapper) {
                target.style.height = wrapper.clientHeight + "px";
                wrapper.style.transition = 'transform ' + duration + ' ' + easing;
                // wrapper.style.position = 'fixed';
                // wrapper.style.top = '0';
                // wrapper.style.left = '0';
                // wrapper.style.width = '100%';
                // wrapper.style.padding = '0';
                // wrapper.style.zIndex = '2';
                win.addEventListener("scroll", kineticScroll.scroll);
                win.addEventListener("resize", kineticScroll.resize);
                kineticScroll.scroll();
            }
        },
        scroll: function () {
            top = win.scrollY || win.scrollTop;
            wrapper.style.transform = 'translateY(-' + top + 'px)';
        },
        resize: function () {
            target.style.height = wrapper.offsetHeight + "px";
        }
    };

    if ("ontouchstart" in window === false) {
        kineticScroll.init();
    }
});
