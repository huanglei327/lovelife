export const getNavTitle = (state, navtitleV) => {
  state.navtitle = navtitleV;
}

export const getNavList = (state, navObj) => {
  state.navtitle = navObj.navtitle;
  state.left_text = navObj.left_text;
  state.left_arrow = navObj.left_arrow;
  state.tshow = navObj.tshow;
  state.bshow = navObj.bshow;
}


export const getTabbarActive = (state, v) => {
  state.tabbarActive = v
}