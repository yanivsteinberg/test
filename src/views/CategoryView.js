import * as React from "react";
import { Stack } from "@mui/material";
import CategoryGridView from "./CategoryGridView";

class CategoryView extends React.Component {
  render() {
    return (
      <Stack>
        <h1>Categories</h1>

        <div>
          <CategoryGridView />
        </div>
      </Stack>
    );
  }
}

export default CategoryView;
