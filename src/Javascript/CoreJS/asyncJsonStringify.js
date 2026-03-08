const asyncJsonStringify = async (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (obj instanceof Promise) {
    try {
      const resolved = await obj;
      return asyncJsonStringify(resolved);
    } catch (err) {
      return err;
    }
  }
  if (Array.isArray(obj)) {
    const result = [];
    for (let i = 0; i < obj.length; i++) {
      result[i] = await asyncJsonStringify(obj[i]);
    }
    return result;
  }
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = await asyncJsonStringify(obj[key]);
    }
  }
  return result;
};

asyncJsonStringify({
  foo: {
    bar: Promise.resolve(1),
    myList: [
      new Promise((r, j) => setTimeout(() => j("another promise value"), 2000)),
      1.618,
    ],
  },
}).then(console.log);
