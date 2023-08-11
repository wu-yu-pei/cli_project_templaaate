export default (str, str2, options) => {
  console.log(str, str2);

  const limit = options.first ? 1 : undefined;
  console.log(str.split(options.separator, limit));
};
