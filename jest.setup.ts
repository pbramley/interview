import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill global objects with correct types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).TextEncoder = TextEncoder;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).TextDecoder = TextDecoder;
