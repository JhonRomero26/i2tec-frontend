import { Autoplay, EffectCreative, Navigation } from "swiper/modules"

import type { SwiperOptions } from "swiper/types"
import { breakpoints } from "@/lib/constants"

export const homeHeroOptionsSlider: SwiperOptions = {
  modules: [Autoplay, EffectCreative],
  slidesPerView: "auto",
  effect: "creative",
  autoplay: { delay: 3500, disableOnInteraction: false },
  creativeEffect: {
    prev: { translate: [0, 0, -400] },
    next: { translate: ["100%", 0, 0] },
  },
}

export const sliderProyectsOptions: SwiperOptions = {
  modules: [Autoplay, Navigation],
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  spaceBetween: 16,
  slidesPerView: 2,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  breakpoints: {
    [breakpoints.md]: {
      slidesPerView: 3,
    },
    [breakpoints.lg]: {
      slidesPerView: 4,
    },
    [breakpoints.xxl]: {
      slidesPerView: 5,
    },
  },
}
