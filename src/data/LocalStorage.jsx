// theme
// - 111 - light
// - 222 - dark

function getSettings(itemName) {
  if (!itemName) {
    console.error("No storage name!");
  }

  return JSON.parse(localStorage.getItem(itemName));
}

function createSettings(itemName, storageScheme) {
  if (!itemName) console.error("No storage name!");
  localStorage.setItem(itemName, JSON.stringify(storageScheme));
  return storageScheme;
}

function editSettings(itemName, new_settings) {
  if (!itemName) console.error("No storage name!");
  localStorage.getItem(itemName)
    ? localStorage.setItem(itemName, JSON.stringify(new_settings))
    : console.log("Storage Not Initailized for editing");

  return new_settings;
}

function deleteSettings(itemName) {
  if (!itemName) console.error("No storage name!");
  localStorage.getItem(itemName)
    ? localStorage.removeItem(itemName)
    : console.log("Storage Not Initailized for deleting");
}

function clearLocalStorage() {
  if (window.confirm("Do you want to clear local storage"))
    localStorage.clear();
}

export {
  getSettings,
  createSettings,
  editSettings,
  deleteSettings,
  clearLocalStorage,
};
