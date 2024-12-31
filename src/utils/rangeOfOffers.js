const rangeOfOffers = async (maxValueOffer = 0.48) => {
  const result = [];

  for (let i = maxValueOffer * 100; i >= 0; i -= 12) {
    result.push(i);
  }

  return result;
};

export default rangeOfOffers;
