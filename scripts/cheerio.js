import { load } from 'cheerio'
import fs from 'fs';

export function svgMap(file) {
  const contents = fs.readFileSync(file)
  const $ = load(contents, { xmlMode: true });

  const { attribs } = $('svg')[0];

  delete attribs.class;
  delete attribs.style;

  return {
    attrs: attribs,
    data: $('svg').html().trim(),
  }
}
