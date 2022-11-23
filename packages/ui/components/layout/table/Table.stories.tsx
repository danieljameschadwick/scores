import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// Component
import { Table } from "./Table";

storiesOf("Table", module)
  .add("with X", () => (
    <Table />
  ));
