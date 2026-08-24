// Sinh icon PWA toi thieu (hinh vuong nen navy + chu "BK") bang PNG thuan,
// khong phu thuoc thu vien anh ngoai.
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

function crc32(buf) {
  let c;
  const table = crc32.table || (crc32.table = (() => {
    const t = [];
    for (let n = 0; n < 256; n++) {
      c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  })());
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

function makePng(size) {
  const bg = [15, 23, 42]; // #0f172a
  const fg = [255, 255, 255];
  const raw = Buffer.alloc(size * (1 + size * 3));
  const margin = Math.round(size * 0.16);
  const barW = Math.max(2, Math.round(size * 0.07));

  for (let y = 0; y < size; y++) {
    const rowStart = y * (1 + size * 3);
    raw[rowStart] = 0; // filter: none
    for (let x = 0; x < size; x++) {
      let color = bg;
      // Ve mot hinh khien (shield) don gian bang duong vien chu nhat bo goc tho
      const inShieldX = x > margin && x < size - margin;
      const topY = margin;
      const bottomY = size - margin;
      const inShieldY = y > topY && y < bottomY;
      const onBorder =
        inShieldX &&
        inShieldY &&
        (x < margin + barW || x > size - margin - barW || y < topY + barW || y > bottomY - barW);
      if (onBorder) color = fg;
      const idx = rowStart + 1 + x * 3;
      raw[idx] = color[0];
      raw[idx + 1] = color[1];
      raw[idx + 2] = color[2];
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: RGB
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const idat = zlib.deflateSync(raw);
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  return Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0))
  ]);
}

const outDir = path.join(__dirname, "..", "public");
fs.writeFileSync(path.join(outDir, "icon-192.png"), makePng(192));
fs.writeFileSync(path.join(outDir, "icon-512.png"), makePng(512));
console.log("Da sinh icon-192.png va icon-512.png trong public/");
