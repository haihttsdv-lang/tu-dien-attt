/**
 * Chuan hoa tieng Viet cho tim kiem — FR-Q01, FR-Q02.
 *
 * FR-Q02 yeu cau chap nhan hai kieu dat dau thanh cu/moi (vd. "hoà" = "hòa").
 * Ca hai chuoi nay DA la NFC hop le nhung khac nhau ve vi tri dau thanh —
 * day khong phai loi chuan hoa Unicode ma la bien the chinh ta. Cach xu ly
 * don gian va dung trong moi truong hop: bo dau hoan toan de lam khoa tim
 * kiem phu (ca hai bien the deu rut gon ve "hoa").
 */

const DIACRITIC_MAP: Array<[RegExp, string]> = [
  [/[àáạảãâầấậẩẫăằắặẳẵ]/g, "a"],
  [/[ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ]/g, "A"],
  [/[èéẹẻẽêềếệểễ]/g, "e"],
  [/[ÈÉẸẺẼÊỀẾỆỂỄ]/g, "E"],
  [/[ìíịỉĩ]/g, "i"],
  [/[ÌÍỊỈĨ]/g, "I"],
  [/[òóọỏõôồốộổỗơờớợởỡ]/g, "o"],
  [/[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]/g, "O"],
  [/[ùúụủũưừứựửữ]/g, "u"],
  [/[ÙÚỤỦŨƯỪỨỰỬỮ]/g, "U"],
  [/[ỳýỵỷỹ]/g, "y"],
  [/[ỲÝỴỶỸ]/g, "Y"],
  [/đ/g, "d"],
  [/Đ/g, "D"]
];

/** Chuan hoa NFC — bat buoc truoc moi so sanh chuoi tieng Viet. */
export function toNfc(input: string): string {
  return input.normalize("NFC");
}

/** Bo toan bo dau (thanh + dau mu/moc) va ha chu thuong. Dung lam khoa tim kiem phu. */
export function stripDiacritics(input: string): string {
  let out = toNfc(input);
  for (const [pattern, replacement] of DIACRITIC_MAP) {
    out = out.replace(pattern, replacement);
  }
  return out.toLowerCase();
}

/** Tach tu don gian: chu/so lien tuc, bo ky tu dac biet. */
export function tokenize(input: string): string[] {
  const nfc = toNfc(input).toLowerCase();
  return nfc.split(/[^\p{L}\p{N}]+/u).filter((t) => t.length > 0);
}

/** Khoa so sanh khong dau, dung de FR-Q02 coi "hoà" va "hòa" la mot. */
export function normalizeForMatch(input: string): string {
  return stripDiacritics(input).toLowerCase().trim();
}
