import pkg from '../../package.json';

function initCommanderHelper(programInstance) {
  programInstance.name(pkg.name).description(pkg.description).version(pkg.version);
}
export default initCommanderHelper;
