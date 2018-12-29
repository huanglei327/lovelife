export const getNavTitle = (state, navtitleV) => {
    state.navtitle = navtitleV;
}

export const getNavList = (state, navObj) => {
    state.navtitle = navObj.navtitle;
    state.left_text = navObj.left_text;
    state.left_arrow= navObj.left_arrow;
  }