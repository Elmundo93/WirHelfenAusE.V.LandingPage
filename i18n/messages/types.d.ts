declare module '*.json' {
  const value: any;
  export default value;
}

export interface Messages {
  [key: string]: any;
} 