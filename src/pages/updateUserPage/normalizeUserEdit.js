// normalizeUserEdit.js
const normalizeUserEdit = (userDataFromServer, isBusiness) => {
  const { phone } = userDataFromServer
  let { url, alt } = userDataFromServer.image
  let { first, middle, last } = userDataFromServer.name
  let { state, country, city, street, houseNumber, zip } = userDataFromServer.address

  return {
    first,
    middle,
    last,
    phone,
    url,
    alt,
    state,
    country,
    city,
    street,
    houseNumber,
    zip,
  };
};

export { normalizeUserEdit };
