const SYSTEM_KEY = "audio-a-texto";

const LocalStorageService = {
  get() {
    const _system = JSON.parse(localStorage.getItem(SYSTEM_KEY));
    return _system;
  },

  getItem(itemName) {
    const _system = JSON.parse(localStorage.getItem(SYSTEM_KEY));
    return _system[itemName];
  },

  //crea el objeto
  //   create() {
  //     const _system = {};
  //     localStorage.setItem(SYSTEM_KEY, JSON.stringify(_system));
  //   },

  createItem(itemName, itemValue) {
    console.log(this.get());
    const _system = this.get();

    const _systemUpdated = { ..._system, [itemName]: itemValue };
    localStorage.setItem(SYSTEM_KEY, JSON.stringify(_systemUpdated));
  },

  //limpia todo el objeto
  //   clear() {
  //     localStorage.removeItem(SYSTEM_KEY);
  //   },

  clearItem(itemName) {
    const _system = this.get();
    delete _system[itemName];
    localStorage.setItem(SYSTEM_KEY, JSON.stringify(_system));
  },

  exist() {
    return !!localStorage.getItem(SYSTEM_KEY);
  },

  existItem(itemName) {
    return this.exist() ? !!this.getItem(itemName) : false;
  },
};

export default LocalStorageService;
