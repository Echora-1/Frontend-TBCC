export const state = () => ({
  price: 0.1175,
  percentChange: 1.45,
  vol24h: '10924777',
  highPrice:  0.1218,
  lowPrice: 0.1170
})

export const mutations  = {
  setPrice(state, value) {
    state.price = value;
  },
  setPercentChange(state, value) {
    state.percentChange = value;
  },
  setVol24h(state, value) {
    state.vol24h = value;
  },
  setHighPrice(state, value) {
    state.highPrice = value;
  },
  setLowPrice(state, value) {
    state.lowPrice = value;
  },
}

export const actions = {
  setPrice(context, value) {
    context.commit('setPrice', value);
  },
  setPercentChange(context, value) {
    context.commit('setPercentChange', value);
  },
  setVol24h(context, value) {
    context.commit('setVol24h', value);
  },
  setHighPrice(context, value) {
    context.commit('setHighPrice', value);
  },
  setLowPrice(context, value) {
    context.commit('setLowPrice', value);
  },
}

export const getters = {
  getPrice: state => state.price,
  getPercentChange: state => state.percentChange,
  getVol24h: state => state.vol24h,
  getHighPrice: state => state.highPrice,
  getLowPrice: state => state.lowPrice,
}
