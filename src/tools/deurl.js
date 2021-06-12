function addr2url(s) {
  let arr = s.split("\\");
  return "/car/getImage?imgName=" + arr[2];
}

export { addr2url };
