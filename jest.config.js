/* eslint-env node */
module.exports = {
      testEnvironment: 'jsdom', // Environnement pour tester des composants React
      verbose: true, 
      collectCoverage: true, // Active la collecte de la couverture de code
      coverageDirectory: './coverage', // Répertoire où stocker les rapports de couverture
      reporters: [
        'default',
        [
          'jest-junit',
          {
            outputDirectory: './test-results', // Répertoire où stocker les rapports JUnit
            outputName: 'test-results.xml', // Nom du fichier de sortie JUnit
          },
        ],
      ],
      moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy', // Mapper les styles pour éviter des erreurs
      },
      testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'], // Correspondance des fichiers de test
      setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Fichier de configuration supplémentaire pour Jest
    };
    