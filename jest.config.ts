import type { Config } from 'jest';

const config: Config = {
   preset: 'ts-jest',
   testEnvironment: 'jest-environment-jsdom',
   globals: {
      'ts-jest': {
         tsconfig: './tsconfig.test.json',
      },
   },
   moduleNameMapper: {
      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@pages/(.*)$': '<rootDir>/src/pages/$1',
      '^@utils/(.*)$': '<rootDir>/src/utils/$1',
      '^@services/(.*)$': '<rootDir>/src/services/$1',
      '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
      '^@types/(.*)$': '<rootDir>/src/types/$1',
      '\\.module\\.css$': 'identity-obj-proxy',
   },
   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
