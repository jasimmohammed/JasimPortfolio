import { useEffect } from "react"

export function useSiteMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const prog = document.querySelector<HTMLElement>(".prog")
    const dot = document.querySelector<HTMLElement>(".cur-dot")
    const ring = document.querySelector<HTMLElement>(".cur-ring")
    const ghosts = [...document.querySelectorAll<HTMLElement>(".ghost")]
    const counters = [...document.querySelectorAll<HTMLElement>("[data-count]")]
    const revealEls = [...document.querySelectorAll<HTMLElement>(".reveal")]
    const steps = [...document.querySelectorAll<HTMLElement>(".step")]
    const rail = document.querySelector<HTMLElement>(".tl-fill")
    const stepList = document.querySelector<HTMLElement>(".steps")
    const flows = [...document.querySelectorAll<HTMLElement>(".flow")].map((list) => ({
      list,
      fill: list.querySelector<HTMLElement>(".flow-fill"),
      items: [...list.querySelectorAll<HTMLElement>(".flow-step")],
    }))

    const ringState = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      tx: window.innerWidth / 2,
      ty: window.innerHeight / 2,
    }
    let frame = 0
    let alive = true

    const onMove = (event: MouseEvent) => {
      if (!dot || !ring) return
      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`
      ringState.tx = event.clientX
      ringState.ty = event.clientY
      const target = event.target instanceof Element ? event.target : null
      ring.classList.toggle("is-hot", Boolean(target?.closest("a, button")))
    }

    const loop = () => {
      if (!alive) return
      if (!reduced && ring) {
        ringState.x += (ringState.tx - ringState.x) * 0.18
        ringState.y += (ringState.ty - ringState.y) * 0.18
        ring.style.transform = `translate3d(${ringState.x}px, ${ringState.y}px, 0) translate(-50%, -50%)`
      }
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      if (prog) prog.style.transform = `scaleX(${progress})`

      ghosts.forEach((ghost) => {
        const rect = ghost.getBoundingClientRect()
        const shift = (rect.top - window.innerHeight * 0.45) * -0.05
        ghost.style.transform = `translate3d(0, ${shift}px, 0)`
      })

      if (rail && stepList) {
        const box = stepList.getBoundingClientRect()
        const amount = (window.innerHeight * 0.7 - box.top) / (box.height * 0.9)
        const clamped = Math.min(1, Math.max(0, amount))
        rail.style.transform = `scaleY(${clamped})`
        steps.forEach((step, index) => {
          step.classList.toggle("is-on", clamped > (index + 0.15) / steps.length)
        })
      }

      flows.forEach(({ list, fill, items }) => {
        const box = list.getBoundingClientRect()
        const amount = (window.innerHeight * 0.72 - box.top) / (box.height * 0.85)
        const clamped = Math.min(1, Math.max(0, amount))
        if (fill) fill.style.transform = `scaleY(${clamped})`
        items.forEach((item, index) => {
          item.classList.toggle("is-on", clamped > (index + 0.2) / items.length)
        })
      })
    }

    let ticking = false
    const onScrollEvent = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        onScroll()
        ticking = false
      })
    }

    const runCount = (el: HTMLElement) => {
      if (el.dataset.done) return
      el.dataset.done = "1"
      const target = Number(el.dataset.count)
      const suffix = el.dataset.suffix || ""
      if (reduced) {
        el.textContent = `${target}${suffix}`
        return
      }
      const start = performance.now()
      const tick = (now: number) => {
        if (!alive) return
        const t = Math.min(1, (now - start) / 1100)
        const eased = 1 - (1 - t) ** 3
        el.textContent = `${Math.round(target * eased)}${suffix}`
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("in")
          entry.target.querySelectorAll<HTMLElement>("[data-count]").forEach(runCount)
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.35 },
    )

    revealEls.forEach((el) => io.observe(el))

    if (reduced) {
      revealEls.forEach((el) => el.classList.add("in"))
      counters.forEach(runCount)
      steps.forEach((step) => step.classList.add("is-on"))
      flows.forEach(({ fill, items }) => {
        if (fill) fill.style.transform = "scaleY(1)"
        items.forEach((item) => item.classList.add("is-on"))
      })
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("scroll", onScrollEvent, { passive: true })
    onScroll()

    return () => {
      alive = false
      cancelAnimationFrame(frame)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("scroll", onScrollEvent)
      io.disconnect()
    }
  }, [])
}
