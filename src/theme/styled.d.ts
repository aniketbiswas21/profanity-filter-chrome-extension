import "styled-components";

// Extending default styled components theme
declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    text: string;
    secondaryColor: string;
    border: string;
  }
}
