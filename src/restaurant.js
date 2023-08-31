/* eslint-disable max-len */
// Siga as orientações do README!

const fetchMenu = () => {

}

const createMenu = (menu) => {
  try {
    fetchMenu(menu);
  } catch (e) {
    return e.message;
  }
};

module.exports = createMenu;
