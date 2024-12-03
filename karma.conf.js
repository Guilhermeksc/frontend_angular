module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    files: [
      { pattern: 'src/**/*.spec.ts', watched: false }
    ],
    preprocessors: {
      'src/**/*.spec.ts': ['webpack']
    },
    browsers: ['Edge'], // Configura o Edge como navegador
    customLaunchers: {
      Edge: {
        base: 'Edge',
        flags: ['--disable-extensions']
      }
    },
    singleRun: false,
    restartOnFileChange: true,
    reporters: ['progress', 'kjhtml'],
  });
};
