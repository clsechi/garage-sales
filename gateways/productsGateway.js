const getAll = async () => {
  const res = await fetch('api/products');
  return res.json();
};

export {
  getAll,
};
