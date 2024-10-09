import merge from 'merge-deep'

const obj1 = {
  userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)',
  locale: 'de-DE,de'
}

const obj2 = {
  userAgent: null,
  locale: 'en-US,en',
  maskLinux: true
}

console.info(merge(obj2, obj1))