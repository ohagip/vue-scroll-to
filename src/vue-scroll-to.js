import gsap from 'gsap'
import { ScrollToPlugin }  from 'gsap/all'

gsap.registerPlugin(ScrollToPlugin)

/**
 * VueScrollTo
 */
const VueScrollTo = {}
const bindings = []

/**
 *
 */
function getBinding (el) {
  for (let i = 0, len = bindings.length ; i < len; i += 1) {
    if (bindings[i].el === el) {
      return bindings[i]
    }
  }
}

/**
 * addBinding
 */
function addBinding (el, binding) {
  el.addEventListener('click', handler, false)
  bindings.push({
    el: el,
    binding: binding,
  })
}

/**
 * removeBinding
 */
function removeBinding (el) {
  el.removeEventListener('click', handler, false)
  for (let i = 0, len = bindings.length ; i < len; i += 1) {
    if (bindings[i].el === el) {
      bindings.splice(i, 1)
      break
    }
  }
}

/**
 * handler
 */
function handler (e) {
  const b = getBinding(this)
  if (typeof b.binding.value === 'string') {
    scrollTo(b.binding.value)
  } else {
    scrollTo(b.binding.value.el, b.binding.value)
  }
}

/**
 * scrollTo
 * @param {String} target - Selector
 * @param {Object} options
 * @param {Number} options.offset - Number
 * @param {Boolean} options.bottom - Scroll to the bottom of the target
 *
 */
function scrollTo (target, options = {}) {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const $target = document.querySelector(target)
  const rect = $target.getBoundingClientRect()
  const offset = options.offset || 0
  let position = options.bottom !== true ? rect.top : rect.bottom
  position = position + scrollTop - offset

  let time = Math.abs(scrollTop - position) * 0.7
  if (time <= 600) {
    time = 600
  }
  if (time >= 1300) {
    time = 1300
  }
  time /= 1000

  gsap.to(window, {
    duration: time,
    ease: 'Power4.easeOut',
    scrollTo: position,
  })
}

/**
 * inserted
 */
function inserted (el, binding, vnode) {
  addBinding(el, binding)
}

/**
 * unbind
 */
function unbind (el, binding, vnode) {
  removeBinding(el)
}

/**
 * install
 */
function install (Vue) {
  Vue.directive('scroll-to', {
    inserted,
    unbind,
  })
  Vue.prototype.$scrollTo = scrollTo
}

VueScrollTo.install = install
export default VueScrollTo