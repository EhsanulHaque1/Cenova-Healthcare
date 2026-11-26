import fs from 'node:fs'
import { createCanvas, DOMMatrix } from '@napi-rs/canvas'
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs'

globalThis.DOMMatrix = DOMMatrix

const source = new Uint8Array(fs.readFileSync('D:\\Download\\NU TEK All catalog 2025.pdf'))
const document = await pdfjs.getDocument({ data: source, disableWorker: true }).promise

for (let pageNumber = 4; pageNumber <= 15; pageNumber += 1) {
  const page = await document.getPage(pageNumber)
  const viewport = page.getViewport({ scale: 1.5 })
  const canvas = createCanvas(viewport.width, viewport.height)
  await page.render({ canvasContext: canvas.getContext('2d'), viewport, canvas }).promise
  fs.writeFileSync(`temp-catalog-page-${String(pageNumber).padStart(2, '0')}.png`, canvas.toBuffer('image/png'))
}
