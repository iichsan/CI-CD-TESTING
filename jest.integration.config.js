// jest.integration.config.js
module.exports = {
    testEnvironment: 'node',  // Gunakan lingkungan Node.js
    verbose: true,            // Tampilkan hasil tes secara detail
    collectCoverage: true,    // Mengumpulkan laporan coverage
    coverageDirectory: 'coverage', // Menyimpan laporan coverage di folder 'coverage'
    testMatch: [
      '**/integration-tests/**/*.test.js' // Menentukan lokasi pengujian integrasi
    ],
  };
  