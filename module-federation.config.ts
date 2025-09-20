export const mfConfig = {
  name: 'mf_host',
  exposes: {},
  remotes: {
    remoteHeader: 'mf_header@http://localhost:8081/mf-manifest.json',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singelton: true },
    'mf-pack': { singleton: true },
  },
};
