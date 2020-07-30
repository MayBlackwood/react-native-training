import Constants from 'expo-constants';

const { manifest } = Constants;
export const api = typeof manifest.packagerOpts === 'object' && manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(':').shift().concat(':5000')
  : 'api.example.com';
