import * as React from "react";
import styled, { css } from "styled-components";

const StyleHorizontalRule = styled.hr`
  width: 100%;
  height: 10px;
  background-color: black;
  margin-top: 20px;
`;

/* ------------------------------ Inheriting Styled Compoents ------------------------------ */
const StyleBaseComponent = styled.div`
  text-decoration: underline;
`;

const StyleDerivedComponentA = styled(StyleBaseComponent)`
  background-color: red;
`;

const StyleDerivedComponentB = styled(StyleBaseComponent)`
  background-color: yellow;
`;

/* ------------------------------ Coping Css Templates ------------------------------ */

const StyleBaseCssTemplate = css`
  text-decoration: underline;
`;

const StyleBaseComponentCss = styled.div`
  ${StyleBaseCssTemplate}
`;

const StyleComponentA = styled.div`
  ${StyleBaseCssTemplate}
  background-color: pink;
`;
const StyleComponentB = styled.div`
  ${StyleBaseCssTemplate}
  background-color: blue;
`;

/* ------------------------------ Extending instances of styled Components ---------- */

const StyleSharedComponent = styled.div`
  text-decoration: underline;
`;

const StyleInstanceA = styled.div`
  ${StyleSharedComponent} {
    background-color: green;
  }
`;
const StyleInstanceB = styled.div`
  ${StyleSharedComponent} {
    background-color: brown;
  }
`;

/* ------------------------------ Utilizing Ploymporhism of styled compnoents ---------- */

const StylePolymorph = styled.div`
  text-decoration: underline;
`;

const StylePolyLink = styled(StylePolymorph)`
  text-decoration: underline solid blue;
color: blue;
`;

const StylePolyButton = styled(StylePolymorph)`
display: block;
  border: 3px solid black;
`;

export default function ScratchExtendingStyledComponentsPatterns() {
  return (
    <div>
      <h1>Scratch Extending Styled Components Patterns</h1>
      <div>
        <div>
          <StyleHorizontalRule />
          <h1 style={{ textTransform: "uppercase" }}>
            inheriting styled components
          </h1>
          <div>
            <StyleBaseComponent>base component</StyleBaseComponent>
            <StyleDerivedComponentA>derived component A</StyleDerivedComponentA>
            <StyleDerivedComponentB>derived component B</StyleDerivedComponentB>
          </div>
        </div>

        <div>
          <StyleHorizontalRule />
          <h1 style={{ textTransform: "uppercase" }}>Coping css templates</h1>
          <div>
            <StyleBaseComponentCss>base component</StyleBaseComponentCss>
            <StyleComponentA>derived component A</StyleComponentA>
            <StyleComponentB>derived component B</StyleComponentB>
          </div>
        </div>

        <div>
          <StyleHorizontalRule />
          <h1 style={{ textTransform: "uppercase" }}>
            extending instances of styled components
          </h1>
          <div>
            <StyleSharedComponent>base component</StyleSharedComponent>
            <StyleInstanceA>
              <StyleSharedComponent>derived component A</StyleSharedComponent>
            </StyleInstanceA>
            <StyleInstanceB>
              <StyleSharedComponent>derived component B</StyleSharedComponent>
            </StyleInstanceB>
          </div>
        </div>

        <div>
          <StyleHorizontalRule />
          <h1 style={{ textTransform: "uppercase" }}>
            Utilizing polymorphism of styled components
          </h1>
          <div>
            <StylePolymorph>base component</StylePolymorph>
            <StylePolyLink as="a">polymorphic link</StylePolyLink>
            <StylePolyButton as="button">polymorphic button</StylePolyButton>
          </div>
        </div>
      </div>
    </div>
  );
}
