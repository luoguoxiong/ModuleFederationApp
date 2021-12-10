/// <reference types="react" />

declare module "libary/react" {
    export = React;
}

declare module "libary/react-dom"{
    export = ReactDOM
}

declare module "app2/Button" {
  const Button: React.ComponentType<{a:2}>;

  export default Button;
}
