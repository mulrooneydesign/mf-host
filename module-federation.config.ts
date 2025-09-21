export const mfConfig = {
  name: 'mf_host',
  exposes: {},
  remotes: {
    remoteHeader:
      'mf_header@https://modulefederationremotetest.netlify.app/mf-manifest.json',
  },
  shared: {
    react: { singleton: true },
    'react-dom': {
      singleton: true,
    },
    'mf-pack': {
      singleton: true,
    },
  },
};
