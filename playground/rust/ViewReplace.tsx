import Heading from "evergreen-ui/commonjs/typography/src/Heading.js";
import Code from "evergreen-ui/commonjs/typography/src/Code.js";
import Pane from "evergreen-ui/commonjs/layers/src/Pane.js";
import Card from "evergreen-ui/commonjs/layers/src/Card.js";
import * as React from "react";
import { fontInput } from "../common";
import { BoxProps } from "ui-box";
import Documentation from "./Documentation";

export interface IViewReplaceProps extends BoxProps {
  size: number | string;
  value: string;
  doc?: Documentation;
}

export default function ViewReplace({
  value,
  size,
  doc,
  ...props
}: IViewReplaceProps) {
  return (
    <Pane {...props}>
      <Heading size={100} style={{ lineHeight: "1.5rem" }}>
        Replace:
      </Heading>
      <Card
        background="tint1"
        padding="1rem"
        elevation={0}
        width="100%"
        style={fontInput}
      >
        {value === undefined && (
          <Heading size={100} paddingY="5rem" textAlign="center">
            MISSING EXPRESSION
          </Heading>
        )}
        {value !== undefined && (
          <Code size={300} appearance="minimal">
            {value}
          </Code>
        )}
      </Card>
    </Pane>
  );
}
