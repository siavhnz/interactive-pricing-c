export const values = {
  // cteate gap values from 0 to 10rem
  //gap-x-0, gap-y-25, ... gap-160 = 10rem
  // 1px = 0.0625rem & 1rem = 16px -> 160 = 10rem
  gap: {
    ...createProps(0, 160, 0.0625, "rem"),
  },

  padding: {
    ...createProps(0, 320, 0.0625, "rem"),
  },

  margin: {
    ...createProps(0, 640, 0.0625, "rem"),
  },

  width: {
    ...createProps(0, 640, 0.0625, "rem"),
  },

  height: {
    ...createProps(0, 640, 0.0625, "rem"),
  },

  fontSize: {
    ...createProps(0, 160, 0.0625, "rem"),
  },

  lineHeight: {
    ...createProps(0, 160, 0.0625, "rem"),
  },

  //0.00625 = 0.1px
  letterSpacing: {
    ...createProps(0, 50, 0.00625, "rem"),
  },
};

function createProps(initial, end, step, unit) {
  let obj = {};

  for (let i = initial; i <= end; i++) {
    obj[i] = `${i * step}${unit}`;
  }

  return obj;
}
