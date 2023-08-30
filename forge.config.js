module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        authToken:'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',
        repository: {
          owner: 'jiao66666',
          name: 'vue3electron'
        },
        prerelease: false,
        draft: false,
        assets: [
            {
              path: './dist_electron/',
              label: 'My App Installer'
            }
        ]
      }
    }
  ]
};
